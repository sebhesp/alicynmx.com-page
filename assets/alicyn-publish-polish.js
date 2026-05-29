(function () {
  "use strict";

  var PHONE = "525542388056";
  var AXES = [
    { key: "skin", name: "Skin Wellness", icon: "✦", desc: "Piel, glow, colágeno y belleza celular.", products: ["GHK-CU", "NAD+", "BPC-157"], protocol: "Piel y Longevidad Celular", guide: "Este eje está pensado para quienes buscan una rutina más avanzada alrededor de piel, glow, colágeno, belleza celular y longevidad estética. Aquí conviven GHK-CU, NAD+ y BPC-157 dentro de una lógica de wellness celular." },
    { key: "energy", name: "Cellular Energy", icon: "⌁", desc: "Energía celular, mitocondria y vitalidad.", products: ["NAD+", "MOTS-C"], protocol: "Cell Reset", guide: "Este eje conecta con energía celular, mitocondria, metabolismo energético y vitalidad. Es ideal para empezar con una visión más profunda del bienestar y comparar opciones con más intención." },
    { key: "metabolic", name: "Metabolic Wellness", icon: "◇", desc: "Definición, metabolismo y composición corporal.", products: ["AOD-9604", "HGH Fragment", "RT3"], protocol: "Definición", guide: "Este eje está pensado para quienes buscan una relación más estratégica con metabolismo, composición corporal, definición y control estético desde una selección cuidada." },
    { key: "recovery", name: "Recovery & Mobility", icon: "⌬", desc: "Constancia, movilidad y cuidado corporal.", products: ["BPC-157", "TB-500", "GHK-CU"], protocol: "Recuperación Total", guide: "Este eje se enfoca en constancia, movilidad, respuesta corporal y cuidado físico avanzado. Es ideal para personas activas que quieren sostener mejor su rutina." },
    { key: "performance", name: "Advanced Performance", icon: "⚡", desc: "Señalización, performance y composición corporal.", products: ["CJC-1295", "Ipamorelin", "IGF1-LR3"], protocol: "Performance Axis", guide: "Este eje reúne productos asociados con señalización avanzada, performance inteligente y composición corporal. Está pensado para usuarios decididos con objetivos claros." }
  ];

  var PRODUCT_COPY = {
    nad: "Una pieza clave para quienes quieren empezar por energía celular, vitalidad y longevidad estética.",
    mots: "Para quienes buscan explorar energía celular, metabolismo y constancia desde una ruta de wellness más precisa.",
    aod: "Una opción del eje metabólico para quienes comparan definición, composición corporal y control estético.",
    ghk: "El punto de entrada para quienes buscan skin wellness, glow, colágeno y belleza celular.",
    bpc: "Una opción del eje recovery para quienes buscan continuidad física, constancia y cuidado corporal avanzado.",
    tb: "Una ruta para quienes comparan movilidad, respuesta corporal y recovery desde una visión más completa.",
    cjc: "Para quienes quieren explorar señalización avanzada, performance y composición corporal.",
    ipa: "Una opción del eje performance para quienes buscan optimización, descanso y composición corporal inteligente.",
    igf: "Para usuarios avanzados que comparan señalización IGF, desarrollo estético y performance.",
    hgh: "Una opción metabólica para quienes buscan definición, silueta y control corporal.",
    rt: "Para quienes buscan una ruta metabólica avanzada con intención, control y precisión.",
    t3s: "Una opción del eje metabólico para quienes buscan energía, control corporal y wellness avanzado."
  };

  var PRODUCT_AXES = {
    nad: ["skin", "energy"], mots: ["energy"], aod: ["metabolic"], hgh: ["metabolic"], rt: ["metabolic"], t3s: ["metabolic"],
    bpc: ["skin", "recovery"], tb: ["recovery"], ghk: ["skin", "recovery"], cjc: ["performance"], ipa: ["performance"], igf: ["performance"]
  };

  var RELATED = {
    nad: "MOTS-C, GHK-CU", mots: "NAD+, AOD-9604", aod: "MOTS-C, HGH Fragment, RT3", ghk: "NAD+, BPC-157, TB-500",
    bpc: "TB-500, GHK-CU", tb: "BPC-157, GHK-CU", cjc: "Ipamorelin, IGF1-LR3", ipa: "CJC-1295, IGF1-LR3",
    igf: "CJC-1295, Ipamorelin", hgh: "AOD-9604, RT3", rt: "AOD-9604, HGH Fragment, T3S@", t3s: "RT3, AOD-9604, HGH Fragment"
  };

  var PROTOCOL_COPY = [
    ["Piel y Longevidad", "Ruta beauty-tech para quienes quieren comparar piel, glow, energía celular y longevidad estética desde un mismo eje."],
    ["Definición", "Ruta metabólica para quienes comparan definición, composición corporal y control estético con más intención."],
    ["Recuperación Total", "Ruta de recovery para quienes buscan constancia, cuidado corporal y respuesta física desde una lógica más completa."],
    ["HGH Natural", "Ruta de performance para quienes comparan señalización, descanso y composición corporal inteligente."],
    ["Volumen", "Guía de compra avanzada para comparar señalización IGF, performance y composición corporal desde una ruta técnica."],
    ["Shred", "Ruta metabólica avanzada para quienes buscan intención, control y precisión al comparar opciones."],
    ["Wolverine", "Ruta recovery para comparar BPC-157 y TB-500 desde una visión de cuidado corporal avanzado."],
    ["Stack BPC", "Ruta recovery para comparar BPC-157 y TB-500 desde una visión de cuidado corporal avanzado."],
    ["Músculo", "Ruta avanzada para comparar performance, composición corporal y señalización desde una guía de compra clara."]
  ];

  function keyFromText(text) {
    var s = (text || "").toLowerCase();
    if (s.indexOf("rt-triple") !== -1 || s.indexOf("rt3") !== -1) return "rt";
    if (s.indexOf("t3s") !== -1) return "t3s";
    if (s.indexOf("igf") !== -1) return "igf";
    if (s.indexOf("ipamorelin") !== -1) return "ipa";
    if (s.indexOf("cjc") !== -1) return "cjc";
    if (s.indexOf("hgh-fragment") !== -1 || s.indexOf("hgh fragment") !== -1) return "hgh";
    if (s.indexOf("aod") !== -1) return "aod";
    if (s.indexOf("mots") !== -1) return "mots";
    if (s.indexOf("nad") !== -1) return "nad";
    if (s.indexOf("ghk") !== -1) return "ghk";
    if (s.indexOf("tb-500") !== -1 || s.indexOf("tb500") !== -1) return "tb";
    if (s.indexOf("bpc") !== -1) return "bpc";
    return "general";
  }

  function wa(text) { return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text); }
  function scrollToEl(el) { if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }

  function showScreen(root, key, selector) {
    var screen = key === "protocolos" || key === "comparar" || key === "whatsapp" ? "mas" : key;
    if (["inicio", "objetivos", "quiz", "productos", "mas"].indexOf(screen) === -1) screen = "inicio";
    root.querySelectorAll("[data-lab-screen]").forEach(function (panel) { panel.hidden = panel.dataset.labScreen !== screen; });
    root.querySelectorAll("[data-lab-nav]").forEach(function (btn) { btn.classList.toggle("is-active", btn.dataset.labNav === key || btn.dataset.labNav === screen); });
    window.setTimeout(function () { scrollToEl(selector ? root.querySelector(selector) : root.querySelector("[data-lab-screen='" + screen + "']")); }, 50);
  }

  function injectStyles(root) {
    if (root.querySelector("[data-publish-polish-style]")) return;
    var id = "#" + root.id;
    var style = document.createElement("style");
    style.setAttribute("data-publish-polish-style", "");
    style.textContent = id + "{overflow-x:hidden}" +
      id + " .alicyn-lab-heading," + id + " .alicyn-lab-hero-title," + id + " .alicyn-lab-care h1{letter-spacing:-.045em;line-height:1.04;overflow-wrap:normal;word-break:normal}" +
      id + " .alicyn-lab-section{padding-top:clamp(34px,6vw,64px)}" +
      id + " .alicyn-lab-section-copy," + id + " .alicyn-lab-hero-text{line-height:1.58;max-width:720px}" +
      id + " .alicyn-lab-button{line-height:1.18;min-height:52px;white-space:normal}" +
      id + " .alicyn-lab-card{gap:0;min-height:100%;padding:clamp(14px,2.5vw,18px)}" +
      id + " .alicyn-lab-card h3{font-size:clamp(1rem,2.4vw,1.08rem);line-height:1.22;margin-bottom:9px;overflow-wrap:anywhere}" +
      id + " .alicyn-lab-price{align-items:baseline;display:flex;flex-wrap:wrap;gap:6px 10px;line-height:1.1;margin:2px 0 11px}" +
      id + " .alicyn-lab-card-badge{line-height:1.1;margin-bottom:11px;max-width:100%;overflow-wrap:anywhere}" +
      id + " .alicyn-lab-presentation," + id + " .alicyn-lab-focus," + id + " .alicyn-lab-description{line-height:1.48;margin-bottom:10px}" +
      id + " .alicyn-lab-card-actions{display:grid;gap:9px;margin-top:auto;padding-top:12px}" +
      id + " .alicyn-lab-card-actions .alicyn-lab-button," + id + " .alicyn-lab-card-actions form," + id + " .alicyn-lab-card-actions form .alicyn-lab-button{width:100%}" +
      id + " .alicyn-lab-filter-row{gap:9px;margin:0 -16px 22px;padding:3px 16px 9px}" +
      id + " .alicyn-lab-filter{min-height:44px;padding:10px 15px;white-space:nowrap}" +
      id + " .alicyn-lab-products-grid," + id + " .alicyn-lab-protocols-grid{align-items:stretch}" +
      id + " .alicyn-lab-compare-wrap{max-width:100%;overflow-x:auto}" +
      id + " .alicyn-lab-compare-table td," + id + " .alicyn-lab-compare-table th{line-height:1.35;white-space:normal}" +
      id + " .alicyn-lab-orbit{display:none!important}" +
      id + " .alicyn-lab-code-visual{aspect-ratio:1;background:radial-gradient(circle at 50% 40%,rgba(149,109,255,.32),transparent 58%),linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.018));border:1px solid rgba(204,190,255,.18);border-radius:34px;box-shadow:0 24px 62px rgba(3,3,12,.38),inset 0 0 0 1px rgba(255,255,255,.04);display:grid;place-items:center;position:relative;text-align:center;width:min(78%,310px);z-index:1}" +
      id + " .alicyn-lab-code-visual strong{color:#fff;display:block;font-size:clamp(1.45rem,4vw,2.2rem);letter-spacing:.18em}" +
      id + " .alicyn-lab-code-visual span{color:#cfc7ff;display:block;font-size:.72rem;letter-spacing:.18em;margin-top:10px;text-transform:uppercase}" +
      id + " .alicyn-lab-hero-links{display:flex;flex-wrap:wrap;gap:12px;margin-top:13px}" +
      id + " .alicyn-lab-hero-links a{color:#cfc2ff;font-size:.86rem;font-weight:800;text-decoration:none}" +
      id + " .alicyn-axis-live{background:radial-gradient(circle at 14% 6%,rgba(149,109,255,.22),transparent 32%),radial-gradient(circle at 90% 18%,rgba(114,214,231,.12),transparent 30%),linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));border:1px solid rgba(157,132,255,.23);border-radius:28px;box-shadow:0 26px 72px rgba(3,3,12,.36);margin:clamp(26px,5vw,42px) 0 0;overflow:hidden;padding:clamp(18px,4vw,34px);position:relative}" +
      id + " .alicyn-axis-live-header{display:grid;gap:9px;margin-bottom:22px;max-width:820px}" +
      id + " .alicyn-axis-live-header h2{color:#fff;font-size:clamp(1.7rem,5vw,2.9rem);font-weight:760;letter-spacing:-.055em;line-height:1.04;margin:0}" +
      id + " .alicyn-axis-live-header p{color:#d9d6e7;font-size:clamp(.95rem,2.6vw,1.08rem);line-height:1.5;margin:0;max-width:700px}" +
      id + " .alicyn-axis-live-header small{color:#aaa5bd;font-size:.78rem;line-height:1.48;max-width:650px}" +
      id + " .alicyn-axis-live-layout{display:grid;gap:18px}" +
      id + " .alicyn-axis-live-grid{display:grid;gap:12px;grid-template-columns:1fr}" +
      id + " .alicyn-axis-card-live{align-items:stretch;background:radial-gradient(circle at 85% 15%,rgba(149,109,255,.14),transparent 38%),rgba(9,14,30,.76);border:1px solid rgba(204,190,255,.16);border-radius:20px;color:#fff;display:grid;gap:11px;grid-template-columns:44px minmax(0,1fr);min-height:132px;padding:17px;position:relative;text-align:left;transition:background .22s ease,border-color .22s ease,box-shadow .22s ease,transform .22s ease}" +
      id + " .alicyn-axis-card-live:hover," + id + " .alicyn-axis-card-live:focus-visible," + id + " .alicyn-axis-card-live.is-active{background:radial-gradient(circle at 85% 15%,rgba(149,109,255,.3),transparent 42%),linear-gradient(145deg,rgba(151,119,255,.2),rgba(81,217,232,.055));border-color:rgba(184,164,255,.62);box-shadow:0 18px 40px rgba(0,0,0,.24),0 0 34px rgba(149,109,255,.18);transform:translateY(-2px)}" +
      id + " .alicyn-axis-card-live.is-active:after{background:linear-gradient(90deg,#9877ff,#72d6e7);border-radius:999px;bottom:0;content:'';height:3px;left:18px;position:absolute;right:18px}" +
      id + " .alicyn-axis-card-live-icon{align-items:center;background:rgba(255,255,255,.055);border:1px solid rgba(204,190,255,.18);border-radius:15px;color:#dfd2ff;display:flex;font-size:1.22rem;height:44px;justify-content:center;width:44px}" +
      id + " .alicyn-axis-card-live strong{display:block;font-size:1rem;line-height:1.12;margin-bottom:6px}" +
      id + " .alicyn-axis-card-live small{color:#bdb8cf;display:block;font-size:.78rem;line-height:1.38}" +
      id + " .alicyn-axis-card-live-cta{align-self:end;color:#e8ddff;font-size:.74rem;font-weight:800;grid-column:2;letter-spacing:.02em}" +
      id + " .alicyn-axis-live-panel{background:radial-gradient(circle at 15% 0%,rgba(81,217,232,.11),transparent 34%),linear-gradient(150deg,rgba(18,21,39,.96),rgba(7,12,27,.92));border:1px solid rgba(204,190,255,.18);border-radius:24px;padding:clamp(18px,4vw,28px)}" +
      id + " .alicyn-axis-live-panel-top{align-items:center;display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;margin-bottom:15px}" +
      id + " .alicyn-axis-live-panel-top span{color:#72d6e7;font-size:.66rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase}" +
      id + " .alicyn-axis-pill{background:rgba(151,119,255,.13);border:1px solid rgba(204,190,255,.16);border-radius:999px;color:#eadfff;font-size:.72rem;padding:7px 10px}" +
      id + " .alicyn-axis-live-panel h3{color:#fff;font-size:clamp(1.28rem,4vw,2rem);font-weight:720;letter-spacing:-.035em;line-height:1.1;margin:0 0 10px}" +
      id + " .alicyn-axis-live-panel p{color:#d4d0df;font-size:.93rem;line-height:1.52;margin:0 0 16px}" +
      id + " .alicyn-axis-live-label{color:#8f8aa3;display:block;font-size:.66rem;font-weight:900;letter-spacing:.14em;margin-top:16px;text-transform:uppercase}" +
      id + " .alicyn-axis-chip-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px}" +
      id + " .alicyn-axis-chip{background:rgba(255,255,255,.052);border:1px solid rgba(204,190,255,.16);border-radius:999px;color:#f5f2ff;font-size:.75rem;line-height:1.1;padding:9px 11px}" +
      id + " .alicyn-axis-live-actions{display:grid;gap:10px;grid-template-columns:1fr;margin-top:22px}" +
      id + " .alicyn-axis-button-live{align-items:center;border:1px solid transparent;border-radius:14px;display:inline-flex;font-size:.9rem;font-weight:800;justify-content:center;min-height:52px;padding:0 18px;text-decoration:none}" +
      id + " .alicyn-axis-button-live-primary{background:linear-gradient(115deg,#9877ff,#5a82ff);box-shadow:0 14px 32px rgba(149,109,255,.24);color:#fff}" +
      id + " .alicyn-axis-button-live-secondary{background:rgba(255,255,255,.035);border-color:rgba(204,190,255,.2);color:#fff}" +
      id + " .alicyn-guide-modal[hidden]{display:none!important}" +
      id + " .alicyn-guide-modal{align-items:center;display:flex;inset:0;justify-content:center;padding:18px;position:fixed;z-index:120}" +
      id + " .alicyn-guide-modal__overlay{background:rgba(3,5,14,.74);backdrop-filter:blur(10px);inset:0;position:absolute}" +
      id + " .alicyn-guide-modal__dialog{background:radial-gradient(circle at 90% 0%,rgba(149,109,255,.2),transparent 36%),linear-gradient(150deg,rgba(20,22,41,.98),rgba(7,12,27,.98));border:1px solid rgba(204,190,255,.24);border-radius:26px;box-shadow:0 30px 80px rgba(0,0,0,.45);max-height:min(86vh,760px);max-width:680px;overflow:auto;padding:26px;position:relative;width:min(100%,680px)}" +
      id + " .alicyn-guide-modal__close{align-items:center;background:rgba(255,255,255,.055);border:1px solid rgba(204,190,255,.18);border-radius:50%;color:#fff;display:flex;font-size:1.25rem;height:36px;justify-content:center;position:absolute;right:16px;top:16px;width:36px}" +
      id + " .alicyn-guide-modal h3{color:#fff;font-size:clamp(1.38rem,5vw,2.1rem);letter-spacing:-.045em;line-height:1.08;margin:0 42px 16px 0}" +
      id + " .alicyn-guide-grid{display:grid;gap:10px;margin:16px 0 20px}" +
      id + " .alicyn-guide-item{background:rgba(255,255,255,.035);border:1px solid rgba(204,190,255,.14);border-radius:15px;padding:12px}" +
      id + " .alicyn-guide-item strong{color:#fff;display:block;font-size:.82rem;margin-bottom:5px}" +
      id + " .alicyn-guide-item span{color:#d4d0df;display:block;font-size:.82rem;line-height:1.45}" +
      id + " .alicyn-guide-actions{display:grid;gap:10px}" +
      "@media(min-width:560px){" + id + " .alicyn-guide-actions{grid-template-columns:max-content max-content}}" +
      "@media(min-width:760px){" + id + " .alicyn-axis-live-grid{grid-template-columns:repeat(2,minmax(0,1fr))}" + id + " .alicyn-axis-live-actions{grid-template-columns:max-content max-content}" + id + " .alicyn-lab-actions{flex-direction:row}}" +
      "@media(min-width:1040px){" + id + " .alicyn-axis-live-grid{grid-template-columns:repeat(5,minmax(0,1fr))}" + id + " .alicyn-axis-card-live{grid-template-columns:1fr;min-height:218px}" + id + " .alicyn-axis-card-live-cta{grid-column:1}}" +
      "@media(max-width:749px){" + id + " .alicyn-lab-shell{padding-left:14px;padding-right:14px}" + id + " .alicyn-lab-app-header{margin-left:-14px;margin-right:-14px}" + id + " .alicyn-lab-button," + id + " .alicyn-axis-button-live{width:100%}" + id + " .alicyn-guide-modal{align-items:flex-end;padding:10px}" + id + " .alicyn-guide-modal__dialog{border-radius:22px 22px 18px 18px;max-height:88vh;padding:24px 16px 16px}" + id + " .alicyn-care-price-row{align-items:flex-start;flex-direction:column;gap:5px}" + id + " .alicyn-care-dashboard{grid-template-columns:1fr 1fr}}" +
      "@media(max-width:420px){" + id + " .alicyn-care-dashboard{grid-template-columns:1fr}" + id + " .alicyn-lab-switch button{font-size:.84rem}" + id + " .alicyn-lab-bottom-nav span{font-size:.56rem}}";
    root.appendChild(style);
  }

  function polishHero(root) {
    var careH1 = root.querySelector("[data-lab-view='care'] .alicyn-care-hero h1");
    var careCopy = root.querySelector("[data-lab-view='care'] .alicyn-care-hero .alicyn-lab-section-copy");
    var labTitle = root.querySelector("[data-lab-view='peptides'] .alicyn-lab-hero-title");
    var labText = root.querySelector("[data-lab-view='peptides'] .alicyn-lab-hero-text");
    if (careH1) careH1.textContent = "Alicyn para el cuidado de piercings, tatuajes y procedimientos";
    if (careCopy) careCopy.textContent = "Alicyn acompaña el cuidado externo de piercings, tatuajes y procedimientos con una rutina simple, fresca y puntual.";
    if (labTitle) labTitle.textContent = "Alicyn Lab: Péptidos Aesthetic Labs para wellness avanzado";
    if (labText) labText.textContent = "Elige tu objetivo y compara péptidos, productos y guías de compra por eje: skin wellness, energía celular, metabolismo, recovery y performance inteligente.";

    root.querySelectorAll(".alicyn-lab-orbit").forEach(function (orbit) {
      var visual = document.createElement("div");
      visual.className = "alicyn-lab-code-visual";
      visual.setAttribute("aria-hidden", "true");
      visual.innerHTML = "<div><strong>ALICYN LAB</strong><span>Beauty-tech wellness</span></div>";
      orbit.replaceWith(visual);
    });
    root.querySelectorAll(".alicyn-lab-orbit-core").forEach(function (core) { core.remove(); });

    var actions = root.querySelector("[data-lab-view='peptides'] .alicyn-lab-hero-copy .alicyn-lab-actions");
    if (actions && !root.querySelector(".alicyn-lab-hero-links")) {
      var links = document.createElement("div");
      links.className = "alicyn-lab-hero-links";
      links.innerHTML = '<a href="/collections/peptidos">Ver colección completa →</a><a href="#protocolos-investigacion" data-polish-protocols>Ver protocolos →</a>';
      actions.insertAdjacentElement("afterend", links);
      links.querySelector("[data-polish-protocols]").addEventListener("click", function (event) {
        event.preventDefault();
        showScreen(root, "protocolos", "#protocolos-investigacion");
      });
    }
  }

  function replaceAxis(root) {
    root.querySelectorAll("[data-alicyn-axis-live]").forEach(function (node) { node.remove(); });
    var oldMap = root.querySelector("[id^='alicyn-lab-mapa-']");
    var hero = root.querySelector("[data-lab-view='peptides'] .alicyn-lab-hero");
    if (!oldMap && !hero) return;

    var section = document.createElement("section");
    section.className = "alicyn-axis-live";
    section.setAttribute("data-alicyn-axis-live", "");
    section.setAttribute("data-lab-screen", "inicio");
    section.innerHTML = '<div class="alicyn-axis-live-header"><p class="alicyn-lab-kicker">Wellness avanzado</p><h2>Elige tu objetivo</h2><p>Encuentra el eje que más conecta contigo y descubre productos o protocolos con más intención.</p><small>Menos confusión. Más claridad. Alicyn Lab organiza cada producto por objetivo para que puedas elegir mejor.</small></div><div class="alicyn-axis-live-layout"><div class="alicyn-axis-live-grid" role="list" aria-label="Objetivos Alicyn Lab"></div><aside class="alicyn-axis-live-panel" aria-live="polite"><div class="alicyn-axis-live-panel-top"><span>Objetivo seleccionado</span><b class="alicyn-axis-pill" data-axis-protocol></b></div><h3 data-axis-title></h3><p data-axis-description></p><span class="alicyn-axis-live-label">Productos recomendados</span><div class="alicyn-axis-chip-list" data-axis-products></div><span class="alicyn-axis-live-label">Protocolo sugerido</span><strong class="alicyn-axis-pill" data-axis-protocol-text></strong><div class="alicyn-axis-live-actions"><button class="alicyn-axis-button-live alicyn-axis-button-live-primary" type="button" data-axis-products-button>Ver productos</button><button class="alicyn-axis-button-live alicyn-axis-button-live-secondary" type="button" data-axis-guide-button>Ver guía rápida</button></div></aside></div>';
    var grid = section.querySelector(".alicyn-axis-live-grid");
    var selected = AXES[0];

    function write(selector, value) { var el = section.querySelector(selector); if (el) el.textContent = value; }
    function select(axis, card) {
      selected = axis;
      section.querySelectorAll(".alicyn-axis-card-live").forEach(function (button) {
        var active = button === card;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
      write("[data-axis-protocol]", axis.protocol);
      write("[data-axis-title]", "Eje seleccionado: " + axis.name);
      write("[data-axis-description]", axis.desc);
      write("[data-axis-protocol-text]", axis.protocol);
      var wrap = section.querySelector("[data-axis-products]");
      wrap.innerHTML = "";
      axis.products.forEach(function (name) { var chip = document.createElement("span"); chip.className = "alicyn-axis-chip"; chip.textContent = name; wrap.appendChild(chip); });
      try { window.localStorage.setItem("alicynLabNavigator.axis", axis.key); } catch (error) {}
    }

    AXES.forEach(function (axis, index) {
      var card = document.createElement("button");
      card.className = "alicyn-axis-card-live" + (index === 0 ? " is-active" : "");
      card.type = "button";
      card.setAttribute("role", "listitem");
      card.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      card.innerHTML = '<span class="alicyn-axis-card-live-icon" aria-hidden="true">' + axis.icon + '</span><span><strong>' + axis.name + '</strong><small>' + axis.desc + '</small></span><span class="alicyn-axis-card-live-cta">Ver ' + axis.name + ' →</span>';
      card.addEventListener("click", function () { select(axis, card); });
      grid.appendChild(card);
    });

    section.querySelector("[data-axis-products-button]").addEventListener("click", function () {
      showScreen(root, "productos", "#catalogo-peptidos-investigacion");
      window.setTimeout(function () { applyFilter(root, selected.key, false); }, 80);
    });
    section.querySelector("[data-axis-guide-button]").addEventListener("click", function () {
      openGuide(root, axisGuide(selected));
    });

    if (oldMap) { oldMap.insertAdjacentElement("beforebegin", section); oldMap.remove(); }
    else { hero.insertAdjacentElement("afterend", section); }
    select(AXES[0], section.querySelector(".alicyn-axis-card-live"));
  }

  function setupFilters(root) {
    var row = root.querySelector(".alicyn-lab-filter-row");
    if (!row || row.dataset.publishPolished === "true") return;
    row.dataset.publishPolished = "true";
    row.innerHTML = "";
    [{ key: "all", name: "Todos" }].concat(AXES).forEach(function (axis) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "alicyn-lab-filter" + (axis.key === "all" ? " is-active" : "");
      button.setAttribute("data-alicyn-axis-filter", axis.key);
      button.textContent = axis.name;
      button.addEventListener("click", function () { applyFilter(root, axis.key, false); });
      row.appendChild(button);
    });
  }

  function applyFilter(root, filterKey, scroll) {
    setupFilters(root);
    prepareCards(root);
    root.querySelectorAll("[data-alicyn-axis-filter]").forEach(function (button) { button.classList.toggle("is-active", button.getAttribute("data-alicyn-axis-filter") === filterKey); });
    var visible = 0;
    root.querySelectorAll("[data-lab-product-card]").forEach(function (card) {
      var axes = (card.dataset.axisList || "").split(/\s+/);
      var show = filterKey === "all" || axes.indexOf(filterKey) !== -1;
      card.hidden = !show;
      card.classList.toggle("is-filtered", !show);
      if (show) visible += 1;
    });
    if (!visible && filterKey !== "all") return applyFilter(root, "all", scroll);
    if (scroll) showScreen(root, "productos", "#catalogo-peptidos-investigacion");
  }

  function prepareCards(root) {
    root.querySelectorAll("[data-lab-product-card]").forEach(function (card) {
      if (card.dataset.cardPolished === "true") return;
      card.dataset.cardPolished = "true";
      var title = card.querySelector("h3") ? card.querySelector("h3").textContent : "";
      var key = keyFromText((card.dataset.productUrl || "") + " " + title);
      card.dataset.productKey = key;
      card.dataset.axisList = (PRODUCT_AXES[key] || []).join(" ");
      var desc = card.querySelector(".alicyn-lab-description");
      if (desc && PRODUCT_COPY[key]) desc.textContent = PRODUCT_COPY[key];
      addGuideButton(root, card, "product", key);
    });

    root.querySelectorAll("#protocolos-investigacion .alicyn-lab-card").forEach(function (card) {
      if (card.dataset.protocolPolished === "true") return;
      card.dataset.protocolPolished = "true";
      var title = card.querySelector("h3") ? card.querySelector("h3").textContent : "";
      var desc = card.querySelector(".alicyn-lab-description");
      PROTOCOL_COPY.some(function (row) { if (title.toLowerCase().indexOf(row[0].toLowerCase()) !== -1) { if (desc) desc.textContent = row[1]; return true; } return false; });
      addGuideButton(root, card, "protocol", keyFromText(title));
    });
  }

  function ensureGuide(root) {
    var modal = root.querySelector("[data-alicyn-guide-modal]");
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "alicyn-guide-modal";
    modal.hidden = true;
    modal.setAttribute("data-alicyn-guide-modal", "");
    modal.innerHTML = '<div class="alicyn-guide-modal__overlay" data-guide-close></div><div class="alicyn-guide-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="alicyn-guide-title"><button class="alicyn-guide-modal__close" type="button" data-guide-close aria-label="Cerrar guía">×</button><p class="alicyn-lab-kicker">Guía rápida</p><h3 id="alicyn-guide-title" data-guide-title></h3><div class="alicyn-guide-grid" data-guide-items></div><div class="alicyn-guide-actions"><a class="alicyn-lab-button" data-guide-cta href="/collections/peptidos">Ver producto</a><button class="alicyn-lab-button alicyn-lab-button-secondary" type="button" data-guide-close>Cerrar guía</button></div></div>';
    root.appendChild(modal);
    modal.querySelectorAll("[data-guide-close]").forEach(function (close) { close.addEventListener("click", function () { modal.hidden = true; }); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") modal.hidden = true; });
    return modal;
  }

  function openGuide(root, config) {
    var modal = ensureGuide(root);
    modal.querySelector("[data-guide-title]").textContent = config.title;
    var items = modal.querySelector("[data-guide-items]");
    items.innerHTML = "";
    config.items.forEach(function (item) {
      var block = document.createElement("div");
      block.className = "alicyn-guide-item";
      block.innerHTML = "<strong></strong><span></span>";
      block.querySelector("strong").textContent = item[0];
      block.querySelector("span").textContent = item[1];
      items.appendChild(block);
    });
    var cta = modal.querySelector("[data-guide-cta]");
    cta.textContent = config.ctaLabel || "Ver producto";
    cta.href = config.ctaUrl || "/collections/peptidos";
    cta.onclick = config.afterCta ? function (event) { event.preventDefault(); modal.hidden = true; config.afterCta(); } : null;
    modal.hidden = false;
    modal.querySelector("[data-guide-close]").focus({ preventScroll: true });
  }

  function axisGuide(axis) {
    return {
      title: axis.name,
      ctaLabel: "Ver productos",
      ctaUrl: "#catalogo-peptidos-investigacion",
      afterCta: function () { var root = document.querySelector("[data-alicyn-lab-app]"); if (root) { showScreen(root, "productos", "#catalogo-peptidos-investigacion"); window.setTimeout(function () { applyFilter(root, axis.key, false); }, 80); } },
      items: [
        ["Qué es", "Un eje de compra para comparar productos Alicyn Lab por objetivo."],
        ["Para qué se busca", axis.desc],
        ["Cuándo considerarlo", "Cuando quieres elegir con menos ruido y más intención."],
        ["Cómo integrarlo en tu rutina o protocolo", "Úsalo como guía de comparación junto con productos individuales y protocolos por objetivo."],
        ["Con qué productos se relaciona", axis.products.join(", ")],
        ["Perfil de usuario", "Personas que prefieren una selección cuidada antes de comprar."],
        ["Precauciones responsables", "Información educativa y comercial. Productos exclusivos para investigación y laboratorio."]
      ]
    };
  }

  function guideForCard(card, type, key) {
    var title = card.querySelector("h3") ? card.querySelector("h3").textContent.trim() : "Alicyn Lab";
    var description = card.querySelector(".alicyn-lab-description") ? card.querySelector(".alicyn-lab-description").textContent.trim() : "Selección cuidada por objetivo.";
    var focus = card.querySelector(".alicyn-lab-focus") ? card.querySelector(".alicyn-lab-focus").textContent.replace(/^Eje:\s*/i, "").trim() : "Wellness avanzado";
    var relation = type === "protocol" ? "Productos incluidos y opciones del mismo eje." : (RELATED[key] || "Productos del mismo eje Alicyn Lab.");
    var link = card.querySelector("a[href*='/products/'], a[href*='/collections/']");
    return {
      title: title,
      ctaLabel: type === "protocol" ? "Ver protocolo" : "Ver producto",
      ctaUrl: link ? link.href : "/collections/peptidos",
      items: [
        ["Qué es", type === "protocol" ? "Una guía de compra por objetivo dentro de Alicyn Lab." : "Un producto Aesthetic Labs organizado por eje de wellness avanzado."],
        ["Para qué se busca", description],
        ["Cuándo considerarlo", "Cuando este eje conecta con lo que quieres comparar antes de comprar."],
        ["Cómo integrarlo en tu rutina o protocolo", "Úsalo como punto de comparación dentro de una selección cuidada; revisa ficha, disponibilidad y relación con otros productos."],
        ["Con qué productos se relaciona", relation],
        ["Perfil de usuario", focus],
        ["Precauciones responsables", "Información educativa y comercial. Producto exclusivo para investigación y laboratorio. No apto para consumo humano o animal."]
      ]
    };
  }

  function addGuideButton(root, card, type, key) {
    if (card.querySelector("[data-alicyn-guide-open]")) return;
    var actions = card.querySelector(".alicyn-lab-card-actions");
    if (!actions) return;
    var button = document.createElement("button");
    button.className = "alicyn-lab-button alicyn-lab-button-secondary";
    button.type = "button";
    button.setAttribute("data-alicyn-guide-open", "");
    button.textContent = "Ver guía";
    button.addEventListener("click", function () { openGuide(root, guideForCard(card, type, key)); });
    actions.insertBefore(button, actions.firstChild);
  }

  function polishNavigation(root) {
    var careMenu = root.querySelector("[data-menu-mode='care']");
    if (careMenu && careMenu.dataset.publishPolished !== "true") {
      careMenu.dataset.publishPolished = "true";
      careMenu.innerHTML = '<button type="button" data-care-open="compra">Comprar</button><button type="button" data-care-open="guia">Guía rápida</button><button type="button" data-care-open="packs">Packs</button><button type="button" data-care-open="faq">FAQ</button>';
      careMenu.querySelectorAll("[data-care-open]").forEach(function (button) {
        button.addEventListener("click", function () {
          var target = root.querySelector("[data-mode-nav='care'][data-care-open='" + button.dataset.careOpen + "']") || root.querySelector(".alicyn-care-tile[data-care-open='" + button.dataset.careOpen + "']");
          if (target) target.click();
          var menu = root.querySelector("[data-lab-quick-menu]");
          if (menu) menu.hidden = true;
        });
      });
    }

    var labMenu = root.querySelector("[data-menu-mode='peptides']");
    if (labMenu && labMenu.dataset.publishPolished !== "true") {
      labMenu.dataset.publishPolished = "true";
      labMenu.innerHTML = '<button type="button" data-polish-go="inicio">Objetivos</button><button type="button" data-polish-go="quiz">Quiz</button><button type="button" data-polish-go="productos">Productos</button><button type="button" data-polish-go="protocolos">Protocolos</button><a href="' + wa("Hola, vengo de Alicyn Lab. Quiero orientación para elegir un producto.") + '" target="_blank" rel="noopener">WhatsApp</a>';
      labMenu.querySelectorAll("[data-polish-go]").forEach(function (button) {
        button.addEventListener("click", function () {
          showScreen(root, button.dataset.polishGo, button.dataset.polishGo === "protocolos" ? "#protocolos-investigacion" : null);
          var menu = root.querySelector("[data-lab-quick-menu]");
          if (menu) menu.hidden = true;
        });
      });
    }

    var config = [["objetivos", "Objetivos"], ["quiz", "Quiz"], ["productos", "Productos"], ["protocolos", "Protocolos"], ["whatsapp", "WhatsApp"]];
    Array.prototype.slice.call(root.querySelectorAll("[data-mode-nav='peptides']")).forEach(function (button, index) {
      if (!config[index] || button.dataset.publishPolished === "true") return;
      button.dataset.publishPolished = "true";
      button.dataset.labNav = config[index][0];
      var span = button.querySelector("span");
      if (span) span.textContent = config[index][1];
      if (config[index][0] === "whatsapp") {
        button.addEventListener("click", function (event) {
          event.preventDefault(); event.stopImmediatePropagation();
          window.open(wa("Hola, vengo de Alicyn Lab. Quiero orientación para elegir un producto."), "_blank", "noopener");
        }, true);
      } else if (config[index][0] === "protocolos") {
        button.addEventListener("click", function () { window.setTimeout(function () { showScreen(root, "protocolos", "#protocolos-investigacion"); }, 0); });
      }
    });
  }

  function polishButtons(root) {
    root.querySelectorAll("[data-lab-go='productos']").forEach(function (button) {
      if (button.dataset.productPolished === "true") return;
      button.dataset.productPolished = "true";
      button.addEventListener("click", function () { window.setTimeout(function () { applyFilter(root, "all", false); }, 80); });
    });
    root.querySelectorAll("[data-lab-go='comparar']").forEach(function (button) {
      if (button.dataset.comparePolished === "true") return;
      button.dataset.comparePolished = "true";
      button.addEventListener("click", function () { window.setTimeout(function () { showScreen(root, "comparar", "#alicyn-lab-comparador-" + root.id.replace("AlicynLab-", "")); }, 0); });
    });
  }

  function polish(root) {
    if (root.dataset.publishReadyPolished === "true") return;
    root.dataset.publishReadyPolished = "true";
    PHONE = root.dataset.whatsapp || PHONE;
    injectStyles(root);
    polishHero(root);
    replaceAxis(root);
    setupFilters(root);
    prepareCards(root);
    ensureGuide(root);
    polishNavigation(root);
    polishButtons(root);
    applyFilter(root, "all", false);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-alicyn-lab-app]").forEach(polish);
  });
})();
