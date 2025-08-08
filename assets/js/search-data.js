// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order. More details about my publications can be found on my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-navier-stokes-equations-in-the-wavenumber-space",
        
          title: "Navier-Stokes Equations in the Wavenumber Space",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nse-in-wavenumber-space/";
          
        },
      },{id: "post-wall-bounded-turbulence",
        
          title: "Wall-bounded Turbulence",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/wall-bounded-turbulence/";
          
        },
      },{id: "post-about-turbulence",
        
          title: "About Turbulence",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/turbulence/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-jfm-article-vol-966-a7-2023-has-been-cited-in-nature-reviews-methods-primers-vol-5-article-21-2025-a-recognition-from-the-broader-scientific-community",
          title: '🎉 Our JFM article (Vol. 966, A7, 2023) has been cited in Nature...',
          description: "",
          section: "News",},{id: "news-our-article-on-particle-laden-turbulence-was-accepted-by-jfm",
          title: '🎉 Our article on particle-laden turbulence was accepted by JFM!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%69%6D%6F%6C%69%61%6F@%6D%61%69%6C.%75%73%74%63.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zimoliao", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3995-2124", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Zimo_Liao/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=swB6AMAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
