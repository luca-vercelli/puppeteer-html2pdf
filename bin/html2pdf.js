#!/usr/bin/env node

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");

const program = new Command();

program
  .name("html2pdf")
  .description("Converts an HTML file or a web page into a PDF using Puppeteer")
  .version("1.0.0")
  .argument("<input>", "Local HTML file or URL to convert")
  .option("-o, --output <outputFile>", "Output PDF file name", "output.pdf")
  .action(async (input, options) => {
    try {
      let isURL = input.startsWith("http://") || input.startsWith("https://");

      // Check if the input file exists if it's not a URL
      if (!isURL && !fs.existsSync(input)) {
        console.error(`❌ Error: The file "${input}" does not exist.`);
        process.exit(1);
      }

      // Launch Puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
	  
      if (isURL) {
        // Load a web page from a URL
        console.log(`🔗 Loading URL: ${input}`);
        await page.goto(input, { waitUntil: "networkidle2" });
      } else {
        // Load a local HTML file
        const fileUrl = `file://${path.resolve(input)}`;
        await page.goto(fileUrl, { waitUntil: "networkidle2" });
      }

      // Generate the PDF
      const outputPath = path.resolve(options.output);
      await page.pdf({ path: outputPath, format: "A4", printBackground: true });

      console.log(`✅ PDF successfully created: ${outputPath}`);

    } catch (error) {
      console.error("❌ Error during conversion:", error);
    } finally {
      // Close Puppeteer
      await browser.close();
  });

program.parse(process.argv);
