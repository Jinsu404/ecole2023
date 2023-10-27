### Nextjs를 이용해 로그인 페이지 만들기
___
<br>

1. Main 로그인 화면<br>
<img width="1468" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/01582529-5d33-4229-9a6f-468df7782a7e"><br>
제일 처음 접속했을 떄 보이는 화면<br>
먼저 레이아웃은 제일 상위 div에 높이를 100vh로 주고 flex를 준 뒤 align-items: center, justify-content: center를 해서 가운데 정렬했음<br>
배경을 하얀색으로 두면 너무 심심하고, 회색으로 채우면 너무 칙칙해서 background: linear-gradient를 이용해서 그라데이션으로 색을 넣엇음<br>
<br><br>
___
2. 회원가입 화면<br>
<img width="685" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/b5e580d8-c0a8-4174-944d-71b8a874d4fe"><br>
Sign Up 버튼을 누르면 useState에 True로 설정했던 로그인화면 변수를 false로 바꾸고 false였던 Signup 변수를 True로 바꿔서 로그인창 대신 회원가입 창을 띄움<br>
그리고 입력했던 email password name 의 입력값을 저장햇던 useState를 ''로 초기화함
<br>
<img width="540" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/70a0abba-d405-494e-8129-0394bb6ed95f"><br>
회원가입의 양식을 제대로 맞추지 않아서 실패했을때 alert로 알림창을 띄움 (이미 가입된 이메일인 경우도 똑같이 나옴)<br>
<img width="576" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/7ba513c4-b816-4a09-9a11-f15f44390014"><br>
회원가입을 성공했으면 성공했다는 알림창이 뜨고 다시 로그인 화면으로 넘어감

<br><br>
___
3. 로그인 했을시 화면<br>
<img width="567" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/285e8d01-dfcf-4e7e-8a3e-5ebb8906bc29"><br>
로그인 실패했을떄<br>
<img width="537" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/530a39ce-5d0b-46ba-af7b-751a496c3f18"><br>
로그인 성공했을때
<img width="1279" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/04b1e961-a09a-4985-9cd6-e85ac9529460">
<br>
로그인을 성공하면 내 포트폴리오 사이트를 새 창에 열게 했음<br>
window.open을 사용했음<br>
<img width="657" alt="image" src="https://github.com/Jinsu404/ecole2023/assets/137613256/d442d492-a86f-4cf8-86a3-c9de8bc96b57"><br>
그리고 로그인화면을 False로 바꾸고 로그인 이후 화면을 나타내는 useState를 true로 바꿔서 infomation 화면을 띄움<br>
다양한 메뉴를 넣으면 좋을거 같음 !
<br><br>
___

4. 마지막으로 로컬에서 작업한 내용을 서버에 옮겨야하는데 서버에 깔았던 리액트를 지우고 다시 nextjs를 설치해서 옮기려 했음<br>
   근데 next를 설치한뒤 빌드가 되지 않아서 실패했음

