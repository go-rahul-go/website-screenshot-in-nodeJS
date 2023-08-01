const puppet = require("puppeteer");
let counter=1;
(async () => {
    const browser = await puppet.launch();
    const page = await browser.newPage();
   
    await page.goto("http://tutorialspoint.com");

    page.setViewport({width:1980,height:4000})
    await page.screenshot({path:__dirname+`/screenshots/pic${Date.now()}.png`});
 
    await browser.close();
}   
)();

