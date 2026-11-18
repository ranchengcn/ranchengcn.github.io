---
lang: zh-CN
translation_key: announcement_4
layout: post
title: 关于大模型解题多样性的论文入选 NeurIPS 2025 Spotlight
date: 2025-09-20 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
homepage: false
---

我与 Jian Yao、Xingyu Wu、Jibin Wu 和 Kay Chen Tan 合作的论文 _Diversity-Aware Policy Optimization for Large Language Model Reasoning_ 入选了 NeurIPS 2025 Spotlight。

一道数学题让模型做五遍，五次都答对了，用的可能都是同一种解法。我们想知道，如果模型能用几种不同的方法算出答案，它还有多大的学习空间。我们比较了 12 个语言模型，发现在推理能力较强的模型中，解法越多样，进一步提升的潜力往往也越大。

据此，我们调整了训练方法。模型答对时，新的训练目标会鼓励它在推导过程中尝试不同的步骤。以 Qwen2.5-Math-7B 为例，在 MATH500 上，用原来的 R1-zero 训练，单次作答的正确率为 74.6%。改用 R1-zero-Div 后，这一数字升至 78.2%。[论文](https://proceedings.neurips.cc/paper_files/paper/2025/hash/8808b4c72d5ade9bbcf9270ac6411314-Abstract-Conference.html) · [代码](https://github.com/nigelyaoj/R1_zero_Div)
