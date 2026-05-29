(function () {
  "use strict";

  function setupAlicynCareEmotionLayer() {
    var careView = document.querySelector("[data-lab-view='care']");
    if (!careView || careView.querySelector("[data-alicyn-emotion]")) {
      return;
    }

    var hero = careView.querySelector(".alicyn-care-hero");
    if (!hero || !hero.parentNode) {
      return;
    }

    var moments = [
      {
        label: "Después de dormir de lado",
        text: "Hay días en que lo importante es tener una rutina simple, clara y sin mover la pieza de más.",
        tag: "Calma cotidiana"
      },
      {
        label: "Roce de cabello o ropa",
        text: "Cuando aparece sensibilidad común por el roce, Alicyn ayuda a que el cuidado se sienta más intencional.",
        tag: "Cuidado puntual"
      },
      {
        label: "Sudor, calle o rutina activa",
        text: "Un paso rápido de limpieza puede hacer que el proceso se sienta más acompañado durante el día.",
        tag: "Rutina práctica"
      },
      {
        label: "Cambio de joyería con cuidado",
        text: "La confianza también se construye con pequeños hábitos que hacen que todo se sienta más ordenado.",
        tag: "Confianza"
      }
    ];

    var style = document.createElement("style");
    style.textContent = "\
      .alicyn-emotion{margin:20px 0 18px;padding:clamp(18px,4vw,30px);border:1px solid rgba(157,132,255,.22);border-radius:26px;background:radial-gradient(circle at 12% 10%,rgba(149,109,255,.18),transparent 31%),radial-gradient(circle at 88% 8%,rgba(114,214,231,.11),transparent 30%),linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));box-shadow:0 22px 62px rgba(3,3,12,.34);overflow:hidden;position:relative}\
      .alicyn-emotion:before{content:'';position:absolute;inset:0 22px auto;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)}\
      .alicyn-emotion-head{display:grid;gap:8px;max-width:760px;margin-bottom:18px}.alicyn-emotion-head h2{color:#fff;font-size:clamp(1.45rem,4.4vw,2.35rem);line-height:1.05;letter-spacing:-.045em;margin:0}.alicyn-emotion-head p{color:#d8d4e8;font-size:.96rem;line-height:1.55;margin:0}.alicyn-emotion-head small{color:#aaa5bd;font-size:.76rem;line-height:1.45}\
      .alicyn-emotion-grid{display:grid;gap:14px}.alicyn-emotion-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.alicyn-emotion-stat{border:1px solid rgba(204,190,255,.16);border-radius:18px;background:rgba(255,255,255,.035);padding:15px}.alicyn-emotion-stat strong{display:block;color:#fff;font-size:clamp(1.5rem,6vw,2.4rem);letter-spacing:-.04em;line-height:1}.alicyn-emotion-stat span{display:block;color:#c8c2da;font-size:.76rem;line-height:1.35;margin-top:7px}.alicyn-emotion-stat small{display:block;color:#8f8aa3;font-size:.65rem;margin-top:6px}\
      .alicyn-proof{border:1px solid rgba(204,190,255,.16);border-radius:22px;background:linear-gradient(145deg,rgba(8,10,22,.72),rgba(255,255,255,.035));padding:16px;position:relative;overflow:hidden;min-height:252px}.alicyn-proof:before{content:'';position:absolute;right:-48px;top:-52px;width:170px;height:170px;border-radius:999px;background:radial-gradient(circle,rgba(151,98,255,.28),transparent 68%);filter:blur(2px)}.alicyn-proof-top{display:flex;align-items:center;justify-content:space-between;gap:12px;position:relative}.alicyn-proof h3{color:#fff;font-size:1.18rem;line-height:1.1;margin:8px 0 12px;letter-spacing:-.03em}.alicyn-proof-card{display:grid;gap:12px;position:relative;transition:opacity .22s ease,transform .22s ease}.alicyn-proof-chip{display:inline-flex;width:max-content;align-items:center;gap:7px;color:#fff;background:rgba(157,132,255,.16);border:1px solid rgba(204,190,255,.2);border-radius:999px;padding:8px 11px;font-size:.72rem;font-weight:850;letter-spacing:.03em}.alicyn-proof-chip:before{content:'';width:7px;height:7px;border-radius:999px;background:#a98cff;box-shadow:0 0 16px rgba(169,140,255,.85)}.alicyn-proof-card blockquote{color:#f7f3ff;font-size:clamp(1.02rem,3.4vw,1.34rem);line-height:1.35;margin:0;letter-spacing:-.025em}.alicyn-proof-card p{color:#bfb8d5;font-size:.86rem;line-height:1.5;margin:0}.alicyn-proof-dots{display:flex;gap:7px;margin-top:16px}.alicyn-proof-dot{width:8px;height:8px;border:0;border-radius:999px;background:rgba(255,255,255,.28);padding:0;cursor:pointer}.alicyn-proof-dot.is-active{width:24px;background:linear-gradient(90deg,#8d5dff,#5a82ff)}.alicyn-proof-actions{display:grid;grid-template-columns:1fr;gap:9px;margin-top:16px}.alicyn-proof-actions .alicyn-lab-button{width:100%;justify-content:center}.alicyn-proof-note{color:#918ba7!important;font-size:.72rem!important;margin-top:12px!important}\
      @media (min-width:760px){.alicyn-emotion-grid{grid-template-columns:minmax(0,1fr) minmax(310px,.7fr);align-items:stretch}.alicyn-emotion-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.alicyn-proof{min-height:auto}.alicyn-proof-actions{grid-template-columns:max-content max-content}.alicyn-proof-actions .alicyn-lab-button{width:auto}}\
      @media (min-width:1040px){.alicyn-emotion-stats{grid-template-columns:repeat(4,minmax(0,1fr));grid-column:1/-1}.alicyn-proof{grid-column:1/-1}.alicyn-proof-card blockquote{max-width:780px}}\
      @media (max-width:559px){.alicyn-emotion{border-radius:22px;margin:16px 0;padding:17px}.alicyn-emotion-stats{grid-template-columns:1fr 1fr}.alicyn-proof{border-radius:20px}}\
    ";
    document.head.appendChild(style);

    var section = document.createElement("section");
    section.className = "alicyn-emotion alicyn-lab-glass";
    section.setAttribute("data-alicyn-emotion", "");
    section.innerHTML = '<div class="alicyn-emotion-head"><p class="alicyn-lab-kicker">Historias Alicyn</p><h2>Pequeños momentos de calma que se sienten enormes.</h2><p>Alicyn acompaña esos días de roce, sudor, presión o sensibilidad común con una rutina clara y fácil de seguir.</p><small>Datos de comunidad y experiencias compartidas. No sustituye la orientación de tu perforador.</small></div><div class="alicyn-emotion-grid"><div class="alicyn-emotion-stats" aria-label="Comunidad Alicyn"><article class="alicyn-emotion-stat"><strong data-emotion-count="1000" data-prefix="+">0</strong><span>Piercings acompañados</span><small>en momentos de cuidado</small></article><article class="alicyn-emotion-stat"><strong data-emotion-count="1000" data-prefix="+">0</strong><span>Procesos acompañados</span><small>con limpieza puntual</small></article><article class="alicyn-emotion-stat"><strong data-emotion-count="7">0</strong><span>Años de confianza</span><small>junto a la comunidad</small></article><article class="alicyn-emotion-stat"><strong data-emotion-count="6" data-prefix="+">0</strong><span>Momentos clave</span><small>para cuidar sin improvisar</small></article></div><div class="alicyn-proof" data-alicyn-proof><div class="alicyn-proof-top"><p class="alicyn-lab-kicker">Conexión real</p><span class="alicyn-proof-chip" data-proof-tag>Calma cotidiana</span></div><h3>Lo que una buena rutina hace sentir.</h3><div class="alicyn-proof-card" aria-live="polite"><span class="alicyn-proof-chip" data-proof-label>Después de dormir de lado</span><blockquote data-proof-text>Hay días en que lo importante es tener una rutina simple, clara y sin mover la pieza de más.</blockquote><p>Mensajes breves inspirados en momentos comunes del proceso de cuidado.</p></div><div class="alicyn-proof-dots" data-proof-dots aria-label="Momentos Alicyn"></div><div class="alicyn-proof-actions"><a class="alicyn-lab-button" href="/products/alicyn-solucion-antiseptica">Comprar Alicyn</a><a class="alicyn-lab-button alicyn-lab-button-secondary" href="https://wa.me/525542388056?text=Hola%2C%20vengo%20de%20Alicyn%20y%20quiero%20orientaci%C3%B3n%20para%20cuidar%20mi%20piercing." target="_blank" rel="noopener">Preguntar por WhatsApp</a></div><p class="alicyn-proof-note">Cada experiencia puede variar. Sigue las indicaciones de tu perforador.</p></div></div>';

    hero.insertAdjacentElement("afterend", section);

    function formatCount(value, prefix) {
      return (prefix || "") + Number(value).toLocaleString("es-MX");
    }

    function animateCounters() {
      section.querySelectorAll("[data-emotion-count]").forEach(function (counter) {
        var target = parseInt(counter.getAttribute("data-emotion-count"), 10) || 0;
        var prefix = counter.getAttribute("data-prefix") || "";
        var duration = 950;
        var start = null;
        function tick(timestamp) {
          if (!start) start = timestamp;
          var progress = Math.min((timestamp - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = formatCount(Math.round(target * eased), prefix);
          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        }
        window.requestAnimationFrame(tick);
      });
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      }, { threshold: 0.35 });
      observer.observe(section);
    } else {
      animateCounters();
    }

    var label = section.querySelector("[data-proof-label]");
    var tag = section.querySelector("[data-proof-tag]");
    var text = section.querySelector("[data-proof-text]");
    var dotsWrap = section.querySelector("[data-proof-dots]");
    var proofCard = section.querySelector(".alicyn-proof-card");
    var activeMoment = 0;
    var autoTimer = null;

    function renderMoment(index) {
      activeMoment = (index + moments.length) % moments.length;
      var moment = moments[activeMoment];
      proofCard.style.opacity = "0";
      proofCard.style.transform = "translateY(6px)";
      window.setTimeout(function () {
        label.textContent = moment.label;
        tag.textContent = moment.tag;
        text.textContent = moment.text;
        dotsWrap.querySelectorAll("button").forEach(function (dot, dotIndex) {
          dot.classList.toggle("is-active", dotIndex === activeMoment);
          dot.setAttribute("aria-pressed", dotIndex === activeMoment ? "true" : "false");
        });
        proofCard.style.opacity = "1";
        proofCard.style.transform = "translateY(0)";
      }, 140);
    }

    function startAutoMoments() {
      window.clearInterval(autoTimer);
      autoTimer = window.setInterval(function () {
        renderMoment(activeMoment + 1);
      }, 4200);
    }

    moments.forEach(function (moment, index) {
      var dot = document.createElement("button");
      dot.className = "alicyn-proof-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", "Ver momento " + moment.label);
      dot.addEventListener("click", function () {
        renderMoment(index);
        startAutoMoments();
      });
      dotsWrap.appendChild(dot);
    });

    renderMoment(0);
    startAutoMoments();
  }

  document.addEventListener("DOMContentLoaded", setupAlicynCareEmotionLayer);
})();
