import { createReadStream, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import csv from "csv-parser";
import { modifySnpNames } from "./modify-SNP-names.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const folderPath = "files";

const INPUT_FILE = join(__dirname, folderPath, "SNPs.csv");
const OUTPUT_FILE = join(__dirname, folderPath, "SNPs-re-formatted.txt");

const results = [];

createReadStream(INPUT_FILE)
  .pipe(csv())
  .on("data", (csvFileData) => results.push(modifySnpNames(csvFileData)))
  .on("end", () => {
    const csvContent = results.join(",");

    writeFileSync(OUTPUT_FILE, csvContent);

    console.log("\n SNPs from CSV file have been reformatted into TXT file");
  });
