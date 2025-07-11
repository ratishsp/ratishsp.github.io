---
layout: page
title: About Me
cover: false
---

I am an Assistant Professor in the NLP group at [IT University of Copenhagen](https://en.itu.dk/).

I completed my PhD at the [University of Edinburgh](https://www.ed.ac.uk/), where my [thesis](https://ratishsp.github.io/assets/pdf/inf_phd_thesis.pdf) on neural planning for long-document generation received the best dissertation in Scotland [award](https://www.sicsa.ac.uk/news/sicsa-conference-2022/) from SICSA. During my PhD, I also interned with the Summarization team at Google Research, London.

My research interests include:

- **Planning and Long-Context Modeling**: I work on improving models’ ability to plan and operate over long contexts, both in general NLP and scientific domains. This includes neural planning for text generation ([TACL'21](https://doi.org/10.1162/tacl_a_00381), [TACL'22](https://doi.org/10.1162/tacl_a_00484)), long-context architectures for summarization and sequence modeling ([ACL'23](https://aclanthology.org/2023.acl-short.13), [ICLR'25 W](https://openreview.net/forum?id=uneMbnwmW8)), and genome modeling via task-specific self-pretraining ([ICML-GenBio'25](https://arxiv.org/abs/2506.17766)).

- **Multilinguality, Transfer Learning, and Interpretability**: I explore methods to make LLMs effective for low-resource and non-Roman script languages through romanization ([RomanSetu, ACL'24](https://aclanthology.org/2024.acl-long.833/)) and language-relatedness-based chunking ([DecoMT, EMNLP'23](https://aclanthology.org/2023.emnlp-main.279/)). I also study how LLMs internally represent such multilingual data, including latent romanization ([RomanLens, ACL'25](https://arxiv.org/abs/2502.07424)).

- **Reasoning**: I study mathematical reasoning in open-weights LLMs. Our work ([VerityMath, ICML-AI4Math'24](https://arxiv.org/abs/2311.07172)) identifies unit consistency as a key challenge and introduces Unit Consistency Programs (UCPs) as a solution.

## News

<div style="max-height: 200px; overflow-y: auto; padding-right: 10px; border: 1px solid #ddd; border-radius: 6px;">
  <ul>
    {% for item in site.data.news.items %}
      <li>
        <strong>{{ item.date }}:</strong> {{ item.description }}
        {% for link in item.links %}
          - <a href="{{ link.url }}">{{ link.title }}</a>
        {% endfor %}
      </li>
    {% endfor %}
  </ul>
</div>

## Selected Publications

For my latest publications, please visit my [Google Scholar profile](https://scholar.google.co.in/citations?hl=en&user=FrB_UMIAAAAJ&view_op=list_works&sortby=pubdate).

<ul>
{% for paper in site.data.papers.papers %}
  {% if paper.selected %}
  <li>
  {% include paper.html paper=paper %}
  </li>
  {% endif %}
{% endfor %}
</ul>
