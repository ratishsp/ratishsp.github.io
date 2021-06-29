---
layout: page
title: About me
cover: false
---

I am a final year PhD student in [Informatics Institute](http://web.inf.ed.ac.uk/) at the [University of Edinburgh](https://www.ed.ac.uk/).
My advisors are [Prof. Mirella Lapata](http://homepages.inf.ed.ac.uk/mlap/) (primary) and [Dr. Adam Lopez](http://alopez.github.io/). 
My PhD studies are in the area of data-to-text generation, more specifically involving generating long documents (greater than 200 tokens) given a table of statistics as input. As part of my PhD, I have explored novel strategies of content planning for long document generation.

Prior to this, I worked as 
a Research Assistant with [Prof. Yue Zhang](https://frcchang.github.io/) in NLP lab at [SUTD](http://www.sutd.edu.sg/), Singapore. 
I completed my MS in CS by Research at [IIIT Hyderabad](https://www.iiit.ac.in/) in Feb 2017. My thesis topic was 
"Transition based technique for Syntactic Linearization and Deep Input Linearization". 
I have also worked as a Research Engineer in the [NLP lab](http://www.cfilt.iitb.ac.in/) lab at [IIT Bombay](http://www.iitb.ac.in/) with [Prof. Pushpak Bhattacharyya](https://www.cse.iitb.ac.in/~pb/). 
Even earlier, I was a Technical Architect in a Software Product firm in the Research division.

My interests are in the field of Natural Language Processing including Natural Language Generation, Syntactic Linearization and Machine Translation. 

**I am on the job market.**

## Research Positions

<div class="row">
  <div class="col-sm-12">
      <li> Intern in the Summarization team, Google Research, London [Jun'19 - Oct'19] </li>
      <li> Research Assistant, SUTD NLP Lab, Singapore [Mar'17 - Aug'17 ] </li>
      <li> Research Engineer, IIT Bombay NLP Lab, India [May'14 - Dec'14 ] </li>
  </div>
</div>

## Papers

<ul>
{% for paper in site.data.papers.papers %}
  {% if paper.selected %}
  <li>
  {% include paper.html paper=paper %}
  </li>
  {% endif %}
{% endfor %}
</ul>
