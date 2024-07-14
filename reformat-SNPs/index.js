const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const modifySnpNames = require('./modify-SNP-names');

const folderPath = 'files';

const results = [];

fs.createReadStream(path.join(__dirname, folderPath, 'SNPs.csv'))
  .pipe(csv())
  .on('data', (csvFileData) => results.push(modifySnpNames(csvFileData)))
  .on('end', () => {
    const csvContent = results.join(',');
    const filePath = path.join(__dirname, folderPath, 'SNPs-re-formatted.txt');
    fs.writeFileSync(filePath, csvContent);
  });
