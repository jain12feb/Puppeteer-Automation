const puppeteer = require("puppeteer");

let currentPage;

const browserOpenPromise = puppeteer.launch({ headless: false });
browserOpenPromise
  .then((browser) => {
    const pagesArrPromise = browser.pages();
    return pagesArrPromise;
  })
  .then((browserPages) => {
    currentPage = browserPages[0];
    const gotoPromise = currentPage.goto("https://www.google.com/");
    return gotoPromise;
  })
  .then(() => {
    const elementWaitPromise = currentPage.waitForSelector(
      "input[type='text']",
      { visible: true }
    );
    return elementWaitPromise;
  })
  .then(() => {
    const viewPortPromise = currentPage.setViewport({
      //   width: 1080,
      width: 1366,
      //   height: 1024,
      height: 768,
    });
    return viewPortPromise;
  })
  .then(() => {
    const keysWillBeSendPromise = currentPage.type(
      "input[type='text']",
      "youtube"
    );
    return keysWillBeSendPromise;
  })
  .then(() => {
    const enterWillBePressed = currentPage.keyboard.press("Enter");
    return enterWillBePressed;
  })
  .then(() => {
    const elementWaitPromise = currentPage.waitForSelector(
      "h3.LC20lb.MBeuO.DKV0Md",
      { visible: true }
    );
    return elementWaitPromise;
  })
  .then(() => {
    const keysWillBeSendPromise = currentPage.click("h3.LC20lb.MBeuO.DKV0Md");
    return keysWillBeSendPromise;
  })
  .then(() => {
    const elementWaitPromise = currentPage.waitForSelector("#video-title", {
      visible: true,
    });
    return elementWaitPromise;
  })
  .then(() => {
    const keysWillBeSendPromise = currentPage.click("#video-title");
    return keysWillBeSendPromise;
  })
  .catch((error) => {
    console.log(error);
  });
