DNA scripts
===

# ReFormat SNP list script


FTDNA offers to download CSV file with SNP, but they are CSV file based.

And on [Morley SNP predictor](https://ytree.morleydna.com/) it is expected different format.

I forgot that FTDNA does have such format but on Groups/Projects pages, like this https://www.familytreedna.com/public/I2aHapGroup?iframe=ysnp

But I created script to re-format SNPs, so let it be here.


```sh
npm run reformatSNPs
```

And then in local `files` folder new `*.txt` file will be created, with "comma-separated list of SNPs".

Note that CommonJS scripts when put in code bas eof React application (when ESM modules used and latest TypeScript) will not be executed, it will require to rework code.

