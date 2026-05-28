/* Alicyn Lab Navigator — interaction controller, no dependencies. */
(() => {
  const STORE_VIEW = 'alicynLabNavigator.view';
  const STORE_QUIZ = 'alicynLabNavigator.quiz';
  const qs = (root, selector) => root.querySelector(selector);
  const qsa = (root, selector) => Array.from(root.querySelectorAll(selector));
  const safeGet = (key) => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const safeSet = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const routeDefinitions = {
    energy: {
      name: 'Cell Reset', primary: 'nad', complement: 'motsc', level: 'Inicial / intermedio',
      products: ['nad', 'motsc'],
      description: 'Ruta enfocada en investigación de energía celular, metabolismo y bienestar avanzado.',
      message: 'Hola, vengo de Alicyn Lab. Me recomendó la ruta Cell Reset con NAD+ y MOTS-C. ¿Me pueden orientar?'
    },
    metabolism: {
      name: 'Lean Research', primary: 'aod', complement: 'motsc', level: 'Inicial / intermedio',
      products: ['aod', 'motsc'],
      description: 'Ruta enfocada en investigación sobre metabolismo y composición corporal experimental desde una perspectiva de wellness avanzado.',
      message: 'Hola, vengo de Alicyn Lab. Me recomendó la ruta Lean Research con AOD-9604 y MOTS-C. ¿Me pueden orientar?'
    },
    recovery: {
      name: 'Recovery Lab', primary: 'bpc157', complement: 'tb500', level: 'Intermedio',
      products: ['bpc157', 'tb500'],
      description: 'Ruta organizada para investigación de respuesta tisular y señalización celular experimental.',
      message: 'Hola, vengo de Alicyn Lab. Me recomendó la ruta Recovery Lab con BPC-157 y TB-500. ¿Me pueden orientar?'
    },
    skin: {
      name: 'Skin Matrix', primary: 'ghkcu', complement: 'nad', level: 'Inicial / intermedio',
      products: ['ghkcu', 'nad'],
      description: 'Ruta de skin science enfocada en piel, colágeno y señalización celular en investigación.',
      message: 'Hola, vengo de Alicyn Lab. Me recomendó la ruta Skin Matrix con GHK-Cu y NAD+. ¿Me pueden orientar?'
    },
    performance: {
      name: 'Performance Axis', primary: 'motsc', complement: 'cjc1295', complementLabel: 'CJC-1295 sin DAC + Ipamorelin', level: 'Avanzado',
      products: ['motsc', 'cjc1295', 'ipamorelin'],
      description: 'Ruta avanzada para investigación de energía celular y señalización experimental.',
      message: 'Hola, vengo de Alicyn Lab. Me recomendó la ruta Performance Axis con MOTS-C, CJC-1295 e Ipamorelin. ¿Me pueden orientar?'
    },
    starter: {
      name: 'Starter Lab', primary: 'nad', complement: 'motsc', level: 'Inicial',
      products: ['nad', 'motsc'],
      description: 'Una ruta inicial para explorar energía celular, bienestar y metabolismo desde un enfoque educativo.',
      message: 'Hola, vengo de Alicyn Lab. Me recomendó la ruta Starter Lab con NAD+ y MOTS-C. ¿Me pueden orientar?'
    }
  };
  const mapDefinitions = {
    energy: {
      name: 'Energía celular',
      text: 'Energía, metabolismo y bienestar avanzado.',
      route: 'energy',
      functions: ['Longevidad celular', 'Metabolismo', 'Bienestar avanzado']
    },
    skin: {
      name: 'Piel / Rostro',
      text: 'Skin science, colágeno y bienestar estético.',
      route: 'skin',
      functions: ['Skin science', 'Colágeno', 'Señalización celular']
    },
    metabolism: {
      name: 'Metabolismo',
      text: 'Composición corporal y metabolismo celular experimental.',
      route: 'metabolism',
      functions: ['Composición corporal', 'Metabolismo', 'Definición']
    },
    recovery: {
      name: 'Tejidos / Articulaciones',
      text: 'Respuesta tisular y señalización celular.',
      route: 'recovery',
      functions: ['Tejidos', 'Articulaciones', 'Recuperación']
    },
    performance: {
      name: 'Performance',
      text: 'Energía, señalización avanzada y recuperación técnica.',
      route: 'performance',
      functions: ['Energía', 'Performance', 'Ruta avanzada']
    }
  };

  function init(root) {
    const id = root.dataset.sectionId;
    const configEl = qs(root, '[data-aln-config]');
    let config = { whatsapp: '', products: {} };
    try { config = JSON.parse(configEl.textContent); } catch (_) {}
    const product = key => config.products[key] || { name: key, url: '#aln-products-' + id };
    const wa = message => `https://wa.me/${String(config.whatsapp || '').replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    const scrollToAnchor = anchor => {
      const el = qs(root, `[data-aln-anchor="${anchor}"]`) || qs(root, `#aln-${anchor}-${id}`);
      if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    };
    const state = { route: null, map: null, quiz: { step: 0, answers: [] } };
    try {
      const stored = JSON.parse(safeGet(STORE_QUIZ) || 'null');
      if (stored && Array.isArray(stored.answers)) state.quiz = stored;
    } catch (_) {}

    function setView(view) {
      const valid = view === 'antiseptic' ? view : 'peptides';
      root.dataset.currentView = valid;
      qsa(root, '[data-aln-view]').forEach(panel => {
        const active = panel.dataset.alnView === valid;
        panel.hidden = !active;
      });
      qsa(root, '[data-aln-view-button]').forEach(button => {
        const active = button.dataset.alnViewButton === valid;
        button.setAttribute('aria-selected', String(active));
        button.tabIndex = active ? 0 : -1;
      });
      safeSet(STORE_VIEW, valid);
    }
    qsa(root, '[data-aln-view-button]').forEach(button => button.addEventListener('click', () => setView(button.dataset.alnViewButton)));
    setView(safeGet(STORE_VIEW) || root.dataset.defaultView);

    qsa(root, '[data-aln-scroll]').forEach(button => button.addEventListener('click', () => scrollToAnchor(button.dataset.alnScroll)));

    function clearHighlights() {
      qsa(root, '[data-aln-compare-row], [data-aln-product-card]').forEach(el => el.classList.remove('is-highlighted'));
    }
    function highlightProducts(keys, goToCompare) {
      clearHighlights();
      keys.forEach(key => {
        const row = qs(root, `[data-aln-compare-row="${key}"]`);
        const card = qs(root, `[data-aln-product-card="${key}"]`);
        if (row) row.classList.add('is-highlighted');
        if (card) card.classList.add('is-highlighted');
      });
      scrollToAnchor(goToCompare ? 'compare' : 'products');
      window.setTimeout(clearHighlights, 3500);
    }

    function fillRoute(container, routeKey, quizResult) {
      const route = routeDefinitions[routeKey] || routeDefinitions.starter;
      const primary = product(route.primary);
      const complement = route.complementLabel || product(route.complement).name;
      qs(container, quizResult ? '[data-aln-quiz-route]' : '[data-aln-route-name]').textContent = route.name;
      qs(container, quizResult ? '[data-aln-quiz-primary]' : '[data-aln-primary]').textContent = primary.name;
      qs(container, quizResult ? '[data-aln-quiz-complement]' : '[data-aln-complement]').textContent = complement;
      if (quizResult) qs(container, '[data-aln-quiz-level]').textContent = route.level;
      qs(container, quizResult ? '[data-aln-quiz-description]' : '[data-aln-result-description]').textContent = route.description + ` Nivel de exploración: ${route.level}.`;
      const productLink = qs(container, quizResult ? '[data-aln-quiz-product]' : '[data-aln-primary-link]');
      productLink.href = primary.url;
      productLink.textContent = `Ver ${primary.name}`;
      const whatsapp = qs(container, quizResult ? '[data-aln-quiz-whatsapp]' : '[data-aln-route-whatsapp]');
      whatsapp.href = wa(route.message);
      const compareButton = qs(container, quizResult ? '[data-aln-quiz-compare]' : '[data-aln-result-compare]');
      compareButton.onclick = () => highlightProducts(route.products, true);
      state.route = routeKey;
    }
    function showRoute(routeKey, fromQuiz) {
      const output = fromQuiz ? qs(root, '[data-aln-quiz-result]') : qs(root, '[data-aln-recommendation]');
      fillRoute(output, routeKey, fromQuiz);
      output.hidden = false;
      if (!fromQuiz) output.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    }

    qsa(root, '[data-aln-objective]').forEach(card => card.addEventListener('click', () => {
      const key = card.dataset.alnObjective;
      qsa(root, '[data-aln-objective]').forEach(item => item.setAttribute('aria-pressed', String(item === card)));
      if (key === 'starter') { scrollToAnchor('quiz'); return; }
      showRoute(key, false);
    }));
    qsa(root, '[data-aln-route-view]').forEach(button => button.addEventListener('click', () => showRoute(button.dataset.alnRouteView, false)));
    qsa(root, '[data-aln-route-direct]').forEach(link => {
      const route = routeDefinitions[link.dataset.alnRouteDirect];
      link.href = wa(route.message); link.target = '_blank'; link.rel = 'noopener noreferrer';
    });

    const mapResult = qs(root, '[data-aln-map-result]');
    function selectAxis(axisKey, scrollPanel) {
      const definition = mapDefinitions[axisKey] || mapDefinitions.energy;
      const route = routeDefinitions[definition.route];
      state.map = definition.route;
      qsa(root, '[data-aln-map]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.alnMap === axisKey)));
      qsa(root, '[data-aln-axis]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.alnAxis === axisKey)));
      qs(mapResult, 'h3').textContent = definition.name;
      qs(mapResult, '.aln-map-description').textContent = definition.text;
      qs(mapResult, '[data-aln-map-route]').textContent = route.name;
      qs(mapResult, '.aln-map-products').textContent = route.products.map(key => product(key).name).join(' · ');
      const functionsEl = qs(mapResult, '[data-aln-map-functions]');
      functionsEl.innerHTML = definition.functions.map(item => `<span>${item}</span>`).join('');
      const productsEl = qs(mapResult, '[data-aln-map-product-buttons]');
      productsEl.innerHTML = route.products.map(key => `<button type="button" data-axis-product="${key}">${product(key).name}</button>`).join('');
      qsa(productsEl, '[data-axis-product]').forEach(button => button.addEventListener('click', () => highlightProducts([button.dataset.axisProduct], false)));
      mapResult.classList.add('is-open');
      if (scrollPanel) mapResult.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    }
    qsa(root, '[data-aln-map]').forEach(point => point.addEventListener('click', () => selectAxis(point.dataset.alnMap, true)));
    qsa(root, '[data-aln-axis]').forEach(tab => tab.addEventListener('click', () => selectAxis(tab.dataset.alnAxis, true)));
    qs(root, '[data-aln-map-route-button]').addEventListener('click', () => showRoute(state.map || 'energy', false));
    qs(root, '[data-aln-map-compare]').addEventListener('click', () => highlightProducts(routeDefinitions[state.map || 'energy'].products, true));
    selectAxis('energy', false);
    qsa(root, '[data-aln-focus-product]').forEach(button => button.addEventListener('click', () => highlightProducts([button.dataset.alnFocusProduct], false)));
    qsa(root, '[data-aln-show-products]').forEach(button => button.addEventListener('click', () => scrollToAnchor('products')));

    const quiz = qs(root, '[data-aln-quiz]');
    const result = qs(root, '[data-aln-quiz-result]');
    function renderQuiz() {
      const step = Math.max(0, Math.min(3, state.quiz.step || 0));
      state.quiz.step = step;
      qsa(quiz, '[data-aln-question]').forEach((question, index) => {
        question.hidden = index !== step;
        qsa(question, '[data-answer]').forEach(option => option.setAttribute('aria-pressed', String(option.dataset.answer === state.quiz.answers[index])));
      });
      qs(root, '[data-aln-progress]').textContent = `${step + 1} / 4`;
      qs(root, '[data-aln-progress-bar]').style.width = `${(step + 1) * 25}%`;
      qs(root, '[data-aln-back]').disabled = step === 0;
      qs(root, '[data-aln-finish]').hidden = step !== 3 || !state.quiz.answers[3];
      safeSet(STORE_QUIZ, JSON.stringify(state.quiz));
    }
    qsa(quiz, '[data-answer]').forEach(option => option.addEventListener('click', () => {
      state.quiz.answers[state.quiz.step] = option.dataset.answer;
      if (state.quiz.step < 3) state.quiz.step += 1;
      renderQuiz();
    }));
    qs(root, '[data-aln-back]').addEventListener('click', () => { state.quiz.step -= 1; renderQuiz(); });
    qs(root, '[data-aln-finish]').addEventListener('click', () => {
      const routeKey = routeDefinitions[state.quiz.answers[0]] ? state.quiz.answers[0] : 'starter';
      quiz.hidden = true; result.hidden = false; showRoute(routeKey, true);
    });
    qs(root, '[data-aln-restart]').addEventListener('click', () => {
      quiz.hidden = false; result.hidden = true; state.quiz.step = 0; renderQuiz();
    });
    renderQuiz();

    qsa(root, '[data-aln-product-whatsapp]').forEach(link => {
      const message = `Hola, vengo de Alicyn Lab. Estoy interesado en ${link.dataset.alnProductWhatsapp}. ¿Me pueden orientar?`;
      link.href = wa(message); link.target = '_blank'; link.rel = 'noopener noreferrer';
    });
    const general = qs(root, '[data-aln-general-whatsapp]');
    if (general) general.href = wa('Hola, vengo de Alicyn Lab. Quiero orientación para explorar productos de investigación.');

    function toast(text) {
      const notice = document.createElement('div');
      notice.className = 'aln-toast'; notice.setAttribute('role', 'status'); notice.textContent = text;
      root.appendChild(notice); requestAnimationFrame(() => notice.classList.add('is-visible'));
      setTimeout(() => { notice.classList.remove('is-visible'); setTimeout(() => notice.remove(), 250); }, 2300);
    }
    qsa(root, '[data-aln-add]').forEach(button => button.addEventListener('click', async () => {
      button.disabled = true;
      try {
        const response = await fetch(`${window.Shopify && Shopify.routes ? Shopify.routes.root : '/'}cart/add.js`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: [{ id: Number(button.dataset.alnAdd), quantity: 1 }] })
        });
        if (!response.ok) throw new Error('cart');
        toast(`${button.dataset.productName} agregado al carrito`);
        button.textContent = 'Agregado';
      } catch (_) { toast('No se pudo agregar. Visita el producto para continuar.'); button.disabled = false; }
    }));

    if ('IntersectionObserver' in window) {
      const navButtons = qsa(root, '.aln-bottom-nav [data-aln-scroll]');
      const anchors = ['inicio', 'objectives', 'quiz', 'products', 'more'].map(name => ({ name, el: qs(root, `[data-aln-anchor="${name}"]`) || qs(root, `#aln-${name}-${id}`) })).filter(x => x.el);
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) navButtons.forEach(button => button.classList.toggle('is-active', button.dataset.alnScroll === anchors.find(x => x.el === entry.target).name));
      }), { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
      anchors.forEach(anchor => observer.observe(anchor.el));
    }
  }
  function start() { document.querySelectorAll('[data-aln]').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  document.addEventListener('shopify:section:load', event => { const root = event.target.querySelector('[data-aln]'); if (root) init(root); });
})();
