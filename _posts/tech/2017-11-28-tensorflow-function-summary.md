---
layout: post
title: '텐서플로우에서 사용되는 함수 정리'
author: jaehyun3.cho
date: 2017-11-28 22:22
tags: [tensorflow]
comments: true
category: 'tech'
image: /files/covers/tensorflow.jpg
---

텐서플로우에 대해서 기초부터 조금씩 공부를 해보고 있는 중입니다. 이 페이지에서는 예제를 진행해 나가면서 잘 모르겠거나 의미(?)있는 텐서플로우 함수들에 대한 개인적인 이해를 바탕으로한 설명과 예제를 간단하게 적어볼 생각입니다.

## placeholder

[tensorflow home 설명 link](https://www.tensorflow.org/api_docs/python/tf/placeholder)
```python
tf.placeholder()
```

placeholder는 간단하게 말하면 input을 위한 자리를 마련해 놓는 것이라고 볼 수 있습니다. input data를 딱 정해놓고 쓰는 것이 아닌 자리만 만들어 놓고, 그때그때 다양한 data set을 이용해서 학습을 가능하게 하도록 해줍니다. placeholder는 feed dictionary와 같이 쓰일 때가 많습니다. feed dictionary는 그래프를 실행시킬 때, 그 그래프의 tensor중 input을 feed_dict로 교체하여 사용할 수 있게 합니다.([tensorflow link](https://www.tensorflow.org/api_guides/python/reading_data#Feeding)) placeholder와 feed_dict를 이용한 예제는 다음과 같습니다.
```python
import tensorflow as tf

a = tf.placeholder(tf.float32, name="input_a")  # a input 을 위한 placeholder 생성
b = tf.placeholder(tf.float32, name="input_b")  # b input 을 위한 placeholder 생성
mul = tf.multiply(a, b, name="multi")

sess = tf.Session()
out = sess.run(mul, feed_dict={a: 3., b: 5.}))
print(out)
sess.close()
```


......