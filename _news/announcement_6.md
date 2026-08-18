---
layout: post
title: "We released EvoX Genesis: an AI system for long-horizon autonomous software evolution"
date: 2026-08-11 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
---

Starting from an empty implementation repository, **EvoX Genesis** autonomously built a **248,989-line C compiler** over **123.4 hours** and **1,019 agent episodes**, with almost no ongoing human intervention. The recorded model-token cost was only **US$44.38**.

This result did not depend on keeping one coding agent, conversation, or context window alive for the entire project. It came from a different foundation: allowing the **software world itself to persist and evolve**.

### What EvoX Genesis is

**EvoX Genesis is an AI system for long-horizon autonomous software evolution.** More specifically, it is a **recursive AI system for long-horizon autonomous software evolution**, developed by the EvoX team at the Department of Data Science and Artificial Intelligence, The Hong Kong Polytechnic University.

Its core idea is simple:

> **Let the software world keep evolving.**

Genesis does not try to make one agent work forever, nor does it claim that the underlying foundation model evolves by itself. Instead, it creates a persistent software world in which different short-lived agents can recursively develop software, validate their results, preserve successful changes, and hand the validated state to the agents that follow.

### How the software world evolves

At each stage, agents decompose goals, work on local tasks, and validate their results. Successful changes become part of the evolving software world: its code, architecture, constraints, test results, and development history. New agents inherit this validated state and continue developing it rather than starting over.

In this system, the path of evolution is:

**software world → development state → validated results → continued inheritance and development**

Recursion is the key mechanism, an evolution-oriented approach is the system paradigm, and autonomous software development is the resulting capability.

> **Agents can disappear. The software world keeps evolving.**

### Why it is different from ordinary coding agents

Unlike conventional coding-agent approaches, EvoX Genesis does not depend on one persistent agent, a single continuously growing context, or a fixed set of predefined agents and roles. Its long-term continuity resides in the persistent software world rather than in any individual agent or model.

Users can begin with a description of what the software should become. Genesis then recursively handles task decomposition, agent generation, implementation, validation, and the preservation of successful results. Agents and models may change over time, while the software world continues from the validated consequences of earlier work.

### A 248,989-line C compiler built from scratch

The compiler produced by EvoX Genesis passed:

- **220/220** c-testsuite tests;
- **32/36** LLVM evaluation cases; and
- **93/93** randomly generated Csmith programs.

The experiment used DeepSeek V4 Flash. There was no existing compiler implementation for the system to complete: the compiler was built from scratch.

### Continuity across different models

In a separate experiment, a software world initially developed with GLM 5.2 was later handed over to DeepSeek. The resulting system ultimately passed **1,820/1,820** held-out LLVM SingleSource tests.

This continuity belongs to the software world, not to any one model. Models can change. Agents can change. The validated development state remains and continues to evolve.

### Evolving mature software

EvoX Genesis can also work with mature software rather than starting from zero. In an experiment involving MESA, a long-running scientific computing system for stellar evolution, the system refactored **13 Fortran modules comprising 139,414 lines of code** into corresponding Rust crates. The recorded model-token cost was approximately **US$10.60**.

### Open source and available now

EvoX Genesis is now open source, with installers available for **Windows, macOS, and Linux**.

Learn more and get started at the [EvoX Genesis official website](https://genesis.evox.group/).

**Agents come and go. The software world keeps evolving.**
