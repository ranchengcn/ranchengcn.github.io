---
layout: post
title: "We released EvoX Genesis: a recursive self-evolving system for long-horizon software development"
date: 2026-08-11 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
---

We are excited to announce the release of **EvoX Genesis**, a recursive self-evolving AI system developed by the EvoX team at the Department of Data Science and Artificial Intelligence, The Hong Kong Polytechnic University.

EvoX Genesis explores a different foundation for long-horizon software development. Instead of requiring a single agent, conversation, or context window to persist throughout an increasingly complex project, it allows the **software world itself to persist and evolve**.

At each stage, agents decompose goals, work on local tasks, and validate their results. Successful changes become part of the evolving software world---its code, structure, constraints, test results, and history. Individual agents can then disappear, while new agents continue from the validated state they leave behind.

> **Agent does not persist. Its validated consequences do.**

For users, this means that building a complex software system can begin with a simple description of what the software should become. EvoX Genesis recursively handles task decomposition, agent generation, implementation, and validation, without requiring users to design a fixed collection of agents, roles, or workflows in advance.

### Building a 248,989-Line C Compiler from Scratch

To demonstrate the system, we asked EvoX Genesis to build a C compiler from an empty implementation repository. Over **123.4 hours** and **1,019 agent episodes**, the system produced **248,989 lines of code**, with a recorded model-token cost of only **US$44.38**.

The resulting compiler passed:

- **220/220** c-testsuite tests;
- **32/36** LLVM evaluation cases; and
- **93/93** randomly generated Csmith programs.

The experiment used DeepSeek V4 Flash. There was no existing compiler implementation for the system to complete: the compiler was built from scratch.

### A Software World That Outlives Any One Model

The continuity of EvoX Genesis is not tied to a single model. In a separate experiment, a software world initially developed with GLM 5.2 was later handed over to DeepSeek. The evolving system ultimately passed **1,820/1,820** held-out LLVM SingleSource tests.

Models can change. Agents can change. The software world continues.

EvoX Genesis can also work with mature software rather than starting from zero. In an experiment involving MESA, a long-running scientific computing system for stellar evolution, the system refactored **13 Fortran modules comprising 139,414 lines of code** into corresponding Rust crates. The recorded model-token cost was approximately **US$10.60**.

### Open Source and Available Now

EvoX Genesis is now open source, with installers available for **Windows, macOS, and Linux**.

Learn more and get started at the [EvoX Genesis official website](https://genesis.evox.group/).

**Agents come and go. The software world keeps evolving.**
