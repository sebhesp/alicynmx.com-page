(function () {
  "use strict";

  var whatsappBase = "https://wa.me/525542388056?text=";

  function encodeMessage(message) {
    return whatsappBase + encodeURIComponent(message.trim());
  }

  function setupProductImageFallback() {
    var image = document.querySelector("[data-product-image]");
    var wrapper = document.querySelector("[data-product-image-wrap]");

    if (!image || !wrapper) {
      return;
    }

    var fallbackSrc = image.getAttribute("data-fallback-src") || "";
    var triedFallback = false;

    function tryFallbackImage() {
      if (!fallbackSrc || triedFallback) {
        return false;
      }

      triedFallback = true;
      image.src = fallbackSrc;
      image.removeAttribute("srcset");
      return true;
    }

    function showPlaceholder() {
      image.classList.add("is-missing");
      wrapper.classList.add("has-placeholder");
    }

    if (image.complete && image.naturalWidth <= 1) {
      if (!tryFallbackImage()) {
        showPlaceholder();
      }
    }

    image.addEventListener("error", function () {
      if (!tryFallbackImage()) {
        showPlaceholder();
      }
    });
    image.addEventListener("load", function () {
      if (image.naturalWidth <= 1) {
        if (!tryFallbackImage()) {
          showPlaceholder();
        }
        return;
      }

      wrapper.classList.add("has-image");
    });

    var probe = new Image();
    probe.onload = function () {
      if (probe.naturalWidth <= 1) {
        showPlaceholder();
        return;
      }

      wrapper.classList.add("has-image");
    };
    probe.onerror = showPlaceholder;
    probe.src = image.currentSrc || image.src;
  }

  function setupMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector("#site-navigation");

    if (!toggle || !nav) {
      return;
    }

    function setOpen(isOpen) {
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar navegación" : "Abrir navegación");
      nav.setAttribute("data-open", String(isOpen));
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target instanceof HTMLAnchorElement) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  }

  function setupFaq() {
    var questions = document.querySelectorAll(".faq-question");

    questions.forEach(function (question) {
      var answerId = question.getAttribute("aria-controls");
      var answer = answerId ? document.getElementById(answerId) : null;

      if (!answer) {
        return;
      }

      question.addEventListener("click", function () {
        var isOpen = question.getAttribute("aria-expanded") === "true";
        question.setAttribute("aria-expanded", String(!isOpen));
        answer.hidden = isOpen;
      });
    });
  }

  function setupChat() {
    var toggle = document.querySelector(".chat-toggle");
    var panel = document.querySelector("#chat-panel");
    var close = document.querySelector(".chat-close");
    var textarea = document.querySelector("#chat-message");
    var sendLink = document.querySelector("#chat-whatsapp-link");
    var quickButtons = document.querySelectorAll("[data-chat-message]");

    if (!toggle || !panel || !textarea || !sendLink) {
      return;
    }

    function updateLink() {
      sendLink.href = encodeMessage(textarea.value || "Hola, quiero comprar Alicyn 100 ml.");
    }

    function setOpen(isOpen) {
      panel.hidden = !isOpen;
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar ayuda por WhatsApp" : "Abrir ayuda por WhatsApp");

      if (isOpen) {
        window.setTimeout(function () {
          textarea.focus();
        }, 0);
      } else {
        toggle.focus();
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(panel.hidden);
    });

    if (close) {
      close.addEventListener("click", function () {
        setOpen(false);
      });
    }

    textarea.addEventListener("input", updateLink);

    quickButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        textarea.value = button.getAttribute("data-chat-message") || "";
        updateLink();
        textarea.focus();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !panel.hidden) {
        setOpen(false);
      }
    });

    updateLink();
  }

  function setupReviewsCarousel() {
    var carousels = document.querySelectorAll("[data-reviews-carousel]");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    carousels.forEach(function (carousel) {
      var track = carousel.querySelector("[data-reviews-track]");
      var previous = carousel.querySelector("[data-reviews-prev]");
      var next = carousel.querySelector("[data-reviews-next]");
      var timer = null;
      var isPaused = false;

      if (!track) {
        return;
      }

      function getStep() {
        var firstCard = track.querySelector(".review-card");
        if (!firstCard) {
          return track.clientWidth;
        }

        var styles = window.getComputedStyle(track);
        var gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
        return firstCard.getBoundingClientRect().width + gap;
      }

      function scrollByStep(direction) {
        var step = getStep() * direction;
        var maxScroll = track.scrollWidth - track.clientWidth - 4;
        var nextLeft = track.scrollLeft + step;

        if (nextLeft > maxScroll) {
          nextLeft = 0;
        } else if (nextLeft < 0) {
          nextLeft = maxScroll;
        }

        track.scrollTo({
          left: nextLeft,
          behavior: reduceMotion ? "auto" : "smooth"
        });
      }

      function start() {
        if (reduceMotion || timer || isPaused) {
          return;
        }

        timer = window.setInterval(function () {
          scrollByStep(1);
        }, 5000);
      }

      function stop() {
        if (timer) {
          window.clearInterval(timer);
          timer = null;
        }
      }

      if (previous) {
        previous.addEventListener("click", function () {
          scrollByStep(-1);
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          scrollByStep(1);
        });
      }

      carousel.addEventListener("pointerenter", function () {
        isPaused = true;
        stop();
      });

      carousel.addEventListener("pointerleave", function () {
        isPaused = false;
        start();
      });

      carousel.addEventListener("focusin", function () {
        isPaused = true;
        stop();
      });

      carousel.addEventListener("focusout", function () {
        isPaused = false;
        start();
      });

      start();
    });
  }

  function setupAlicynLabAxisReplacement() {
    var oldMap = document.querySelector("[id^='alicyn-lab-mapa-']");
    if (!oldMap || document.querySelector("[data-alicyn-axis-live]")) {
      return;
    }

    var app = oldMap.closest("[data-alicyn-lab-app]");
    if (!app) {
      return;
    }

    var axes = [
      {
        key: "skin",
        route: "skin",
        name: "Skin Wellness",
        description: "Piel, glow, colágeno y belleza celular.",
        products: ["GHK-CU 100 mg", "NAD+ 1000 mg", "BPC-157 10 mg"],
        protocol: "Protocolo Piel y Longevidad Celular",
        guide: "Este eje está pensado para quienes buscan una rutina más avanzada alrededor de piel, glow, colágeno, belleza celular y longevidad estética. Aquí conviven productos como GHK-CU, NAD+ y BPC-157 dentro de una lógica de cuidado premium y wellness celular.",
        cta: "Ver Skin Wellness",
        icon: "☼"
      },
      {
        key: "energy",
        route: "cell",
        name: "Cellular Energy",
        description: "Energía celular, mitocondria y vitalidad.",
        products: ["NAD+ 1000 mg", "MOTS-C 10 mg"],
        protocol: "Cell Reset",
        guide: "Este eje conecta con energía celular, mitocondria, metabolismo energético y vitalidad. Es ideal para quienes quieren empezar por una visión más profunda del bienestar: cómo se siente el cuerpo cuando hay más intención detrás de la rutina.",
        cta: "Ver Cellular Energy",
        icon: "⌁"
      },
      {
        key: "metabolic",
        route: "lean",
        name: "Metabolic Wellness",
        description: "Definición, metabolismo y composición corporal.",
        products: ["AOD-9604 10 mg", "HGH Fragment 176-191", "RT-Triple Agonist"],
        protocol: "Protocolo Definición",
        guide: "Este eje está pensado para quienes buscan una relación más estratégica con metabolismo, composición corporal, definición y control estético. Conecta especialmente con usuarios fit decididos y personas wellness que quieren cuidar su cuerpo con mayor precisión.",
        cta: "Ver Metabolic Wellness",
        icon: "◇"
      },
      {
        key: "recovery",
        route: "recovery",
        name: "Recovery & Mobility",
        description: "Constancia, recuperación y cuerpo funcional.",
        products: ["BPC-157 10 mg", "TB-500 10 mg", "GHK-CU 100 mg"],
        protocol: "Recovery Lab",
        guide: "Este eje se enfoca en constancia, movilidad, respuesta corporal y cuidado físico avanzado. Es ideal para personas activas que quieren sostener mejor su rutina y cuidar el cuerpo con una lógica más completa.",
        cta: "Ver Recovery",
        icon: "⌬"
      },
      {
        key: "performance",
        route: "performance",
        name: "Advanced Performance",
        description: "Señalización, performance y composición corporal.",
        products: ["CJC-1295 Sin DAC", "Ipamorelin", "IGF1-LR3"],
        protocol: "Performance Axis",
        guide: "Este eje reúne productos asociados con señalización avanzada, performance inteligente y composición corporal. Está pensado para usuarios más decididos, con objetivos claros y una visión más técnica de su rutina.",
        cta: "Ver Performance",
        icon: "⚡"
      }
    ];

    var style = document.createElement("style");
    style.textContent = "\
      .alicyn-axis-live{border:1px solid rgba(157,132,255,.23);border-radius:28px;background:radial-gradient(circle at 14% 6%,rgba(149,109,255,.24),transparent 32%),radial-gradient(circle at 90% 18%,rgba(114,214,231,.13),transparent 30%),linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));box-shadow:0 26px 72px rgba(3,3,12,.36);margin:36px 0;padding:clamp(20px,4vw,34px);position:relative;overflow:hidden}\
      .alicyn-axis-live:before{content:'';position:absolute;inset:0 22px auto;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)}\
      .alicyn-axis-live-header{display:grid;gap:9px;margin-bottom:22px;max-width:820px}.alicyn-axis-live-header h2{color:#fff;font-size:clamp(1.65rem,4.8vw,2.75rem);font-weight:650;letter-spacing:-.055em;line-height:1.04;margin:0}.alicyn-axis-live-header p{color:#d9d6e7;font-size:clamp(.94rem,2.6vw,1.08rem);line-height:1.48;margin:0;max-width:680px}.alicyn-axis-live-header small{color:#aaa5bd;font-size:.78rem;line-height:1.46;max-width:650px}\
      .alicyn-axis-live-layout{display:grid;gap:18px}.alicyn-axis-live-grid{display:grid;gap:12px;grid-template-columns:1fr}.alicyn-axis-card-live{align-items:stretch;background:radial-gradient(circle at 85% 15%,rgba(149,109,255,.14),transparent 38%),rgba(9,14,30,.76);border:1px solid rgba(204,190,255,.16);border-radius:20px;color:#fff;display:grid;gap:11px;grid-template-columns:44px minmax(0,1fr);min-height:132px;padding:17px;position:relative;text-align:left;transition:background .22s ease,border-color .22s ease,box-shadow .22s ease,transform .22s ease}.alicyn-axis-card-live:hover,.alicyn-axis-card-live:focus-visible,.alicyn-axis-card-live.is-active{background:radial-gradient(circle at 85% 15%,rgba(149,109,255,.3),transparent 42%),linear-gradient(145deg,rgba(151,119,255,.2),rgba(81,217,232,.055));border-color:rgba(184,164,255,.62);box-shadow:0 18px 40px rgba(0,0,0,.24),0 0 34px rgba(149,109,255,.18);transform:translateY(-2px)}.alicyn-axis-card-live.is-active:after{background:linear-gradient(90deg,#9877ff,#72d6e7);border-radius:999px;bottom:0;content:'';height:3px;left:18px;position:absolute;right:18px}.alicyn-axis-card-live-icon{align-items:center;background:rgba(255,255,255,.055);border:1px solid rgba(204,190,255,.18);border-radius:15px;color:#dfd2ff;display:flex;font-size:1.22rem;height:44px;justify-content:center;width:44px}.alicyn-axis-card-live strong{font-size:1rem;line-height:1.12}.alicyn-axis-card-live small{color:#bdb8cf;font-size:.78rem;line-height:1.38}.alicyn-axis-card-live-cta{align-self:end;color:#e8ddff;font-size:.74rem;font-weight:800;grid-column:2;letter-spacing:.02em}\
      .alicyn-axis-live-panel{background:radial-gradient(circle at 15% 0%,rgba(81,217,232,.11),transparent 34%),linear-gradient(150deg,rgba(18,21,39,.96),rgba(7,12,27,.92));border:1px solid rgba(204,190,255,.18);border-radius:24px;padding:clamp(18px,4vw,28px)}.alicyn-axis-live-panel-top{align-items:center;display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;margin-bottom:15px}.alicyn-axis-live-panel-top span{color:#72d6e7;font-size:.66rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase}.alicyn-axis-live-panel-top b,.alicyn-axis-live-protocol{background:rgba(151,119,255,.13);border:1px solid rgba(204,190,255,.16);border-radius:999px;color:#eadfff;font-size:.72rem;padding:7px 10px}.alicyn-axis-live-panel h3{color:#fff;font-size:clamp(1.28rem,4vw,2rem);font-weight:650;letter-spacing:-.035em;line-height:1.1;margin:0 0 10px}.alicyn-axis-live-panel p{color:#d4d0df;font-size:.93rem;line-height:1.52;margin:0 0 16px}.alicyn-axis-live-label{color:#8f8aa3;display:block;font-size:.66rem;font-weight:900;letter-spacing:.14em;margin-top:16px;text-transform:uppercase}.alicyn-axis-chip-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px}.alicyn-axis-chip{background:rgba(255,255,255,.052);border:1px solid rgba(204,190,255,.16);border-radius:999px;color:#f5f2ff;font-size:.75rem;padding:9px 11px}.alicyn-axis-live-actions{display:grid;gap:10px;grid-template-columns:1fr;margin-top:22px}.alicyn-axis-button-live{align-items:center;border:1px solid transparent;border-radius:14px;display:inline-flex;font-size:.9rem;font-weight:800;justify-content:center;min-height:52px;padding:0 18px}.alicyn-axis-button-live-primary{background:linear-gradient(115deg,#9877ff,#72d6e7);box-shadow:0 14px 32px rgba(149,109,255,.24);color:#fff}.alicyn-axis-button-live-secondary{background:rgba(255,255,255,.035);border-color:rgba(204,190,255,.2);color:#fff}\
      .alicyn-axis-modal-live[hidden]{display:none}.alicyn-axis-modal-live{align-items:center;display:flex;inset:0;justify-content:center;padding:20px;position:fixed;z-index:90}.alicyn-axis-modal-live-overlay{background:rgba(3,5,14,.72);backdrop-filter:blur(10px);inset:0;position:absolute}.alicyn-axis-modal-live-dialog{background:radial-gradient(circle at 90% 0%,rgba(149,109,255,.2),transparent 36%),linear-gradient(150deg,rgba(20,22,41,.98),rgba(7,12,27,.98));border:1px solid rgba(204,190,255,.24);border-radius:26px;box-shadow:0 30px 80px rgba(0,0,0,.45);max-width:560px;padding:26px;position:relative;width:min(100%,560px)}.alicyn-axis-modal-live-dialog h3{color:#fff;font-size:clamp(1.35rem,5vw,2rem);letter-spacing:-.035em;margin:0 0 12px}.alicyn-axis-modal-live-dialog p{color:#d7d2e4;font-size:.96rem;line-height:1.62;margin:0 0 20px}.alicyn-axis-modal-live-close{align-items:center;background:rgba(255,255,255,.055);border:1px solid rgba(204,190,255,.18);border-radius:50%;color:#fff;display:flex;font-size:1.25rem;height:36px;justify-content:center;position:absolute;right:16px;top:16px;width:36px}\
      #alicyn-lab-mapa-SECTION,.alicyn-lab-section[id^='alicyn-lab-mapa-']{display:none!important}\
      @media (min-width:760px){.alicyn-axis-live-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.alicyn-axis-live-actions{grid-template-columns:max-content max-content}}@media (min-width:1040px){.alicyn-axis-live-grid{grid-template-columns:repeat(5,minmax(0,1fr))}.alicyn-axis-card-live{grid-template-columns:1fr;min-height:210px}.alicyn-axis-card-live-cta{grid-column:1}}@media (max-width:699px){.alicyn-axis-live{border-radius:22px;margin:28px 0;padding:18px}.alicyn-axis-live-actions .alicyn-axis-button-live{width:100%}.alicyn-axis-modal-live{align-items:flex-end;padding:14px}.alicyn-axis-modal-live-dialog{border-radius:22px;padding:24px 18px 18px}}\
    ".replace("#alicyn-lab-mapa-SECTION", "#" + oldMap.id);
    document.head.appendChild(style);

    var section = document.createElement("section");
    section.className = "alicyn-axis-live";
    section.setAttribute("data-alicyn-axis-live", "");
    section.setAttribute("data-lab-screen", "inicio");
    section.setAttribute("aria-labelledby", "alicyn-axis-live-title");
    section.innerHTML = '<div class="alicyn-axis-live-header"><p class="alicyn-lab-kicker">Wellness avanzado</p><h2 id="alicyn-axis-live-title">Elige tu eje de wellness avanzado</h2><p>Selecciona lo que quieres trabajar y descubre qué productos o protocolos hacen más sentido para ti.</p><small>Menos confusión. Más intención. Alicyn Lab organiza cada producto por objetivo para que puedas elegir con claridad.</small></div><div class="alicyn-axis-live-layout"><div class="alicyn-axis-live-grid" role="list" aria-label="Ejes de wellness avanzado"></div><aside class="alicyn-axis-live-panel" aria-live="polite"><div class="alicyn-axis-live-panel-top"><span>Selección premium</span><b data-axis-protocol></b></div><h3 data-axis-title></h3><p data-axis-description></p><span class="alicyn-axis-live-label">Productos recomendados</span><div class="alicyn-axis-chip-list" data-axis-products></div><span class="alicyn-axis-live-label">Protocolo sugerido</span><strong class="alicyn-axis-live-protocol" data-axis-protocol-text></strong><div class="alicyn-axis-live-actions"><button class="alicyn-axis-button-live alicyn-axis-button-live-primary" type="button" data-axis-products-button>Ver productos de este eje</button><button class="alicyn-axis-button-live alicyn-axis-button-live-secondary" type="button" data-axis-guide-button>Ver guía rápida</button></div></aside></div><div class="alicyn-axis-modal-live" data-axis-modal hidden><div class="alicyn-axis-modal-live-overlay" data-axis-close></div><div class="alicyn-axis-modal-live-dialog" role="dialog" aria-modal="true" aria-labelledby="alicyn-axis-modal-live-title"><button class="alicyn-axis-modal-live-close" type="button" data-axis-close aria-label="Cerrar guía">×</button><p class="alicyn-lab-kicker">Guía rápida</p><h3 id="alicyn-axis-modal-live-title" data-axis-modal-title></h3><p data-axis-modal-text></p><button class="alicyn-axis-button-live alicyn-axis-button-live-primary" type="button" data-axis-modal-products>Ver productos de este eje</button></div></div>';

    oldMap.parentNode.insertBefore(section, oldMap);
    oldMap.hidden = true;

    var grid = section.querySelector(".alicyn-axis-live-grid");
    var selected = axes[0];

    axes.forEach(function (axis, index) {
      var card = document.createElement("button");
      card.className = "alicyn-axis-card-live" + (index === 0 ? " is-active" : "");
      card.type = "button";
      card.setAttribute("role", "listitem");
      card.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      card.innerHTML = '<span class="alicyn-axis-card-live-icon" aria-hidden="true">' + axis.icon + '</span><span><strong>' + axis.name + '</strong><small>' + axis.description + '</small></span><span class="alicyn-axis-card-live-cta">' + axis.cta + ' →</span>';
      card.addEventListener("click", function () {
        selectAxis(axis, card);
      });
      grid.appendChild(card);
    });

    function setText(selector, value) {
      var element = section.querySelector(selector);
      if (element) {
        element.textContent = value;
      }
    }

    function selectAxis(axis, card) {
      selected = axis;
      section.setAttribute("data-axis-selected", axis.key);
      try {
        localStorage.setItem("alicynLabNavigator.axis", axis.key);
      } catch (error) {}

      section.querySelectorAll(".alicyn-axis-card-live").forEach(function (button) {
        var active = button === card;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });

      setText("[data-axis-protocol]", axis.protocol);
      setText("[data-axis-title]", "Eje seleccionado: " + axis.name);
      setText("[data-axis-description]", axis.description);
      setText("[data-axis-protocol-text]", axis.protocol);

      var productWrap = section.querySelector("[data-axis-products]");
      productWrap.innerHTML = "";
      axis.products.forEach(function (product) {
        var chip = document.createElement("span");
        chip.className = "alicyn-axis-chip";
        chip.textContent = product;
        productWrap.appendChild(chip);
      });
    }

    function goToProducts() {
      var productsButton = app.querySelector('[data-lab-go="productos"]');
      if (productsButton) {
        productsButton.click();
      }

      window.setTimeout(function () {
        var filter = app.querySelector('[data-lab-filter="' + selected.route + '"]');
        if (filter) {
          filter.click();
        }
        var products = app.querySelector("#catalogo-peptidos-investigacion");
        if (products) {
          products.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    }

    function openGuide() {
      var modal = section.querySelector("[data-axis-modal]");
      setText("[data-axis-modal-title]", selected.name);
      setText("[data-axis-modal-text]", selected.guide);
      modal.hidden = false;
      var close = modal.querySelector("[data-axis-close]");
      if (close) {
        close.focus({ preventScroll: true });
      }
    }

    function closeGuide() {
      var modal = section.querySelector("[data-axis-modal]");
      if (modal) {
        modal.hidden = true;
      }
    }

    section.querySelector("[data-axis-products-button]").addEventListener("click", goToProducts);
    section.querySelector("[data-axis-guide-button]").addEventListener("click", openGuide);
    section.querySelector("[data-axis-modal-products]").addEventListener("click", function () {
      closeGuide();
      goToProducts();
    });
    section.querySelectorAll("[data-axis-close]").forEach(function (button) {
      button.addEventListener("click", closeGuide);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeGuide();
      }
    });

    selectAxis(axes[0], section.querySelector(".alicyn-axis-card-live"));
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupProductImageFallback();
    setupMobileNav();
    setupFaq();
    setupChat();
    setupReviewsCarousel();
    setupAlicynLabAxisReplacement();
  });
})();
