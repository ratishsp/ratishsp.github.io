---
layout: page
title: About Me
cover: false
---

I am currently an Assistant Professor in the NLP group at [IT University, Copenhagen](https://en.itu.dk/). My research interests include improving large language models (LLMs), particularly multilingual ones, and integrating LLMs with symbolic systems.

Previously, I was a Research Scientist at A\*STAR, Singapore. Before joining A\*STAR, I worked as a PostDoc with [Prof. Mark Steedman](https://homepages.inf.ed.ac.uk/steedman/) and completed my PhD under the supervision of [Prof. Mirella Lapata](http://homepages.inf.ed.ac.uk/mlap/) at the [Informatics Institute](http://web.inf.ed.ac.uk/) of the [University of Edinburgh](https://www.ed.ac.uk/).

My PhD research focused on Natural Language Generation, specifically data-to-text generation. I developed techniques for generating long documents (over 200 tokens) from statistical tables as input. My thesis, titled ["Data-to-text Generation with Neural Planning"](https://ratishsp.github.io/assets/pdf/inf_phd_thesis.pdf), explored novel strategies for neural content planning in long-document generation. My thesis received the [Best Dissertation in Scotland](https://www.sicsa.ac.uk/news/sicsa-conference-2022/) award from SICSA Scotland. During my PhD, I also interned with the Summarization team at [Google Research](https://research.google/), London.

Before my PhD, I held several research positions, including:
- Research Assistant with [Prof. Yue Zhang](https://frcchang.github.io/) at the NLP lab of [SUTD](http://www.sutd.edu.sg/), Singapore.
- Research Engineer at the [NLP lab](http://www.cfilt.iitb.ac.in/) of [IIT Bombay](http://www.iitb.ac.in/), working with [Prof. Pushpak Bhattacharyya](https://www.cse.iitb.ac.in/~pb/).
- Technical Architect in the research division of a software product firm.

I completed my MS in Computer Science by Research at [IIIT Hyderabad](https://www.iiit.ac.in/) under the guidance of [Prof. Manish Shrivastava](https://www.iiit.ac.in/people/faculty/m.shrivastava/) in February 2017. My thesis focused on "Transition-based Techniques for Syntactic Linearization and Deep Input Linearization."

## News

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

## Papers

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
