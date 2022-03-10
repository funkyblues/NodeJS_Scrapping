const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get(
    "https://www.tistory.com/category/getMoreCategoryPost.json?category=life&lastPublished=0&first=true"
  )
  .then((response) => {
    const htmlString = response.data;
    // const $ = cheerio.load(htmlString);
    // const href = $("a").attr("href");
    console.dir(htmlString.data.list);
  });
