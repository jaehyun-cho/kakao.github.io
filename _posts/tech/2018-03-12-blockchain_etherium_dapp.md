---
layout: post
title: 'Etherium Dapp 공부 시작'
author: jaehyun3.cho
date: 2018-03-12 20:22
tags: [blockchain, troubleshoot]
comments: true
category: 'tech'
image: /files/covers/blockchain.jpeg
---

3월 7일 사내 해커톤 팀빌딩을 다녀오고서, 같이 가기로한 영근님과 재홍님과 팀을 하려고 했으나 이러이러한 사정에 의해 영근님과는 같은팀으로 하게되었지만 재홍님과는 다른 팀으로 떨어지게 되었다. (두 팀 다 화이팅!) 4월 7일 본 행사가 진행되는데 우리 팀은 BlockChain에 관련된 프로젝트를 진행하기로 하였다. 그래서 관심은 있었지만 쉽게 도전하지 못하고있던 Blockchain에 대해 공부를 조금씩 해보고 있는 중이다.

[dApp 개발해보자](http://www.chaintalk.io/archive/lecture/1) 에 쉽게 설명이 되어있는것 같다 조금씩 따라하며 Dapp의 컨셉과 개념등을 공부하고 있는 중이다. Etherium은 smart contract라는 개념을 도입한 가장 기본이 되는 block chain으로 꼽을 수 있는데, 이를 통해 Dapp을 만들수 있다. etherium dapp은 solidity라는 javascript like한 언어를 사용하여 개발할 수 있으며, 자세한 사항들은 [공식 documentation](https://solidity.readthedocs.io/en/v0.4.21/)을 참조하여 확인할 수 있다.

Dapp을 개발하기 위한 IDE로 [remix IDE](https://remix.ethereum.org)를 사용하는데, 브라우저에서 도는 IDE이며 조금 사용해 봤는데 기존의 PC상에서 사용하는 IDE들보다는 부족한 점이 있지만, Block chain에 특화된 기능들을 많이 제공하는 것으로 보인다. Dapp은 build하면 byte code형태로 저장되어 account를 만들면 그 byte code가 보내어져 앱을 실행할 수 있는 구조로 되어있는듯 하다. 이를 위한 build를 지원하며, [Metamask(etherium wallet의 일종)](https://metamask.io/)와 연동이 잘되어 transaction을 생성하기 쉽게 잘 만들어져 있다.

이 remix IDE를 사용하던 중 아래 그림과 같이 remixd를 설치하면 local에 저장되 있는 solidity 파일을 사용할 수 있다는 것을 보고 remixd를 설치하기로 마음 먹었다. (npm, node를 모르는 나의 고난의 시작이었다..)  
![remixd](/files/remixd_screenshot.png)

## remixd
```
$ npm install -g remixd
```
위 커멘드로 install하면 되는 아주 쉬운 방법을 그대로 수행하였지만, 어쩐지 원인불명의 에러가 잔뜩 발생하였다. 하나하나 trouble shooting을 하지않아 정확하진 않지만, error내용중에는 python2만을 지원한다는 로그를 보고 python2를 설치하기도 하였으나 원인은 다른 곳에서 찾을 수있었다.

### premission

npm은 sudo (root 권한)을 이용해서 깔지 말라고 권고하고 있다고 한다. 이를 모른 생초보는 permission 관련 에러가 뜨자마자 당연하게도 sudo를 뭍여서 다시 실행하였고 여러 npm 패키지들을 이렇게 깔았었다. 하지만 remixd는 깔려고 하니 <u>**root user는 remixd의 module을 접근할 권한이 없다와 같은 에러로그**</u>를 띄우며 나를 힘들게 하였다. 때문에 sudo를 사용하지 않으면 발행하는 문제를 해결하는 방법을 찾아야했다. 다행스럽게도 npm 공식 site getting started에 [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions)라는 이름으로 친절히 설명해 주고있다. 나는 node version manager를 reinstall하는 방법을 택하였다.([방법](https://github.com/creationix/nvm/blob/master/README.md#installation)) 이 방법으로 sudo 문제는 해결할 수 있었다.  
```
$ curl -o- ht<span>tps://</span>raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

### node-gyp

또 하나의 문제는 node-gyp이라는 패키지를 설치하지 않아 발생한 것이었다. node-gyp를 이용해서 뭔가 수행을 해야하는데 없어 자꾸 실패하는 로그를 출력하였다. install command는 아래와 같다.([참고 사이트](https://github.com/nodejs/node-gyp))
```
$ npm install -g node-gyp
```
