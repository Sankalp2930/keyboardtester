(function () {
  'use strict';

  const keys = document.querySelectorAll('.key');
  const lastKeyEl = document.getElementById('last-key');
  const keyCountEl = document.getElementById('key-count').querySelector('strong');
  const resetBtn = document.getElementById('resetBtn');
  const themeBtn = document.getElementById('themeBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');

  // Track tested keys (unique codes)
  const testedKeys = new Set();
  // Track currently held keys (for visual hold state)
  const heldKeys = new Set();

  // Build lookup maps: code -> element(s)
  const codeMap = {};
  keys.forEach(key => {
    const code = key.dataset.code;
    if (!code) return;
    if (!codeMap[code]) codeMap[code] = [];
    codeMap[code].push(key);
  });

  function activateKey(code, label) {
    const targets = codeMap[code];
    if (!targets) return;
    targets.forEach(el => el.classList.add('active'));

    if (!testedKeys.has(code)) {
      testedKeys.add(code);
      keyCountEl.textContent = testedKeys.size;
    }

    if (label) {
      lastKeyEl.textContent = label;
    }
  }

  function deactivateKey(code) {
    const targets = codeMap[code];
    if (!targets) return;
    targets.forEach(el => el.classList.remove('active'));
  }

  document.addEventListener('keydown', e => {
    e.preventDefault();
    const code = e.code;
    if (heldKeys.has(code)) return; // ignore repeat
    heldKeys.add(code);

    const label = buildLabel(e);
    activateKey(code, label);
  });

  document.addEventListener('keyup', e => {
    e.preventDefault();
    const code = e.code;
    heldKeys.delete(code);
    deactivateKey(code);
  });

  function buildLabel(e) {
    const parts = [];
    if (e.ctrlKey  && e.code !== 'ControlLeft'  && e.code !== 'ControlRight')  parts.push('Ctrl');
    if (e.altKey   && e.code !== 'AltLeft'       && e.code !== 'AltRight')      parts.push('Alt');
    if (e.shiftKey && e.code !== 'ShiftLeft'     && e.code !== 'ShiftRight')    parts.push('Shift');
    if (e.metaKey  && e.code !== 'MetaLeft'      && e.code !== 'MetaRight')     parts.push('Meta');

    const keyName = keyDisplayName(e.code, e.key);
    parts.push(keyName);
    return parts.join(' + ');
  }

  function keyDisplayName(code, key) {
    const map = {
      Space: 'Space', Enter: 'Enter', NumpadEnter: 'Numpad Enter',
      Backspace: 'Backspace', Tab: 'Tab', Escape: 'Escape',
      CapsLock: 'Caps Lock', NumLock: 'Num Lock',
      ShiftLeft: 'Left Shift', ShiftRight: 'Right Shift',
      ControlLeft: 'Left Ctrl', ControlRight: 'Right Ctrl',
      AltLeft: 'Left Alt', AltRight: 'Right Alt',
      MetaLeft: 'Left Win', MetaRight: 'Right Win',
      ContextMenu: 'Menu',
      ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
      Insert: 'Insert', Delete: 'Delete', Home: 'Home', End: 'End',
      PageUp: 'Page Up', PageDown: 'Page Down',
      PrintScreen: 'Print Screen', ScrollLock: 'Scroll Lock', Pause: 'Pause',
      NumpadDivide: 'Num /', NumpadMultiply: 'Num *',
      NumpadSubtract: 'Num −', NumpadAdd: 'Num +', NumpadDecimal: 'Num .',
    };
    if (map[code]) return map[code];
    if (code.startsWith('F') && !isNaN(code.slice(1))) return code;
    if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
    if (key && key.length === 1) return key.toUpperCase();
    return code;
  }

  // Reset
  resetBtn.addEventListener('click', () => {
    keys.forEach(k => k.classList.remove('active'));
    testedKeys.clear();
    heldKeys.clear();
    keyCountEl.textContent = '0';
    lastKeyEl.textContent = 'Press a key...';
  });

  // Dark mode
  const savedTheme = localStorage.getItem('kbt-theme');
  if (savedTheme === 'dark') applyDark();

  themeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      themeBtn.textContent = 'Dark Mode';
      localStorage.setItem('kbt-theme', 'light');
    } else {
      applyDark();
    }
  });

  function applyDark() {
    document.body.classList.add('dark');
    themeBtn.textContent = 'Light Mode';
    localStorage.setItem('kbt-theme', 'dark');
  }

  // Fullscreen
  fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
      document.exitFullscreen().catch(() => {});
      fullscreenBtn.textContent = 'Fullscreen';
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) fullscreenBtn.textContent = 'Fullscreen';
  });
})();
