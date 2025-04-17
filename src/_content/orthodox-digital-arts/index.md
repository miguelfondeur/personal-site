---
title: "Orthodox Digital Arts Project"
layout: layout.html
permalink: /orthodox-digital-arts/
---

<section class="hero-section">
    <div class="container" data-width="small">
        <h1>The Orthodox Digital Arts Project</h1>
        <p>
            Explore a growing collection of web resources inspired by the sacred art and design of early church history. I’d love to hear from you if you'd like to contribute. 
        </p>
    </div>
</section>
<section id="resources" class="content-section">
    <header class="content-section-header">
        <h2>Resources</h2>
        <p>Tools I've compiled to for creating Orthodox web experiences</p>
    </header>
    <ul class="work-grid md-strip" role="list">
        {% capture oda_resources %}
            {% for item in collections.odaResources %}
                <li class="work-item">
                    <a href="{{ item.url }}" class="work-item-button" >
                        <div class="work-thumb">
                            <img loading="lazy" src="{{ item.data.thumb }}" alt="{{ item.data.title }} thumbnail">
                        </div>
                        <h3>{{ item.data.title }}</h3>
                        {% if item.data.summary %}
                            <p>{{ item.data.summary }}</p>
                        {% endif %}
                    </a>
                    <div class="work-hover-state"></div>
                </li>
            {% endfor %}
        {% endcapture %}
        {{ oda_resources | strip | replace: '  ', '' | replace: '', '' }}
    </ul>
</section>
<section id="templates" class="content-section">
    <header class="content-section-header">
        <h2>Website Templates</h2>
        <p>Website templates for Orthodox parishes built with 11ty.</p>
    </header>
    <ul class="templates-wrapper" role="list">  
        <li class="template-card">
            <a href="https://light-template.netlify.app/" title="Open Light Template in new tab" target="_blank">
                <img src="/img/oda/light-template-thumb.png" alt="small image of orthodox icon">
                <div class="content">
                    <h3>Light Template</h3>
                    <p>
                        Designed to be an online entry point for a parish. It features all of the information I believe an inquierer would need to get to know a parish. Including the pasrish name, location, clergy and ministries. I also include information about the Orthodox faith and where they can find other resources.
                    </p>
                </div>
            </a>
        </li>
    </ul>
</section>
<section id="vignettes" class="content-section">
    <header class="content-section-header">
        <h2>Vignettes</h2>
        <p>Comming Soon..</p>
    </header>
</section>
