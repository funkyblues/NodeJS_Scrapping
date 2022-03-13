const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(
    "https://emart.ssg.com/category/listCategoryItem.ssg?dispCtgId=6000097431"
  );

  const data = await page.evaluate(() => {
    const list = [];
    const items = document.querySelectorAll("cunit_thmb_lst > cunit_t232");

    for (const item of items) {
      list.push({
        title: item.querySelector(".cunit_md title").innerHTML,
      });
    }
    return list;
  });
  console.log(data);
})();
