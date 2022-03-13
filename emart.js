const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://emart.ssg.com/category/listCategoryItem.ssg?dispCtgId=6000097431"
  );

  const result = await page.evaluate(() => {
    let milk = document.querySelector(".cunit_thmb_lst").innerHTML;
    return {
      milk,
    };
  });

  console.log(result);

  browser.close();
})();
