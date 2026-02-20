# STR compare

In my Y-DNA research I frequently have a need to compare STR results for some or many men samples from FamilyTreeDNA [Y-DNA public page](https://www.familytreedna.com/public/I2aHapGroup?iframe=ydna-results-overview) where results are exposed in `TSV` format.

So, after `cd STR_compare` I run `npm start` and it compares `*.tsv` file I created in `data` folder, giving me result like this:

![img](./img.png)

Script does NOT need the STR names as it shown on page table header. Script simply compares values positionally (from left to right).

- First value → first marker (`DYS393`)
- Second value → second marker (`DYS390`)
- and so on
