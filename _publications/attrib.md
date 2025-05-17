---
title: "Attribution patching outperforms automated circuit discovery"
collection: publications
category: conferences
permalink: /publication/refusals
excerpt: "Automated interpretability research has recently attracted attention as a potential research direction that could scale explanations of neural network behavior to large models. In this work, we show that a simple method based on attribution patching outperforms all existing methods while requiring just two forward passes and a backward pass."
date: 2023-10-16
venue: 'EMNLP 2024 (BlackboxNLP)'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/pdf/2310.10348'
# bibtexurl: 'https://arxiv.org/pdf/2410.12949'
citation: "<b>Aaquib Syed</b>, Can Rager, Arthur Conmy (2024). &quot;Attribution patching outperforms automated circuit discovery&quot; <i>BlackboxNLP @ EMNLP 2024</i>."
---
Automated interpretability research has recently attracted attention as a potential research direction that could scale explanations of neural network behavior to large models. Existing automated circuit discovery work applies activation patching to identify subnetworks responsible for solving specific tasks (circuits). In this work, we show that a simple method based on attribution patching outperforms all existing methods while requiring just two forward passes and a backward pass. We apply a linear approximation to activation patching to estimate the importance of each edge in the computational subgraph. Using this approximation, we prune the least important edges of the network. We survey the performance and limitations of this method, finding that averaged over all tasks our method has greater AUC from circuit recovery than other methods.