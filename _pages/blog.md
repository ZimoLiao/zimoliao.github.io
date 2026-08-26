---
layout: page
permalink: /blog/
title: Blog
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}

  <nav class="tag-category-list type-body" aria-label="Blog topics">
    <span class="tag-category-list__label type-body">Browse:</span>
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag | replace: '-', ' ' }}</a>
        </li>
      {% endfor %}
      {% for category in site.display_categories %}
        <li>
          <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category | replace: '-', ' ' }}</a>
        </li>
      {% endfor %}
    </ul>
  </nav>
  {% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase type-item-title type-item-title--accent">{{ post.title }}</h3>
{% if post.description != blank %}
<p class="card-text type-body">{{ post.description }}</p>
{% endif %}

                    <p class="post-meta blog-post-meta type-body">
                      <span class="blog-post-meta__item">{{ post.date | date: '%B %d, %Y' }}</span>
                      {% for tag in post.tags %}
                        <span class="blog-post-meta__item">
                          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
                            <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a
                          >
                        </span>
                      {% endfor %}
                      {% for category in post.categories %}
                        <span class="blog-post-meta__item">
                          <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
                            <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a
                          >
                        </span>
                      {% endfor %}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

    <li>

{% if post.thumbnail %}

<div class="row">
          <div class="col-sm-9">
{% endif %}
        <h3 class="type-item-title">
        {% if post.redirect == blank %}
          <a class="post-title type-item-title--accent" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title type-item-title--accent" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title type-item-title--accent" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      {% if post.description != blank %}
        <p class="type-body">{{ post.description }}</p>
      {% endif %}
      <p class="post-meta blog-post-meta type-body">
        <span class="blog-post-meta__item">{{ post.date | date: '%B %d, %Y' }}</span>
        {% for tag in post.tags %}
          <span class="blog-post-meta__item">
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a
            >
          </span>
        {% endfor %}
        {% for category in post.categories %}
          <span class="blog-post-meta__item">
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
              <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a
            >
          </span>
        {% endfor %}
        {% if post.external_source %}
          <span class="blog-post-meta__item">{{ post.external_source }}</span>
        {% endif %}
      </p>

{% if post.thumbnail %}

</div>

  <div class="col-sm-3">
    <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}
