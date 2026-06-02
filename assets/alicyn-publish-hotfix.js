(function(){
  "use strict";
  var COLLECTION="/collections/peptidos";
  function q(r,s){return r?r.querySelector(s):null}
  function qa(r,s){return r?Array.prototype.slice.call(r.querySelectorAll(s)):[]}
  function refine(root){
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
      hero.innerHTML='<div class="alicyn-lab-hero-copy"><span class="ag-badge">Envío gratis en todos los péptidos</span><h1 class="alicyn-lab-hero-title">Péptidos Aesthetic Labs</h1><p class="alicyn-lab-hero-text">Elige tu objetivo y encuentra tu ruta.</p><p class="ag-micro">Compara productos Aesthetic Labs por piel, energía, metabolismo, recovery, performance o definición.</p><a class="ag-cta" href="'+COLLECTION+'">Ver péptidos Aesthetic Labs con envío gratis →</a></div><div class="ag-word" aria-hidden="true"><span>PEPTIDOS</span></div>';
    }
    if(app&&hero.nextElementSibling!==app)hero.insertAdjacentElement("afterend",app);
    var assistant=q(peptide,".alicyn-lab-assistant");
    if(assistant){
      Array.prototype.slice.call(assistant.children).forEach(function(child){
        if(child!==hero&&child!==app){child.hidden=true;child.classList.add("ag-hide")}
      });
    }
    qa(peptide,"[id^='alicyn-lab-mapa-'],[data-alicyn-axis-live],#catalogo-peptidos-investigacion,#protocolos-investigacion,[id^='alicyn-lab-comparador-']").forEach(function(node){node.hidden=true;node.classList.add("ag-hide")});
  }
  function boot(){qa(document,"[data-alicyn-lab-app]").forEach(refine)}
  document.addEventListener("DOMContentLoaded",function(){boot();setTimeout(boot,120);setTimeout(boot,700)});
})();
