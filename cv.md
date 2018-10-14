---
layout: page
title:  CV
cover:  false
menu:   true
order:  5
---

{% include cv-list.html categories=site.data.cv.before-pubs %}
<h2>Papers</h2>
{% include paper-list.html venue='conference' heading='Refereed conference papers' %}
{% include paper-list.html venue='workshop' heading='Refereed workshop and demonstration papers' %}
{% include paper-list.html venue='working' heading='Unpublished working papers' %}
<h2>Patents</h2>
{% include patent-list.html venue='patent grant' heading='Patents' %}
{% include cv-list.html categories=site.data.cv.after-pubs %}



