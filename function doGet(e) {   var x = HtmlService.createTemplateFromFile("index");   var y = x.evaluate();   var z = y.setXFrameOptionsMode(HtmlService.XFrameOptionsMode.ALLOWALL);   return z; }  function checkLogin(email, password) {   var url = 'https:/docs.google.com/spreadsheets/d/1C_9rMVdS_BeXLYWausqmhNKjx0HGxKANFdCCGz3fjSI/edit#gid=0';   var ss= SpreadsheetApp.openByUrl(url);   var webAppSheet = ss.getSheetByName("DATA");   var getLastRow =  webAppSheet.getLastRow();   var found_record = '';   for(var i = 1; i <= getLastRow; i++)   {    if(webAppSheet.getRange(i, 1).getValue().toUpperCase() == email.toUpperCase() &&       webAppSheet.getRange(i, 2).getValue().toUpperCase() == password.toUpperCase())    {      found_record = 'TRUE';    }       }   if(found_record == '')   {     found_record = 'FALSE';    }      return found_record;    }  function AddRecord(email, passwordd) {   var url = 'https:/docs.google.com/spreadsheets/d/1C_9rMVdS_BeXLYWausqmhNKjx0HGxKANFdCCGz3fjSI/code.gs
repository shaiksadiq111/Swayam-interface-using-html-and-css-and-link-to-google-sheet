function doGet(e) {
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function checkLogin(email, password) {
  var url = 'https://docs.google.com/spreadsheets/d/1C_9rMVdS_BeXLYWausqmhNKjx0HGxKANFdCCGz3fjSI/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == email.toUpperCase() && 
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  
  return found_record;
  
}

function AddRecord(email, passwordd) {
  var url = 'https://docs.google.com/spreadsheets/d/1C_9rMVdS_BeXLYWausqmhNKjx0HGxKANFdCCGz3fjSI/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  webAppSheet.appendRow([email,passwordd]);
  
}
