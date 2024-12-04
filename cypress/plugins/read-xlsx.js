const fs = require('fs');
const XLSX = require('xlsx');

const read = ({file, sheet}) => {
   const buf = fs.readFileSync(file);
   const workbook = XLSX.read(buf, { type: 'buffer' });
   const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
   return rows
}

const readAll = ({ file }) => {
   const buf = fs.readFileSync(file);
   const workbook = XLSX.read(buf, { type: 'buffer', cellText: true });
   const obj = {}
   for(let sheet in workbook.Sheets){
      obj[sheet] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
   }
   return obj
}

module.exports = {
   read, readAll
}