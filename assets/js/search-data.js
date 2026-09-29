 const ninja = document.querySelector('ninja-keys'); ninja.data = [ { id: 'home', title: "about", section:
"Navigation", handler: () => { window.location.href = "/"; } },


  

  

  

  

  

  

  

  

  

  
    { id: "/news/", title: "news", description: "",
    section: "Navigation", handler: () => { window.location.href = "/news/"; } },
  

  
    { id: "/publications/", title: "publications", description: "Below are selected publications in reversed chronological order. For the complete list, please vist my Google Scholar Profile.",
    section: "Navigation", handler: () => { window.location.href = "/publications/"; } },
  

  
    { id: "/services/", title: "services", description: "",
    section: "Navigation", handler: () => { window.location.href = "/services/"; } },
  

  
    { id: "/awards/", title: "awards", description: "",
    section: "Navigation", handler: () => { window.location.href = "/awards/"; } },
  

  
    { id: "/contact/", title: "contact", description: "",
    section: "Navigation", handler: () => { window.location.href = "/contact/"; } },
  




  { id: "/news/announcement_1/", title: "I received the IEEE CIS outstanding early career award", section: "News", handler: () => { window.location.href =
  "/news/announcement_1/"; } },

  { id: "/news/announcement_2/", title: "I joined the Hong Kong Polytechnic Universtiy", section: "News", handler: () => { window.location.href =
  "/news/announcement_2/"; } },

  { id: "/news/announcement_3/", title: "Our EvoGit wins the first place of AgentX competition", section: "News", handler: () => { window.location.href =
  "/news/announcement_3/"; } },

  { id: "/news/announcement_4/", title: "Our paper is accepted by NeurIPS 2025 as spotlight", section: "News", handler: () => { window.location.href =
  "/news/announcement_4/"; } },

  { id: "/news/announcement_5/", title: "I am named a 2025 Clarivate highly cited researcher", section: "News", handler: () => { window.location.href =
  "/news/announcement_5/"; } },

  { id: "/news/announcement_6/", title: "We released EvoX Genesis", section: "News", handler: () => { window.location.href =
  "/news/announcement_6/"; } },
{ id: 'social-email', title: 'email', section: "Socials", handler: () => { window.open("mailto:%72%61%6E%63%68%65%6E%67%63%6E@%67%6D%61%69%6C.%63%6F%6D",
    "_blank"); }, },{ id: 'social-github', title: 'GitHub', section: "Socials", handler: () => { window.open("https://github.com/EMI-Group",
    "_blank"); }, },{ id: 'social-orcid', title: 'ORCID', section: "Socials", handler: () => { window.open("https://orcid.org/0000-0001-9410-8263",
    "_blank"); }, },{ id: 'social-publons', title: 'Publons', section: "Socials", handler: () => { window.open("https://publons.com/a/1307307/",
    "_blank"); }, },{ id: 'social-scholar', title: 'Google Scholar', section: "Socials", handler: () => { window.open("https://scholar.google.com/citations?user=bjeIdlcAAAAJ",
    "_blank"); }, },
  { id: 'light-theme', title: "Change theme to light", section: "Theme", handler: () => { setThemeSetting('light'); } }, { id:
  'dark-theme', title: "Change theme to dark", section: "Theme", handler: () => { setThemeSetting('dark'); } }, { id:
  'system-theme', title: "Use system default theme", section: "Theme", handler: () => { setThemeSetting('system'); } },

];

