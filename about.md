---
layout: page
title: About
permalink: /about/
image: /files/covers/blog.jpg
sitemap: yes
tags: [about]
---

[looksgoood](https://looksgoood.github.io) 조제현의 일상&기술 블로그입니다.

# Careers

## 한양대학교 컴퓨터 공학 전공 (2008.3 ~ 2014.2)

### 정보과학회 논문
- 자연어처리 기반의 후보 주제어 선정을 통한 주제어 추출 성능 개선
- 논문: [Link](https://www.dbpia.co.kr/Journal/ArticleDetail/NODE02323523)

## 삼성전자 Samsung Research (2014.1 ~ 현재)

### Tizen Platform Release management (2014)
- tizen 2.3, 2.4 mobile, tv, wearable에 대한 platform relaese engineering
- OBS(open build service), Jenkins, Jira, Confluence 등을 통한 release 지표 관리 및 issue reporting
- python, node.js를 이용한 다양한 툴 개발  
  (tizen test automation, binary information diff 분석, package manager 관리 script, SR 관리 프로그램)
* 기술 스택: git, obs, jenkins
  

### Samsung Gear S2와 iOS연동 protocol 개발 (2015)
- BLE GATT profile을 이용한 transfer protocol 설계 및 구현
- fragment/reassemble 및 retransmission, CRC check  프로세스 개발
- glib, IPC(dbus)를 이용한 daemon 개발
* 기술 스택 : glib, dbus, gdb, tizen, C
* gear S2 ios 연동 solution 상용화([Link](https://itunes.apple.com/us/app/samsung-gear-s/id1117310635?mt=8))
  

### Samsung IoTivity 상품화 (2016)
- IoTivity의 iOS 지원을 위한 objective-C wrapper layer API 개발
- Samsung connect auto(OBD2) client(iOS) connection manager 모듈 개발
  - IoTivity BLE transport의 connection 유지를 위한 모듈 개발 및 상품화 적용
* 기술 스택: IoTivity, iOS, objective-C, BLE, GATT
  

### IoTivity open source contribution (2016)
- CoAP over BLE-GATT protocol 개발 ([IOT-1210](https://jira.iotivity.org/browse/IOT-1210) / [PATCH](https://gerrit.iotivity.org/gerrit/#/c/9979/))  
  [IoTivity commit 내역](https://github.com/iotivity/iotivity/commits?author=looksgoood)  
  이 프로토콜에 대한 논문 참여 [PAPER](https://www.semanticscholar.org/paper/CoAP-over-BLE-GATT-for-OCF-Yoon-Choi/3e5de2a180d033db1bb3bcf70837f103174eae3f)
- TCP connection manager 개발 ([IOT-154](https://jira.iotivity.org/browse/IOT-1540) / [PATCH](https://gerrit.iotivity.org/gerrit/#/c/15909/) / [WIKI](https://wiki.iotivity.org/connection_manager_d2s_to_d2d))
* 기술 스택: protocol, connectivity, BLE, GATT, TCP, Mux, CoAP, IoTivity, C
  

### IoTivity open source contribution (2017)
- Smart Home API 설계 및 구현 ([CODE](https://github.com/iotivity/iotivity/tree/smarthome_api) / [WIKI](https://wiki.iotivity.org/proposal_for_iotivity_smart_home_api))
  - 기존 IoTivity의 사용성을 개선한 API 개발
  - OCF Device [spec](https://openconnectivity.org/specs/OCF_Device_Specification_v1.3.0.pdf) 에 따른 설계 및 개발 진행
  - [IOT-1890](https://jira.iotivity.org/browse/IOT-1890)
* 기술 스택: API, C++, OOP, Singleton pattern, Pimpl idiom, IoTivity, OCF
  

### Lightweight OCF stack 개발 (2017)
- OCF spec을 만족하는 경량화 된 stack 개발
- Contiki OS에 사용된 er-coap을 기반으로 coap module 개발 (transaction, blockwise transfer, CoAP over TCP등)
- ip 통신을 위한 udp/tcp 통신 모듈 개발
- queue, list등의 자료구조에 thread safety 지원을 위한 lock free algorithm 적용 (CAS)
- Code repository : [https://github.com/Samsung/RT-OCF](https://github.com/Samsung/RT-OCF)
* 기술 스택: Tizen RT, RTOS, CoAP, Blockwise transfer, CoAP over TCP, CAS, OCF, pthread, mutex
  

### IoTivity-lite code contribution 및 3rd party 업체 상품화 (2018)
- 기존 OCF 코드인 Iotivity 대비 메모리를 효율화 하여 RTOS에서 사용할 수 있도록 만든 stack 개발
- CoAP over TCP code contribution
- 삼성 클라우드와 연동을 위한 Framework 개발
- Code repository : [https://github.com/iotivity/iotivity-lite/tree/samsung](https://github.com/iotivity/iotivity-lite/tree/samsung)
* 기술 스택: Tizen RT, RTOS, CoAP, CoAP over TCP, OCF, Free RTOS

### KEPCO Demand Response(DR) 서비스 상품화 (2018~2019)
- OCF 2.0 spec을 만족하는 iotivity stack 개발
- KEPCO cloud와 연동하는 Things framework 개발
- 삼성 시스템 에어컨 일부모델 탑제 상품화 진행중
* 기술 스택: REST, CoAP, Tizen, JWT, 

### Multi device 기반 context share framework 개발 (2019)
- Home mesh network를 구성하여, home 내의 기기들의 context 정보를 수집하고, local execution 할 수 있는 환경을 제공하는 framework 개발
- Access control list를 관리해 주는 cloud service 개발
- Bixby on device control(IR Blaster) 개발
* 기술 스택: REST, MSA. glib, BLE, android, JNI, ndk, IPC, dbus, cloud, JAVA, C, 

### 자격 및 인증
- Samsung Software Certificate Professional 등급 취득
- Samsung Software Associate Architect 취득


### 대외 활동
- 싸이그래머 Deep Choice 스터디 (Reinforcement Learning및 Machine Learning) (2019.1 ~)
- GDG(Google Developer Group) Korea 행사 참여 (2019.1)
- Google Machine Learning Study Jam (2019.2 ~)
- [DDD](https://www.facebook.com/dddstudy/) 활동
  - ForUrth android application 개발 (Backend 담당)
  - Django Framework 사용
  - REST API 및 계정, DB 서버 구축
  - [LINK](https://github.com/desingdeveloperdayday/PickedUpMole_ForEarthForUs)
- 삼성전자 사회공헌단 OneWeek 태국 치앙마이 봉사활동
  - IT 솔루션을 활용하여 소수민족 여성분들이 만드는 수공예품 판매 활성화
  - Brand tag 와 SNS posting을 도와주는 Application 개발
  - [Repository](https://github.com/dongs0104/pricetag)
