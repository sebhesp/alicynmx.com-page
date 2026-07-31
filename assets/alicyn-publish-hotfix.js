(function(){
  "use strict";
  var COLLECTION="/collections/peptidos";
  function q(r,s){return r?r.querySelector(s):null}
  function qa(r,s){return r?Array.prototype.slice.call(r.querySelectorAll(s)):[]}
  function attr(v){return String(v||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}
  function addStyle(root){
    if(q(root,"[data-ag-hotfix-style]"))return;
    var s=document.createElement("style");
    s.setAttribute("data-ag-hotfix-style","");
    s.textContent="[data-alicyn-lab-app] .ag-vial.ag-photo{display:flex!important;align-items:center;justify-content:center;padding:4px!important;overflow:hidden;background:radial-gradient(circle at 50% 30%,rgba(255,255,255,.18),rgba(255,255,255,.045))!important}[data-alicyn-lab-app] .ag-vial.ag-photo img{display:block;width:100%;height:100%;object-fit:contain;border-radius:11px}[data-alicyn-lab-app] .ag-hotfix-hero{scroll-margin-top:96px}[data-alicyn-lab-app] [data-lab-view='peptides']{overflow-x:hidden}";
    root.appendChild(s);
  }
  function imageMap(root){
    var map={};
    qa(root,"[data-lab-product-card]").forEach(function(card){
      var link=card.getAttribute("data-product-url")||"";
      var slug=(link.split("/products/")[1]||link).split("?")[0];
      var img=q(card,"img");
      var src=img&&(img.getAttribute("src")||img.currentSrc||img.getAttribute("data-src"));
      if(!slug||!src)return;
      map[slug]={src:src,alt:(img.getAttribute("alt")||card.getAttribute("data-product-name")||"Producto Aesthetic Labs")};
    });
    return map;
  }
  function findImage(map,href){
    href=href||"";
    var slug=(href.split("/products/")[1]||href).split("?")[0];
    if(map[slug])return map[slug];
    var keys=Object.keys(map);
    for(var i=0;i<keys.length;i++)if(slug&&keys[i]&&slug.indexOf(keys[i])>-1)return map[keys[i]];
    return null;
  }
  function hydrateImages(root){
    var map=imageMap(root);
    if(!Object.keys(map).length)return;
    qa(root,".ag-mini-card,.ag-product").forEach(function(card){
      var link=q(card,"a[href*='/products/']")||card;
      var data=findImage(map,link.getAttribute("href"));
      var box=q(card,".ag-vial");
      if(!data||!box||q(box,"img"))return;
      var label=(q(card,"strong")||q(card,"h4")||{textContent:data.alt}).textContent.trim()||data.alt;
      box.classList.add("ag-photo");
      box.innerHTML='<img src="'+attr(data.src)+'" alt="'+attr(label+' con envío cotizado en checkout en Alicyn')+'" loading="lazy">';
    });
  }
  function refine(root){
    addStyle(root);
    var peptide=q(root,"[data-lab-view='peptides']");
    if(!peptide)return;
    var app=q(peptide,"[data-ag-section]");
    var hero=q(peptide,".alicyn-lab-hero")||q(peptide,".alicyn-lab-assistant-intro");
    if(!hero){
      hero=document.createElement("section");
      hero.className="alicyn-lab-hero";
      peptide.insertBefore(hero,peptide.firstChild);
    }
    if(hero.dataset.agHotfix!=="1"){
      hero.dataset.agHotfix="1";
      hero.classList.add("alicyn-lab-hero","ag-hotfix-hero");
      hero.innerHTML='<div class="alicyn-lab-hero-copy"><span class="ag-badge">Envío cotizado en checkout en todos los péptidos</span><h1 class="alicyn-lab-hero-title">Péptidos Aesthetic Labs</h1><p class="alicyn-lab-hero-text">Elige tu objetivo y encuentra tu ruta.</p><p class="ag-micro">Compara productos Aesthetic Labs por piel, energía, metabolismo, recovery, performance o definición.</p><a class="ag-cta" href="'+COLLECTION+'">Ver péptidos Aesthetic Labs con envío cotizado en checkout →</a></div><div class="ag-word" aria-hidden="true"><span>PEPTIDOS</span></div>';
    }
    if(app&&hero.nextElementSibling!==app)hero.insertAdjacentElement("afterend",app);
    var assistant=q(peptide,".alicyn-lab-assistant");
    if(assistant){
      qa(assistant,":scope > *").forEach(function(child){
        if(child!==hero&&child!==app){child.hidden=true;child.classList.add("ag-hide")}
      });
    }
    qa(peptide,"[id^='alicyn-lab-mapa-'],[data-alicyn-axis-live],#catalogo-peptidos-investigacion,#protocolos-investigacion,[id^='alicyn-lab-comparador-']").forEach(function(node){node.hidden=true;node.classList.add("ag-hide")});
    hydrateImages(root);
  }
  function boot(){qa(document,"[data-alicyn-lab-app]").forEach(refine)}
  document.addEventListener("DOMContentLoaded",function(){boot();setTimeout(boot,120);setTimeout(boot,700);setTimeout(boot,1600)});
})();
