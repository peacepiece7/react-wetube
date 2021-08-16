# react-wetube

[demo](https://peacepiece7.github.io/react-wetube/)


# 구조

index.html --- index.js --- services --- youtube.js
                  ㄴㅡㅡ app.jsx
                            ㅏ--- video_list.jsx --- video_item.jsx
                            ㅏ--- header.jsx
                            ㅏ--- watch.jsx
                  
# 사용한 기능

- react-hooks (useState, useRef, useCallBack, memo)
- postCSS

# 태그

- youtube api
- post man
- gh-pages
- axios
- react env


# same site 관련 문제

[참고 사이트](https://darrengwon.tistory.com/647)
[same site 정책](https://www.hahwul.com/2020/01/18/samesite-lax/)

브라우저에서 sameSite의 기본값은 none에서 lax로 변경됨으로 생긴 문제

### option
- none : 모든 사이트 허용
- lax : 허용한 사이트와 같은 사이트에서만
- strict : 같은 사이트 에서만 허용
