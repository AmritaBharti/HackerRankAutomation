//npm init -y
// npm install minimist
// npm install puppeteer

//node DemoDay1.js --url=https://www.hackerrank.com/ --config=config.json

let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require("puppeteer");
let args = minimist(process.argv);
let configJSON = fs.readFileSync(args.config ,"utf-8");
let config = JSON.parse(configJSON);

// let browserKaPromise = puppeteer.launch({headless : false});
// browserKaPromise.then(function(browser){
//     let pageKaPromise = browser.pages();
//     pageKaPromise.then(function(page){
//         let OpenKaPromise = page[0].goto(args.url);
//         OpenKaPromise.then(function(){
//             let browserCloseKaPromise = browser.close();
//             browserCloseKaPromise.then(function(){
//                 console.log("Browser closed");
//             });
//         })
//     });

// });

async function start(){

    let browser = await puppeteer.launch({headless :false});
    let pages = await browser.pages();
    await pages[0].goto(args.url);
    await browser.close();
    console.log("browser closed");

}start();

