---
layout: page
title:  Papers
cover:  false
menu:   true
order:  1
---

<ul>
{% for paper in site.data.papers.papers %}
  <li>
  {% include paper.html paper=paper %}
  </li>
{% endfor %}
</ul>

