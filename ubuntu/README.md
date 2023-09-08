### MacOS에서 UTM을 통해 ubuntu 서버 구축하기 (cockpit, cloudpanel)
---
1. UTM 설치<br>
<img width="908" alt="utm 설치" src="https://github.com/Jinsu404/ecole2023/assets/137613256/23fe31ca-1afd-46e5-b44c-87efbb4f59ae">  <br>
  출처 <https://king-ja.tistory.com/93>
___
2. UTM 가상 머신에 ubuntu 설치<br>
<img width="929" alt="utm ubuntu세팅" src="https://github.com/Jinsu404/ecole2023/assets/137613256/cc811c1c-d288-4fc6-87d8-22d7f7eaa26f"><br>`ubuntu 세팅`<br><br>
<img width="1297" alt="ubuntu 설치과정1" src="https://github.com/Jinsu404/ecole2023/assets/137613256/f8752d9b-70f2-4888-b026-d3f77c6c38bd"><br>
<img width="1289" alt="ubuntu 설치과정2" src="https://github.com/Jinsu404/ecole2023/assets/137613256/755101a5-0d85-4e4f-a401-40affc3a304d"><br>`ubuntu 설치하는 과정`<br><br>
<img width="1296" alt="ubuntu 설치완료" src="https://github.com/Jinsu404/ecole2023/assets/137613256/d826e2bf-64f1-4709-ac26-e2cab6cce783"><br>`ubuntu 설치 완료`<br><br>
이 과정에서 ssh 설정과 ip 입력을 하지못했음<br><br>
___
4. ubuntu 설치후 update & upgrade<br><br>
처음엔 업데이트가 에러가 났음<br>
그래서 chatGPT한테 물어봄<br>
<img width="803" alt="update에러 chatGPT" src="https://github.com/Jinsu404/ecole2023/assets/137613256/30af1b7f-12d0-4eaf-9f0b-c9871b7d5ebc"><br>
<img width="737" alt="update에러 chatGPT2" src="https://github.com/Jinsu404/ecole2023/assets/137613256/070cb615-ab1a-4e48-af84-45429a64b33f"><br>
다행히 chatGPT가 가르쳐 준대로 해서 해결이 됨<br><br>
<img width="1301" alt="ubuntu update후 upgrade완료" src="https://github.com/Jinsu404/ecole2023/assets/137613256/fe3cf91f-364f-4403-a0b6-9f70f554091c"><br>`update한뒤 upgrade`<br>
명령어 `sudo apt-get update` , `sudo apt-get upgrade`<br><br>
업그레이드 이후 clone을 통해 복제해서 백업해뒀지만 사진을 깜박함<br>
업그레이드 한 뒤 reboot하는것을 깜박했음<br>
그래도 딱히 오류는 없었던것 같음<br><br>

___
4.cockpit 설치<br>
<img width="1289" alt="cockpit설치" src="https://github.com/Jinsu404/ecole2023/assets/137613256/a7d5d8cf-7b94-42aa-b2b2-f7b34b7901a6"><br>`cockpit설치`<br>
명령어 `sudo apt install cockpit` 을 통해 cockpit을 설치함<br>
<img width="1289" alt="cockpit 설치후 스냅샷" src="https://github.com/Jinsu404/ecole2023/assets/137613256/f2b7beb3-d7f7-4bdf-8229-fa23a8b95f1a"><br>`cockpit 설치후 clone`<br><br>
<img width="1465" alt="cockpit 첫 화면" src="https://github.com/Jinsu404/ecole2023/assets/137613256/8e985e6e-c411-4fd8-83a9-842fcf5965ac"><br>`cockpit 설치후 첫 화면`<br><br>
<img width="1465" alt="cockpit 로그인후 화면" src="https://github.com/Jinsu404/ecole2023/assets/137613256/0efe53e0-d2f7-4e8c-96b6-fba21333157c"><br>`cockpit 로그인 이후 화면`<br><br>
설치후 update와upgrade하는것을 깜박했음<br><br>

___
5. cockpit의 터미널을 통해 Cloudpanel 설치하기<br>
<img width="1466" alt="cloudpanel 설치" src="https://github.com/Jinsu404/ecole2023/assets/137613256/f27083c5-2184-4c7e-86cd-71141f3895cb"><br>`cockpit 터미널에서 cloudpanel 설치`<br>
<img width="1465" alt="cloudpanel설치후 접속이 안됨" src="https://github.com/Jinsu404/ecole2023/assets/137613256/abb1c443-0f62-48c7-8d74-57a1fdb259cd"><br><br>
설치를 했는데 교수님이 가르쳐주신것과 뭔가 다름<br> 여기서 이상함을 느낌...<br>
찾아보니 LTS버전이 맞지않아서 발생한 것이고 확인해보니 LTS 22.04에서 cloudpanel을 설치해야하는데 나는 낮은버전 iso 파일로 설치해서 안됐음<br><br>
___
6. LTS 버전 업데이트
<img width="1465" alt="LTS 버전 업그레이드" src="https://github.com/Jinsu404/ecole2023/assets/137613256/2b06024a-d41e-490d-9ae7-98571261b180"><br>`LTS 버전 업데이트 과정`<br>
<img width="1466" alt="LTS버전 업그레이드 이후 cloudpanel설치" src="https://github.com/Jinsu404/ecole2023/assets/137613256/073a1b83-8d9b-4e4c-9a97-d42ccde73f36"><br>`LTS 버전 업그레이드 이후 cloudpanel 설치`<br><br>
비록 한번더 오류가 나서 완성은 못했지만 어떻게 설치하는지 이해했기 때문에<br>
강의를 마치고 최신버전의 unbuntu iso 파일을 설치해서 다시 해볼 예정
