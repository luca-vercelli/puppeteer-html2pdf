# puppeteer-html2pdf
CLI tool that converts HTML into PDF using nodejs+Puppeteer library

The goal of this project is to render HTML+CSS reports into PDF using well-maintained libraries, such as Chrome.

## Some notes
* The Javascript library Puppeteer [1] is a wrapper around Chrome.
* You need nodejs [2] installed.
* NodeJS version is worth! Currently this project ships Puppeteer 24.x, and is tested with NodeJS 22.x.
* You can read both a local file and a remote file.
* **There is some issue printing headers and footers...**

## Install from source

	git clone https://github.com/luca-vercelli/puppeteer-html2pdf.git
	cd puppeteer-html2pdf
    npm install --global .

## Install from git repository

    npm install --global https://github.com/luca-vercelli/puppeteer-html2pdf.git

## Install from npm registry

TODO. This package is not on npm registry yet.

## Usage examples

    html2pdf https://en.wikipedia.org/wiki/Ordinary_differential_equation

    html2pdf myfile.html

    html2pdf -o myfile.pdf myfile.html
 
## References

[1] Puppeteer https://pptr.dev/

[2] NodeJS https://nodejs.org/
