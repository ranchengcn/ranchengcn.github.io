---
lang: en
translation_key: announcement_4
layout: post
title: Our paper on solution diversity is a NeurIPS 2025 Spotlight
date: 2025-09-20 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
homepage: false
---

NeurIPS 2025 selected our paper _Diversity-Aware Policy Optimization for Large Language Model Reasoning_ for a Spotlight. I wrote it with Jian Yao, Xingyu Wu, Jibin Wu and Kay Chen Tan.

A model can get the same math problem right several times and use the same calculation every time. We were interested in what happens when it can find several different ways to get there. Across 12 language models, we found that among the stronger models, a wider range of solutions went along with greater potential to improve.

That observation led us to change how we train the model. Our method, R1-zero-Div, encourages variety in the steps it takes when it solves a problem correctly. On MATH500, the share of problems Qwen2.5-Math-7B solved on its first attempt rose from 74.6% with R1-zero to 78.2% with R1-zero-Div. [Paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/8808b4c72d5ade9bbcf9270ac6411314-Abstract-Conference.html) · [Code](https://github.com/nigelyaoj/R1_zero_Div)
