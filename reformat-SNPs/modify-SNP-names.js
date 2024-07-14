
module.exports = function modifySnpNames(csvFileRow) {
  const snpName = csvFileRow['SNP Name'];
  const testResult = csvFileRow['Test Results'];

  let modifiedSnpName;
  if (testResult === 'Positive') {
    modifiedSnpName = snpName + '+';
  } else if (testResult === 'Negative') {
    modifiedSnpName = snpName + '-';
  } else {
    modifiedSnpName = snpName; // In case the value is neither Positive nor Negative
  }

  return modifiedSnpName;
}
