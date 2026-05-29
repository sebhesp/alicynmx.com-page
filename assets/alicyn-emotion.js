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

    var style = document.createElement("style");
    style.textContent = "\
      .alicyn-emotion{margin:20px 0 18px;padding:clamp(18px,4vw,30px);border:1px solid rgba(157,132,255,.22);border-radius:26px;background:radial-gradient(circle at 12% 10%,rgba(149,109,255,.18),transparent 31%),radial-gradient(circle at 88% 8%,rgba(114,214,231,.11),transparent 30%),linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));box-shadow:0 22px 62px rgba(3,3,12,.34);overflow:hidden;position:relative}\
      .alicyn-emotion:before{content:'';position:absolute;inset:0 22px auto;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)}\
      .alicyn-emotion-head{display:grid;gap:8px;max-width:760px;margin-bottom:18px}.alicyn-emotion-head h2{color:#fff;font-size:clamp(1.45rem,4.4vw,2.35rem);line-height:1.05;letter-spacing:-.045em;margin:0}.alicyn-emotion-head p{color:#d8d4e8;font-size:.96rem;line-height:1.55;margin:0}.alicyn-emotion-head small{color:#aaa5bd;font-size:.76rem;line-height:1.45}\
      .alicyn-emotion-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0}.alicyn-emotion-stat{border:1px solid rgba(204,190,255,.16);border-radius:18px;background:rgba(255,255,255,.035);padding:15px}.alicyn-emotion-stat strong{display:block;color:#fff;font-size:clamp(1.5rem,6vw,2.4rem);letter-spacing:-.04em;line-height:1}.alicyn-emotion-stat span{display:block;color:#c8c2da;font-size:.76rem;line-height:1.35;margin-top:7px}.alicyn-emotion-stat small{display:block;color:#8f8aa3;font-size:.65rem;margin-top:6px}\
      .alicyn-review-gen{display:grid;gap:16px;margin-top:18px;border:1px solid rgba(204,190,255,.16);border-radius:22px;background:rgba(8,10,22,.58);padding:16px}.alicyn-review-gen h3{color:#fff;font-size:1.12rem;margin:0 0 6px}.alicyn-review-gen p{color:#cfcade;font-size:.86rem;line-height:1.48;margin:0}.alicyn-review-fields{display:grid;gap:9px}.alicyn-review-field{display:grid;gap:6px}.alicyn-review-field label{color:#9f99b5;font-size:.68rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.alicyn-review-field select{width:100%;min-height:46px;border:1px solid rgba(204,190,255,.18);border-radius:14px;background:#111425;color:#fff;padding:0 12px}.alicyn-review-output{display:grid;gap:10px}.alicyn-review-output textarea{width:100%;min-height:132px;border:1px solid rgba(204,190,255,.18);border-radius:16px;background:rgba(255,255,255,.035);color:#f6f3ff;font:inherit;font-size:.9rem;line-height:1.5;padding:13px;resize:vertical}.alicyn-review-actions{display:grid;gap:9px}.alicyn-review-note{color:#918ba7!important;font-size:.72rem!important}.alicyn-review-toast{color:#82dec8;font-size:.78rem;font-weight:800;min-height:1em}\
      @media (min-width:760px){.alicyn-emotion-stats{grid-template-columns:repeat(4,minmax(0,1fr))}.alicyn-review-gen{grid-template-columns:minmax(0,.72fr) minmax(320px,1fr);align-items:start}.alicyn-review-fields{grid-template-columns:repeat(3,minmax(0,1fr))}.alicyn-review-output{grid-column:1/-1}.alicyn-review-actions{grid-template-columns:max-content max-content}}\
      @media (max-width:559px){.alicyn-emotion{border-radius:22px;margin:16px 0;padding:17px}.alicyn-emotion-stats{grid-template-columns:1fr 1fr}.alicyn-review-actions .alicyn-lab-button{width:100%}}\
    ";
    document.head.appendChild(style);

    var section = document.createElement("section");
    section.className = "alicyn-emotion alicyn-lab-glass";
    section.setAttribute("data-alicyn-emotion", "");
    section.innerHTML = '<div class="alicyn-emotion-head"><p class="alicyn-lab-kicker">Historias Alicyn</p><h2>Pequeños momentos de calma que se sienten enormes.</h2><p>Alicyn acompaña esos días de roce, sudor, presión o sensibilidad común con una rutina clara y fácil de seguir.</p><small>Datos de comunidad y experiencias compartidas. No sustituye la orientación de tu perforador.</small></div><div class="alicyn-emotion-stats" aria-label="Comunidad Alicyn"><article class="alicyn-emotion-stat"><strong data-emotion-count="1000" data-prefix="+">0</strong><span>Piercings acompañados</span><small>en momentos de cuidado</small></article><article class="alicyn-emotion-stat"><strong data-emotion-count="1000" data-prefix="+">0</strong><span>Procesos acompañados</span><small>con limpieza puntual</small></article><article class="alicyn-emotion-stat"><strong data-emotion-count="7">0</strong><span>Años de confianza</span><small>junto a la comunidad</small></article><article class="alicyn-emotion-stat"><strong data-emotion-count="6" data-prefix="+">0</strong><span>Momentos clave</span><small>para cuidar sin improvisar</small></article></div><div class="alicyn-review-gen"><div><p class="alicyn-lab-kicker">Generador de reseñas</p><h3>Convierte tu experiencia en una reseña bonita.</h3><p>Elige tu piercing y el momento. Te damos un texto listo para copiar, editar y compartir sólo si refleja tu experiencia real.</p></div><div class="alicyn-review-fields"><div class="alicyn-review-field"><label for="alicyn-review-piercing">Piercing</label><select id="alicyn-review-piercing" data-review-piercing><option value="nostril">Nostril</option><option value="helix">Helix</option><option value="conch">Conch</option><option value="lóbulo">Lóbulo</option><option value="ombligo">Ombligo</option><option value="tragus">Tragus</option><option value="ceja">Ceja</option></select></div><div class="alicyn-review-field"><label for="alicyn-review-moment">Momento</label><select id="alicyn-review-moment" data-review-moment><option value="después de sudar o salir a la calle">Sudor o calle</option><option value="después de dormir de lado">Dormir de lado</option><option value="por roce de cabello, ropa o accesorios">Roce cotidiano</option><option value="después de cambiar joyería con cuidado">Cambio de joyería</option><option value="cuando lo sentí sensible">Sensibilidad común</option></select></div><div class="alicyn-review-field"><label for="alicyn-review-tone">Tono</label><select id="alicyn-review-tone" data-review-tone><option value="tranquilo">Tranquilo</option><option value="emocional">Emocional</option><option value="directo">Directo</option></select></div></div><div class="alicyn-review-output"><textarea data-review-output readonly></textarea><div class="alicyn-review-actions"><button class="alicyn-lab-button" type="button" data-review-generate>Generar reseña</button><button class="alicyn-lab-button alicyn-lab-button-secondary" type="button" data-review-copy>Copiar texto</button><a class="alicyn-lab-button alicyn-lab-button-tertiary" data-review-whatsapp target="_blank" rel="noopener">Compartir por WhatsApp</a></div><span class="alicyn-review-toast" data-review-toast></span><p class="alicyn-review-note">Tip: edita el texto para que suene como tú. Las experiencias personales pueden variar.</p></div></div>';

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

    var piercing = section.querySelector("[data-review-piercing]");
    var moment = section.querySelector("[data-review-moment]");
    var tone = section.querySelector("[data-review-tone]");
    var output = section.querySelector("[data-review-output]");
    var whatsapp = section.querySelector("[data-review-whatsapp]");
    var toast = section.querySelector("[data-review-toast]");

    function buildReview() {
      var intro = "";
      if (tone.value === "emocional") {
        intro = "Me dio mucha tranquilidad tener algo claro para cuidar mi " + piercing.value + " ";
      } else if (tone.value === "directo") {
        intro = "Usé Alicyn en mi " + piercing.value + " ";
      } else {
        intro = "Mi " + piercing.value + " se sentía sensible " ;
      }

      var text = intro + moment.value + ". Me gustó porque pude hacer una limpieza puntual sin mover la pieza de más. La sensación fue fresca, simple y me ayudó a sentir más confianza con mi rutina.";
      output.value = text;
      whatsapp.href = "https://wa.me/525542388056?text=" + encodeURIComponent("Hola, quiero compartir mi reseña de Alicyn: " + text);
      toast.textContent = "";
    }

    section.querySelector("[data-review-generate]").addEventListener("click", buildReview);
    section.querySelector("[data-review-copy]").addEventListener("click", function () {
      buildReview();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(output.value).then(function () {
          toast.textContent = "Texto copiado.";
        }).catch(function () {
          output.select();
          document.execCommand("copy");
          toast.textContent = "Texto copiado.";
        });
      } else {
        output.select();
        document.execCommand("copy");
        toast.textContent = "Texto copiado.";
      }
    });
    [piercing, moment, tone].forEach(function (field) {
      field.addEventListener("change", buildReview);
    });
    buildReview();
  }

  document.addEventListener("DOMContentLoaded", setupAlicynCareEmotionLayer);
})();
