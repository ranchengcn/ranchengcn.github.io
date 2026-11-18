---
lang: zh-CN
translation_key: announcement_6
layout: post
title: 发布 EvoX Genesis
date: 2026-08-11 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
---

我们在香港理工大学开发的 EvoX Genesis 开源了。为了看看一批编程智能体能把一个项目接力做多久，我们给了它一个空仓库，让它写一个 C 编译器。123.4 小时里，智能体先后运行了 1,019 轮，用 248,989 行 Rust 代码实现了这个编译器。这次实验的模型调用费用为 44.38 美元。

五天里，接手的智能体换了一批又一批。Genesis 把任务拆开，让智能体各自编写和测试代码，通过审查的改动就提交到仓库。下一个智能体从这次提交继续，也能查到前面试过哪些办法。最后，这个编译器通过了我们运行的全部 220 个 c-testsuite 用例，以及 36 个 LLVM 用例中的 32 个。[编译器代码与测试结果](https://genesis.evox.group/evidence/c-compiler/)

我们还用 Genesis 改写了恒星演化模拟软件 MESA 的一部分。这一次有现成的代码可以对照，任务是把其中 13 个 Fortran 模块移植到 Rust，再用原有实现核对计算结果。[MESA 实验记录](https://genesis.evox.group/evidence/mesa/)

Genesis 提供 Windows、macOS 和 Linux 版本。[下载与文档](https://genesis.evox.group/)
