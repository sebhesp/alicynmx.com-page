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

    function showPlaceholder() {
      image.classList.add("is-missing");
      wrapper.classList.add("has-placeholder");
    }

    if (image.complete && image.naturalWidth === 0) {
      showPlaceholder();
    }

    image.addEventListener("error", showPlaceholder);
    image.addEventListener("load", function () {
      wrapper.classList.add("has-image");
    });

    var probe = new Image();
    probe.onload = function () {
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

  document.addEventListener("DOMContentLoaded", function () {
    setupProductImageFallback();
    setupMobileNav();
    setupFaq();
    setupChat();
  });
})();
