$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // Keep year headings only on the main publications page.
    $(".publications:not(.publications-year-toc) h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);

    if ($myNav.hasClass("publication-toc")) {
      var getYearTarget = function (hash) {
        return hash && hash.startsWith("#") ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      };

      $myNav.on("click", 'a[href^="#"]', function (event) {
        var targetSelector = $(this).attr("href");
        var target = getYearTarget(targetSelector);

        if (!target) return;

        event.preventDefault();
        window.history.replaceState(null, "", targetSelector);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      var initialTarget = getYearTarget(window.location.hash);
      if (initialTarget && initialTarget.matches(".publications-year-toc h2.bibliography")) {
        initialTarget.scrollIntoView({ block: "start" });
      }
    }

    $("body").scrollspy({
      target: navSelector,
    });
  }

  var publicationAuthors = Array.from(document.querySelectorAll(".publications-year-toc .author"));
  if (publicationAuthors.length) {
    var measureAuthorLines = function (author) {
      var style = window.getComputedStyle(author);
      var lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.5;
      var fragments = [];
      var walker = document.createTreeWalker(author, NodeFilter.SHOW_TEXT);
      var node;

      while ((node = walker.nextNode())) {
        if (!node.textContent.trim()) continue;

        var range = document.createRange();
        range.selectNodeContents(node);
        Array.from(range.getClientRects()).forEach(function (rect) {
          if (rect.width > 0 && rect.height > 0) fragments.push(rect);
        });
      }

      fragments.sort(function (left, right) {
        return left.top === right.top ? left.left - right.left : left.top - right.top;
      });

      return fragments.reduce(function (lines, rect) {
        var currentLine = lines[lines.length - 1];
        if (!currentLine || Math.abs(rect.top - currentLine.top) >= lineHeight / 2) {
          lines.push({ top: rect.top, right: rect.right });
        } else {
          currentLine.right = Math.max(currentLine.right, rect.right);
        }
        return lines;
      }, []);
    };

    var compactPublicationAuthors = function () {
      publicationAuthors.forEach(function (author) {
        author.classList.remove("publication-author--truncated");
        author.removeAttribute("aria-label");
        author.querySelectorAll(".publication-author-chunk").forEach(function (chunk) {
          chunk.hidden = false;
        });

        var ellipsis = author.querySelector(".publication-author-ellipsis");
        var moreAuthors = author.querySelector(".publication-author-more");
        if (ellipsis) ellipsis.hidden = true;
        if (moreAuthors) moreAuthors.hidden = false;
      });

      publicationAuthors.forEach(function (author) {
        var lines = measureAuthorLines(author);
        if (lines.length < 2) return;

        var authorRect = author.getBoundingClientRect();
        var lastLineWidth = lines[lines.length - 1].right - authorRect.left;
        if (lastLineWidth < authorRect.width / 3) {
          var targetLineCount = lines.length - 1;
          var chunks = Array.from(author.querySelectorAll(".publication-author-chunk"));
          var ellipsis = author.querySelector(".publication-author-ellipsis");
          var moreAuthors = author.querySelector(".publication-author-more");
          var fullAuthorText = author.textContent.replace(", ...", "").replace(/\s+/g, " ").trim();

          ellipsis.hidden = false;
          if (moreAuthors) moreAuthors.hidden = true;
          while (chunks.length > 1 && measureAuthorLines(author).length > targetLineCount) {
            chunks.pop().hidden = true;
          }

          author.classList.add("publication-author--truncated");
          author.setAttribute("aria-label", fullAuthorText);
        }
      });
    };

    var authorResizeTimer;
    var scheduleAuthorCompaction = function () {
      window.clearTimeout(authorResizeTimer);
      authorResizeTimer = window.setTimeout(compactPublicationAuthors, 100);
    };

    compactPublicationAuthors();
    if (document.fonts) document.fonts.ready.then(compactPublicationAuthors);
    window.addEventListener("resize", scheduleAuthorCompaction);
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
