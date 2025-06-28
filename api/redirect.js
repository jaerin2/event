export default function handler(req, res) {
  const { serial } = req.query;

  const couponRedirects = {
    "112408221": "https://granviastar.co.kr/FKAWO154BAQ67BP2",
    "123984325": "https://granviastar.co.kr/AWBOF654PAQ21AZ1",
    "130584212": "https://granviastar.co.kr/SBAOA947XVA11WV7",
    "142156241": "https://granviastar.co.kr/JYTWE497VZA09AQ2",
    "153289543": "https://granviastar.co.kr/SAVJQ848ZJE64AD6",
    "161047214": "https://granviastar.co.kr/JDABZ948HDW09AQ4",
    "173240832": "https://granviastar.co.kr/MKJFG489NSA94AY2",
    "189823451": "https://granviastar.co.kr/KEROI945BAW46RM3",
    "201248012": "https://granviastar.co.kr/UTTRS184NDA48ZC2",
    "502184912": "https://granviastar.co.kr/JMRTD494ZJA06HW1"
  };

  if (serial && couponRedirects[serial]) {
    res.writeHead(302, { Location: couponRedirects[serial] });
    res.end();
  } else {
    res.status(404).setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>유효하지 않은 쿠폰</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            padding: 100px 20px;
            background: #fefefe;
            color: #333;
          }
          .msg {
            font-size: 1.8rem;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="msg">❗ 유효하지 않은 쿠폰입니다</div>
        <div>카카오톡 채널에서 발급된 쿠폰만 등록 가능합니다.<br>문의: granviasta@gmail.com</div>
      </body>
      </html>
    `);
  }
}
