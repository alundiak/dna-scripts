DNA scripts
===

## ReFormat SNP list script


FTDNA offers to download CSV file with [SNP Results](https://www.familytreedna.com/my/y-dna-haplotree).

![img1](./reformat-SNPs/images/img1.png)

![img2](./reformat-SNPs/images/img2.png)

And on [Morley SNP predictor](https://ytree.morleydna.com/) it is expected different format - FTDNA format, eg. `M343+, L21+, DF13+, DF23+, M222-`.

![img3](./reformat-SNPs/images/img3.png)


So I created script to re-format SNPs, so let it be here.


```sh
npm run reformatSNPs
```

And then in local `files` folder new `*.txt` file will be created, with "comma-separated list of SNPs".


Actually, I forgot that FTDNA does have such format but on Groups/Projects pages, like [this](https://www.familytreedna.com/public/I2aHapGroup?iframe=ysnp). Example:

![img4](./reformat-SNPs/images/img4.png)

So my script provides identical result.


Tech Note

CommonJS scripts when put in code bas eof React application (when ESM modules used and latest TypeScript) will not be executed, it will require to rework code.

