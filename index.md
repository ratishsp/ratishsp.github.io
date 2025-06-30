---
layout: page
title: About Me
cover: false
---

I am an Assistant Professor in the NLP group at [IT University of Copenhagen](https://en.itu.dk/).

I completed my PhD at the [University of Edinburgh](https://www.ed.ac.uk/), where my [thesis](https://ratishsp.github.io/assets/pdf/inf_phd_thesis.pdf) on neural planning for long-document generation received the best dissertation in Scotland [award](https://www.sicsa.ac.uk/news/sicsa-conference-2022/) from SICSA. During my PhD, I also interned with the Summarization team at Google Research, London.

My research interests include:

- **Planning and Long-Context Modeling**: I work on improving models' ability to plan and reason over long contexts. This includes macro and variational planning ([TACL'21](https://doi.org/10.1162/tacl_a_00381), [TACL'22](https://doi.org/10.1162/tacl_a_00484)), multi-document summarization ([ACL'23](https://aclanthology.org/2023.acl-short.13)), and long-context architectures like state space models ([Chimera, ICLR'25 W](https://openreview.net/forum?id=uneMbnwmW8)).

- **Multilinguality, Transfer Learning, and Interpretability**: I explore methods to make LLMs effective for low-resource and non-Roman script languages through romanization ([RomanSetu, ACL'24](https://aclanthology.org/2024.acl-long.833/)) and language-relatedness-based chunking ([DecoMT, EMNLP'23](https://aclanthology.org/2023.emnlp-main.279/)). I also study how LLMs internally represent such multilingual data, including latent romanization ([RomanLens, ACL'25](https://arxiv.org/abs/2502.07424)).

- **Reasoning**: I study mathematical reasoning in open-weights LLMs. Our work ([VerityMath, ICML'24](https://arxiv.org/abs/2311.07172)) identifies unit consistency as a key challenge and introduces Unit Consistency Programs (UCPs) as a solution.

- **Scientific and Domain-Specific Applications**: I develop LLMs for specialized domains such as genomics. Recent work focuses on task-specific self-pretraining for genome modeling ([ICML-GenBio'25](https://arxiv.org/abs/2506.17766)).

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
