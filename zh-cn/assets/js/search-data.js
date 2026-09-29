 const ninja = document.querySelector('ninja-keys'); ninja.data = [ { id: 'home', title: "个人简介", section:
"页面导航", handler: () => { window.location.href = "/zh-cn/"; } },


  

  

  

  
    { id: "/zh-cn/news/", title: "最新动态", description: "",
    section: "页面导航", handler: () => { window.location.href = "/zh-cn/news/"; } },
  

  
    { id: "/zh-cn/publications/", title: "学术论文", description: "以下按发表年份倒序列出部分论文。完整列表请参阅我的 Google Scholar 主页。论文题目、作者及出版信息保留原文。",
    section: "页面导航", handler: () => { window.location.href = "/zh-cn/publications/"; } },
  

  
    { id: "/zh-cn/services/", title: "学术服务", description: "",
    section: "页面导航", handler: () => { window.location.href = "/zh-cn/services/"; } },
  

  
    { id: "/zh-cn/awards/", title: "荣誉奖励", description: "",
    section: "页面导航", handler: () => { window.location.href = "/zh-cn/awards/"; } },
  

  
    { id: "/zh-cn/contact/", title: "联系方式", description: "",
    section: "页面导航", handler: () => { window.location.href = "/zh-cn/contact/"; } },
  




  { id: "/zh-cn/news/announcement-1/", title: "荣获IEEE计算智能学会杰出青年学者奖", section: "最新动态", handler: () => { window.location.href =
  "/zh-cn/news/announcement-1/"; } },

  { id: "/zh-cn/news/announcement-2/", title: "加入香港理工大学", section: "最新动态", handler: () => { window.location.href =
  "/zh-cn/news/announcement-2/"; } },

  { id: "/zh-cn/news/announcement-3/", title: "EvoGit荣获AgentX国际竞赛多智能体系统赛道全球冠军", section: "最新动态", handler: () => { window.location.href =
  "/zh-cn/news/announcement-3/"; } },

  { id: "/zh-cn/news/announcement-4/", title: "论文入选NeurIPS 2025 Spotlight", section: "最新动态", handler: () => { window.location.href =
  "/zh-cn/news/announcement-4/"; } },

  { id: "/zh-cn/news/announcement-5/", title: "入选2025年科睿唯安高被引科学家榜单", section: "最新动态", handler: () => { window.location.href =
  "/zh-cn/news/announcement-5/"; } },

  { id: "/zh-cn/news/announcement-6/", title: "发布EvoX Genesis", section: "最新动态", handler: () => { window.location.href =
  "/zh-cn/news/announcement-6/"; } },
{ id: 'social-email', title: 'email', section: "学术与社交链接", handler: () => { window.open("mailto:%72%61%6E%63%68%65%6E%67%63%6E@%67%6D%61%69%6C.%63%6F%6D",
    "_blank"); }, },{ id: 'social-github', title: 'GitHub', section: "学术与社交链接", handler: () => { window.open("https://github.com/EMI-Group",
    "_blank"); }, },{ id: 'social-orcid', title: 'ORCID', section: "学术与社交链接", handler: () => { window.open("https://orcid.org/0000-0001-9410-8263",
    "_blank"); }, },{ id: 'social-publons', title: 'Publons', section: "学术与社交链接", handler: () => { window.open("https://publons.com/a/1307307/",
    "_blank"); }, },{ id: 'social-scholar', title: 'Google Scholar', section: "学术与社交链接", handler: () => { window.open("https://scholar.google.com/citations?user=bjeIdlcAAAAJ",
    "_blank"); }, },
  { id: 'light-theme', title: "切换为浅色模式", section: "外观", handler: () => { setThemeSetting('light'); } }, { id:
  'dark-theme', title: "切换为深色模式", section: "外观", handler: () => { setThemeSetting('dark'); } }, { id:
  'system-theme', title: "跟随系统外观", section: "外观", handler: () => { setThemeSetting('system'); } },

];

