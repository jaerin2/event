# 🎟️ 쿠폰 리디렉션 서버 (Vercel 기반)

이 프로젝트는 JavaScript에 노출되지 않도록 **쿠폰 번호 기반의 리디렉션 URL을 안전하게 처리**하는 서버리스 백엔드입니다.  
클라이언트 코드에 리디렉션 주소를 직접 작성하지 않아 **쿠폰 코드 유출, 악용을 방지**할 수 있습니다.

## 📌 주요 기능

- 🔒 리디렉션 주소 클라이언트에 노출되지 않음
- 🚫 코드 조작으로는 경로 확인 불가능
- ✅ Vercel 무료 플랜으로 비용 없음
- ⚙️ 쿠폰 코드에 따라 다른 경로로 자동 리디렉션

---

## 📥 사용법

1. 다음과 같은 형식으로 접속합니다:
https://your-vercel-domain.vercel.app/api/redirect?serial=쿠폰번호

3. 서버가 해당 쿠폰 번호에 맞는 URL로 자동 리디렉션합니다.

---

## 🛠️ 쿠폰 등록 방법

`/api/redirect.js` 파일 안의 `redirectMap`에 다음과 같이 추가하세요:

```js
const redirectMap = {
  "쿠폰번호": "/url",
  "쿠폰번호": "/url",
  // 계속 추가
};
