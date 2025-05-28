export default function handler(req, res) {
  const { serial } = req.query;

  const couponRedirects = {
    "501840123": "/VFREA523BAR01QP5",
    "306236584": "/OAWBQ195BAO42YQ1",
    "205356356": "/PVAQN014NAQ53WI0",
    "102533233": "/BAOVA502QFP14BA1",
    "104589325": "/QRPWV325ATB30QA2",
    "103025932": "/ASBFH925BOB62QP3",
    "104012421": "/BOAAP104NHK39RW4",
    "102180421": "/JBVOA402BQP10LZ5",
    "104218214": "/KAFAQ620YUO35CN6",
    "109523889": "/TRWQC052ALS50IR7",
    "105298312": "/VOBAQ520BWL60RI8",
    "103250815": "/DEQSL402XVB29QL9",
    "100924523": "/AOVDR602BMW49WL0"
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
