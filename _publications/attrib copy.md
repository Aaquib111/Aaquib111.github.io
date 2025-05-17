---
title: "Prune and tune: Improving efficient pruning techniques for massive language models"
collection: publications
category: conferences
permalink: /publication/refusals
excerpt: "Massive language models with billions of parameters have significant compute expenses and thus can benefit from pruning. We improve upon SparseGPT by fine-tuning during pruning with minimal training steps, and we perform experiments against magnitude pruning and find that our iteratively fine-tuned SparseGPT models significantly outperform their magnitude pruning counterparts at high sparsity."
date: 2023-01-01
venue: 'ICLR 2023 (TinyPapers workshop)'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/pdf/2310.10348'
# bibtexurl: 'https://arxiv.org/pdf/2410.12949'
citation: "<b>Aaquib Syed</b>, Phillip Huang Guo, Vijaykaarti Sundarapandiyan (2023). &quot;Prune and tune: Improving efficient pruning techniques for massive language modelsy&quot; <i>ICLR 2023 TinyPapers Workshop</i>."
---
Massive language models with billions of parameters have significant compute expenses and thus can benefit from pruning. Pruning techniques for massive models are typically iterative and require extensive weight retraining after pruning. SparseGPT, a recently introduced one-shot technique for pruning such models, enables pruning without retraining. We improve upon SparseGPT by fine-tuning during pruning with minimal training steps, and we perform experiments against magnitude pruning and find that our iteratively fine-tuned SparseGPT models significantly outperform their magnitude pruning counterparts at high sparsity.