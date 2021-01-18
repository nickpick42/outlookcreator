const puppeteer = require("puppeteer-extra")
const stealth = require("puppeteer-extra-plugin-stealth")
const captchasolver = require("puppeteer-extra-plugin-recaptcha")
puppeteer.use(stealth())
puppeteer.use(captchasolver({
    provider:{
        id: "2captcha",
        token: "0b5506a677b9ae43402525212dddd085"
    },
    visualFeedback: true
}))

let main = async ()=>{
    let launchOptions = {
        headless: false,
        devtools: true,
        args: [
            "--disable-web-security",
        ],
        slowMo: 15,
    }

    let browser = await puppeteer.launch(launchOptions)

    let page = await browser.newPage()
    await page.setViewport({width:500,height:500})
    await page.goto("https://www.google.com/recaptcha/api2/demo")

        await page.solveRecaptchas()
        await page.click(`#recaptcha-demo-submit`)
    console.log("Reached")


}
main()
