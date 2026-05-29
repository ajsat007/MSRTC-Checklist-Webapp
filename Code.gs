/* === GLOBAL CONFIGURATION === */

var CONFIG = {
  APP_NAME:               'MSRTC Mechanized Cleaning Checklist',
  APP_TAGLINE:            'MSRTC Facility Management Platform',
  POWERED_BY:             'Smart Services',
  VERSION:                '14.0',
  SHIFT_CONTINUITY_HOURS: 24,
  SESSION_TIMEOUT_MIN:    30,
  MAX_REMARK_LENGTH:      300,
  PDF_FOLDER:             'MSRTC_Cleaning_Reports',
  LOG_SHEET:              'Audit_Log',
  CACHE_TTL_MS:           300000
};

var SHIFTS = [
  'पहिली पाळी(Shift)', 'दुसरी पाळी(Shift)', 'तिसरी पाळी(Shift)',
  'चौथी पाळी(Shift)',  'पाचवी पाळी(Shift)', 'सहावी पाळी(Shift)'
];

var CHECKLIST_SHEETS = {
  bs: 'Checklist_BusStation',
  bw: 'Checklist_BusWashing',
  gh: 'Checklist_DriverRoom',
  wr: 'Checklist_Washroom'
};

var CHECKLIST_TITLES = {
  bs: 'बसस्थानक स्वच्छता-दैनंदिन स्वच्छता तपासणी',
  bw: 'बसेस स्वच्छता-दैनंदिन स्वच्छता तपासणी',
  gh: 'विश्रांतीगृह स्वच्छता व सोयीसुविधा - दैनंदिन तपासणी',
  wr: 'बसस्थानक प्रसाधनगृह स्वच्छता-दैनंदिन स्वच्छता तपासणी'
};

var DANDATMAK = {
  bs: [
    'स्वच्छता समाधानकारक आहे किंवा नाही',
    'स्वच्छतेचे काम केलेले आहे किंवा नाही',
    'कर्मचारी उपस्थिती आहे किंवा नाही',
    'कर्मचारी गणवेशात आहे किंवा नाही',
    'पाणपोईद्वारे स्वच्छ पिण्याचे पाणी उपलब्ध आहे किंवा नाही',
    'रा प पर्यवेक्षक/अधिकारी यांनी दिलेल्या आदेशाचे पालन केले आहे किंवा नाही'
  ],
  bw: [
    'स्वच्छता समाधानकारक आहे किंवा नाही',
    'कर्मचारी अनुपस्थित आहे किंवा नाही',
    'कर्मचारी गणवेशात आहे किंवा नाही',
    'रा प पर्यवेक्षक/अधिकारी यांनी दिलेल्या आदेशाचे पालन केले आहे किंवा नाही'
  ],
  gh: [
    'स्वच्छता समाधानकारक आहे किंवा नाही',
    'स्वच्छतेचे काम केलेले आहे किंवा नाही',
    'कर्मचारी अनुपस्थित आहे किंवा नाही',
    'कर्मचारी गणवेशात आहे किंवा नाही',
    'स्वच्छ पिण्याचे पाणी उपलब्ध आहे किंवा नाही',
    'रा प पर्यवेक्षक/अधिकारी यांनी दिलेल्या आदेशाचे पालन केले आहे किंवा नाही'
  ],
  wr: [
    'स्वच्छता समाधानकारक आहे किंवा नाही',
    'स्वच्छतेचे काम केलेले आहे किंवा नाही',
    'कर्मचारी अनुपस्थित आहे किंवा नाही',
    'कर्मचारी गणवेशात आहे किंवा नाही',
    'रा प पर्यवेक्षक/अधिकारी यांनी दिलेल्या आदेशाचे पालन केले आहे किंवा नाही'
  ]
};

var FALLBACK_QUESTIONS = {
  bs: [
    'झाडणे, पुसणे',
    'वाहतूक नियंत्रण कक्ष, बसस्थानक प्रमुख कक्ष व इतर कक्ष स्वच्छता',
    'फलाट स्वच्छता',
    'मोकळी जागेची स्वच्छता',
    'कचऱ्याची विल्हेवाट'
  ],
  bw: [
    'बस झाडून व धुऊन स्वच्छ करण्यात आली आहे का?',
    'बसच्या खिडक्यांच्या काचा स्वच्छ पुसण्यात आल्या आहेत का?',
    'बसवरील अनधिकृत स्टिकर व पोस्टर काढण्यात आले आहेत का?',
    'चालक केबिन स्वच्छ करण्यात आली आहे का?',
    'सामान कप्प्याची स्वच्छता करण्यात आली आहे का?',
    'समोरील मोठी काच व आरसे स्वच्छ करण्यात आले आहेत का?'
  ],
  gh: [
    'झाडणे, पुसणे व कचऱ्याची विल्हेवाट',
    'विश्रांतीगृहातील स्वच्छतागृहाची स्वच्छता',
    'विश्रांतीगृहामध्ये गरम पाणी उपलब्ध आहे/नाही',
    'विश्रांतीगृहामध्ये पिण्याचे पाणी उपलब्ध आहे/नाही'
  ],
  wr: [
    'शौचालय, स्नानगृह व मुतारी यांची स्वच्छता',
    'वॉश बेसिन, दरवाजे, खिडक्या, आरसे यांची स्वच्छता',
    'प्रसाधनगृहातील कचऱ्याची विल्हेवाट'
  ]
};

var SIG_LABELS = {
  bs: { left: 'सेवा पुरवठादाराचे पर्यवेक्षक सही', right: 'स्थानक प्रमुख' },
  bw: { left: 'सेवा पुरवठादाराचे पर्यवेक्षक सही', right: 'वाहन परीक्षक/पाळी प्रमुख / स का अ सही' },
  gh: { left: 'सेवा पुरवठादाराचे पर्यवेक्षक सही', right: 'स वा नि / स्थानक प्रमुख' },
  wr: { left: 'सेवा पुरवठादाराचे पर्यवेक्षक सही', right: 'वाहतूक नियंत्रक / स्थानक प्रमुख' }
};

var STATUS = {
  IN_PROCESS: 'In Process',
  PAUSED:     'Paused',
  COMPLETED:  'Completed'
};

var LOG_ACTIONS = {
  SESSION_CREATE:    'SESSION_CREATE',
  SESSION_RESUME:    'SESSION_RESUME',
  SHIFT_SAVE:        'SHIFT_SAVE',
  BUS_SAVE:          'BUS_SAVE',
  FINALIZE:          'FINALIZE',
  PDF_GENERATE:      'PDF_GENERATE',
  ERROR:             'ERROR',
  DUPLICATE_BLOCKED: 'DUPLICATE_BLOCKED'
};


/* === SERVER-SIDE CACHE === */

var _CACHE = {
  districtData:       null,
  employeeData:       null,
  checklistQuestions: null,
  lastFetch:          0
};


/* === WEB APP ENTRY === */

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle(CONFIG.APP_NAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getAppUrl() {
  try { return ScriptApp.getService().getUrl(); }
  catch (e) { return ''; }
}


/* === AUDIT LOGGING === */

function logAction(action, sessionId, details) {
  try {
    var sh = _getOrCreateSheet(CONFIG.LOG_SHEET, [
      'Timestamp', 'Action', 'Session ID', 'Details', 'User Email'
    ]);
    sh.appendRow([
      Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss'),
      action || '',
      sessionId || '',
      typeof details === 'object' ? JSON.stringify(details) : String(details || ''),
      Session.getActiveUser().getEmail() || 'anonymous'
    ]);
  } catch (e) {
    Logger.log('Logger failed: ' + e);
  }
}


/* === TOKEN & SESSION ID GENERATORS === */

function getNextTokenId(district, station) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var props      = PropertiesService.getScriptProperties();
    var distClean  = _sanitizeForToken(district || 'NA');
    var stnClean   = _sanitizeForToken(station  || 'NA');
    var counterKey = 'TOKEN_CTR_' + distClean + '_' + stnClean;
    var n          = parseInt(props.getProperty(counterKey) || '0') + 1;
    props.setProperty(counterKey, String(n));
    var dateStr = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'ddMMyyyy');
    var seq     = ('0000' + n).slice(-4);
    return 'MSRTC-' + distClean + '-' + stnClean + '-' + seq + '-' + dateStr;
  } finally {
    lock.releaseLock();
  }
}

function _sanitizeForToken(text) {
  if (!text) return 'NA';
  var s = String(text).trim();
  // Remove all non-ASCII and special chars, keep alphanumeric only
  s = s.replace(/[^A-Za-z0-9]/g, '');
  if (!s) s = 'NA';
  if (s.length > 12) s = s.substring(0, 12);
  return s;
}

function getNextSessionId() {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var props = PropertiesService.getScriptProperties();
    var n     = parseInt(props.getProperty('SESSION_COUNTER') || '0') + 1;
    props.setProperty('SESSION_COUNTER', String(n));
    return 'SES-' + Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyyMMddHHmmss') +
           '-' + ('000' + n).slice(-3);
  } finally {
    lock.releaseLock();
  }
}


/* === INPUT SANITIZATION & VALIDATION === */

function _sanitizeInput(str) {
  if (!str) return '';
  return String(str).trim().replace(/[<>]/g, '');
}

function _validatePayload(payload, requiredFields) {
  if (!payload) return { ok: false, msg: 'Empty payload.' };
  for (var i = 0; i < requiredFields.length; i++) {
    if (!payload[requiredFields[i]]) {
      return { ok: false, msg: 'Missing field: ' + requiredFields[i] };
    }
  }
  return { ok: true };
}


/* === MASTER DATA === */

function getDistrictData() {
  try {
    var now = new Date().getTime();
    if (_CACHE.districtData && (now - _CACHE.lastFetch) < CONFIG.CACHE_TTL_MS) {
      return _CACHE.districtData;
    }
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DistrictBusStation');
    if (!sheet) return {};
    var rows = sheet.getDataRange().getValues();
    var map  = {};
    for (var i = 1; i < rows.length; i++) {
      var d = String(rows[i][0] || '').trim();
      var s = String(rows[i][1] || '').trim();
      if (!d || !s) continue;
      if (!map[d]) map[d] = [];
      if (map[d].indexOf(s) === -1) map[d].push(s);
    }
    _CACHE.districtData = map;
    _CACHE.lastFetch = now;
    return map;
  } catch (e) {
    Logger.log('getDistrictData: ' + e);
    return {};
  }
}

function getQuestionsFromSheet(sheetName) {
  try {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    if (!sh) return [];
    var rows = sh.getDataRange().getValues();
    var out  = [];
    for (var i = 1; i < rows.length; i++) {
      var q = String(rows[i][0] || '').trim();
      if (q) out.push(q);
    }
    return out;
  } catch (e) {
    return [];
  }
}

function getChecklistQuestions() {
  try {
    var now = new Date().getTime();
    if (_CACHE.checklistQuestions && (now - _CACHE.lastFetch) < CONFIG.CACHE_TTL_MS) {
      return _CACHE.checklistQuestions;
    }
    var result = {};
    Object.keys(CHECKLIST_SHEETS).forEach(function (k) {
      var qs   = getQuestionsFromSheet(CHECKLIST_SHEETS[k]);
      result[k] = qs.length > 0 ? qs : (FALLBACK_QUESTIONS[k] || []);
    });
    _CACHE.checklistQuestions = result;
    _CACHE.lastFetch = now;
    return result;
  } catch (e) {
    Logger.log('getChecklistQuestions: ' + e);
    return FALLBACK_QUESTIONS;
  }
}

function getEmployeeMaster() {
  try {
    var now = new Date().getTime();
    if (_CACHE.employeeData && (now - _CACHE.lastFetch) < CONFIG.CACHE_TTL_MS) {
      return _CACHE.employeeData;
    }
    var ss    = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Employee_Master');
    if (!sheet) {
      sheet = ss.insertSheet('Employee_Master');
      sheet.getRange(1, 1, 1, 2)
        .setValues([['Employee ID', 'Supervisor Name']])
        .setBackground('#002B6B').setFontColor('#FFC400').setFontWeight('bold');
      sheet.getRange(2, 1, 3, 2).setValues([
        ['1001', 'राजेश पाटील'],
        ['2568', 'सुनीता देशमुख'],
        ['9875', 'अजय शिंदे']
      ]);
    }
    var rows = sheet.getDataRange().getValues();
    var list = [];
    for (var i = 1; i < rows.length; i++) {
      var id   = String(rows[i][0] || '').trim();
      var name = String(rows[i][1] || '').trim();
      if (id && name) list.push({ id: id, name: name });
    }
    _CACHE.employeeData = list;
    _CACHE.lastFetch = now;
    return list;
  } catch (e) {
    Logger.log('getEmployeeMaster: ' + e);
    return [];
  }
}

function validateEmployee(empId, empName) {
  try {
    if (!empId || !empName) {
      return JSON.stringify({ ok: false, msg: 'कर्मचारी आयडी आणि नाव आवश्यक.' });
    }
    if (!/^\d+$/.test(String(empId).trim())) {
      return JSON.stringify({ ok: false, msg: '❌ कर्मचारी आयडी फक्त संख्या असावा (उदा: 1001).' });
    }
    var employees = getEmployeeMaster();
    var idClean   = String(empId).trim();
    var nameClean = String(empName).trim();
    var byId      = employees.filter(function (e) { return e.id === idClean; });
    if (byId.length === 0) {
      return JSON.stringify({ ok: false, msg: '❌ कर्मचारी आयडी "' + empId + '" डेटाबेसमध्ये आढळला नाही.' });
    }
    if (byId[0].name !== nameClean) {
      return JSON.stringify({ ok: false, msg: '❌ नाव जुळत नाही! आयडी "' + empId + '" साठी: ' + byId[0].name });
    }
    return JSON.stringify({ ok: true, employee: byId[0], msg: '✅ प्रमाणित.' });
  } catch (e) {
    Logger.log('validateEmployee: ' + e);
    return JSON.stringify({ ok: false, msg: 'त्रुटी: ' + e.toString() });
  }
}


/* === SHEET ARCHITECTURE === */

function getSessionsSheet() {
  return _getOrCreateSheet('Inspection_Sessions', [
    'Session ID', 'Token ID', 'District', 'Station',
    'Supervisor Name', 'Employee ID', 'Checklist Type', 'Checklist Key',
    'Created Time', 'Last Updated', 'Completed Shifts',
    'Total Buses', 'Status', 'PDF URL'
  ]);
}

function getShiftResponsesSheet() {
  return _getOrCreateSheet('Shift_Responses', [
    'Session ID', 'Token ID', 'District', 'Station',
    'Supervisor Name', 'Employee ID', 'Checklist Type', 'Shift Name',
    'Question', 'Answer', 'Remark', 'Timestamp'
  ]);
}

function getBusResponsesSheet() {
  return _getOrCreateSheet('Bus_Responses', [
    'Session ID', 'Token ID', 'District', 'Station',
    'Supervisor Name', 'Employee ID', 'Checklist Type', 'Bus Number',
    'Question', 'Answer', 'Remark', 'Timestamp'
  ]);
}

function getDraftSheet() {
  return _getOrCreateSheet('Draft_Sessions', [
    'Session ID', 'Draft JSON', 'Last Updated'
  ]);
}

function _getOrCreateSheet(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, headers.length)
      .setValues([headers])
      .setBackground('#002B6B')
      .setFontColor('#FFC400')
      .setFontWeight('bold')
      .setHorizontalAlignment('center');
    sh.setFrozenRows(1);
    sh.setRowHeight(1, 32);
  } else {
    // Ensure headers are correct without full rewrite
    var existingHeaders = sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), 1)).getValues()[0];
    var changed = false;
    headers.forEach(function (h, idx) {
      if (existingHeaders[idx] !== h) {
        sh.getRange(1, idx + 1).setValue(h);
        changed = true;
      }
    });
    if (changed) {
      sh.getRange(1, 1, 1, headers.length)
        .setBackground('#002B6B').setFontColor('#FFC400').setFontWeight('bold');
    }
  }
  return sh;
}


/* === DRAFT / RESUME === */

function saveDraft(sessionId, draftObj) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(8000);
    try {
      var sh   = getDraftSheet();
      var data = sh.getDataRange().getValues();
      var json = JSON.stringify(draftObj);
      var now  = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
      for (var i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(sessionId)) {
          sh.getRange(i + 1, 2, 1, 2).setValues([[json, now]]);
          return JSON.stringify({ ok: true });
        }
      }
      sh.appendRow([sessionId, json, now]);
      return JSON.stringify({ ok: true });
    } finally {
      lock.releaseLock();
    }
  } catch (e) {
    Logger.log('saveDraft: ' + e);
    return JSON.stringify({ ok: false, msg: e.toString() });
  }
}

function loadDraft(sessionId) {
  try {
    var sh   = getDraftSheet();
    var data = sh.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(sessionId)) {
        return JSON.stringify({ ok: true, draft: JSON.parse(String(data[i][1])) });
      }
    }
    return JSON.stringify({ ok: false });
  } catch (e) {
    return JSON.stringify({ ok: false, msg: e.toString() });
  }
}

function deleteDraft(sessionId) {
  try {
    var sh   = getDraftSheet();
    var data = sh.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(sessionId)) {
        sh.deleteRow(i + 1);
        return;
      }
    }
  } catch (e) {
    Logger.log('deleteDraft: ' + e);
  }
}


/* === DATE PARSING UTILITY === */

// FIX: Handle both string "dd/MM/yyyy HH:mm:ss" and native Date objects
function _parseISTDateString(s) {
  try {
    if (!s) return null;
    // If already a Date object
    if (s instanceof Date) return s.getTime();
    var str   = String(s).trim();
    var parts = str.split(' ');
    if (parts.length < 2) return null;
    var dParts = parts[0].split('/');
    var tParts = parts[1].split(':');
    if (dParts.length !== 3 || tParts.length !== 3) return null;
    var d = new Date(
      parseInt(dParts[2]), parseInt(dParts[1]) - 1, parseInt(dParts[0]),
      parseInt(tParts[0]), parseInt(tParts[1]), parseInt(tParts[2])
    );
    if (isNaN(d.getTime())) return null;
    return d.getTime();
  } catch (e) {
    return null;
  }
}


/* === SHIFT CONTINUITY (24-HOUR RULE) === */

function findContinuationSession(station, checklistKey) {
  try {
    if (!station || !checklistKey) return null;
    // BW checklist: no shift continuity (each submission is standalone)
    if (checklistKey === 'bw') return null;

    var sessionsSheet = getSessionsSheet();
    var data          = sessionsSheet.getDataRange().getValues();
    if (data.length < 2) return null;

    var headers = data[0];
    var colIdx  = {};
    headers.forEach(function (h, i) { colIdx[h] = i; });

    var stationClean = String(station).trim();
    var keyClean     = String(checklistKey).trim();
    var now          = new Date();
    var cutoffMs     = now.getTime() - (CONFIG.SHIFT_CONTINUITY_HOURS * 60 * 60 * 1000);

    var bestMatch = null;
    var bestMs    = 0;

    for (var i = 1; i < data.length; i++) {
      var row     = data[i];
      var rowStn  = String(row[colIdx['Station']] || '').trim();
      var rowKey  = String(row[colIdx['Checklist Key']] || '').trim();
      var rowDone = parseInt(row[colIdx['Completed Shifts']] || 0);
      var status  = String(row[colIdx['Status']] || '').trim();
      var created = row[colIdx['Created Time']];

      if (rowStn !== stationClean) continue;
      if (rowKey !== keyClean) continue;
      if (rowDone >= SHIFTS.length) continue;
      if (status === STATUS.COMPLETED) continue;

      var createdMs = _parseISTDateString(created);
      if (!createdMs) continue;
      if (createdMs < cutoffMs) continue;

      if (createdMs > bestMs) {
        bestMs = createdMs;
        bestMatch = {
          sessionId:       String(row[colIdx['Session ID']]),
          tokenId:         String(row[colIdx['Token ID']]),
          dist:            String(row[colIdx['District']]),
          stn:             rowStn,
          name:            String(row[colIdx['Supervisor Name']]),
          id:              String(row[colIdx['Employee ID']]),
          checklist:       String(row[colIdx['Checklist Type']]),
          checklistKey:    rowKey,
          completedShifts: rowDone,
          status:          status,
          createdMs:       createdMs
        };
      }
    }
    return bestMatch;
  } catch (e) {
    Logger.log('[CONTINUITY] ERROR: ' + e);
    return null;
  }
}

function loadPreviousShifts(sessionId) {
  try {
    var sh   = getShiftResponsesSheet();
    var data = sh.getDataRange().getValues();
    if (data.length < 2) return [];

    var headers = data[0];
    var colIdx  = {};
    headers.forEach(function (h, i) { colIdx[h] = i; });

    var byShift = {};

    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      if (String(row[colIdx['Session ID']]) !== String(sessionId)) continue;
      // FIX: trim shiftName to prevent whitespace mismatch
      var shName = String(row[colIdx['Shift Name']]).trim();
      var q      = String(row[colIdx['Question']]);
      var a      = String(row[colIdx['Answer']]);
      var r      = String(row[colIdx['Remark']] || '');
      if (!byShift[shName]) {
        byShift[shName] = { shiftName: shName, questions: [], answers: {}, remarks: {} };
      }
      if (byShift[shName].questions.indexOf(q) === -1) byShift[shName].questions.push(q);
      byShift[shName].answers[q] = a;
      if (r) byShift[shName].remarks[q] = r;
    }

    var result = [];
    SHIFTS.forEach(function (s) {
      if (byShift[s]) result.push(byShift[s]);
    });
    return result;
  } catch (e) {
    Logger.log('loadPreviousShifts ERROR: ' + e);
    return [];
  }
}


/* === SESSION MANAGEMENT === */

// FIX: BW sessions now correctly checked — completed BW sessions block duplicates
function checkForDuplicateSubmission(district, station, supervisorId, checklistKey) {
  try {
    var sh = getSessionsSheet();
    var data = sh.getDataRange().getValues();
    if (data.length < 2) return { isDuplicate: false };

    var headers = data[0];
    var colMap  = {};
    headers.forEach(function (header, index) { colMap[header] = index; });

    var now        = new Date();
    var cutoffTime = new Date(now.getTime() - (CONFIG.SHIFT_CONTINUITY_HOURS * 60 * 60 * 1000));
    var isBW       = (String(checklistKey).trim() === 'bw');

    var normDistrict    = String(district    || '').trim();
    var normStation     = String(station     || '').trim();
    var normSupervisorId = String(supervisorId || '').trim();
    var normChecklistKey = String(checklistKey || '').trim();

    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var rowDistrict     = String(row[colMap['District']]      || '').trim();
      var rowStation      = String(row[colMap['Station']]       || '').trim();
      var rowSupervisorId = String(row[colMap['Employee ID']]   || '').trim();
      var rowChecklistKey = String(row[colMap['Checklist Key']] || '').trim();
      var rowCreatedTime  = row[colMap['Created Time']];
      var rowStatus       = String(row[colMap['Status']]        || '').trim();
      var rowCompletedShifts = parseInt(row[colMap['Completed Shifts']] || 0);
      var rowTotalBuses   = parseInt(row[colMap['Total Buses']]  || 0);

      if (rowDistrict     !== normDistrict)     continue;
      if (rowStation      !== normStation)      continue;
      if (rowSupervisorId !== normSupervisorId) continue;
      if (rowChecklistKey !== normChecklistKey) continue;

      var createdDate = _parseISTDateString(rowCreatedTime);
      if (!createdDate || createdDate < cutoffTime.getTime()) continue;

      // For BW: block if status is Completed OR has buses recorded
      // For shift checklists: block if Completed OR >= 5 shifts done
      var shouldBlock = false;
      if (isBW) {
        shouldBlock = (rowStatus === STATUS.COMPLETED || rowTotalBuses > 0);
      } else {
        shouldBlock = (rowStatus === STATUS.COMPLETED || rowCompletedShifts >= 5);
      }

      if (shouldBlock) {
        return {
          isDuplicate: true,
          existingSession: {
            sessionId:       String(row[colMap['Session ID']] || ''),
            tokenId:         String(row[colMap['Token ID']]   || ''),
            createdTime:     rowCreatedTime,
            status:          rowStatus,
            completedShifts: rowCompletedShifts,
            totalBuses:      rowTotalBuses
          }
        };
      }
    }
    return { isDuplicate: false };
  } catch (e) {
    Logger.log('Duplicate check error: ' + e.toString());
    return { isDuplicate: false, error: e.toString() };
  }
}

function createSession(payload) {
  try {
    var v = _validatePayload(payload, ['dist', 'stn', 'name', 'id']);
    if (!v.ok) return JSON.stringify({ ok: false, msg: 'अपूर्ण माहिती.' });

    var validation = JSON.parse(validateEmployee(payload.id, payload.name));
    if (!validation.ok) {
      return JSON.stringify({ ok: false, msg: validation.msg });
    }

    Logger.log('[SESSION] Request: stn=' + payload.stn + ' key=' + payload.checklistKey);

    var duplicateCheck = checkForDuplicateSubmission(
      payload.dist, payload.stn, payload.id, payload.checklistKey
    );

    if (duplicateCheck.isDuplicate) {
      var existing = duplicateCheck.existingSession;
      logAction(LOG_ACTIONS.DUPLICATE_BLOCKED, existing.sessionId || '', {
        attemptedBy: { district: payload.dist, station: payload.stn,
                       supervisorId: payload.id, supervisorName: payload.name,
                       checklistKey: payload.checklistKey },
        existingSession: existing
      });
      return JSON.stringify({
        ok: false, blocked: true,
        msg: '❌ डुप्लिकेट नोंद!\n\nआपण याच बसस्थानकासाठी आणि याच चेकलिस्ट प्रकारासाठी\nअलीकडे एक नोंद केली आहे.\n\nसत्र ID: ' +
             (existing.sessionId || 'N/A') + '\nतारीख: ' + (existing.createdTime || 'N/A') +
             '\n\nकृपया नवीन नोंद करण्यापूर्वी मागील अहवाल पहा.',
        existingSession: existing
      });
    }

    // 24-hour continuity check (shift checklists only)
    var cont = findContinuationSession(payload.stn, payload.checklistKey);

    if (cont) {
      var prevShifts = loadPreviousShifts(cont.sessionId);
      _updateSessionStatus(cont.sessionId, STATUS.IN_PROCESS);
      var nextShiftIdx  = prevShifts.length;
      var nextShiftName = nextShiftIdx < SHIFTS.length ? SHIFTS[nextShiftIdx] : 'सर्व पूर्ण';

      logAction(LOG_ACTIONS.SESSION_RESUME, cont.sessionId, {
        nextShift: nextShiftName, done: nextShiftIdx
      });

      return JSON.stringify({
        ok: true,
        sessionId:       cont.sessionId,
        tokenId:         cont.tokenId,
        continuation:    true,
        completedShifts: prevShifts,
        currentShiftIdx: nextShiftIdx,
        nextShiftName:   nextShiftName,
        msg: '🔄 मागील सत्र चालू ठेवले आहे.\nपुढील पाळी(Shift): ' + nextShiftName +
             '\n(पूर्ण: ' + nextShiftIdx + '/6)'
      });
    }

    // New session
    var sessionId = getNextSessionId();
    var tokenId   = getNextTokenId(payload.dist, payload.stn);
    var now       = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');

    getSessionsSheet().appendRow([
      sessionId, tokenId,
      _sanitizeInput(payload.dist), _sanitizeInput(payload.stn),
      _sanitizeInput(payload.name), _sanitizeInput(payload.id),
      _sanitizeInput(payload.checklist || ''),
      _sanitizeInput(payload.checklistKey || ''),
      now, now, 0, 0, STATUS.IN_PROCESS, ''
    ]);

    var draft = {
      sessionId: sessionId, tokenId: tokenId,
      dist: payload.dist, stn: payload.stn,
      name: payload.name, id: payload.id,
      date: payload.date || '',
      checklistKey: payload.checklistKey || '',
      checklist:    payload.checklist    || '',
      completedShifts: [], completedBuses: [],
      currentShiftIdx: 0, status: STATUS.IN_PROCESS,
      createdAt: now
    };
    saveDraft(sessionId, draft);

    logAction(LOG_ACTIONS.SESSION_CREATE, sessionId, {
      station: payload.stn, checklist: payload.checklistKey
    });

    return JSON.stringify({
      ok: true, sessionId: sessionId, tokenId: tokenId,
      continuation: false, currentShiftIdx: 0,
      nextShiftName: SHIFTS[0]
    });
  } catch (e) {
    Logger.log('[SESSION] ERROR: ' + e);
    logAction(LOG_ACTIONS.ERROR, '', { source: 'createSession', error: e.toString() });
    return JSON.stringify({ ok: false, msg: e.toString() });
  }
}

function _updateSessionStatus(sessionId, status) {
  try {
    var sh      = getSessionsSheet();
    var data    = sh.getDataRange().getValues();
    var headers = data[0];
    var statusCol  = headers.indexOf('Status') + 1;
    var updatedCol = headers.indexOf('Last Updated') + 1;
    var now = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(sessionId)) {
        if (statusCol  > 0) sh.getRange(i + 1, statusCol).setValue(status);
        if (updatedCol > 0) sh.getRange(i + 1, updatedCol).setValue(now);
        return;
      }
    }
  } catch (e) {
    Logger.log('_updateSessionStatus: ' + e);
  }
}

function _updateSessionRecord(sessionId, completedShifts, completedBuses, pdfUrl, status) {
  try {
    var sh      = getSessionsSheet();
    var data    = sh.getDataRange().getValues();
    var headers = data[0];
    var colIdx  = {};
    headers.forEach(function (h, i) { colIdx[h] = i + 1; });
    var now = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(sessionId)) {
        if (colIdx['Last Updated'])
          sh.getRange(i + 1, colIdx['Last Updated']).setValue(now);
        if (completedShifts !== null && completedShifts !== undefined && colIdx['Completed Shifts'])
          sh.getRange(i + 1, colIdx['Completed Shifts']).setValue(completedShifts);
        if (completedBuses !== null && completedBuses !== undefined && colIdx['Total Buses'])
          sh.getRange(i + 1, colIdx['Total Buses']).setValue(completedBuses);
        if (status && colIdx['Status'])
          sh.getRange(i + 1, colIdx['Status']).setValue(status);
        if (pdfUrl && colIdx['PDF URL'])
          sh.getRange(i + 1, colIdx['PDF URL']).setValue(pdfUrl);
        return;
      }
    }
  } catch (e) {
    Logger.log('_updateSessionRecord: ' + e);
  }
}

function markSessionsAsPaused() {
  try {
    var sh      = getSessionsSheet();
    var data    = sh.getDataRange().getValues();
    var headers = data[0];
    var statusCol    = headers.indexOf('Status') + 1;
    var updatedColIdx = headers.indexOf('Last Updated');
    if (statusCol === 0) return;
    var now      = new Date();
    var cutoffMs = now.getTime() - (CONFIG.SESSION_TIMEOUT_MIN * 60 * 1000);

    for (var i = 1; i < data.length; i++) {
      var status = String(data[i][statusCol - 1]);
      if (status !== STATUS.IN_PROCESS) continue;
      var lastUpdated = _parseISTDateString(data[i][updatedColIdx]);
      if (lastUpdated && lastUpdated < cutoffMs) {
        sh.getRange(i + 1, statusCol).setValue(STATUS.PAUSED);
      }
    }
  } catch (e) {
    Logger.log('markSessionsAsPaused: ' + e);
  }
}


/* === BATCH WRITE FOR PERFORMANCE === */

// FIX: Removed lock.hasLock() — not available in V8. Use try/finally only.
function batchWriteToSheet(sheet, rows, batchSize) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var totalRows = rows.length;
    batchSize = batchSize || 50;
    for (var i = 0; i < totalRows; i += batchSize) {
      var batch    = rows.slice(i, Math.min(i + batchSize, totalRows));
      var startRow = sheet.getLastRow() + 1;
      sheet.getRange(startRow, 1, batch.length, batch[0].length).setValues(batch);
    }
    return { ok: true, processed: totalRows };
  } catch (e) {
    Logger.log('Batch write error: ' + e.toString());
    return { ok: false, error: e.toString() };
  } finally {
    lock.releaseLock();
  }
}


/* === SHIFT SAVE === */

function saveShift(payload) {
  try {
    var v = _validatePayload(payload, ['sessionId', 'shiftName', 'answers']);
    if (!v.ok) return JSON.stringify({ ok: false, msg: 'अपूर्ण डेटा.' });

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var sh      = getShiftResponsesSheet();
      var data    = sh.getDataRange().getValues();
      var headers = data[0];
      var sessionCol = headers.indexOf('Session ID');
      var shiftCol   = headers.indexOf('Shift Name');

      // Duplicate shift guard
      for (var i = 1; i < data.length; i++) {
        if (String(data[i][sessionCol]).trim() === String(payload.sessionId) &&
            String(data[i][shiftCol]).trim()   === String(payload.shiftName).trim()) {
          return JSON.stringify({ ok: false, msg: payload.shiftName + ' आधीच नोंदवली आहे.' });
        }
      }

      var now     = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
      var rows    = [];
      var qs      = Object.keys(payload.answers);
      var remarks = payload.remarks || {};
      qs.forEach(function (q) {
        rows.push([
          payload.sessionId, payload.tokenId || '',
          _sanitizeInput(payload.dist || ''), _sanitizeInput(payload.stn || ''),
          _sanitizeInput(payload.name || ''), _sanitizeInput(payload.id || ''),
          _sanitizeInput(payload.checklist || ''),
          payload.shiftName, q, payload.answers[q],
          _sanitizeInput(remarks[q] || ''), now
        ]);
      });

      if (rows.length > 0) {
        var result = batchWriteToSheet(sh, rows);
        if (!result.ok) throw new Error(result.error);
      }

      _updateSessionRecord(
        payload.sessionId,
        (payload.completedShifts || []).length,
        null, '', STATUS.IN_PROCESS
      );
      if (payload.draftState) saveDraft(payload.sessionId, payload.draftState);

      logAction(LOG_ACTIONS.SHIFT_SAVE, payload.sessionId, {
        shift: payload.shiftName, count: rows.length
      });

      return JSON.stringify({ ok: true, msg: 'पाळी(Shift) जतन झाली.' });
    } finally {
      lock.releaseLock();
    }
  } catch (e) {
    Logger.log('saveShift: ' + e);
    logAction(LOG_ACTIONS.ERROR, payload.sessionId || '', { source: 'saveShift', error: e.toString() });
    return JSON.stringify({ ok: false, msg: e.toString() });
  }
}


/* === BUS SAVE === */

function saveBus(payload) {
  try {
    var v = _validatePayload(payload, ['sessionId', 'busNumber', 'answers']);
    if (!v.ok) return JSON.stringify({ ok: false, msg: 'अपूर्ण बस डेटा.' });

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var sh      = getBusResponsesSheet();
      var data    = sh.getDataRange().getValues();
      var headers = data[0];
      var sessionCol = headers.indexOf('Session ID');
      var busCol     = headers.indexOf('Bus Number');
      var bnUp = String(payload.busNumber).toUpperCase();

      // Duplicate bus guard
      for (var i = 1; i < data.length; i++) {
        if (String(data[i][sessionCol]) === String(payload.sessionId) &&
            String(data[i][busCol]).toUpperCase() === bnUp) {
          return JSON.stringify({ ok: false, msg: 'बस क्रमांक ' + bnUp + ' आधीच नोंदवला आहे.' });
        }
      }

      var now     = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
      var rows    = [];
      var qs      = Object.keys(payload.answers);
      var remarks = payload.remarks || {};
      qs.forEach(function (q) {
        rows.push([
          payload.sessionId, payload.tokenId || '',
          _sanitizeInput(payload.dist || ''), _sanitizeInput(payload.stn || ''),
          _sanitizeInput(payload.name || ''), _sanitizeInput(payload.id || ''),
          _sanitizeInput(payload.checklist || ''),
          bnUp, q, payload.answers[q],
          _sanitizeInput(remarks[q] || ''), now
        ]);
      });

      if (rows.length > 0) {
        var result = batchWriteToSheet(sh, rows);
        if (!result.ok) throw new Error(result.error);
      }

      _updateSessionRecord(
        payload.sessionId, null,
        (payload.completedBuses || []).length,
        '', STATUS.IN_PROCESS
      );
      if (payload.draftState) saveDraft(payload.sessionId, payload.draftState);

      logAction(LOG_ACTIONS.BUS_SAVE, payload.sessionId, { bus: bnUp, count: rows.length });

      return JSON.stringify({ ok: true, msg: 'बस नोंद झाली.' });
    } finally {
      lock.releaseLock();
    }
  } catch (e) {
    Logger.log('saveBus: ' + e);
    logAction(LOG_ACTIONS.ERROR, payload.sessionId || '', { source: 'saveBus', error: e.toString() });
    return JSON.stringify({ ok: false, msg: e.toString() });
  }
}


/* === FINALIZE SESSION === */

function finalizeInspection(payload) {
  try {
    if (!payload || !payload.sessionId) {
      return JSON.stringify({ ok: false, msg: 'Session ID आढळला नाही.' });
    }

    var pdfUrl = '', pdfError = '';
    try {
      pdfUrl = generateCombinedPDF(payload);
      if (!pdfUrl) pdfError = 'PDF URL रिकामी.';
      else logAction(LOG_ACTIONS.PDF_GENERATE, payload.sessionId, { url: pdfUrl });
    } catch (pe) {
      pdfError = pe.toString();
      Logger.log('PDF error: ' + pe);
    }

    var completedShifts = (payload.completedShifts || []).length;
    var isBW            = payload.checklistKey === 'bw';
    var newStatus       = (isBW || completedShifts >= SHIFTS.length)
                           ? STATUS.COMPLETED : STATUS.IN_PROCESS;

    _updateSessionRecord(
      payload.sessionId, completedShifts,
      (payload.completedBuses || []).length,
      pdfUrl, newStatus
    );

    if (newStatus === STATUS.COMPLETED) deleteDraft(payload.sessionId);

    logAction(LOG_ACTIONS.FINALIZE, payload.sessionId, {
      status: newStatus, shifts: completedShifts,
      buses: (payload.completedBuses || []).length, hasPdf: !!pdfUrl
    });

    return JSON.stringify({
      ok: true,
      msg: '✅ चेकलिस्ट यशस्वीपणे पूर्ण झाली!',
      tokenId:  payload.tokenId,
      pdfUrl:   pdfUrl,
      pdfError: pdfError,
      status:   newStatus
    });
  } catch (e) {
    Logger.log('finalize: ' + e);
    logAction(LOG_ACTIONS.ERROR, payload.sessionId || '', { source: 'finalize', error: e.toString() });
    return JSON.stringify({ ok: false, msg: e.toString() });
  }
}


/* === SEARCH FUNCTIONS === */

function searchPastInspections(filters) {
  try {
    if (!filters) filters = {};
    var sh   = getSessionsSheet();
    var data = sh.getDataRange().getValues();
    if (data.length < 2) {
      return JSON.stringify({ ok: true, results: [], count: 0, msg: 'कोणताही अहवाल आढळला नाही.' });
    }
    var headers = data[0];
    var colIdx  = {};
    headers.forEach(function (h, i) { colIdx[h] = i; });

    var searchExactDate = null;
    var rangeStartMs    = null;
    var rangeEndMs      = null;

    if (filters.date) {
      var p = filters.date.split('-');
      if (p.length === 3) searchExactDate = p[2] + '/' + p[1] + '/' + p[0];
    }
    if (filters.dateFrom) {
      var pf = filters.dateFrom.split('-');
      if (pf.length === 3)
        rangeStartMs = new Date(parseInt(pf[0]), parseInt(pf[1]) - 1, parseInt(pf[2]), 0, 0, 0).getTime();
    }
    if (filters.dateTo) {
      var pt = filters.dateTo.split('-');
      if (pt.length === 3)
        rangeEndMs = new Date(parseInt(pt[0]), parseInt(pt[1]) - 1, parseInt(pt[2]), 23, 59, 59).getTime();
    }

    var results = [];
    for (var i = 1; i < data.length; i++) {
      var row      = data[i];
      var created  = String(row[colIdx['Created Time']] || '');
      var rowEmpId = String(row[colIdx['Employee ID']] || '').trim();

      if (searchExactDate) {
        if (created.indexOf(searchExactDate) !== 0) continue;
      } else if (rangeStartMs || rangeEndMs) {
        var createdMs = _parseISTDateString(created);
        if (!createdMs) continue;
        if (rangeStartMs && createdMs < rangeStartMs) continue;
        if (rangeEndMs   && createdMs > rangeEndMs)   continue;
      }

      if (filters.employeeId && rowEmpId !== String(filters.employeeId).trim()) continue;
      if (filters.district   && String(row[colIdx['District']]).trim()      !== filters.district)    continue;
      if (filters.station    && String(row[colIdx['Station']]).trim()       !== filters.station)     continue;
      if (filters.checklistKey && String(row[colIdx['Checklist Key']]).trim() !== filters.checklistKey) continue;

      results.push({
        sessionId:       String(row[colIdx['Session ID']]),
        tokenId:         String(row[colIdx['Token ID']]),
        district:        String(row[colIdx['District']]),
        station:         String(row[colIdx['Station']]),
        supervisor:      String(row[colIdx['Supervisor Name']]),
        employeeId:      rowEmpId,
        checklist:       String(row[colIdx['Checklist Type']]),
        checklistKey:    String(row[colIdx['Checklist Key']]),
        createdTime:     created,
        completedShifts: parseInt(row[colIdx['Completed Shifts']] || 0),
        totalBuses:      parseInt(row[colIdx['Total Buses']]      || 0),
        status:          String(row[colIdx['Status']] || ''),
        pdfUrl:          String(row[colIdx['PDF URL']] || '')
      });
    }
    results.sort(function (a, b) { return b.createdTime.localeCompare(a.createdTime); });
    return JSON.stringify({
      ok: true, results: results, count: results.length,
      msg: results.length + ' अहवाल आढळले.'
    });
  } catch (e) {
    Logger.log('searchPastInspections ERROR: ' + e);
    return JSON.stringify({ ok: false, msg: 'त्रुटी: ' + e.toString() });
  }
}

function searchByEmployeeAndDate(empId, date) {
  try {
    if (!empId || !date) {
      return JSON.stringify({ ok: false, msg: 'कर्मचारी आयडी आणि तारीख आवश्यक.' });
    }
    if (!/^\d+$/.test(String(empId).trim())) {
      return JSON.stringify({ ok: false, msg: '❌ कर्मचारी आयडी फक्त संख्या असावा.' });
    }
    var employees = getEmployeeMaster();
    var empMatch  = employees.filter(function (e) { return e.id === String(empId).trim(); });
    if (empMatch.length === 0) {
      return JSON.stringify({ ok: false, msg: '❌ कर्मचारी आयडी "' + empId + '" डेटाबेसमध्ये आढळला नाही.' });
    }

    var sh   = getSessionsSheet();
    var data = sh.getDataRange().getValues();
    if (data.length < 2) {
      return JSON.stringify({ ok: true, results: [], count: 0, employee: empMatch[0], msg: 'कोणताही अहवाल आढळला नाही.' });
    }
    var headers = data[0];
    var colIdx  = {};
    headers.forEach(function (h, i) { colIdx[h] = i; });

    var p = date.split('-');
    if (p.length !== 3) return JSON.stringify({ ok: false, msg: 'अवैध तारीख स्वरूप.' });
    var searchDateStr = p[2] + '/' + p[1] + '/' + p[0];
    var idClean = String(empId).trim();
    var results = [];

    for (var i = 1; i < data.length; i++) {
      var row      = data[i];
      var rowEmpId = String(row[colIdx['Employee ID']] || '').trim();
      var created  = String(row[colIdx['Created Time']] || '');

      if (rowEmpId !== idClean) continue;
      if (created.indexOf(searchDateStr) !== 0) continue;

      results.push({
        sessionId:       String(row[colIdx['Session ID']]),
        tokenId:         String(row[colIdx['Token ID']]),
        district:        String(row[colIdx['District']]),
        station:         String(row[colIdx['Station']]),
        supervisor:      String(row[colIdx['Supervisor Name']]),
        employeeId:      rowEmpId,
        checklist:       String(row[colIdx['Checklist Type']]),
        checklistKey:    String(row[colIdx['Checklist Key']]),
        createdTime:     created,
        completedShifts: parseInt(row[colIdx['Completed Shifts']] || 0),
        totalBuses:      parseInt(row[colIdx['Total Buses']]      || 0),
        status:          String(row[colIdx['Status']] || ''),
        pdfUrl:          String(row[colIdx['PDF URL']] || '')
      });
    }
    results.sort(function (a, b) { return b.createdTime.localeCompare(a.createdTime); });

    return JSON.stringify({
      ok: true, results: results, count: results.length,
      employee: empMatch[0], searchDate: date,
      msg: results.length + ' अहवाल आढळले.'
    });
  } catch (e) {
    Logger.log('[HISTORY] ERROR: ' + e);
    return JSON.stringify({ ok: false, msg: 'त्रुटी: ' + e.toString() });
  }
}

function getEmployeeStats(empId) {
  try {
    if (!empId) return JSON.stringify({ ok: false });
    var sh   = getSessionsSheet();
    var data = sh.getDataRange().getValues();
    if (data.length < 2) return JSON.stringify({ ok: true, total: 0, withPdf: 0 });

    var headers = data[0];
    var colIdx  = {};
    headers.forEach(function (h, i) { colIdx[h] = i; });

    var idClean = String(empId).trim();
    var total = 0, withPdf = 0;
    for (var i = 1; i < data.length; i++) {
      var rowId = String(data[i][colIdx['Employee ID']] || '').trim();
      if (rowId !== idClean) continue;
      total++;
      if (String(data[i][colIdx['PDF URL']] || '').trim()) withPdf++;
    }
    return JSON.stringify({ ok: true, total: total, withPdf: withPdf });
  } catch (e) {
    return JSON.stringify({ ok: false, msg: e.toString() });
  }
}


/* === DRIVE HELPER === */

function getFolder(name) {
  var it = DriveApp.getFoldersByName(name);
  return it.hasNext() ? it.next() : DriveApp.createFolder(name);
}


/* === SESSION DATA FOR PDF === */

function getSessionDataForPDF(sessionId) {
  try {
    var sessionsSheet = getSessionsSheet();
    var sessionData   = sessionsSheet.getDataRange().getValues();
    if (sessionData.length < 2) return null;

    var headers = sessionData[0];
    var colMap  = {};
    headers.forEach(function (header, index) { colMap[header] = index; });

    for (var i = 1; i < sessionData.length; i++) {
      var row = sessionData[i];
      if (String(row[colMap['Session ID']]) !== String(sessionId)) continue;

      var checklistKey     = String(row[colMap['Checklist Key']] || '');
      var completedShifts  = [];
      var completedBuses   = [];

      if (checklistKey !== 'bw') {
        completedShifts = loadPreviousShifts(sessionId);
      } else {
        completedBuses  = loadPreviousBuses(sessionId);
      }

      return {
        sessionId:    sessionId,
        tokenId:      String(row[colMap['Token ID']]       || ''),
        dist:         String(row[colMap['District']]       || ''),
        stn:          String(row[colMap['Station']]        || ''),
        name:         String(row[colMap['Supervisor Name']] || ''),
        id:           String(row[colMap['Employee ID']]    || ''),
        checklistKey: checklistKey,
        checklist:    String(row[colMap['Checklist Type']] || ''),
        date:         String(row[colMap['Created Time']]   || '').split(' ')[0] || '',
        completedShifts: completedShifts,
        completedBuses:  completedBuses
      };
    }
    return null;
  } catch (e) {
    Logger.log('[SESSION DATA ERROR] ' + e);
    return null;
  }
}


/* === LOAD BUS DATA === */

function loadPreviousBuses(sessionId) {
  try {
    var sh   = getBusResponsesSheet();
    var data = sh.getDataRange().getValues();
    if (data.length < 2) return [];

    var headers = data[0];
    var colIdx  = {};
    headers.forEach(function (h, i) { colIdx[h] = i; });

    var byBus = {};
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      if (String(row[colIdx['Session ID']]) !== String(sessionId)) continue;
      var busNum = String(row[colIdx['Bus Number']]);
      var q      = String(row[colIdx['Question']]);
      var a      = String(row[colIdx['Answer']]);
      var r      = String(row[colIdx['Remark']] || '');
      if (!byBus[busNum]) {
        byBus[busNum] = { busNumber: busNum, questions: [], answers: {}, remarks: {} };
      }
      if (byBus[busNum].questions.indexOf(q) === -1) byBus[busNum].questions.push(q);
      byBus[busNum].answers[q] = a;
      if (r) byBus[busNum].remarks[q] = r;
    }

    var result = [];
    Object.keys(byBus).forEach(function (busNum) { result.push(byBus[busNum]); });
    return result;
  } catch (e) {
    Logger.log('[LOAD BUSES ERROR] ' + e);
    return [];
  }
}


/* === PDF GENERATION === */

function generateCombinedPDF(payload) {
  var type     = payload.checklistKey || 'bs';
  var sigs     = SIG_LABELS[type] || SIG_LABELS.bs;
  var title    = CHECKLIST_TITLES[type] || '';
  var dandList = DANDATMAK[type] || [];
  var isBW     = (type === 'bw');
  var now      = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy hh:mm a');

  var MARATHI_NUMS = ['०','१','२','३','४','५','६','७','८','९'];
  function toMarathiNum(n) {
    return String(n).split('').map(function (d) {
      return /\d/.test(d) ? MARATHI_NUMS[parseInt(d)] : d;
    }).join('');
  }

  var SECTION_LABEL = {
    bs: 'क्षेत्र / ठिकाण',
    gh: 'क्षेत्र / ठिकाण',
    wr: 'प्रसाधनगृह क्षेत्र / ठिकाण'
  };

  // Server-authoritative shift reload (takes precedence over payload)
  var allShifts = payload.completedShifts || [];
  if (!isBW && payload.sessionId) {
    var serverShifts = loadPreviousShifts(payload.sessionId);
    if (serverShifts.length > 0) allShifts = serverShifts;
  }

  var allBuses = payload.completedBuses || [];
  if (isBW && payload.sessionId) {
    var serverBuses = loadPreviousBuses(payload.sessionId);
    if (serverBuses.length > 0) allBuses = serverBuses;
  }

  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>' +
    '@page{size:A4 landscape;margin:10mm}' +
    'body{font-family:"Noto Sans Devanagari",Arial,sans-serif;margin:0;padding:0;font-size:10px;color:#000}' +
    '.msrtc-title{background:#d9d9d9;text-align:center;font-weight:bold;font-size:14px;padding:6px;border:1px solid #000}' +
    '.info-block{border-left:1px solid #000;border-right:1px solid #000;border-bottom:1px solid #000}' +
    '.info-block .row{border-bottom:1px solid #000;padding:3px 8px;font-size:10px}' +
    '.info-block .row:last-child{border-bottom:none}' +
    '.sec-title{background:#d9d9d9;text-align:center;font-weight:bold;font-size:11.5px;padding:6px;border:1px solid #000;border-top:none}' +
    '.chk-tbl{width:100%;border-collapse:collapse;table-layout:auto}' +
    '.chk-tbl th,.chk-tbl td{border:1px solid #000;padding:5px 6px;font-size:10px;vertical-align:middle;word-wrap:break-word}' +
    '.chk-tbl th{font-weight:normal;text-align:center;background:#fff}' +
    '.cc{text-align:center}.yes{text-align:center;color:#1e7e34;font-weight:bold}.no{text-align:center;color:#c62828;font-weight:bold}' +
    '.remark-cell{font-size:9px;color:#c62828;font-style:italic}' +
    '.dand-tbl{width:100%;border-collapse:collapse;margin-top:10px}' +
    '.dand-tbl td,.dand-tbl th{border:1px solid #000;padding:5px 8px;font-size:10px;vertical-align:middle}' +
    '.dand-tbl th{font-weight:bold;text-align:center;background:#fff}' +
    '.dand-head-row td{font-weight:bold}' +
    '.sig-tbl{width:100%;border-collapse:collapse;margin-top:18px;page-break-inside:avoid}' +
    '.sig-tbl td{border:1px solid #000;padding:6px 10px;font-size:10px;vertical-align:top;width:50%}' +
    '.footer{text-align:center;font-size:9px;color:#555;margin-top:14px;padding-top:4px}' +
    '</style></head><body>';

  function buildHeader() {
    return '<div class="msrtc-title">महाराष्ट्र राज्य मार्ग परिवहन महामंडळ</div>' +
      '<div class="info-block">' +
        '<div class="row">विभाग- ' + (payload.dist || '') + '</div>' +
        '<div class="row">आगार- ___</div>' +
        '<div class="row">बसस्थानक- ' + (payload.stn || '') + '</div>' +
      '</div>';
  }

  function buildHeaderBW() {
    return '<div class="msrtc-title">महाराष्ट्र राज्य मार्ग परिवहन महामंडळ</div>' +
      '<div class="info-block">' +
        '<div class="row">विभाग- ' + (payload.dist || '') + '</div>' +
        '<div class="row">आगार- ___</div>' +
        '<div class="row" style="text-align:center">दिनांक- ' + (payload.date || '') + '</div>' +
      '</div>';
  }

  function buildDandatmakTable() {
    var tbl = '<table class="dand-tbl"><tr class="dand-head-row">' +
              '<td style="width:30px"></td><td>दंडात्मक तरतूद</td>' +
              '<td style="width:100px;text-align:center">आहे/नाही</td>' +
              '<td style="width:180px;text-align:center">अधिकाऱ्याचा शेरा</td></tr>';
    dandList.forEach(function (d, i) {
      tbl += '<tr><td class="cc">' + toMarathiNum(i + 1) + '</td><td>' + d + '</td><td></td><td></td></tr>';
    });
    return tbl + '</table>';
  }

  function buildSignatures() {
    return '<table class="sig-tbl"><tr>' +
      '<td><strong>' + sigs.left  + '</strong></td>' +
      '<td style="text-align:right"><strong>' + sigs.right + '</strong></td>' +
      '</tr><tr><td style="height:36px"></td><td style="height:36px"></td></tr></table>';
  }

  function pdfFooterLine() {
    return '<div class="footer">Token ID: ' + (payload.tokenId || '') +
           ' | ' + CONFIG.APP_NAME + ' | Generated: ' + now + '</div>';
  }

  var BW_COL_HEADERS = [
    'बस झाडणे व धुणे<br>(आतील व बाहेरील<br>संपूर्ण बाजू)',
    'बसेसच्या<br>खिडक्यांच्या काचा<br>पुसणे',
    'बसवरील अनधिकृत<br>स्टिकर पोस्टर<br>काढणे',
    'चालक केबिन<br>स्वच्छता',
    'सामान<br>कप्प्याची स्वच्छता',
    'समोरील बाजू मोठी<br>काच व आरसे'
  ];

  if (isBW) {
    var buses = allBuses || [];
    html += buildHeaderBW();
    html += '<div class="sec-title">' + title + '</div>';

    var bwQs = (buses[0] && buses[0].questions && buses[0].questions.length >= 6)
                 ? buses[0].questions.slice(0, 6)
                 : FALLBACK_QUESTIONS.bw.slice(0, 6);

    var tbl = '<table class="chk-tbl"><tr><th style="width:35px">अ.क्र.</th><th style="width:12%">बस क्रमांक</th>';
    BW_COL_HEADERS.forEach(function (h) {
      tbl += '<th style="font-size:9px;line-height:1.3;width:10%">' + h + '</th>';
    });
    tbl += '<th style="width:13%">शेरा</th></tr>';

    var totalRows = buses.length + 2;
    for (var bi = 0; bi < totalRows; bi++) {
      tbl += '<tr><td class="cc">' + toMarathiNum(bi + 1) + '</td>';
      if (bi < buses.length) {
        var bus = buses[bi];
        tbl += '<td class="cc" style="font-weight:bold;font-size:10.5px">' + bus.busNumber + '</td>';
        var remarkParts = [];
        bwQs.forEach(function (q, qIdx) {
          var av  = (bus.answers || {})[q] || '';
          var cls = av === 'होय' ? 'yes' : (av === 'नाही' ? 'no' : 'cc');
          tbl += '<td class="' + cls + '" style="height:32px">' + av + '</td>';
          if ((bus.remarks || {})[q]) remarkParts.push('Q' + toMarathiNum(qIdx + 1) + ': ' + bus.remarks[q]);
        });
        tbl += '<td class="remark-cell">' + remarkParts.join('<br>') + '</td>';
      } else {
        tbl += '<td style="height:32px"></td>';
        for (var bc = 0; bc < 6; bc++) tbl += '<td></td>';
        tbl += '<td></td>';
      }
      tbl += '</tr>';
    }
    tbl += '</table>';
    html += tbl;
  } else {
    if (allShifts.length === 0) {
      html += buildHeader() + '<div class="sec-title">' + title + '</div>' +
              '<p style="text-align:center;padding:20px">कोणतीही पाळी(Shift) पूर्ण झाली नाही.</p>';
    } else {
      var questions = (allShifts[0] && allShifts[0].questions)
                      ? allShifts[0].questions : (FALLBACK_QUESTIONS[type] || []);
      var shiftAnswerMap = {}, shiftRemarkMap = {};
      allShifts.forEach(function (s) {
        shiftAnswerMap[s.shiftName] = s.answers  || {};
        shiftRemarkMap[s.shiftName] = s.remarks || {};
      });

      html += buildHeader() + '<div class="sec-title">' + title + '</div>';
      var tbl2 = '<table class="chk-tbl"><tr>' +
                 '<th rowspan="2" style="width:30px">अ.क्र.</th>' +
                 '<th style="width:28%">वारंवारिता</th>';
      for (var sh = 0; sh < 6; sh++) tbl2 += '<th style="width:8.5%">' + SHIFTS[sh] + '</th>';
      tbl2 += '<th rowspan="2" style="width:15%">शेरा</th></tr>';
      tbl2 += '<tr><th style="text-align:left;padding-left:8px;font-weight:bold">' +
               (SECTION_LABEL[type] || 'क्षेत्र') + '</th><th colspan="6"></th></tr>';

      questions.forEach(function (q, qi) {
        var remarkParts = [];
        SHIFTS.forEach(function (shName) {
          if (shiftRemarkMap[shName] && shiftRemarkMap[shName][q]) {
            remarkParts.push(shName.replace('पाळी(Shift)', '').trim() + ': ' + shiftRemarkMap[shName][q]);
          }
        });
        tbl2 += '<tr><td class="cc">' + toMarathiNum(qi + 1) + '</td><td>' + q + '</td>';
        for (var col = 0; col < 6; col++) {
          var ans = shiftAnswerMap[SHIFTS[col]] ? shiftAnswerMap[SHIFTS[col]][q] : '';
          var cls = ans === 'होय' ? 'yes' : (ans === 'नाही' ? 'no' : 'cc');
          tbl2 += '<td class="' + cls + '">' + (ans || '') + '</td>';
        }
        tbl2 += '<td class="remark-cell">' + remarkParts.join('<br>') + '</td></tr>';
      });
      tbl2 += '</table>';
      html += tbl2;
    }
  }

  html += buildDandatmakTable() + buildSignatures() + pdfFooterLine();
  html += '</body></html>';

  var fname   = 'MSRTC_Cleaning_' + (payload.tokenId || 'NA') + '.pdf';
  var pdfBlob = Utilities.newBlob(html, 'text/html', fname).getAs(MimeType.PDF);
  pdfBlob.setName(fname);
  var folder  = getFolder(CONFIG.PDF_FOLDER);

  // Replace existing PDF for same token (continuation support)
  var existingFiles = folder.getFilesByName(fname);
  if (existingFiles.hasNext()) existingFiles.next().setTrashed(true);

  var pdfFile = folder.createFile(pdfBlob);
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  Logger.log('PDF created: ' + fname);
  return pdfFile.getUrl();
}


/* === ADMIN UTILITIES === */

function oneTimeSetup() {
  try {
    getSessionsSheet();
    getShiftResponsesSheet();
    getBusResponsesSheet();
    getDraftSheet();
    getEmployeeMaster();
    _getOrCreateSheet(CONFIG.LOG_SHEET, [
      'Timestamp', 'Action', 'Session ID', 'Details', 'User Email'
    ]);
    getFolder(CONFIG.PDF_FOLDER);
    SpreadsheetApp.getUi().alert(
      '✅ Setup Complete!\n\nVersion: ' + CONFIG.VERSION + '\n\n' +
      'All sheets ready:\n• Inspection_Sessions\n• Shift_Responses\n• Bus_Responses\n' +
      '• Draft_Sessions\n• Employee_Master\n• Audit_Log\n\n' +
      'Drive folder: ' + CONFIG.PDF_FOLDER + '\n\nNow: Deploy → Web App → Anyone'
    );
  } catch (e) {
    SpreadsheetApp.getUi().alert('❌ Setup failed: ' + e);
  }
}

function resetAllCounters() {
  var ui   = SpreadsheetApp.getUi();
  var resp = ui.alert('Reset Counters?', 'Reset ALL token sequences. Continue?', ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  var props = PropertiesService.getScriptProperties();
  var all   = props.getProperties();
  Object.keys(all).forEach(function (k) {
    if (k.indexOf('TOKEN_CTR_') === 0 || k === 'TOKEN_COUNTER' || k === 'SESSION_COUNTER') {
      props.deleteProperty(k);
    }
  });
  ui.alert('✅ All counters reset.');
}

function autoPauseStaleSessions() {
  markSessionsAsPaused();
}

function debugContinuity() {
  Logger.log('=== Sessions in Sheet ===');
  var sh   = getSessionsSheet();
  var data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    Logger.log('Row ' + i + ': Stn=' + data[i][3] + ' Key=' + data[i][7] +
               ' Done=' + data[i][10] + ' Status=' + data[i][12] + ' Created=' + data[i][8]);
  }
}
