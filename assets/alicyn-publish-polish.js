(function () {
  "use strict";

  var PHONE = "525542388056";
  var COLLECTION_URL = "/collections/peptidos";

  var GOALS = [
    {
      key: "skin",
      title: "Skin / Glow",
      icon: "✦",
      keywords: ["Piel", "Colágeno", "Glow"],
      products: ["GHK-CU", "NAD+", "BPC-157"],
      protocol: "Piel y Longevidad Celular",
      description: "Para quienes buscan piel, glow, colágeno y belleza celular desde una lógica de wellness avanzado.",
      accent: "#b98cff"
    },
    {
      key: "energy",
      title: "Energía",
      icon: "⌁",
      keywords: ["Vitalidad", "Mitocondria", "Longevidad"],
      products: ["NAD+", "MOTS-C"],
      protocol: "Cellular Energy",
      description: "Para quienes buscan vitalidad, energía celular y longevidad con una ruta limpia y fácil de comparar.",
      accent: "#73e6c4"
    },
    {
      key: "metabolism",
      title: "Metabolismo",
      icon: "◇",
      keywords: ["Definición", "Control", "Composición"],
      products: ["AOD-9604", "HGH Fragment", "RT3"],
      protocol: "Definición",
      description: "Para quienes buscan definición, composición corporal y control metabólico con más intención.",
      accent: "#8aa2ff"
    },
    {
      key: "recovery",
      title: "Recovery",
      icon: "⌬",
      keywords: ["Constancia", "Movilidad", "Cuidado corporal"],
      products: ["BPC-157", "TB-500", "GHK-CU"],
      protocol: "Recuperación Total",
      description: "Para quienes quieren sostener constancia, movilidad y cuidado corporal desde una visión premium.",
      accent: "#a88cff"
    },
    {
      key: "performance",
      title: "Performance",
      icon: "⚡",
      keywords: ["Fuerza", "Señalización", "Presencia física"],
      products: ["CJC-1295", "Ipamorelin", "IGF1-LR3"],
      protocol: "Volumen / HGH Natural",
      description: "Para quienes buscan fuerza, señalización y presencia física con una ruta más avanzada.",
      accent: "#c7ff78"
    },
    {
      key: "definition",
      title: "Definición",
      icon: "◌",
      keywords: ["Silueta", "Metabolismo", "Precisión"],
      products: ["AOD-9604", "HGH Fragment", "RT3"],
      protocol: "Definición / Shred Definitivo",
      description: "Para quienes quieren una ruta enfocada en silueta, definición y precisión estética.",
      accent: "#71d8ff"
    }
  ];

  var PRODUCTS = [
    { key: "ghk", axes: ["skin", "recovery"], name: "GHK-CU 100 mg", price: "$1,350 MXN", axis: "Skin / Glow", desire: "El punto de entrada para piel, glow, colágeno y belleza celular.", url: "/products/aesthetic-labs-ghk-cu-100-mg", related: "NAD+ · BPC-157 · TB-500" },
    { key: "nad", axes: ["skin", "energy"], name: "NAD+ 1000 mg", price: "$2,000 MXN", axis: "Energía", desire: "Una pieza clave para energía celular, vitalidad y longevidad estética.", url: "/products/aesthetic-labs-nad-1000-mg", related: "MOTS-C · GHK-CU" },
    { key: "bpc", axes: ["skin", "recovery"], name: "BPC-157 10 mg", price: "$1,250 MXN", axis: "Recovery", desire: "Una opción para continuidad física, constancia y cuidado corporal avanzado.", url: "/products/aesthetic-labs-bpc-157-10-mg", related: "TB-500 · GHK-CU" },
    { key: "mots", axes: ["energy"], name: "MOTS-C 10 mg", price: "$1,800 MXN", axis: "Energía", desire: "Para explorar energía celular, metabolismo y constancia con más precisión.", url: "/products/aesthetic-labs-mots-c-10-mg", related: "NAD+ · AOD-9604" },
    { key: "aod", axes: ["metabolism", "definition"], name: "AOD-9604 10 mg", price: "$1,600 MXN", axis: "Metabolismo", desire: "Una opción para definición, composición corporal y control estético.", url: "/products/aesthetic-labs-aod-9604-10-mg", related: "HGH Fragment · RT3 · MOTS-C" },
    { key: "hgh", axes: ["metabolism", "definition"], name: "HGH Fragment 176-191 5 mg", price: "$1,250 MXN", axis: "Definición", desire: "Una opción metabólica para silueta, definición y control corporal.", url: "/products/aesthetic-labs-hgh-fragment-176-191-5-mg", related: "AOD-9604 · RT3" },
    { key: "rt", axes: ["metabolism", "definition"], name: "RT-Triple Agonist 20 mg", price: "$3,000 MXN", axis: "Metabolismo", desire: "Ruta metabólica avanzada con intención, control y precisión.", url: "/products/aesthetic-labs-rt-triple-agonist-20-mg", related: "AOD-9604 · HGH Fragment · T3S@" },
    { key: "t3s", axes: ["metabolism"], name: "T3S@ 10", price: "$2,500 MXN", axis: "Metabolismo", desire: "Una opción para energía, control corporal y wellness avanzado.", url: "/products/aesthetic-labs-t3s-10", related: "RT3 · AOD-9604" },
    { key: "tb", axes: ["recovery"], name: "TB-500 10 mg", price: "$1,350 MXN", axis: "Recovery", desire: "Para comparar movilidad, respuesta corporal y cuidado físico completo.", url: "/products/aesthetic-labs-tb-500-10-mg", related: "BPC-157 · GHK-CU" },
    { key: "cjc", axes: ["performance"], name: "CJC-1295 Sin DAC 10 mg", price: "$1,800 MXN", axis: "Performance", desire: "Para explorar señalización avanzada, performance y composición corporal.", url: "/products/aesthetic-labs-cjc-1295-sin-dac-10-mg", related: "Ipamorelin · IGF1-LR3" },
    { key: "ipa", axes: ["performance"], name: "Ipamorelin 10 mg", price: "$1,250 MXN", axis: "Performance", desire: "Una opción para optimización, descanso y composición corporal inteligente.", url: "/products/aesthetic-labs-ipamorelin-10-mg", related: "CJC-1295 · IGF1-LR3" },
    { key: "igf", axes: ["performance"], name: "IGF1-LR3 1 mg", price: "$1,800 MXN", axis: "Performance", desire: "Para usuarios avanzados que comparan señalización IGF y performance.", url: "/products/aesthetic-labs-igf1-lr3-1-mg", related: "CJC-1295 · Ipamorelin" }
  ];

  var PROTOCOLS = [
    { key: "skin-protocol", axes: ["skin"], name: "Piel y Longevidad Celular", price: "$3,150 MXN", products: "GHK-CU + NAD+", text: "Ruta beauty-tech para piel, glow, energía celular y longevidad estética.", url: "/products/protocolo-piel-y-longevidad-celular" },
    { key: "energy-protocol", axes: ["energy"], name: "Cellular Energy", price: "Ruta sugerida", products: "NAD+ + MOTS-C", text: "Guía simple para vitalidad, energía celular y wellness avanzado.", url: COLLECTION_URL },
    { key: "definition-protocol", axes: ["metabolism", "definition"], name: "Definición", price: "$6,450 MXN", products: "HGH Fragment + AOD-9604", text: "Ruta metabólica para definición, composición corporal y control estético.", url: "/products/protocolo-definicion" },
    { key: "shred-protocol", axes: ["metabolism", "definition"], name: "Shred Definitivo", price: "$7,400 MXN", products: "RT3 + AOD-9604", text: "Ruta metabólica avanzada para comparar opciones con precisión.", url: "/products/protocolo-shred-definitivo" },
    { key: "recovery-protocol", axes: ["recovery"], name: "Recuperación Total", price: "$3,800 MXN", products: "GHK-CU + BPC-157 + TB-500", text: "Ruta recovery para constancia, movilidad y cuidado corporal premium.", url: "/products/protocolo-recuperacion-total" },
    { key: "volume-protocol", axes: ["performance"], name: "Volumen", price: "$4,650 MXN", products: "IGF1-LR3 + CJC-1295 + Ipamorelin", text: "Guía avanzada para señalización, presencia física y composición corporal.", url: "/products/protocolo-volumen" },
    { key: "hgh-protocol", axes: ["performance"], name: "HGH Natural", price: "$2,850 MXN", products: "CJC-1295 + Ipamorelin", text: "Ruta performance para señalización, descanso y composición corporal inteligente.", url: "/products/protocolo-hgh-natural" }
  ];

  function goalByKey(key) {
    return GOALS.filter(function (goal) { return goal.key === key; })[0] || GOALS[0];
  }

  function q(root, selector) { return root.querySelector(selector); }
  function qa(root, selector) { return Array.prototype.slice.call(root.querySelectorAll(selector)); }
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  function whats(message) {
    return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);
  }
  function scrollToNode(node) {
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function injectStyles(root) {
    if (q(root, "[data-alicyn-goal-style]")) return;
    var id = "#" + root.id;
    var style = document.createElement("style");
    style.setAttribute("data-alicyn-goal-style", "");
    style.textContent =
      id + "{overflow-x:hidden;}" +
      id + " *," + id + " *::before," + id + " *::after{box-sizing:border-box;}" +
      id + " .alicyn-lab-orbit," + id + " .alicyn-lab-orbit-core," + id + " .alicyn-goal-legacy-hidden{display:none!important;}" +
      id + " [data-lab-view='peptides'] .alicyn-lab-badges," + id + " [data-lab-view='peptides'] .alicyn-lab-compliance," + id + " [data-lab-view='peptides'] .alicyn-lab-hero-hint," + id + " [data-lab-view='peptides'] .alicyn-lab-hero-media," + id + " [data-lab-view='peptides'] .alicyn-lab-trust-grid{display:none!important;}" +
      id + " [data-lab-view='peptides']{gap:0;}" +
      id + " [data-lab-view='peptides'] .alicyn-lab-hero{align-items:center;background:radial-gradient(circle at 50% 35%,rgba(130,222,200,.16),transparent 34rem),radial-gradient(circle at 82% 20%,rgba(149,109,255,.16),transparent 28rem)!important;border:0!important;box-shadow:none!important;grid-template-columns:1fr!important;margin:0 0 clamp(10px,3vw,22px);min-height:auto;padding:clamp(24px,7vw,72px) 0 clamp(10px,3vw,22px)!important;}" +
      id + " [data-lab-view='peptides'] .alicyn-lab-hero-copy{background:transparent!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;margin:0 auto;max-width:980px!important;padding:0!important;text-align:center;width:100%;}" +
      id + " [data-lab-view='peptides'] .alicyn-lab-hero-copy .alicyn-lab-kicker," + id + " [data-lab-view='peptides'] .alicyn-lab-hero-text," + id + " [data-lab-view='peptides'] .alicyn-lab-actions," + id + " [data-lab-view='peptides'] .alicyn-goal-mini-line{display:none!important;}" +
      id + " [data-lab-view='peptides'] .alicyn-lab-hero-title{background:linear-gradient(105deg,#ffffff 0%,#d7fff1 34%,#9ff2d5 58%,#b99cff 100%);-webkit-background-clip:text;background-clip:text;color:transparent!important;display:block;font-size:clamp(4.8rem,20vw,13rem)!important;font-weight:900!important;letter-spacing:-.12em!important;line-height:.78!important;margin:0!important;text-transform:uppercase;text-shadow:0 30px 90px rgba(130,222,200,.18);}" +
      id + " .alicyn-goal-hero-cta{display:none!important;}" +
      id + " .alicyn-goal-mini-line{display:none!important;}" +
      id + " .alicyn-goal-section{--goal-accent:#82dec8;background:radial-gradient(circle at 0% 0%,rgba(130,222,200,.16),transparent 31%),radial-gradient(circle at 100% 12%,rgba(149,109,255,.18),transparent 30%),linear-gradient(180deg,rgba(9,12,24,.88),rgba(4,7,15,.72));border:1px solid rgba(210,255,241,.14);border-radius:clamp(24px,4vw,36px);box-shadow:0 32px 90px rgba(0,0,0,.34);margin:clamp(18px,4vw,34px) 0 clamp(34px,6vw,64px);overflow:hidden;padding:clamp(16px,3vw,28px);position:relative;}" +
      id + " .alicyn-goal-header{display:grid;gap:8px;margin-bottom:clamp(16px,3vw,26px);max-width:780px;}" +
      id + " .alicyn-goal-kicker{color:#9ff2d5;font-size:.72rem;font-weight:900;letter-spacing:.18em;margin:0;text-transform:uppercase;}" +
      id + " .alicyn-goal-header h2{color:#fff;font-size:clamp(1.55rem,5.2vw,2.75rem);letter-spacing:-.06em;line-height:1.02;margin:0;}" +
      id + " .alicyn-goal-header p{color:#cbc8d8;font-size:clamp(.94rem,2.7vw,1.05rem);line-height:1.48;margin:0;max-width:680px;}" +
      id + " .alicyn-goal-grid{display:grid;gap:12px;grid-template-columns:1fr;margin:0 0 clamp(18px,4vw,32px);}" +
      id + " .alicyn-goal-card{background:radial-gradient(circle at 86% 0%,color-mix(in srgb,var(--card-accent) 28%,transparent),transparent 42%),linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.026));border:1px solid rgba(223,255,246,.16);border-radius:24px;color:#fff;cursor:pointer;display:grid;gap:13px;min-height:188px;overflow:hidden;padding:16px;position:relative;text-align:left;transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease,background .22s ease;width:100%;}" +
      id + " .alicyn-goal-card:hover," + id + " .alicyn-goal-card:focus-visible," + id + " .alicyn-goal-card.is-active{border-color:color-mix(in srgb,var(--card-accent) 72%,white 8%);box-shadow:0 24px 52px rgba(0,0,0,.28),0 0 38px color-mix(in srgb,var(--card-accent) 24%,transparent);transform:translateY(-2px);}" +
      id + " .alicyn-goal-card.is-active::after{background:linear-gradient(90deg,var(--card-accent),rgba(255,255,255,.7));border-radius:999px;bottom:0;content:'';height:4px;left:18px;position:absolute;right:18px;}" +
      id + " .alicyn-goal-card__image{align-items:center;aspect-ratio:1.2;background:radial-gradient(circle at 50% 42%,color-mix(in srgb,var(--card-accent) 36%,transparent),transparent 58%),rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.12);border-radius:20px;display:flex;font-size:2rem;justify-content:center;overflow:hidden;}" +
      id + " .alicyn-goal-card__title{display:block;font-size:clamp(1.15rem,4vw,1.5rem);font-weight:820;letter-spacing:-.045em;line-height:1.02;margin:0;}" +
      id + " .alicyn-goal-card__keywords{color:#e9e7f4;display:block;font-size:.83rem;line-height:1.25;margin-top:6px;}" +
      id + " .alicyn-goal-card__products{color:#aaa5bb;display:block;font-size:.76rem;line-height:1.35;margin-top:9px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}" +
      id + " .alicyn-goal-card__button{align-items:center;align-self:end;color:#cffff0;display:inline-flex;font-size:.82rem;font-weight:900;gap:7px;margin-top:auto;}" +
      id + " .alicyn-goal-detail{background:linear-gradient(145deg,rgba(15,22,36,.96),rgba(7,9,18,.9));border:1px solid rgba(223,255,246,.16);border-radius:26px;display:grid;gap:18px;margin:0 0 clamp(22px,4vw,34px);padding:clamp(17px,4vw,28px);scroll-margin-top:96px;}" +
      id + " .alicyn-goal-detail__top{align-items:start;display:grid;gap:12px;}" +
      id + " .alicyn-goal-detail__eyebrow{color:#9ff2d5;font-size:.68rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase;}" +
      id + " .alicyn-goal-detail h3{color:#fff;font-size:clamp(1.45rem,5vw,2.45rem);letter-spacing:-.055em;line-height:1.02;margin:4px 0 9px;}" +
      id + " .alicyn-goal-detail p{color:#d8d5e4;font-size:clamp(.94rem,2.7vw,1.05rem);line-height:1.5;margin:0;max-width:760px;}" +
      id + " .alicyn-goal-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}" +
      id + " .alicyn-goal-chip{background:rgba(255,255,255,.06);border:1px solid rgba(223,255,246,.15);border-radius:999px;color:#fff;font-size:.78rem;line-height:1.1;padding:9px 11px;}" +
      id + " .alicyn-goal-route-meta{display:grid;gap:8px;margin-top:16px;}" +
      id + " .alicyn-goal-route-meta small{color:#908da1;font-size:.68rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase;}" +
      id + " .alicyn-goal-route-meta strong{color:#fff;font-size:1rem;line-height:1.2;}" +
      id + " .alicyn-goal-actions{display:grid;gap:10px;grid-template-columns:1fr;margin-top:2px;}" +
      id + " .alicyn-goal-button{align-items:center;border:1px solid transparent;border-radius:16px;display:inline-flex;font-size:.92rem;font-weight:900;justify-content:center;min-height:52px;padding:0 18px;text-decoration:none;width:100%;}" +
      id + " .alicyn-goal-button--primary{background:linear-gradient(120deg,#82dec8,#956dff);box-shadow:0 18px 38px rgba(92,255,210,.16);color:#081018;}" +
      id + " .alicyn-goal-button--secondary{background:rgba(255,255,255,.045);border-color:rgba(223,255,246,.16);color:#fff;}" +
      id + " .alicyn-goal-button--ghost{background:transparent;border-color:rgba(223,255,246,.18);color:#cffff0;}" +
      id + " .alicyn-goal-block{margin-top:clamp(22px,5vw,42px);scroll-margin-top:96px;}" +
      id + " .alicyn-goal-block__head{align-items:end;display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;margin-bottom:14px;}" +
      id + " .alicyn-goal-block h3{color:#fff;font-size:clamp(1.25rem,4.5vw,2rem);letter-spacing:-.045em;line-height:1.08;margin:0;}" +
      id + " .alicyn-goal-block__head p{color:#aaa6ba;font-size:.88rem;line-height:1.42;margin:0;max-width:560px;}" +
      id + " .alicyn-goal-inline-filters{display:flex;gap:8px;overflow:auto;padding:2px 0 10px;scrollbar-width:none;}" +
      id + " .alicyn-goal-inline-filters::-webkit-scrollbar{display:none;}" +
      id + " .alicyn-goal-filter{background:rgba(255,255,255,.045);border:1px solid rgba(223,255,246,.14);border-radius:999px;color:#d8d5e6;cursor:pointer;font-size:.78rem;font-weight:800;min-height:40px;padding:0 13px;white-space:nowrap;}" +
      id + " .alicyn-goal-filter.is-active{background:rgba(130,222,200,.16);border-color:rgba(130,222,200,.52);color:#fff;}" +
      id + " .alicyn-goal-products{display:grid;gap:12px;grid-template-columns:1fr;}" +
      id + " .alicyn-goal-product-card{background:linear-gradient(145deg,rgba(255,255,255,.066),rgba(255,255,255,.024));border:1px solid rgba(223,255,246,.14);border-radius:22px;color:#fff;display:grid;gap:10px;padding:15px;min-width:0;}" +
      id + " .alicyn-goal-product-card[hidden]{display:none!important;}" +
      id + " .alicyn-goal-product-card__top{align-items:start;display:flex;gap:10px;justify-content:space-between;}" +
      id + " .alicyn-goal-product-card h4{font-size:1.02rem;letter-spacing:-.025em;line-height:1.14;margin:0;overflow-wrap:anywhere;}" +
      id + " .alicyn-goal-product-card__price{color:#9ff2d5;font-size:.88rem;font-weight:900;line-height:1.1;white-space:nowrap;}" +
      id + " .alicyn-goal-product-card__axis{color:#bdb8cc;font-size:.76rem;font-weight:800;line-height:1.3;}" +
      id + " .alicyn-goal-product-card__desire{color:#e5e2ef;font-size:.88rem;line-height:1.42;margin:0;}" +
      id + " .alicyn-goal-product-card__actions{display:grid;gap:8px;grid-template-columns:1fr 1fr;margin-top:3px;}" +
      id + " .alicyn-goal-product-card__actions .alicyn-goal-button{font-size:.82rem;min-height:46px;padding:0 12px;}" +
      id + " .alicyn-goal-protocols{display:grid;gap:12px;grid-template-columns:1fr;}" +
      id + " .alicyn-goal-compare{border:1px solid rgba(223,255,246,.14);border-radius:22px;overflow:hidden;}" +
      id + " .alicyn-goal-compare-row{display:grid;gap:4px;padding:13px 14px;}" +
      id + " .alicyn-goal-compare-row:not(:last-child){border-bottom:1px solid rgba(223,255,246,.1);}" +
      id + " .alicyn-goal-compare-row strong{color:#fff;font-size:.93rem;}" +
      id + " .alicyn-goal-compare-row span{color:#aaa6ba;font-size:.8rem;line-height:1.35;}" +
      id + " .alicyn-goal-info{background:rgba(255,255,255,.035);border:1px solid rgba(223,255,246,.12);border-radius:22px;color:#c9c5d8;display:grid;gap:10px;line-height:1.48;padding:16px;}" +
      id + " .alicyn-goal-info strong{color:#fff;}" +
      id + " .alicyn-goal-drawer[hidden]{display:none!important;}" +
      id + " .alicyn-goal-drawer{align-items:flex-end;display:flex;inset:0;justify-content:center;padding:10px;position:fixed;z-index:140;}" +
      id + " .alicyn-goal-drawer__overlay{background:rgba(2,4,10,.76);backdrop-filter:blur(12px);inset:0;position:absolute;}" +
      id + " .alicyn-goal-drawer__panel{background:radial-gradient(circle at 90% 0%,rgba(130,222,200,.16),transparent 34%),linear-gradient(150deg,#15192b,#070a14);border:1px solid rgba(223,255,246,.2);border-radius:28px 28px 18px 18px;box-shadow:0 30px 90px rgba(0,0,0,.45);max-height:88vh;max-width:720px;overflow:auto;padding:20px 16px 16px;position:relative;width:100%;}" +
      id + " .alicyn-goal-drawer__close{align-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(223,255,246,.16);border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:1.3rem;height:38px;justify-content:center;position:absolute;right:14px;top:14px;width:38px;}" +
      id + " .alicyn-goal-drawer h3{color:#fff;font-size:clamp(1.35rem,5vw,2.15rem);letter-spacing:-.05em;line-height:1.05;margin:22px 42px 16px 0;}" +
      id + " .alicyn-goal-guide-grid{display:grid;gap:10px;}" +
      id + " .alicyn-goal-guide-item{background:rgba(255,255,255,.045);border:1px solid rgba(223,255,246,.12);border-radius:16px;padding:12px;}" +
      id + " .alicyn-goal-guide-item strong{color:#fff;display:block;font-size:.82rem;margin-bottom:5px;}" +
      id + " .alicyn-goal-guide-item span{color:#d8d5e6;display:block;font-size:.84rem;line-height:1.42;}" +
      id + " .alicyn-goal-drawer__actions{display:grid;gap:10px;margin-top:14px;}" +
      "@media(min-width:560px){" + id + " .alicyn-goal-grid{grid-template-columns:repeat(2,minmax(0,1fr));}" + id + " .alicyn-goal-products," + id + " .alicyn-goal-protocols{grid-template-columns:repeat(2,minmax(0,1fr));}" + id + " .alicyn-goal-drawer__actions{grid-template-columns:max-content max-content;}" + "}" +
      "@media(min-width:900px){" + id + " .alicyn-goal-grid{grid-template-columns:repeat(3,minmax(0,1fr));}" + id + " .alicyn-goal-products{grid-template-columns:repeat(3,minmax(0,1fr));}" + id + " .alicyn-goal-protocols{grid-template-columns:repeat(3,minmax(0,1fr));}" + id + " .alicyn-goal-detail{grid-template-columns:minmax(0,1fr) 360px;align-items:center;}" + id + " .alicyn-goal-actions{grid-template-columns:1fr;max-width:360px;}" + id + " .alicyn-goal-compare-row{grid-template-columns:1.1fr 1fr 1.2fr;align-items:center;}" + "}" +
      "@media(max-width:749px){" + id + " .alicyn-lab-shell{padding-left:14px;padding-right:14px;}" + id + " [data-lab-view='peptides'] .alicyn-lab-hero{border-radius:0!important;padding:clamp(34px,16vw,72px) 0 clamp(8px,4vw,18px)!important;}" + id + " [data-lab-view='peptides'] .alicyn-lab-hero-visual{display:none!important;}" + id + " .alicyn-goal-section{margin-left:-2px;margin-right:-2px;padding:14px;border-radius:26px;}" + id + " .alicyn-goal-card{grid-template-columns:72px minmax(0,1fr);min-height:154px;padding:14px;}" + id + " .alicyn-goal-card__image{aspect-ratio:1;height:72px;}" + id + " .alicyn-goal-card__button{grid-column:2;}" + id + " .alicyn-goal-product-card__actions{grid-template-columns:1fr;}" + id + " .alicyn-goal-button{min-height:50px;}" + id + " .alicyn-goal-drawer__panel{border-radius:24px 24px 16px 16px;}" + "}" +
      "@media(max-width:390px){" + id + " .alicyn-goal-card{grid-template-columns:1fr;}" + id + " .alicyn-goal-card__image{height:auto;width:78px;}" + id + " .alicyn-goal-card__button{grid-column:1;}" + id + " .alicyn-goal-product-card__top{display:grid;}" + id + " .alicyn-goal-product-card__price{white-space:normal;}" + "}" +
      "@media(prefers-reduced-motion:reduce){" + id + " .alicyn-goal-card{transition:none;}" + "}";
    root.appendChild(style);
  }

  function simplifyHero(root) {
    var peptide = q(root, "[data-lab-view='peptides']");
    if (!peptide) return;
    var title = q(peptide, ".alicyn-lab-hero-title, .alicyn-lab-hero h1");
    var text = q(peptide, ".alicyn-lab-hero-text, .alicyn-lab-section-copy");
    var copy = q(peptide, ".alicyn-lab-hero-copy") || q(peptide, ".alicyn-lab-hero");
    if (title) title.textContent = "Péptidos";
    if (text) text.textContent = "";
    qa(peptide, ".alicyn-lab-orbit, .alicyn-lab-orbit-core").forEach(function (node) { node.remove(); });
    var actions = q(peptide, ".alicyn-lab-actions");
    if (actions) {
      actions.innerHTML = '';
    }
    if (copy && !q(copy, ".alicyn-goal-mini-line")) {
      var mini = document.createElement("p");
      mini.className = "alicyn-goal-mini-line";
      mini.textContent = "Piel. Energía. Metabolismo. Recovery. Performance.";
      if (actions) actions.insertAdjacentElement("beforebegin", mini);
      else copy.appendChild(mini);
    }
  }

  function hideLegacy(root) {
    var selectors = [
      "[data-alicyn-axis-live]",
      "[id^='alicyn-lab-mapa-']",
      "[data-lab-screen='objetivos']",
      "[data-lab-screen='quiz']",
      "[data-lab-screen='productos']",
      "[data-lab-screen='mas']",
      "#catalogo-peptidos-investigacion",
      "#protocolos-investigacion",
      "[id^='alicyn-lab-comparador-']"
    ];
    selectors.forEach(function (selector) {
      qa(root, selector).forEach(function (node) {
        if (node && !node.hasAttribute("data-alicyn-goal-section")) {
          node.classList.add("alicyn-goal-legacy-hidden");
          node.hidden = true;
        }
      });
    });
  }

  function buildGoalApp(root) {
    var peptide = q(root, "[data-lab-view='peptides']");
    if (!peptide) return;
    var old = q(peptide, "[data-alicyn-goal-section]");
    if (old) old.remove();

    var section = document.createElement("section");
    section.className = "alicyn-goal-section";
    section.setAttribute("data-alicyn-goal-section", "");
    section.innerHTML =
      '<div class="alicyn-goal-header" id="alicyn-goal-objectives">' +
        '<p class="alicyn-goal-kicker">Alicyn Lab Navigator</p>' +
        '<h2>Elige tu objetivo</h2>' +
        '<p>Bloques simples, rutas claras y productos filtrados para decidir más rápido.</p>' +
      '</div>' +
      '<div class="alicyn-goal-grid" data-goal-grid aria-label="Objetivos Alicyn Lab"></div>' +
      '<div class="alicyn-goal-detail" id="alicyn-lab-route-detail" aria-live="polite">' +
        '<div class="alicyn-goal-detail__top">' +
          '<div><span class="alicyn-goal-detail__eyebrow">Tu ruta sugerida</span><h3 data-route-title></h3><p data-route-description></p></div>' +
          '<div><div class="alicyn-goal-route-meta"><small>Productos recomendados</small><div class="alicyn-goal-chips" data-route-products></div></div><div class="alicyn-goal-route-meta"><small>Protocolo recomendado</small><strong data-route-protocol></strong></div></div>' +
        '</div>' +
        '<div class="alicyn-goal-actions"><button class="alicyn-goal-button alicyn-goal-button--primary" type="button" data-route-products-button>Ver productos</button><button class="alicyn-goal-button alicyn-goal-button--secondary" type="button" data-route-protocol-button>Ver protocolo</button><a class="alicyn-goal-button alicyn-goal-button--ghost" data-route-whatsapp target="_blank" rel="noopener">Preguntar por WhatsApp</a></div>' +
      '</div>' +
      '<section class="alicyn-goal-block" id="alicyn-goal-products-block"><div class="alicyn-goal-block__head"><div><h3 data-products-heading>Productos filtrados</h3><p>Cards compactas, precio claro y una sola idea por producto.</p></div></div><div class="alicyn-goal-inline-filters" data-inline-filters></div><div class="alicyn-goal-products" data-goal-products></div></section>' +
      '<section class="alicyn-goal-block" id="alicyn-goal-protocols-block"><div class="alicyn-goal-block__head"><div><h3>Protocolos recomendados</h3><p>Guías de compra por objetivo, sin saturarte de texto.</p></div></div><div class="alicyn-goal-protocols" data-goal-protocols></div></section>' +
      '<section class="alicyn-goal-block" id="alicyn-goal-compare-block"><div class="alicyn-goal-block__head"><div><h3>Comparador rápido</h3><p>Una vista corta para ubicar eje, nivel y ruta.</p></div></div><div class="alicyn-goal-compare" data-goal-compare></div></section>' +
      '<section class="alicyn-goal-block alicyn-goal-info" id="alicyn-goal-info-block"><strong>Información responsable</strong><span>Los productos Alicyn Lab se presentan como información educativa y comercial para investigación/laboratorio. Compara opciones por objetivo, revisa cada ficha y pregunta si necesitas orientación antes de comprar.</span></section>';

    var hero = q(peptide, ".alicyn-lab-hero");
    if (hero) hero.insertAdjacentElement("afterend", section);
    else peptide.insertBefore(section, peptide.firstChild);

    renderGoals(section);
    renderInlineFilters(section);
    renderProducts(section);
    renderProtocols(section);
    renderCompare(section);
    ensureDrawer(root);
    bindRouteButtons(root, section);
    selectGoal(root, section, "skin", false);
  }

  function renderGoals(section) {
    var grid = q(section, "[data-goal-grid]");
    grid.innerHTML = "";
    GOALS.forEach(function (goal) {
      var button = document.createElement("button");
      button.className = "alicyn-goal-card";
      button.type = "button";
      button.setAttribute("data-goal-card", goal.key);
      button.setAttribute("aria-pressed", "false");
      button.style.setProperty("--card-accent", goal.accent);
      button.innerHTML =
        '<span class="alicyn-goal-card__image" aria-hidden="true">' + esc(goal.icon) + '</span>' +
        '<span><strong class="alicyn-goal-card__title">' + esc(goal.title) + '</strong>' +
        '<span class="alicyn-goal-card__keywords">' + esc(goal.keywords.join(" · ")) + '</span>' +
        '<span class="alicyn-goal-card__products">' + esc(goal.products.join(" · ")) + '</span></span>' +
        '<span class="alicyn-goal-card__button">Explorar →</span>';
      button.addEventListener("click", function () {
        var root = section.closest("[data-alicyn-lab-app]");
        selectGoal(root, section, goal.key, true);
      });
      grid.appendChild(button);
    });
  }

  function renderInlineFilters(section) {
    var wrap = q(section, "[data-inline-filters]");
    wrap.innerHTML = "";
    [{ key: "all", title: "Todos" }].concat(GOALS).forEach(function (goal) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "alicyn-goal-filter";
      button.setAttribute("data-goal-filter", goal.key);
      button.textContent = goal.title;
      button.addEventListener("click", function () {
        var root = section.closest("[data-alicyn-lab-app]");
        selectGoal(root, section, goal.key, false);
        scrollToNode(q(section, "#alicyn-goal-products-block"));
      });
      wrap.appendChild(button);
    });
  }

  function renderProducts(section) {
    var wrap = q(section, "[data-goal-products]");
    wrap.innerHTML = "";
    PRODUCTS.forEach(function (product) {
      var card = document.createElement("article");
      card.className = "alicyn-goal-product-card";
      card.setAttribute("data-goal-product", product.key);
      card.setAttribute("data-goal-axes", product.axes.join(" "));
      card.innerHTML =
        '<div class="alicyn-goal-product-card__top"><div><h4>' + esc(product.name) + '</h4><span class="alicyn-goal-product-card__axis">Eje: ' + esc(product.axis) + '</span></div><strong class="alicyn-goal-product-card__price">' + esc(product.price) + '</strong></div>' +
        '<p class="alicyn-goal-product-card__desire">' + esc(product.desire) + '</p>' +
        '<div class="alicyn-goal-product-card__actions"><a class="alicyn-goal-button alicyn-goal-button--primary" href="' + esc(product.url) + '">Ver producto</a><button class="alicyn-goal-button alicyn-goal-button--secondary" type="button" data-guide-product="' + esc(product.key) + '">Ver guía</button></div>';
      q(card, "[data-guide-product]").addEventListener("click", function () {
        var root = section.closest("[data-alicyn-lab-app]");
        openGuide(root, guideForProduct(product));
      });
      wrap.appendChild(card);
    });
  }

  function renderProtocols(section) {
    var wrap = q(section, "[data-goal-protocols]");
    wrap.innerHTML = "";
    PROTOCOLS.forEach(function (protocol) {
      var card = document.createElement("article");
      card.className = "alicyn-goal-product-card";
      card.setAttribute("data-goal-protocol", protocol.key);
      card.setAttribute("data-goal-axes", protocol.axes.join(" "));
      card.innerHTML =
        '<div class="alicyn-goal-product-card__top"><div><h4>' + esc(protocol.name) + '</h4><span class="alicyn-goal-product-card__axis">' + esc(protocol.products) + '</span></div><strong class="alicyn-goal-product-card__price">' + esc(protocol.price) + '</strong></div>' +
        '<p class="alicyn-goal-product-card__desire">' + esc(protocol.text) + '</p>' +
        '<div class="alicyn-goal-product-card__actions"><a class="alicyn-goal-button alicyn-goal-button--primary" href="' + esc(protocol.url) + '">Ver protocolo</a><button class="alicyn-goal-button alicyn-goal-button--secondary" type="button" data-guide-protocol="' + esc(protocol.key) + '">Ver guía</button></div>';
      q(card, "[data-guide-protocol]").addEventListener("click", function () {
        var root = section.closest("[data-alicyn-lab-app]");
        openGuide(root, guideForProtocol(protocol));
      });
      wrap.appendChild(card);
    });
  }

  function renderCompare(section) {
    var wrap = q(section, "[data-goal-compare]");
    wrap.innerHTML = "";
    PRODUCTS.slice(0, 8).forEach(function (product) {
      var row = document.createElement("div");
      row.className = "alicyn-goal-compare-row";
      row.setAttribute("data-goal-axes", product.axes.join(" "));
      row.innerHTML = '<strong>' + esc(product.name) + '</strong><span>' + esc(product.axis) + '</span><span>' + esc(product.desire) + '</span>';
      wrap.appendChild(row);
    });
  }

  function bindRouteButtons(root, section) {
    q(section, "[data-route-products-button]").addEventListener("click", function () {
      scrollToNode(q(section, "#alicyn-goal-products-block"));
    });
    q(section, "[data-route-protocol-button]").addEventListener("click", function () {
      scrollToNode(q(section, "#alicyn-goal-protocols-block"));
    });
  }

  function selectGoal(root, section, key, shouldScroll) {
    if (!section) return;
    var activeKey = key === "all" ? "all" : goalByKey(key).key;
    var goal = activeKey === "all" ? { key: "all", title: "Todos", products: ["Colección completa"], protocol: "Explora productos individuales", description: "Vista completa para comparar todos los productos Alicyn Lab por objetivo." } : goalByKey(activeKey);

    qa(section, "[data-goal-card]").forEach(function (card) {
      var active = card.getAttribute("data-goal-card") === activeKey;
      card.classList.toggle("is-active", active);
      card.setAttribute("aria-pressed", active ? "true" : "false");
    });
    qa(section, "[data-goal-filter]").forEach(function (filter) {
      filter.classList.toggle("is-active", filter.getAttribute("data-goal-filter") === activeKey);
    });

    q(section, "[data-route-title]").textContent = "Tu ruta: " + goal.title;
    q(section, "[data-route-description]").textContent = goal.description;
    q(section, "[data-route-protocol]").textContent = goal.protocol;
    var chips = q(section, "[data-route-products]");
    chips.innerHTML = "";
    goal.products.forEach(function (name) {
      var chip = document.createElement("span");
      chip.className = "alicyn-goal-chip";
      chip.textContent = name;
      chips.appendChild(chip);
    });

    var wa = q(section, "[data-route-whatsapp]");
    wa.href = whats("Hola, vengo de Alicyn Lab. Me interesa la ruta " + goal.title + " con " + goal.products.join(" y ") + ". ¿Me pueden orientar?");

    q(section, "[data-products-heading]").textContent = activeKey === "all" ? "Todos los productos" : "Productos para " + goal.title;
    filterCards(section, activeKey);
    try { window.localStorage.setItem("alicynLabGoal.active", activeKey); } catch (error) {}
    if (shouldScroll) scrollToNode(q(section, "#alicyn-lab-route-detail"));
  }

  function filterCards(section, key) {
    var all = key === "all";
    qa(section, "[data-goal-product], [data-goal-protocol], .alicyn-goal-compare-row").forEach(function (card) {
      var axes = (card.getAttribute("data-goal-axes") || "").split(/\s+/);
      card.hidden = !(all || axes.indexOf(key) !== -1);
    });
  }

  function ensureDrawer(root) {
    var drawer = q(root, "[data-alicyn-goal-drawer]");
    if (drawer) return drawer;
    drawer = document.createElement("div");
    drawer.className = "alicyn-goal-drawer";
    drawer.hidden = true;
    drawer.setAttribute("data-alicyn-goal-drawer", "");
    drawer.innerHTML =
      '<div class="alicyn-goal-drawer__overlay" data-goal-drawer-close></div>' +
      '<div class="alicyn-goal-drawer__panel" role="dialog" aria-modal="true" aria-labelledby="alicyn-goal-guide-title">' +
        '<button class="alicyn-goal-drawer__close" type="button" aria-label="Cerrar guía" data-goal-drawer-close>×</button>' +
        '<p class="alicyn-goal-kicker">Guía rápida</p><h3 id="alicyn-goal-guide-title" data-guide-title></h3><div class="alicyn-goal-guide-grid" data-guide-grid></div>' +
        '<div class="alicyn-goal-drawer__actions"><a class="alicyn-goal-button alicyn-goal-button--primary" data-guide-cta>Ver producto</a><button class="alicyn-goal-button alicyn-goal-button--secondary" type="button" data-goal-drawer-close>Cerrar guía</button></div>' +
      '</div>';
    root.appendChild(drawer);
    qa(drawer, "[data-goal-drawer-close]").forEach(function (button) {
      button.addEventListener("click", function () { drawer.hidden = true; });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") drawer.hidden = true;
    });
    return drawer;
  }

  function openGuide(root, guide) {
    var drawer = ensureDrawer(root);
    q(drawer, "[data-guide-title]").textContent = guide.title;
    var grid = q(drawer, "[data-guide-grid]");
    grid.innerHTML = "";
    guide.items.forEach(function (item) {
      var node = document.createElement("div");
      node.className = "alicyn-goal-guide-item";
      node.innerHTML = "<strong></strong><span></span>";
      q(node, "strong").textContent = item[0];
      q(node, "span").textContent = item[1];
      grid.appendChild(node);
    });
    var cta = q(drawer, "[data-guide-cta]");
    cta.textContent = guide.ctaLabel;
    cta.href = guide.ctaUrl;
    drawer.hidden = false;
    q(drawer, "[data-goal-drawer-close]").focus({ preventScroll: true });
  }

  function guideBase(name, desire, related, ctaUrl, ctaLabel) {
    return {
      title: name,
      ctaLabel: ctaLabel,
      ctaUrl: ctaUrl,
      items: [
        ["Qué es", "Una opción Alicyn Lab organizada por objetivo para comparar con claridad."],
        ["Para qué se busca", desire],
        ["Cuándo considerarlo", "Cuando ese eje conecta con lo que quieres trabajar y necesitas una ruta más simple."],
        ["Con qué se relaciona", related],
        ["Precauciones responsables", "Información educativa y comercial. Producto exclusivo para investigación/laboratorio."]
      ]
    };
  }

  function guideForProduct(product) {
    return guideBase(product.name, product.desire, product.related, product.url, "Ver producto");
  }

  function guideForProtocol(protocol) {
    return guideBase(protocol.name, protocol.text, protocol.products, protocol.url, "Ver protocolo");
  }

  function setupNavigation(root) {
    var peptideMenu = q(root, "[data-menu-mode='peptides']");
    if (peptideMenu) {
      peptideMenu.innerHTML =
        '<button type="button" data-goal-jump="objectives">Objetivos</button>' +
        '<button type="button" data-goal-jump="products">Productos</button>' +
        '<button type="button" data-goal-jump="protocols">Protocolos</button>' +
        '<a href="' + whats("Hola, vengo de Alicyn Lab. Quiero orientación para elegir un producto.") + '" target="_blank" rel="noopener">WhatsApp</a>';
      qa(peptideMenu, "[data-goal-jump]").forEach(function (button) {
        button.addEventListener("click", function () { jump(root, button.getAttribute("data-goal-jump")); });
      });
    }
    var labels = [
      ["inicio", "Inicio", "hero"],
      ["objetivos", "Objetivos", "objectives"],
      ["productos", "Productos", "products"],
      ["protocolos", "Protocolos", "protocols"],
      ["whatsapp", "WhatsApp", "whatsapp"]
    ];
    qa(root, "[data-mode-nav='peptides']").forEach(function (button, index) {
      var config = labels[index];
      if (!config) return;
      button.setAttribute("data-lab-nav", config[0]);
      var span = q(button, "span");
      if (span) span.textContent = config[1];
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        jump(root, config[2]);
      }, true);
    });
  }

  function jump(root, target) {
    if (target === "whatsapp") {
      window.open(whats("Hola, vengo de Alicyn Lab. Quiero orientación para elegir un producto."), "_blank", "noopener");
      return;
    }
    var map = {
      hero: "[data-lab-view='peptides'] .alicyn-lab-hero",
      objectives: "#alicyn-goal-objectives",
      products: "#alicyn-goal-products-block",
      protocols: "#alicyn-goal-protocols-block"
    };
    scrollToNode(q(root, map[target] || map.objectives));
  }

  function init(root) {
    if (!root || root.dataset.alicynGoalSimplified === "true") return;
    root.dataset.alicynGoalSimplified = "true";
    PHONE = root.dataset.whatsapp || PHONE;
    injectStyles(root);
    simplifyHero(root);
    hideLegacy(root);
    buildGoalApp(root);
    setupNavigation(root);
    window.setTimeout(function () { hideLegacy(root); }, 120);
    window.setTimeout(function () { hideLegacy(root); }, 700);
    try {
      var active = window.localStorage.getItem("alicynLabGoal.active");
      if (active) {
        var section = q(root, "[data-alicyn-goal-section]");
        if (section) selectGoal(root, section, active, false);
      }
    } catch (error) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    qa(document, "[data-alicyn-lab-app]").forEach(init);
  });
})();
