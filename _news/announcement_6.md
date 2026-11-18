---
lang: en
translation_key: announcement_6
layout: post
title: We released EvoX Genesis
date: 2026-08-11 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
---

Our team at PolyU has released EvoX Genesis, an open-source system for software projects that take many coding sessions to finish. We gave it an empty repository and asked it to build a C compiler. Over 123.4 hours and 1,019 agent sessions, it produced 248,989 lines of Rust code. The model tokens for that run cost US$44.38.

A project that runs for five days needs a way to hand work from one session to the next. In Genesis, agents split up a task, test their changes and commit the code that passes review. The next agent can start from that commit and see what earlier agents tried. The compiler passed all 220 cases we ran from c-testsuite and 32 of the 36 LLVM cases we evaluated. [Compiler project and test results](https://genesis.evox.group/evidence/c-compiler/)

We also tried Genesis on MESA, a scientific codebase used to model how stars evolve. Here the task was to port 13 existing Fortran modules to Rust, using the original implementations to check the results. [MESA case study](https://genesis.evox.group/evidence/mesa/)

Genesis is available for Windows, macOS and Linux. [Downloads and documentation](https://genesis.evox.group/)
