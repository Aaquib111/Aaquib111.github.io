---
title: "Mechanistic Unlearning: Robust Knowledge Unlearning and Editing via Mechanistic Localization"
collection: publications
category: conferences
permalink: /publication/mech_unlearning
excerpt: "Methods for knowledge editing and unlearning in large language models seek to edit or remove undesirable knowledge or capabilities without compromising general language modeling performance. This work investigates how mechanistic interpretability -- which, in part, aims to identify model components (circuits) associated to specific interpretable mechanisms that make up a model capability -- can improve the precision and effectiveness of editing and unlearning."
date: 2024-10-16
venue: 'ICML 2025 (Spotlight -- Top 2.6%)'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/pdf/2410.12949'
# bibtexurl: 'https://arxiv.org/pdf/2410.12949'
citation: "Phillip Guo*, <b>Aaquib Syed*</b>, Abhay Sheshadri, Aidan Ewart, Gintare Karolina Dziugaite (2025). &quot;Mechanistic Unlearning: Robust Knowledge Unlearning and Editing via Mechanistic Localization&quot; <i>ICML 2025</i>."
---
Methods for knowledge editing and unlearning in large language models seek to edit or remove undesirable knowledge or capabilities without compromising general language modeling performance. This work investigates how mechanistic interpretability -- which, in part, aims to identify model components (circuits) associated to specific interpretable mechanisms that make up a model capability -- can improve the precision and effectiveness of editing and unlearning. We find a stark difference in unlearning and edit robustness when training components localized by different methods. We highlight an important distinction between methods that localize components based primarily on preserving outputs, and those finding high level mechanisms with predictable intermediate states. In particular, localizing edits/unlearning to components associated with the lookup-table mechanism for factual recall 1) leads to more robust edits/unlearning across different input/output formats, and 2) resists attempts to relearn the unwanted information, while also reducing unintended side effects compared to baselines, on both a sports facts dataset and the CounterFact dataset across multiple models. We also find that certain localized edits disrupt the latent knowledge in the model more than any other baselines, making unlearning more robust to various attacks.
