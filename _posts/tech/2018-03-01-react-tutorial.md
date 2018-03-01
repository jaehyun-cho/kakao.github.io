---
layout: post
title: 'React.js 공부 시작'
author: jaehyun3.cho
date: 2018-03-01 22:57
tags: [react, javascript]
comments: true
category: 'tech'
image: /files/covers/react.png
---

최근 React.js를 공부하려고 김민준님의 [velopert blog](https://velopert.com/)와 강의자료를 토대로 공부를 해보려고 하고있다. 자바스크립트를 거의 몰라서 조금 어려움을 겪고 있는 중인데 공부해보면서 trouble shooting 과정을 여기에 기록해볼 생각이다.

## webpack
webpack은 web에서 사용할 모듈을 한대 모아서? 하나의 번들로 모아주는 역할을 하는 모듈이라고 볼 수 있다. 자세히 설명하면 웹팩은 프로젝트의 구조를 분석하고 자바스크립트 모듈을 비롯한 관련 리소스들을 찾은 다음 이를 브라우저에서 이용할 수 있는 번들로 묶고 패킹하는 모듈 번들러(Module bundler)다. (출처: http://jusungpark.tistory.com/52 [정리정리정리])

이 놈(?)의 webpack을 사용하여 기본 react skeleton 코드를 짜려고 하는 중인데, velopert님의 설명은 2015년즈음의 사용방법을 토대로 설명한 것 같은데 지금 최신버전으로 적용하려니 조금 안 맞는 부분이 있었다....

### webpack.config.js에서 수정사항

강의 영상에서는 module의 loader에 대해서 정의할 때 loaders 키를 써서 정의하였는데 이는 rules로 변경되었다.
```javascript
    module: {              |    module: {
        loaders: [         |        rules: [
            {              |            {
                ...        |                ...
```

loader 모듈을 정의할 때 react-hot, babel 과 같이 사용하던 것이 뒤에 *-loader를 붙이는 방식으로 변경되었다.
```javascript
    loaders: ['react-hot', 'babel']  |    loaders: ['react-hot-loader', 'babel-loader']
    ...                              |    ...
```

react-hot-loader는 전체를 refresh하는 대신 reflow, repaint 된 부분만 load할 수 있는 모듈인데 이를 위처럴 react-hot-loader라고 쓰고 사용하려고 하니 **react-hot-loader/index.js' is not a loader (must have normal or pitch function)**과 같은 에러가 발생하여 확인하니 [확인사이트](https://teamtreehouse.com/community/reacthotloaderindexjs-is-not-a-loader-must-have-normal-or-pitch-function)에서 보는 바와 같이 /webpack을 붙이면 해결할 수 있다고 하여 똑같이 적용해보니 또 다른 에러가 나고있는 상황이다.

```javascript
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['env', 'react']
                })],
                exclude: /node_modules/
            }
        ]
    },
```
error log
----------
> ERROR in multi (webpack)-dev-server/client?http://0.0.0.0:7777 webpack/hot/dev-server ./src/index.js
>
> Module not found: Error: Can't resolve 'react-hot-loader/webpack' in '/Users/jacob/Desktop/Git/React_study/react-tutorial'
>
> @ multi (webpack)-dev-server/client?http://0.0.0.0:7777 webpack/hot/dev-server ./src/index.js


......