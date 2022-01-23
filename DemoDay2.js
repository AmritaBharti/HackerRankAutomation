let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require("puppeteer");
let args = minimist(process.argv);
let configJSON = fs.readFileSync(args.config ,"utf-8");
let config = JSON.parse(configJSON);

async function start(){

    let browser = await puppeteer.launch({headless :false});
    let pages = await browser.pages();
    let page = pages[0];
    await page.goto(args.url);
    await page.click("li#menu-item-2087");



    await browser.close();
    console.log("browser closed");

}start();
