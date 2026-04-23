(function () {
  'use strict';

  /* ─── LAYOUT DEFINITIONS ─────────────────────────────────────
   * Each entry: [primary, secondary?]
   * primary  = base character (shown bottom-left)
   * secondary = shift character (shown top-left), omit for single-label keys
   ──────────────────────────────────────────────────────────── */
  const LAYOUTS = {
    en: { name: 'English', keys: {
      Backquote:['`','~'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','^'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['[','{'], BracketRight:[']','}'], Backslash:['\\','|'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:[';',':'], Quote:["'",'"'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',','<'], Period:['.', '>'], Slash:['/','?'],
    }},
    de: { name: 'Deutsch', keys: {
      Backquote:['^','°'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','§'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:['ß','?'], Equal:['´','`'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Z'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['Ü'], BracketRight:['+','*'], Backslash:['#',"'"],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Ö'], Quote:['Ä'],
      KeyZ:['Y'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['-','_'],
    }},
    fr: { name: 'Français', keys: {
      Backquote:['²'], Digit1:['&','1'], Digit2:['é','2'], Digit3:['"','3'],
      Digit4:["'",'4'], Digit5:['(','5'], Digit6:['-','6'], Digit7:['è','7'],
      Digit8:['_','8'], Digit9:['ç','9'], Digit0:['à','0'], Minus:[')','°'], Equal:['=','+'],
      KeyQ:['A'], KeyW:['Z'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['^','¨'], BracketRight:['$','£'], Backslash:['*','µ'],
      KeyA:['Q'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['M'], Quote:['ù','%'],
      KeyZ:['W'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:[',','?'],
      Comma:[';','.'], Period:[':','/'], Slash:['!','§'],
    }},
    es: { name: 'Español', keys: {
      Backquote:['º','ª'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','·'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:["'",'?'], Equal:['¡','¿'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['`','^'], BracketRight:['+','*'], Backslash:['ç','Ç'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Ñ'], Quote:['´','¨'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['-','_'],
    }},
    it: { name: 'Italiano', keys: {
      Backquote:['\\','|'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','£'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:["'",'?'], Equal:['ì','^'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['è','é'], BracketRight:['+','*'], Backslash:['ù','§'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['ò','ç'], Quote:['à','°'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['-','_'],
    }},
    pt: { name: 'Português (BR)', keys: {
      Backquote:["'",'"'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','¨'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['´','`'], BracketRight:['[','{'], Backslash:[']','}'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Ç'], Quote:['~','^'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',','<'], Period:['.','>'], Slash:[';',':'],
    }},
    nl: { name: 'Nederlands', keys: {
      Backquote:['@','§'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','_'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0',"'"], Minus:['-','='], Equal:['´','~'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['¨','^'], BracketRight:['*','|'], Backslash:['<','>'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['+','±'], Quote:["'",'"'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['/','?'],
    }},
    sv: { name: 'Svenska', keys: {
      Backquote:['§','½'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','#'],
      Digit4:['4','¤'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:['+','?'], Equal:['´','`'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['Å'], BracketRight:['¨','^'], Backslash:["'",'*'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Ö'], Quote:['Ä'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['-','_'],
    }},
    no: { name: 'Norsk', keys: {
      Backquote:['|','§'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','#'],
      Digit4:['4','¤'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:['+','?'], Equal:['\\','`'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['Å'], BracketRight:['¨','^'], Backslash:["'",'*'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Ø'], Quote:['Æ'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['-','_'],
    }},
    da: { name: 'Dansk', keys: {
      Backquote:['½','§'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','#'],
      Digit4:['4','¤'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:['+','?'], Equal:['´','`'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['Å'], BracketRight:['¨','^'], Backslash:["'",'*'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Æ'], Quote:['Ø'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['-','_'],
    }},
    fi: { name: 'Suomi', keys: {
      Backquote:['§','½'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','#'],
      Digit4:['4','¤'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:['+','?'], Equal:['´','`'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['Å'], BracketRight:['¨','^'], Backslash:["'",'*'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Ö'], Quote:['Ä'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',',';'], Period:['.',':'], Slash:['-','_'],
    }},
    pl: { name: 'Polski', keys: {
      Backquote:['`','~'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','^'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E','Ę'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O','Ó'], KeyP:['P'],
      BracketLeft:['[','{'], BracketRight:[']','}'], Backslash:['\\','|'],
      KeyA:['A','Ą'], KeyS:['S','Ś'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L','Ł'],
      Semicolon:[';',':'], Quote:["'",'"'],
      KeyZ:['Z','Ż'], KeyX:['X','Ź'], KeyC:['C','Ć'], KeyV:['V'], KeyB:['B'], KeyN:['N','Ń'], KeyM:['M'],
      Comma:[',','<'], Period:['.','>'], Slash:['/','?'],
    }},
    cs: { name: 'Čeština', keys: {
      Backquote:[';','°'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:['%','+'], Equal:['´','˘'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Z'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['ú','/'], BracketRight:[')','\('], Backslash:['\\','|'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['ů','"'], Quote:['§','!'],
      KeyZ:['Y'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',','?'], Period:['.',':'], Slash:['-','_'],
    }},
    hu: { name: 'Magyar', keys: {
      Backquote:['0','§'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','+'],
      Digit4:['4','!'], Digit5:['5','%'], Digit6:['6','/'], Digit7:['7','='],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['ö','Ö'], Minus:['ü','Ü'], Equal:['ó','Ó'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Z'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['ő','Ő'], BracketRight:['ú','Ú'], Backslash:['\\','|'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['é','É'], Quote:['á','Á'],
      KeyZ:['Y'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',','?'], Period:['.',':'], Slash:['-','_'],
    }},
    tr: { name: 'Türkçe', keys: {
      Backquote:['"','é'], Digit1:['1','!'], Digit2:['2',"'"], Digit3:['3','^'],
      Digit4:['4','+'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7','/'],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0','='], Minus:['*','?'], Equal:['-','_'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['Ğ'], BracketRight:['Ü'], Backslash:['\\','|'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:['Ş'], Quote:['İ'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:['Ö'], Period:['Ç'], Slash:['.',':'],
    }},
    el: { name: 'Ελληνικά', keys: {
      Backquote:['`','~'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','^'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['ς'], KeyW:['ς'], KeyE:['ε'], KeyR:['ρ'], KeyT:['τ'],
      KeyY:['υ'], KeyU:['θ'], KeyI:['ι'], KeyO:['ο'], KeyP:['π'],
      BracketLeft:['[','{'], BracketRight:[']','}'], Backslash:['\\','|'],
      KeyA:['α'], KeyS:['σ'], KeyD:['δ'], KeyF:['φ'], KeyG:['γ'],
      KeyH:['η'], KeyJ:['ξ'], KeyK:['κ'], KeyL:['λ'],
      Semicolon:[';',':'], Quote:["'",'"'],
      KeyZ:['ζ'], KeyX:['χ'], KeyC:['ψ'], KeyV:['ω'], KeyB:['β'], KeyN:['ν'], KeyM:['μ'],
      Comma:[',','<'], Period:['.','>'], Slash:['/','?'],
    }},
    ru: { name: 'Русский', keys: {
      Backquote:['ё','Ё'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','№'],
      Digit4:['4',';'], Digit5:['5','%'], Digit6:['6',':'], Digit7:['7','?'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['й'], KeyW:['ц'], KeyE:['у'], KeyR:['к'], KeyT:['е'],
      KeyY:['н'], KeyU:['г'], KeyI:['ш'], KeyO:['щ'], KeyP:['з'],
      BracketLeft:['х'], BracketRight:['ъ'], Backslash:['\\','|'],
      KeyA:['ф'], KeyS:['ы'], KeyD:['в'], KeyF:['а'], KeyG:['п'],
      KeyH:['р'], KeyJ:['о'], KeyK:['л'], KeyL:['д'],
      Semicolon:['ж'], Quote:['э'],
      KeyZ:['я'], KeyX:['ч'], KeyC:['с'], KeyV:['м'], KeyB:['и'], KeyN:['т'], KeyM:['ь'],
      Comma:['б'], Period:['ю'], Slash:['.',','],
    }},
    uk: { name: 'Українська', keys: {
      Backquote:["'",'~'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','№'],
      Digit4:['4',';'], Digit5:['5','%'], Digit6:['6',':'], Digit7:['7','?'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['й'], KeyW:['ц'], KeyE:['у'], KeyR:['к'], KeyT:['е'],
      KeyY:['н'], KeyU:['г'], KeyI:['ш'], KeyO:['щ'], KeyP:['з'],
      BracketLeft:['х','Х'], BracketRight:['ї','Ї'], Backslash:['\\','|'],
      KeyA:['ф'], KeyS:['і'], KeyD:['в'], KeyF:['а'], KeyG:['п'],
      KeyH:['р'], KeyJ:['о'], KeyK:['л'], KeyL:['д'],
      Semicolon:['ж','Ж'], Quote:['є','Є'],
      KeyZ:['я'], KeyX:['ч'], KeyC:['с'], KeyV:['м'], KeyB:['и'], KeyN:['т'], KeyM:['ь'],
      Comma:['б','Б'], Period:['ю','Ю'], Slash:['.',','],
    }},
    he: { name: 'עברית', keys: {
      Backquote:['`','~'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','^'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9',')'], Digit0:['0','('], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['/',"'"], KeyW:["'",'W'], KeyE:['ק'], KeyR:['ר'], KeyT:['א'],
      KeyY:['ט'], KeyU:['ו'], KeyI:['ן'], KeyO:['ם'], KeyP:['פ'],
      BracketLeft:['[','{'], BracketRight:[']','}'], Backslash:['\\','|'],
      KeyA:['ש'], KeyS:['ד'], KeyD:['ג'], KeyF:['כ'], KeyG:['ע'],
      KeyH:['י'], KeyJ:['ח'], KeyK:['ל'], KeyL:['ך'],
      Semicolon:['פ',':'], Quote:[',','"'],
      KeyZ:['ז'], KeyX:['ס'], KeyC:['ב'], KeyV:['ה'], KeyB:['נ'], KeyN:['מ'], KeyM:['צ'],
      Comma:['ת','>'], Period:['ץ','<'], Slash:['.','/'],
    }},
    ar: { name: 'العربية', keys: {
      Backquote:['ذ','ّ'], Digit1:['١','!'], Digit2:['٢','@'], Digit3:['٣','#'],
      Digit4:['٤','$'], Digit5:['٥','%'], Digit6:['٦','^'], Digit7:['٧','&'],
      Digit8:['٨','*'], Digit9:['٩',')'], Digit0:['٠','('], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['ض'], KeyW:['ص'], KeyE:['ث'], KeyR:['ق'], KeyT:['ف'],
      KeyY:['غ'], KeyU:['ع'], KeyI:['ه'], KeyO:['خ'], KeyP:['ح'],
      BracketLeft:['ج'], BracketRight:['د'], Backslash:['\\','|'],
      KeyA:['ش'], KeyS:['س'], KeyD:['ي'], KeyF:['ب'], KeyG:['ل'],
      KeyH:['ا'], KeyJ:['ت'], KeyK:['ن'], KeyL:['م'],
      Semicolon:['ك'], Quote:['ط'],
      KeyZ:['ئ'], KeyX:['ء'], KeyC:['ؤ'], KeyV:['ر'], KeyB:['لا'], KeyN:['ى'], KeyM:['ة'],
      Comma:['و'], Period:['ز'], Slash:['ظ'],
    }},
    ja: { name: '日本語', keys: {
      Backquote:['半/全'], Digit1:['1','!'], Digit2:['2','"'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','&'], Digit7:['7',"'"],
      Digit8:['8','('], Digit9:['9',')'], Digit0:['0',''], Minus:['-','='], Equal:['^','~'],
      KeyQ:['た','タ'], KeyW:['て','テ'], KeyE:['い','イ'], KeyR:['す','ス'], KeyT:['か','カ'],
      KeyY:['ん','ン'], KeyU:['な','ナ'], KeyI:['に','ニ'], KeyO:['ら','ラ'], KeyP:['せ','セ'],
      BracketLeft:['゛','゜'], BracketRight:['む'], Backslash:['ろ'],
      KeyA:['ち','チ'], KeyS:['と','ト'], KeyD:['し','シ'], KeyF:['は','ハ'], KeyG:['き','キ'],
      KeyH:['く','ク'], KeyJ:['ま','マ'], KeyK:['の','ノ'], KeyL:['り','リ'],
      Semicolon:['れ','レ'], Quote:['け','ケ'],
      KeyZ:['つ','ツ'], KeyX:['さ','サ'], KeyC:['そ','ソ'], KeyV:['ひ','ヒ'], KeyB:['こ','コ'],
      KeyN:['み','ミ'], KeyM:['も','モ'],
      Comma:['ね','ネ'], Period:['る','ル'], Slash:['め','メ'],
    }},
    ko: { name: '한국어', keys: {
      Backquote:['`','~'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','^'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['ㅂ','ㅃ'], KeyW:['ㅈ','ㅉ'], KeyE:['ㄷ','ㄸ'], KeyR:['ㄱ','ㄲ'], KeyT:['ㅅ','ㅆ'],
      KeyY:['ㅛ'], KeyU:['ㅕ'], KeyI:['ㅑ'], KeyO:['ㅐ','ㅒ'], KeyP:['ㅔ','ㅖ'],
      BracketLeft:['[','{'], BracketRight:[']','}'], Backslash:['\\','|'],
      KeyA:['ㅁ'], KeyS:['ㄴ'], KeyD:['ㅇ'], KeyF:['ㄹ'], KeyG:['ㅎ'],
      KeyH:['ㅗ'], KeyJ:['ㅓ'], KeyK:['ㅏ'], KeyL:['ㅣ'],
      Semicolon:[';',':'], Quote:["'",'"'],
      KeyZ:['ㅋ'], KeyX:['ㅌ'], KeyC:['ㅊ'], KeyV:['ㅍ'], KeyB:['ㅠ'], KeyN:['ㅜ'], KeyM:['ㅡ'],
      Comma:[',','<'], Period:['.','>'], Slash:['/','?'],
    }},
    zh: { name: '中文 (拼音)', keys: {
      Backquote:['`','~'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','^'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['[','【'], BracketRight:[']','】'], Backslash:['\\','|'],
      KeyA:['A'], KeyS:['S'], KeyD:['D'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:[';',':'], Quote:["'",'"'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:['，','《'], Period:['。','》'], Slash:['/','？'],
    }},
    th: { name: 'ภาษาไทย', keys: {
      Backquote:['_','%'], Digit1:['ๅ','+'], Digit2:['/','๑'], Digit3:['-','๒'],
      Digit4:['ภ','๓'], Digit5:['ถ','๔'], Digit6:['ุ','ู'], Digit7:['ึ','฿'],
      Digit8:['ค','๕'], Digit9:['ต','๖'], Digit0:['จ','๗'], Minus:['ข','๘'], Equal:['ช','๙'],
      KeyQ:['ๆ','๐'], KeyW:['ไ','"'], KeyE:['ำ','ฎ'], KeyR:['พ','ฑ'], KeyT:['ะ','ธ'],
      KeyY:['ั','ํ'], KeyU:['ี','๊'], KeyI:['ร','ณ'], KeyO:['น','ฯ'], KeyP:['ย','ญ'],
      BracketLeft:['บ','ฐ'], BracketRight:['ล',''], Backslash:['ฃ','ฅ'],
      KeyA:['ฟ','ฤ'], KeyS:['ห','ฆ'], KeyD:['ก','ฏ'], KeyF:['ด','โ'], KeyG:['เ','ฌ'],
      KeyH:['้','็'], KeyJ:['่','ษ'], KeyK:['า','ศ'], KeyL:['ส','ซ'],
      Semicolon:['ว','ฉ'], Quote:['ง',''],
      KeyZ:['ผ','('], KeyX:['ป',')'], KeyC:['แ','ฉ'], KeyV:['อ','ฮ'], KeyB:['ิ','ฺ'],
      KeyN:['ื','์'], KeyM:['ท','?'],
      Comma:['ม','.'], Period:['ใ',','], Slash:['ฝ','ฦ'],
    }},
    vi: { name: 'Tiếng Việt', keys: {
      Backquote:['`','~'], Digit1:['1','!'], Digit2:['2','@'], Digit3:['3','#'],
      Digit4:['4','$'], Digit5:['5','%'], Digit6:['6','^'], Digit7:['7','&'],
      Digit8:['8','*'], Digit9:['9','('], Digit0:['0',')'], Minus:['-','_'], Equal:['=','+'],
      KeyQ:['Q'], KeyW:['W'], KeyE:['E'], KeyR:['R'], KeyT:['T'],
      KeyY:['Y'], KeyU:['U'], KeyI:['I'], KeyO:['O'], KeyP:['P'],
      BracketLeft:['[','{'], BracketRight:[']','}'], Backslash:['\\','|'],
      KeyA:['A'], KeyS:['S'], KeyD:['Đ','đ'], KeyF:['F'], KeyG:['G'],
      KeyH:['H'], KeyJ:['J'], KeyK:['K'], KeyL:['L'],
      Semicolon:[';',':'], Quote:["'",'"'],
      KeyZ:['Z'], KeyX:['X'], KeyC:['C'], KeyV:['V'], KeyB:['B'], KeyN:['N'], KeyM:['M'],
      Comma:[',','<'], Period:['.','>'], Slash:['/','?'],
    }},
  };

  const VARIABLE_CODES = new Set([
    'Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6',
    'Digit7','Digit8','Digit9','Digit0','Minus','Equal',
    'KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP',
    'BracketLeft','BracketRight','Backslash',
    'KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL',
    'Semicolon','Quote',
    'KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM',
    'Comma','Period','Slash',
  ]);

  /* ─── DOM REFS ────────────────────────────────────────────── */
  const allKeys       = document.querySelectorAll('.key');
  const lastKeyEl     = document.getElementById('last-key');
  const keyCountEl    = document.getElementById('key-count').querySelector('strong');
  const testedKeysEl  = document.getElementById('tested-keys');
  const resetBtn      = document.getElementById('resetBtn');
  const resetBtnBottom= document.getElementById('resetBtnBottom');
  const themeBtn      = document.getElementById('themeBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const langSelect    = document.getElementById('langSelect');

  /* ─── STATE ───────────────────────────────────────────────── */
  const testedKeys = new Map();   // code → display label
  const heldKeys   = new Set();

  // code → DOM element(s)
  const codeMap = {};
  allKeys.forEach(el => {
    const code = el.dataset.code;
    if (!code) return;
    if (!codeMap[code]) codeMap[code] = [];
    codeMap[code].push(el);
  });

  /* ─── LAYOUT RENDERING ────────────────────────────────────── */
  function renderLayout(langCode) {
    const layout = LAYOUTS[langCode] || LAYOUTS.en;
    document.querySelectorAll('.key[data-code]').forEach(keyEl => {
      const code = keyEl.dataset.code;
      if (!VARIABLE_CODES.has(code)) return;
      const def = layout.keys[code] || LAYOUTS.en.keys[code];
      if (!def) return;
      if (def.length === 1) {
        keyEl.innerHTML = `<span>${def[0]}</span>`;
      } else {
        keyEl.innerHTML =
          `<span class="top">${def[1]}</span><span class="bot">${def[0]}</span>`;
      }
    });
  }

  /* ─── KEY ACTIVATION ──────────────────────────────────────── */
  function activateKey(code, label) {
    const targets = codeMap[code];
    if (!targets) return;
    targets.forEach(el => el.classList.add('active'));

    if (!testedKeys.has(code)) {
      testedKeys.set(code, label);
      keyCountEl.textContent = testedKeys.size;
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.dataset.code = code;
      badge.textContent = label;
      testedKeysEl.appendChild(badge);
    }
    lastKeyEl.textContent = label;
  }

  /* ─── KEY EVENTS ──────────────────────────────────────────── */
  document.addEventListener('keydown', e => {
    e.preventDefault();
    const code = e.code;
    if (heldKeys.has(code)) return;
    heldKeys.add(code);
    activateKey(code, buildLabel(e));
  });

  document.addEventListener('keyup', e => {
    e.preventDefault();
    heldKeys.delete(e.code);
  });

  function buildLabel(e) {
    const parts = [];
    if (e.ctrlKey  && e.code !== 'ControlLeft' && e.code !== 'ControlRight') parts.push('Ctrl');
    if (e.altKey   && e.code !== 'AltLeft'     && e.code !== 'AltRight')     parts.push('Alt');
    if (e.shiftKey && e.code !== 'ShiftLeft'   && e.code !== 'ShiftRight')   parts.push('Shift');
    if (e.metaKey  && e.code !== 'MetaLeft'    && e.code !== 'MetaRight')    parts.push('Meta');
    parts.push(keyDisplayName(e.code, e.key));
    return parts.join('+');
  }

  function keyDisplayName(code, key) {
    const MAP = {
      Space:'Space', Enter:'Enter', NumpadEnter:'Num Enter',
      Backspace:'Backspace', Tab:'Tab', Escape:'Escape',
      CapsLock:'Caps Lock', NumLock:'Num Lock',
      ShiftLeft:'L.Shift', ShiftRight:'R.Shift',
      ControlLeft:'L.Ctrl', ControlRight:'R.Ctrl',
      AltLeft:'L.Alt', AltRight:'R.Alt',
      MetaLeft:'L.Win', MetaRight:'R.Win',
      ContextMenu:'Menu',
      ArrowUp:'↑', ArrowDown:'↓', ArrowLeft:'←', ArrowRight:'→',
      Insert:'Insert', Delete:'Delete', Home:'Home', End:'End',
      PageUp:'Page Up', PageDown:'Page Down',
      PrintScreen:'PrtSc', ScrollLock:'ScrLk', Pause:'Pause',
      NumpadDivide:'Num/', NumpadMultiply:'Num*',
      NumpadSubtract:'Num−', NumpadAdd:'Num+', NumpadDecimal:'Num.',
    };
    if (MAP[code]) return MAP[code];
    if (/^F\d+$/.test(code)) return code;
    if (code.startsWith('Numpad')) return 'Num' + code.slice(6);
    if (key && key.length === 1) return key.toUpperCase();
    return code;
  }

  /* ─── RESET ───────────────────────────────────────────────── */
  function doReset() {
    allKeys.forEach(k => k.classList.remove('active'));
    testedKeys.clear();
    heldKeys.clear();
    keyCountEl.textContent = '0';
    lastKeyEl.textContent = '— PRESS ANY KEY —';
    testedKeysEl.innerHTML = '';
  }

  resetBtn.addEventListener('click', doReset);
  resetBtnBottom.addEventListener('click', doReset);

  /* ─── LANGUAGE ────────────────────────────────────────────── */
  const savedLang = localStorage.getItem('kbt-lang') || 'en';
  langSelect.value = savedLang;
  renderLayout(savedLang);

  langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    localStorage.setItem('kbt-lang', lang);
    renderLayout(lang);
    doReset();
  });

  /* ─── THEME ───────────────────────────────────────────────── */
  if (localStorage.getItem('kbt-theme') === 'light') applyLight();

  themeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
      themeBtn.textContent = 'LIGHT';
      localStorage.setItem('kbt-theme', 'dark');
    } else {
      applyLight();
    }
  });

  function applyLight() {
    document.body.classList.add('light');
    themeBtn.textContent = 'DARK';
    localStorage.setItem('kbt-theme', 'light');
  }

  /* ─── FULLSCREEN ──────────────────────────────────────────── */
  fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      fullscreenBtn.textContent = 'EXIT';
    } else {
      document.exitFullscreen().catch(() => {});
      fullscreenBtn.textContent = 'FULL';
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) fullscreenBtn.textContent = 'FULL';
  });
})();
