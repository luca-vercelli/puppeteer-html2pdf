# puppeteer-html2pdf
CLI tool that converts HTML into PDF using nodejs+Puppeteer library

You need nodejs installed. Puppeteer is a wrapper around Chromium.
You can read both a local file and a remote file, the latter is easier because Chromium cannot access link to other local files (e.g. CSS stylesheets).

NodeJS version is worth! Puppeter 24 is intended for NodeJs 24.

## Install

    npm i
    npm i -g .

 ## Run

    html2pdf https://en.wikipedia.org/wiki/Ordinary_differential_equation

or
 
    html2pdf myfile.html
 
