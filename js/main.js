document.addEventListener("DOMContentLoaded", () => {
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
      const currentLang = languageToggle.textContent
      if (currentLang === "EN") {
        languageToggle.textContent = "中文"
        translateToEnglish()
      } else {
        languageToggle.textContent = "EN"
        translateToChinese()
      }
    })
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
        if (navLinks.classList.contains("active")) {
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
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
        header.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      }
    }
  })

  // 语言翻译功能（简化版，实际应用中可能需要更复杂的实现）
  function translateToEnglish() {
    // 这里只是一个示例，实际应用中可能需要使用翻译API或预定义的翻译文本
    const translations = {
      "潮韵 - 隐私至上的生理期追踪应用": "Chao Yun - Privacy-First Menstrual Cycle Tracker",
      功能: "Features",
      隐私保障: "Privacy",
      下载: "Download",
      隐私政策: "Privacy Policy",
      用户协议: "Terms of Use",
      "潮韵 - 您的私人生理期助手": "Chao Yun - Your Personal Menstrual Assistant",
      "安全、私密、智能的生理期追踪应用，由个人开发者 QinIndexCode 精心打造":
        "Safe, private, and intelligent menstrual cycle tracking app, carefully crafted by individual developer QinIndexCode",
      立即下载: "Download Now",
      了解更多: "Learn More",
      主要功能: "Key Features",
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
        "At Chao Yun, we understand the sensitivity of menstrual cycle data. Therefore, we have taken the following measures to protect your privacy:",
      所有数据仅存储在您的设备上: "All data is stored only on your device",
      无需创建账户或提供个人信息: "No need to create an account or provide personal information",
      应用不收集任何用户数据: "The app does not collect any user data",
      "无广告，无追踪": "No ads, no tracking",
      "开源代码，透明可信": "Open source code, transparent and trustworthy",
      查看完整隐私政策: "View Full Privacy Policy",
      立即下载: "Download Now",
      "开始使用潮韵，掌握您的生理周期": "Start using Chao Yun and take control of your menstrual cycle",
      您的私人生理期助手: "Your Personal Menstrual Assistant",
      链接: "Links",
      联系开发者: "Contact Developer",
      保留所有权利: "All Rights Reserved",
      由: "by",
    }

    document.querySelectorAll("h1, h2, h3, h4, p, a, button, li").forEach((element) => {
      const text = element.textContent.trim()
      if (translations[text]) {
        element.textContent = translations[text]
      }
    })

    // 更新页面标题
    if (document.title === "潮韵 - 隐私至上的生理期追踪应用") {
      document.title = "Chao Yun - Privacy-First Menstrual Cycle Tracker"
    } else if (document.title === "隐私政策 - 潮韵") {
      document.title = "Privacy Policy - Chao Yun"
    } else if (document.title === "用户协议 - 潮韵") {
      document.title = "Terms of Use - Chao Yun"
    }
  }

  function translateToChinese() {
    // 刷新页面以恢复中文（简化处理）
    location.reload()
  }
})
