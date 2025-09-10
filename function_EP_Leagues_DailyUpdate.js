function OHLStatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A135').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A270').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A400').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A525').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A750').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ohl/stats/2024-2025?page=6", "table", 3)');
};

function NCDCStatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncdc/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A113').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncdc/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A223').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncdc/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A333').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncdc/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A443').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncdc/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A557').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncdc/stats/2024-2025?page=6", "table", 3)');
  spreadsheet.getRange('A609').activate();
};

function J20SwedenStatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/j20-nationell/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A111').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/j20-nationell/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A221').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/j20-nationell/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A331').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/j20-nationell/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A441').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/j20-nationell/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A551').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/j20-nationell/stats/2024-2025?page=6", "table", 3)');spreadsheet.getRange('A715').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/j20-nationell/stats/2024-2025?page=7", "table", 3)');
};

function U20FinlandStatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/u20-sm-sarja/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A111').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://eliteprospects.com/league/u20-sm-sarja/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A221').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/u20-sm-sarja/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A331').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/u20-sm-sarja/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A443').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/u20-sm-sarja/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A555').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/u20-sm-sarja/stats/2024-2025?page=6", "table", 3)');
};

function NCAAD1StatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A111').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A221').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A331').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A441').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A551').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=6", "table", 3)');
  spreadsheet.getRange('A661').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=7", "table", 3)');
  spreadsheet.getRange('A771').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=8", "table", 3)');
  spreadsheet.getRange('A881').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=9", "table", 3)');
  spreadsheet.getRange('A991').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=10", "table", 3)');
  spreadsheet.getRange('A1101').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=11", "table", 3)');
  spreadsheet.getRange('A1211').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=12", "table", 3)');
  spreadsheet.getRange('A1321').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=13", "table", 3)');
  spreadsheet.getRange('A1431').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=14", "table", 3)');
  spreadsheet.getRange('A1541').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=15", "table", 3)');
  spreadsheet.getRange('A1651').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/ncaa/stats/2024-2025?page=16", "table", 3)');
};

function USportStatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A120').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A240').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A360').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A480').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A600').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=6", "table", 3)');
  spreadsheet.getRange('A720').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=7", "table", 3)');
  spreadsheet.getRange('A840').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=8", "table", 3)');
  spreadsheet.getRange('A960').activate();
  spreadsheet.getCurrentCell().setValue('');
  spreadsheet.getActiveRange().setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/usports/stats/2024-2025?page=9", "table", 3)');
};

function WHLStatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page", "table", 3)');
  spreadsheet.getRange('A150').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A330').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A490').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A655').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A800').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=6", "table", 3)');
  spreadsheet.getRange('A925').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/whl/stats/2024-2025?page=7", "table", 3)');
  spreadsheet.getRange('A931').activate();
};

function QMJHLStatsDailyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025", "table", 3)');
  spreadsheet.getRange('A150').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=2", "table", 3)');
  spreadsheet.getRange('A290').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=3", "table", 3)');
  spreadsheet.getRange('A430').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=4", "table", 3)');
  spreadsheet.getRange('A560').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=5", "table", 3)');
  spreadsheet.getRange('A680').activate();
  spreadsheet.getCurrentCell().setValue('')
  .setFormula('=IMPORTHTML("https://www.eliteprospects.com/league/qmjhl/stats/2024-2025?page=6", "table", 3)');
};