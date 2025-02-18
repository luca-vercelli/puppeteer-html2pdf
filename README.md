# puppeteer-html2pdf
CLI tool that converts HTML into PDF using nodejs+Puppeteer library

You need nodejs installed. Puppeteer is a wrapper around Chromium. You can read both a local file and a remote file, the latter is easier because Chromium cannot access link to other local files as CSS stylesheets.

## Install

     npm i
     chmod +x index.js     # if in Linux
     npm link

 ## Run

     html2pdf https://en.wikipedia.org/wiki/Ordinary_differential_equation

 
