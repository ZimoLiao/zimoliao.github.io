# Zi-Mo Liao's Personal Website

Source for [zimoliao.github.io](https://zimoliao.github.io), an academic website built with Jekyll and based on the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Content

- `_pages/`: primary pages, including About, CV, Publications, Gallery, and Blog
- `_posts/`: blog articles
- `_news/`: dated news entries
- `_bibliography/papers.bib`: publication metadata
- `assets/json/resume.json`: CV data
- `assets/img/` and `assets/video/`: site media
- `_sass/`: shared and page-specific styles

## Local Development

Install the Ruby and Node dependencies, then start Jekyll:

```bash
bundle install
npm ci
bundle exec jekyll serve
```

The site is available at `http://127.0.0.1:4000` by default.

Run the repository checks with:

```bash
npm test
npm run format:check
bundle exec jekyll build
```

## Deployment

Pushes to `main` are built and deployed to the `gh-pages` branch by GitHub Actions.

## License

Theme code remains subject to the repository's [MIT license](LICENSE). Unless otherwise stated, site content and original media are copyright Zi-Mo Liao.
