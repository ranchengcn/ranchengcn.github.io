---
lang: zh-CN
translation_key: announcement_4
layout: post
title: 论文入选NeurIPS 2025 Spotlight
date: 2025-09-20 # format 2015-11-07 16:11:00-0400
inline: false
related_posts: false
homepage: false
---

### Diversity-Aware Policy Optimization for Large Language Model Reasoning

**作者：** Jian Yao; Ran Cheng; Xingyu Wu; Jibin Wu; Kay Chen Tan  
**会议：** _The Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025, Spotlight)_  
**论文：** [[2505.23433] Diversity-Aware Policy Optimization for Large Language Model Reasoning](https://arxiv.org/abs/2505.23433)  
**代码：** [GitHub - nigelyaoj/R1_zero_Div](https://github.com/nigelyaoj/R1_zero_Div)

---

### 强化学习时代的大模型推理：重新审视多样性

近年来，大语言模型（LLM）的推理能力取得了显著进展，强化学习（RL）微调是其中的重要推动力。自 **DeepSeek-R1** 引入*组相对策略优化（GRPO）*框架以来，许多研究着力改进奖励设计和训练效率，不断提升模型的数学与逻辑推理能力。

然而，在传统强化学习中已被证明至关重要的**策略多样性**，在这一过程中尚未得到充分关注。当强化学习用于提升大模型推理能力时，策略多样性是否仍然重要？

这正是 _Diversity-Aware Policy Optimization for Large Language Model Reasoning_ 所研究的核心问题。该研究首次系统揭示了多样性在强化学习微调大模型中的作用，并提出 **R1-zero-Div**，将多样性显式纳入微调过程。

### 研究背景：为什么多样性重要？

传统强化学习研究表明，**策略多样性**有助于探索、避免过早收敛并改善泛化。在大模型推理任务中，不同解法可以对应不同的思维链或逻辑路径，也就是不同的“思考方式”。

基于这一认识，研究团队系统考察了多样性是否同样影响大模型经强化学习微调后的提升潜力。结果表明，多样性不仅体现为解法上的差异，也能预测模型进一步学习的收益。

### 模型多样性分析

研究选取了 **12个具有代表性的大语言模型**，涵盖基础模型和强化学习微调模型，在 **MATH** 数据集上考察了三项指标：

1. **解法多样性（Div-Equ）：** 求解公式的结构差异。
2. **Potential@k（k = 16）：** 模型经强化学习微调后的预期提升空间。
3. **Pass@1准确率：** 单次采样得到正确答案的比例。

结果显示：对于推理能力较强的模型（Pass@1 > 0.4），**多样性与提升潜力高度相关**。能够生成更多不同正确解法的模型，往往更有可能通过强化学习继续提升。

### 方法：R1-zero-Div

基于上述发现，研究团队扩展了 **R1-zero** 框架，显式鼓励多样性。该方法引入 **token级熵正则化**，衡量生成过程中决策的丰富程度，同时避免偏向较长的输出序列。为兼顾质量与多样性，正则化**仅作用于正确样本**。

R1-zero-Div在GRPO损失中加入可控的多样性项，使训练目标既奖励正确答案，也鼓励有效推理路径的多样性。该方法轻量、**无需额外监督**，可方便地接入现有强化学习流程。

### 实验结果

以 **Qwen2.5-Math** 为基础模型，研究在 **GSM8K、MATH500、OlympiadBench 和 College Math** 四个推理基准上进行了评估。

| 数据集        | 基线（R1-zero） | R1-zero-Div | Δ Pass@1 |
| ------------- | --------------- | ----------- | -------- |
| GSM8K         | 88.7            | **91.7**    | +3.0     |
| MATH500       | 75.6            | **78.2**    | +2.6     |
| OlympiadBench | –               | ↑           | +        |
| College Math  | –               | ↑           | +        |

除准确率提升外，Div-Equ、n-gram多样性及BLEU等指标也表明，R1-zero-Div生成的**正确解法在结构上更加丰富多样**。

消融实验进一步验证，仅对正确样本施加多样性正则化效果最佳；过强的正则化则可能损害性能。较小规模的模型也能稳定受益，体现了该方法的可扩展性与普适性。

### 主要贡献

- 首次系统分析多样性在强化学习微调大模型推理中的作用。
- 提出多样性感知优化方法，并将其融入R1-zero框架。
- 同时提升推理准确率（Pass@1平均提升3.5%）与解法多样性。
- 方法轻量、通用、训练高效，无需额外数据。

这些结果说明，多样性不仅是推理过程的伴随现象，也是推动推理能力持续提升的重要因素。

### 未来方向

后续研究将进一步探索**语义层面的多样性**，从统计熵出发，深入刻画不同的推理策略与思维模式，并在更大规模模型和跨领域任务中验证其作用。

这项工作将传统强化学习中的经验与现代大模型推理相结合，为构建更善于探索、更具推理能力的人工智能系统提供了新方向。
