const axios = require("axios");

let article = {};
const crawler = (pageNumber) => {
  axios
    .get(
      `https://api.brunch.co.kr/v1/search/article?q=Hello&page=${pageNumber}&pageSize=20&highlighter=y&escape=y&sortBy=accu`
    )
    .then((response) => {
      const data = response.data;
      article[pageNumber] = data.data.list;

      console.log("current page number: ", pageNumber);
      // console.log(data.data.list[0]);
      const nextNumber = pageNumber + 1;
      if (pageNumber < 10) {
        crawler(nextNumber);
        return;
      }

      console.log(article);
    });
};

crawler(1);
