const puppeteer = require("puppeteer");

const stationArray = [
  021015, 021018, 021030, 021037, 950402, 940075, 950382, 950383, 960668,
  960669, 950452, 950454, 960672, 960693, 960700, 960706, 960658,
];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 900,
  });
  await page.goto(
    "https://terras.gsi.go.jp/data_service.php#7/34.048108/129.754028/&base=pale&ls=pale%7Ckijuntengis_works%7Ckijuntengis_plan%7Ckijuntengis_stop&disp=1111&vs=c1j0h0k0l0u0t0z0r0s0f1"
  );
  await page.click(".fright");
  // 로그인
  await page.waitForSelector("#user");
  await page.click("#user");
  await page.keyboard.type("dnr8874");

  await page.waitForSelector("#passwd");
  await page.click("#passwd");
  await page.keyboard.type("|k9LjM.6m");

  await page.waitForSelector("#btn_login");
  await page.click("#btn_login");

  // 동의함 버튼 클릭
  await page.waitForSelector('input[value="同意する（提供サービス画面へ）"]');
  await page.click('input[value="同意する（提供サービス画面へ）"]');

  // 창 활성화 될 때까지 대기.
  await page.waitForNavigation();

  // station 입력
  await page.click("#btn_mnu_search");
  await page.waitForSelector(".search_id");
  await page.click(".search_id");
  await page.keyboard.type("021015");
  await page.click("#btn_search");

  // station 선택
  await page.waitForSelector('input[value="0"]');
  await page.click('input[value="0"]');

  // station 추가
  await page.waitForSelector('img[alt="追加"]');
  await page.click('img[alt="追加"]');

  // 데이터 다운로드
  await page.waitForSelector('img[alt="ダウンロード"]');
  await page.click('img[alt="ダウンロード"]');
})();

// const data =await page.evaluate(() => {
//   const list = [];
//   const items = document.query
// })
