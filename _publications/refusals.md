---
title: "Refusal in language models is mediated by a single direction"
collection: publications
category: conferences
permalink: /publication/refusals
excerpt: "Conversational large language models are fine-tuned for both instruction-following and safety, resulting in models that obey benign requests but refuse harmful ones. In this work, we find a one-dimensional subspace such that erasing this direction from the model's residual stream activations prevents it from refusing harmful instructions, while adding this direction elicits refusal on even harmless instructions. This is the current fastest way to jailbreak a model."
date: 2024-06-17
venue: 'NeurIPS 2024'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/pdf/2406.11717?'
# bibtexurl: 'https://arxiv.org/pdf/2410.12949'
citation: "Andy Arditi*, Oscar Obeso*, <b>Aaquib Syed</b>, Daniel Paleka, Nina Panickssery, Wes Gurnee, Neel Nanda (2025). &quot;Refusal in language models is mediated by a single direction&quot; <i>NeurIPS 2025</i>."
---
Conversational large language models are fine-tuned for both instruction-following and safety, resulting in models that obey benign requests but refuse harmful ones. While this refusal behavior is widespread across chat models, its underlying mechanisms remain poorly understood. In this work, we show that refusal is mediated by a one-dimensional subspace, across 13 popular open-source chat models up to 72B parameters in size. Specifically, for each model, we find a single direction such that erasing this direction from the model's residual stream activations prevents it from refusing harmful instructions, while adding this direction elicits refusal on even harmless instructions. Leveraging this insight, we propose a novel white-box jailbreak method that surgically disables refusal with minimal effect on other capabilities. Finally, we mechanistically analyze how adversarial suffixes suppress propagation of the refusal-mediating direction. Our findings underscore the brittleness of current safety fine-tuning methods. More broadly, our work showcases how an understanding of model internals can be leveraged to develop practical methods for controlling model behavior.