---
layout: post
title: Our Paper is Accepted by NeurIPS 2025 as Spotlight
date: 2025-09-20 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
---



---

### Diversity-Aware Policy Optimization for Large Language Model Reasoning

**Authors:** Jian Yao; Ran Cheng; Xingyu Wu; Jibin Wu; Kay Chen Tan  
**Conference:** *The Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025, Spotlight)*  
**Paper:** [[2505.23433] Diversity-Aware Policy Optimization for Large Language Model Reasoning](https://arxiv.org/abs/2505.23433)  
**Code:** [GitHub - nigelyaoj/R1_zero_Div](https://github.com/nigelyaoj/R1_zero_Div)

---

### 🌟 A New Look at Reasoning in the Era of Reinforcement-Tuned LLMs

Large Language Models (LLMs) have achieved remarkable reasoning performance in recent years, largely fueled by Reinforcement Learning (RL)–based fine-tuning techniques. Since **DeepSeek-R1** introduced the *Group Relative Policy Optimization (GRPO)* framework, numerous studies have sought to refine reward design and training efficiency—pushing the limits of mathematical and logical reasoning.

Yet, one critical factor that has long proven vital in classical RL—the **diversity of policies**—has been largely overlooked. When RL is applied to enhance LLM reasoning, does policy diversity still matter?  
This question lies at the heart of *Diversity-Aware Policy Optimization for LLM Reasoning*, the first systematic study revealing the importance of diversity in RL-tuned LLMs and introducing a new approach—**R1-zero-Div**—that explicitly incorporates diversity into the RL fine-tuning process.

---

### 🔍 Understanding the Background: Why Diversity Matters

Traditional RL research has consistently shown that **policy diversity** promotes exploration, prevents premature convergence, and improves generalization. Analogously, in LLM reasoning tasks, “diverse solutions” may represent different chains of thought or logical pathways—essentially, varied *ways of thinking*.

Building on this insight, the authors systematically investigated whether diversity could similarly affect the learning potential of LLMs under RL fine-tuning. Their findings demonstrate that diversity is not merely aesthetic—it is *predictive* of further learning gains.

---

### 🧪 A 12-Model Diversity Analysis

To test this hypothesis, the team conducted a comprehensive study involving **12 representative LLMs**, ranging from base to RL-tuned models, evaluated on the **MATH** dataset.  
They examined three key indicators:

1. **Solution Diversity (Div-Equ):** structural variability in problem-solving formulas.

2. **Potential@k (k = 16):** the estimated improvement capacity after RL fine-tuning.

3. **Pass@1 Accuracy:** correctness under single sampling.

The results revealed a striking pattern:

> For strong reasoners (Pass@1 > 0.4), diversity and improvement potential are **strongly correlated**—models that can generate more varied correct solutions are more likely to improve further through RL.  
> In essence, diversity is a catalyst for sustained reasoning growth.

---

### ⚙️ The Proposed Method: R1-zero-Div

Motivated by these findings, the authors extended the **R1-zero** framework to encourage diversity explicitly.  
Their method introduces a **token-level entropy regularization** term to measure the richness of decision-making during generation—without biasing toward longer sequences. To ensure learning quality, this regularization is applied **only to correct samples**, ensuring a balanced optimization between *quality* and *diversity*.

Formally, R1-zero-Div augments the GRPO loss with a controlled diversity term, creating a training objective that rewards not only correctness but also the *variety* of valid reasoning paths.  
The approach is lightweight, requires **no extra supervision**, and integrates seamlessly into existing RL pipelines.

---

### 📈 Experimental Highlights

Using **Qwen2.5-Math** as the base model, R1-zero-Div was evaluated across four reasoning benchmarks: **GSM8K**, **MATH500**, **OlympiadBench**, and **College Math**.

| Dataset       | Baseline (R1-zero) | R1-zero-Div | Δ Pass@1 |
| ------------- | ------------------ | ----------- | -------- |
| GSM8K         | 88.7               | **91.7**    | +3.0     |
| MATH500       | 75.6               | **78.2**    | +2.6     |
| OlympiadBench | –                  | ↑           | +        |
| College Math  | –                  | ↑           | +        |

Beyond accuracy, R1-zero-Div produced **structurally richer and more varied correct solutions**, as verified through Div-Equ, n-gram diversity, and BLEU metrics.  
Ablation studies further confirmed that applying diversity regularization only on correct samples yields optimal gains, while excessive regularization may degrade performance. Even smaller-scale models benefited consistently—proving the method’s **scalability and universality**.

---

### 🧩 Key Takeaways

- **First systematic analysis** of diversity’s role in RL-tuned LLM reasoning.

- **Novel diversity-aware optimization** seamlessly integrated into R1-zero.

- **Improved reasoning accuracy** (+3.5% Pass@1 on average) and **solution diversity**.

- **Lightweight, generalizable, and training-efficient**—no extra data required.

Together, these findings reveal that **diversity is not a by-product but a driver** of advanced reasoning in LLMs.

---

### 🚀 Looking Ahead

This work opens new directions for the next generation of reasoning-enhanced LLMs.  
Future research will explore **semantic-level diversity**, moving beyond statistical entropy toward capturing distinct reasoning strategies and thought patterns, and validating the approach across larger models and cross-domain tasks.

By bridging traditional RL insights with modern LLM reasoning, *Diversity-Aware Policy Optimization* marks a significant step toward **smarter, more explorative, and more human-like AI reasoning systems**.

---



