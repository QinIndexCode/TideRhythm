document.addEventListener("DOMContentLoaded", () => {
  // 主题切换功能
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // 检查本地存储中的主题偏好
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    htmlElement.className = savedTheme
    updateThemeIcon(savedTheme === "dark-mode")
  } else {
    // 检查系统偏好
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDarkMode) {
      htmlElement.className = "dark-mode"
      updateThemeIcon(true)
      localStorage.setItem("theme", "dark-mode")
    }
  }

  // 主题切换按钮点击事件
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDarkMode = htmlElement.classList.contains("dark-mode")
      if (isDarkMode) {
        htmlElement.className = "light-mode"
        localStorage.setItem("theme", "light-mode")
        updateThemeIcon(false)
      } else {
        htmlElement.className = "dark-mode"
        localStorage.setItem("theme", "dark-mode")
        updateThemeIcon(true)
      }
    })
  }

  // 更新主题图标
  function updateThemeIcon(isDarkMode) {
    if (themeToggle) {
      themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
    }
  }

  // 移动端菜单切换
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // 语言切换功能
  const languageToggle = document.getElementById("language-toggle")

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const currentLang = localStorage.getItem("language") || "zh"
      if (currentLang === "zh") {
        localStorage.setItem("language", "en")
        translateToEnglish()
      } else {
        localStorage.setItem("language", "zh")
        translateToChinese()
      }
    })

    // 检查本地存储中的语言偏好
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage === "en") {
      translateToEnglish()
    }
  }

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
        
        // 如果在移动端，点击后关闭菜单
        if (navLinks && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
        }
      }
    })
  })

  // 滚动时导航栏效果
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (header) {
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
        header.style.backdropFilter = "blur(15px)"
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
        header.style.backdropFilter = "blur(10px)"
      }
    }
  })

  // 滚动动画
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("reveal-fade")) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        } else if (entry.target.classList.contains("reveal-slide")) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateX(0)"
        } else if (entry.target.classList.contains("reveal-slide-right")) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateX(0)"
        }
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".reveal-fade, .reveal-slide, .reveal-slide-right").forEach((el) => {
    observer.observe(el)
  })

  // 语言翻译功能
  function translateToEnglish() {
    // 更新语言切换按钮
    if (languageToggle) {
      languageToggle.innerHTML = '<i class="fas fa-globe"></i>'
      languageToggle.setAttribute("aria-label", "Switch to Chinese")
    }

    // 这里只是一个示例，实际应用中可能需要使用翻译API或预定义的翻译文本
    const translations = {
      "潮韵 - 专业的生理期追踪应用": "TideRhythm - Professional Menstrual Cycle Tracker",
      潮韵: "TideRhythm",
      功能: "Features",
      隐私:"Privacy",
      隐私保障: "Privacy",
      下载: "Download",
      隐私政策: "Privacy Policy",
      用户协议: "Terms of Use",
      切换主题: "Toggle Theme",
      切换语言: "Switch Language",
      "潮韵 - 您的专业生理期管理工具": "TideRhythm - Your Professional Menstrual Cycle Management Tool",
      "安全、私密、精准的生理期追踪应用，由个人开发者 QinIndexCode 精心打造":
        "Safe, private, and precise menstrual cycle tracking app, carefully crafted by individual developer QinIndexCode",
      立即下载: "Download Now",
      了解更多: "Learn More",
      核心功能: "Core Features",
      数据本地化: "Local Data Storage",
      "所有数据存储在您的设备上，确保隐私安全，无需担心数据泄露":
        "All data is stored on your device, ensuring privacy and security without worrying about data leaks",
      智能提醒: "Smart Reminders",
      "节日提醒、经期临近提醒、生日提醒，重要日子不再错过":
        "Holiday reminders, period approaching reminders, birthday reminders - never miss important dates again",
      本地算法: "Local Algorithm",
      "预测算法全部在本地运行，不进行任何联网，保护您的隐私":
        "Prediction algorithms run entirely locally without any internet connection, protecting your privacy",
      多语言支持: "Multi-language Support",
      "支持中文和英文界面，满足不同用户的需求":
        "Supports Chinese and English interfaces to meet the needs of different users",
      多主题选择: "Multiple Themes",
      "多种主题可选，个性化您的应用界面": "Multiple themes available to personalize your app interface",
      个人开发: "Individual Development",
      "由GitHub开发者QinIndexCode独立开发，专注用户体验":
        "Independently developed by GitHub developer QinIndexCode, focused on user experience",
      隐私至上: "Privacy First",
      "在潮韵，我们深知生理期数据的敏感性。因此，我们采取了以下措施保护您的隐私：":
        "At TideRhythm, we understand the sensitivity of menstrual cycle data. Therefore, we have taken the following measures to protect your privacy:",
      所有数据仅存储在您的设备上: "All data is stored only on your device",
      无需创建账户或提供个人信息: "No need to create an account or provide personal information",
      应用不收集任何用户数据: "The app does not collect any user data",
      "无广告，无追踪": "No ads, no tracking",
      "开源代码，透明可信": "Open source code, transparent and trustworthy",
      查看完整隐私政策: "View Full Privacy Policy",
      "开始使用潮韵，掌握您的生理周期": "Start using TideRhythm and take control of your menstrual cycle",
      您的专业生理期管理工具: "Your Professional Menstrual Cycle Management Tool",
      链接: "Links",
      联系开发者: "Contact Developer",
      保留所有权利: "All Rights Reserved",
      由: "by",
      "开发。": "developed.",
      "最后更新:": "Last Updated:",
      // 隐私政策和用户协议页面的翻译
      引言: "Introduction",
      信息收集: "Information Collection",
      数据存储: "Data Storage",
      权限使用: "Permissions",
      第三方服务: "Third-party Services",
      儿童隐私: "Children's Privacy",
      隐私政策更新: "Privacy Policy Updates",
      联系我们: "Contact Us",
      接受条款: "Acceptance of Terms",
      应用描述: "App Description",
      使用许可: "License",
      使用限制: "Usage Restrictions",
      免责声明: "Disclaimer",
      责任限制: "Limitation of Liability",
      终止: "Termination",
      变更: "Changes",
      适用法律: "Applicable Law",
    }

    // 翻译页面内容
    document.querySelectorAll("h1, h2, h3, h4, p, a, button, li, span").forEach((element) => {
      const text = element.textContent.trim()
      if (translations[text]) {
        element.textContent = translations[text]
      }
    })

    // 更新页面标题
    if (document.title === "潮韵 - 专业的生理期追踪应用") {
      document.title = "TideRhythm - Professional Menstrual Cycle Tracker"
    } else if (document.title === "隐私政策 - 潮韵") {
      document.title = "Privacy Policy - TideRhythm"
    } else if (document.title === "用户协议 - 潮韵") {
      document.title = "Terms of Use - TideRhythm"
    }

    // 更新属性
    document.querySelectorAll("[aria-label]").forEach((el) => {
      const label = el.getAttribute("aria-label")
      if (translations[label]) {
        el.setAttribute("aria-label", translations[label])
      }
    })
  }

  function translateToChinese() {
    // 更新语言切换按钮
    if (languageToggle) {
      languageToggle.innerHTML = '<i class="fas fa-globe"></i>'
      languageToggle.setAttribute("aria-label", "切换语言")
    }

    // 刷新页面以恢复中文（简化处理）
    location.reload()
  }

  // 添加页面加载动画
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })
})
