---
layout: page
title: About me
cover: false
---

I am currently a Research Scientist at A\*STAR Singapore, specializing in Natural Language Processing and Deep Learning. Before joining A\*STAR, I worked as a PostDoc with [Prof. Mark Steedman](https://homepages.inf.ed.ac.uk/steedman/) and completed my PhD under the guidance of [Prof. Mirella Lapata](http://homepages.inf.ed.ac.uk/mlap/) at the [Informatics Institute](http://web.inf.ed.ac.uk/) of the [University of Edinburgh](https://www.ed.ac.uk/).

My PhD research focused on Natural Language Generation, specifically data-to-text generation. I developed techniques for generating long documents (more than 200 tokens) from tables of statistics as input. My thesis, titled ["Data-to-text generation with Neural Planning"](https://ratishsp.github.io/assets/pdf/inf_phd_thesis.pdf), explored novel strategies for neural content planning in long document generation. My PhD thesis received the [Best Dissertation in Scotland](https://www.sicsa.ac.uk/news/sicsa-conference-2022/) award from SICSA Scotland. During my PhD, I also interned with the Summarization team at [Google Research,](https://research.google/) London.

Before my PhD, I gained valuable experience in various research positions:
- Research Assistant with [Prof. Yue Zhang](https://frcchang.github.io/) at the NLP lab of [SUTD](http://www.sutd.edu.sg/), Singapore.
- Research Engineer at the [NLP lab](http://www.cfilt.iitb.ac.in/) of [IIT Bombay](http://www.iitb.ac.in/), working with [Prof. Pushpak Bhattacharyya](https://www.cse.iitb.ac.in/~pb/).
- Technical Architect in the research division of a Software Product firm.

I completed my MS in Computer Science by Research at [IIIT Hyderabad](https://www.iiit.ac.in/) in February 2017. My thesis focused on "Transition-based techniques for Syntactic Linearization and Deep Input Linearization."

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
