var XLSX=require("xlsx");
var workbook=XLSX.readFile("Requin.xlsx");
var sheet_name_list=workbook.SheetNames;
console.log(sheet_name_list);
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);
var xlData1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
console.log(xlData1);
 //first=workbook.Sheets[[sheet_name_list[0][0]]];

first=xlData[0];
a=first.StudentId;
//console.log(a);
if(a==xlData1[0].StudentId)
{
    
    console.log("StudentName"+"  "+first.Name);

    
    delete xlData1[0].StudentId;
    console.log(xlData1[0]);
    delete xlData1[1].StudentId;
    console.log(xlData1[1]);
    delete xlData1[2].StudentId;
    console.log(xlData1[2]);


    
}
/*var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' } 
});*/
var pdf = require('html-pdf');




