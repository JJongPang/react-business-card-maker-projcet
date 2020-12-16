# Buiness Card Maker Project

<br />

## 프로젝트 소개
명함을 이쁘게 만들어주는 웹 어플리케이션

<br />

## 웹 기술 개발 스택
- HTML
- CSS
- POST CSS
- JavaScript
- React.js
- React Hooks
- React Router
- Firebase(Authentication, Realtime Database)
- Cloudinary 이미지 저장소
- aws(s3)

<br />

#### 프로젝트 개발 흐름
- 프로젝트 준비하기
- UI 구성하기
- 기능 구현하기

<br />

##### UI 구성
- login: Firebase Authentication 이용한 Google, GitHub 로그인 UI를 보여 줍니다.
- header, footer: 상단, 하단 골격 UI 를 보여 줍니다.
- maker: cards, preview를 보여주는 UI 입니다.
- cards: props로 전달된 카드에 있는 object에 잇는 정보를 이용해서 cards UI를 보여 줍니다.
- preview: cards에 update된 state값을 보여주는 UI를 보여 줍니다.
- card_edit_form: 사용자가 굉장히 많은 입력을 해서 form을 submit, delete 할 수 있도록 관리 합니다.
- card_add_form: cards state를 업데이트 합니다. 즉, 새로운 데이터를 추가할 수 있도록 관리 합니다.
- image_file_input: Cloudinary를 이용한 이미지 업로드를 관리 합니다.
  
<br />

#### 기능 구현
- Google, GitHub로 만 가능한 로그인 기능 
- 로그인 유지
- 로그아웃
- 명함 생성
- 명함 수정
- 명함 삭제
- 명함 이미지 추가
  
<br />

## Note
### Firbase
Firebase를 이용할 경우 서버 인프라를 고민할 필요가 없습니다. Database, Storage, Auth, Analytice까지 제공해주기 때문입니다. 기본적으로 서비스를 구축하기 위한 서버단 세팅 등을 고민하지 않고 클라이언트 단의 작업만 진행하여 서비스를 제작할 수 있기에 Firebase를 선택했습니다.

#### Authentication
Firebase 인증은 앱에서 사용자 인증 시 필요한 백엔드 서비스와 사용하기 쉬운 SDK, 기성 UI 라이브러리를 제공합니다. 비밀번호, 전화번호, ID(Google, Facebook, GitHub 등)를 통한 인증이 지원됩니다.

#### Realtime Database


<br />

#### *제휴 ID 공급업체와 통합하여 사용자를 인증하는 예시
```js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firbaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
```

### Cloudinary
Cloudinary는 클라우드 기반의 이미지 및 비디오 관리 서비스입니다. 강력하면서 쉬운 API를 제공하고 있어 조금만 익숙해지면 컨텐츠를 매우 효율적으로 관리할 수 있습니다.

<br />

#### *Cloudyinary 예제
```js
class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pdzaoz52");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/drqni4rhj/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
```

## 프로젝트 URL
http://card-maker-project-s3.s3-website.ap-northeast-2.amazonaws.com/