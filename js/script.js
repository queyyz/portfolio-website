const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const languageSwitcher = document.getElementById("language-switcher");

  function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("preferredLang", lang);
  }

  // โหลดค่าภาษาที่บันทึกไว้
  const savedLang = localStorage.getItem("preferredLang") || "en";
  languageSwitcher.value = savedLang;
  updateLanguage(savedLang);

  languageSwitcher.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });
});
const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_heading: "Hello, I'm ",
            hero_subtitle: "Full Stack Developer",
            hero_description: "I create beautiful and functional web applications",
            hero_button_work: "View My Work",
            hero_button_contact: "Get In Touch",
            about_title: "About Me",
            about_description: "I am a passionate Full Stack Developer with experience in creating web applications using modern technologies. I love solving complex problems and learning new technologies.",
            about_exp_years: "2+",
            about_exp_text: "Years Experience",
            about_projects_count: "15+",
            about_projects_text: "Projects Completed",
            about_clients_count: "10+",
            about_clients_text: "Happy Clients",
            skills_title: "My Skills",
            skill_html_title: "HTML5",
            skill_html_description: "Semantic markup and modern HTML5 features",
            skill_css_title: "CSS3",
            skill_css_description: "Responsive design and modern CSS techniques",
            skill_js_title: "JavaScript",
            skill_js_description: "ES6+ features and modern JavaScript",
            skill_react_title: "React",
            skill_react_description: "Component-based UI development",
            skill_node_title: "Node.js",
            skill_node_description: "Server-side JavaScript development",
            skill_mongo_title: "MongoDB",
            skill_mongo_description: "NoSQL database management",
            projects_title: "My Projects",
            project1_title: "E-commerce Website",
            project1_description: "A full-stack e-commerce solution built with React and Node.js",
            project2_title: "Task Management App",
            project2_description: "A collaborative task management application with real-time updates",
            project3_title: "Weather App",
            project3_description: "A responsive weather application with location-based forecasts",
            project_demo_btn: "Live Demo",
            project_github_btn: "GitHub",
            contact_title: "Get In Touch",
            contact_work_together_heading: "Let's work together",
            contact_work_together_description: "I'm always interested in hearing about new projects and opportunities.",
            contact_email: "your.email@example.com",
            contact_phone: "+66 12 345 6789",
            contact_location: "Bangkok, Thailand",
            contact_form_name_placeholder: "Your Name",
            contact_form_email_placeholder: "Your Email",
            contact_form_message_placeholder: "Your Message",
            contact_form_submit_btn: "Send Message",
            footer_text: "&copy; 2025 Your Name. Software Engineering, RMUTL. All rights reserved."
        },
        zh: { // Chinese (Simplified)
            nav_home: "主页",
            nav_about: "关于我",
            nav_skills: "技能",
            nav_projects: "项目",
            nav_contact: "联系",
            hero_heading: "你好，我是 ",
            hero_subtitle: "全栈开发人员",
            hero_description: "我创建美观且功能强大的Web应用程序",
            hero_button_work: "查看我的作品",
            hero_button_contact: "联系我",
            about_title: "关于我",
            about_description: "我是一位充满热情的全栈开发人员，拥有使用现代技术创建Web应用程序的经验。我喜欢解决复杂问题并学习新技术。",
            about_exp_years: "2+",
            about_exp_text: "年经验",
            about_projects_count: "15+",
            about_projects_text: "已完成项目",
            about_clients_count: "10+",
            about_clients_text: "满意客户",
            skills_title: "我的技能",
            skill_html_title: "HTML5",
            skill_html_description: "语义化标记和现代HTML5特性",
            skill_css_title: "CSS3",
            skill_css_description: "响应式设计和现代CSS技术",
            skill_js_title: "JavaScript",
            skill_js_description: "ES6+特性和现代JavaScript",
            skill_react_title: "React",
            skill_react_description: "基于组件的UI开发",
            skill_node_title: "Node.js",
            skill_node_description: "服务器端JavaScript开发",
            skill_mongo_title: "MongoDB",
            skill_mongo_description: "NoSQL数据库管理",
            projects_title: "我的项目",
            project1_title: "电子商务网站",
            project1_description: "一个使用React和Node.js构建的全栈电子商务解决方案",
            project2_title: "任务管理应用",
            project2_description: "一个具有实时更新的协作任务管理应用程序",
            project3_title: "天气应用",
            project3_description: "一个响应式天气应用程序，带有基于位置的预测",
            project_demo_btn: "在线演示",
            project_github_btn: "GitHub",
            contact_title: "联系我",
            contact_work_together_heading: "让我们一起工作",
            contact_work_together_description: "我总是乐于了解新的项目和机会。",
            contact_email: "your.email@example.com",
            contact_phone: "+66 12 345 6789",
            contact_location: "曼谷，泰国",
            contact_form_name_placeholder: "您的姓名",
            contact_form_email_placeholder: "您的电子邮件",
            contact_form_message_placeholder: "您的消息",
            contact_form_submit_btn: "发送消息",
            footer_text: "&copy; 2025 您的名字。软件工程，RMUTL。保留所有权利。"
        },
        ko: { // Korean
            nav_home: "홈",
            nav_about: "소개",
            nav_skills: "기술",
            nav_projects: "프로젝트",
            nav_contact: "연락처",
            hero_heading: "안녕하세요, 저는 ",
            hero_subtitle: "풀스택 개발자",
            hero_description: "아름답고 기능적인 웹 애플리케이션을 만듭니다",
            hero_button_work: "내 작업 보기",
            hero_button_contact: "연락하기",
            about_title: "저에 대해",
            about_description: "저는 현대 기술을 사용하여 웹 애플리케이션을 만드는 데 경험이 있는 열정적인 풀스택 개발자입니다. 복잡한 문제를 해결하고 새로운 기술을 배우는 것을 좋아합니다.",
            about_exp_years: "2+",
            about_exp_text: "년 경력",
            about_projects_count: "15+",
            about_projects_text: "완료된 프로젝트",
            about_clients_count: "10+",
            about_clients_text: "만족한 고객",
            skills_title: "내 기술",
            skill_html_title: "HTML5",
            skill_html_description: "시맨틱 마크업 및 최신 HTML5 기능",
            skill_css_title: "CSS3",
            skill_css_description: "반응형 디자인 및 최신 CSS 기술",
            skill_js_title: "JavaScript",
            skill_js_description: "ES6+ 기능 및 최신 JavaScript",
            skill_react_title: "React",
            skill_react_description: "컴포넌트 기반 UI 개발",
            skill_node_title: "Node.js",
            skill_node_description: "서버 측 JavaScript 개발",
            skill_mongo_title: "MongoDB",
            skill_mongo_description: "NoSQL 데이터베이스 관리",
            projects_title: "내 프로젝트",
            project1_title: "전자상거래 웹사이트",
            project1_description: "React 및 Node.js로 구축된 풀스택 전자상거래 솔루션",
            project2_title: "작업 관리 앱",
            project2_description: "실시간 업데이트가 가능한 협업 작업 관리 애플리케이션",
            project3_title: "날씨 앱",
            project3_description: "위치 기반 예측을 제공하는 반응형 날씨 애플리케이션",
            project_demo_btn: "라이브 데모",
            project_github_btn: "GitHub",
            contact_title: "연락하기",
            contact_work_together_heading: "함께 일합시다",
            contact_work_together_description: "저는 항상 새로운 프로젝트와 기회에 대해 듣는 데 관심이 있습니다.",
            contact_email: "your.email@example.com",
            contact_phone: "+66 12 345 6789",
            contact_location: "방콕, 태국",
            contact_form_name_placeholder: "귀하의 이름",
            contact_form_email_placeholder: "귀하의 이메일",
            contact_form_message_placeholder: "귀하의 메시지",
            contact_form_submit_btn: "메시지 보내기",
            footer_text: "&copy; 2025 당신의 이름. 소프트웨어 공학, RMUTL. 모든 권리 보유."
        },
        ja: { // Japanese
            nav_home: "ホーム",
            nav_about: "私について",
            nav_skills: "スキル",
            nav_projects: "プロジェクト",
            nav_contact: "お問い合わせ",
            hero_heading: "こんにちは、私は",
            hero_subtitle: "フルスタック開発者",
            hero_description: "美しく機能的なWebアプリケーションを作成します",
            hero_button_work: "私の作品を見る",
            hero_button_contact: "お問い合わせ",
            about_title: "私について",
            about_description: "私は、最新のテクノロジーを使用してWebアプリケーションを作成する経験を持つ情熱的なフルスタック開発者です。複雑な問題を解決し、新しいテクノロジーを学ぶことが大好きです。",
            about_exp_years: "2+",
            about_exp_text: "年の経験",
            about_projects_count: "15+",
            about_projects_text: "完了したプロジェクト",
            about_clients_count: "10+",
            about_clients_text: "満足した顧客",
            skills_title: "私のスキル",
            skill_html_title: "HTML5",
            skill_html_description: "セマンティックマークアップと最新のHTML5機能",
            skill_css_title: "CSS3",
            skill_css_description: "レスポンシブデザインと最新のCSSテクニック",
            skill_js_title: "JavaScript",
            skill_js_description: "ES6+機能とモダンJavaScript",
            skill_react_title: "React",
            skill_react_description: "コンポーネントベースのUI開発",
            skill_node_title: "Node.js",
            skill_node_description: "サーバーサイドJavaScript開発",
            skill_mongo_title: "MongoDB",
            skill_mongo_description: "NoSQLデータベース管理",
            projects_title: "私のプロジェクト",
            project1_title: "Eコマースウェブサイト",
            project1_description: "ReactとNode.jsで構築されたフルスタックのEコマースソリューション",
            project2_title: "タスク管理アプリ",
            project2_description: "リアルタイム更新を備えた共同タスク管理アプリケーション",
            project3_title: "天気アプリ",
            project3_description: "位置情報に基づく予測を備えたレスポンシブ天気アプリケーション",
            project_demo_btn: "ライブデモ",
            project_github_btn: "GitHub",
            contact_title: "お問い合わせ",
            contact_work_together_heading: "一緒に働きましょう",
            contact_work_together_description: "新しいプロジェクトや機会についていつでも喜んでお話します。",
            contact_email: "your.email@example.com",
            contact_phone: "+66 12 345 6789",
            contact_location: "バンコク、タイ",
            contact_form_name_placeholder: "あなたの名前",
            contact_form_email_placeholder: "あなたのメール",
            contact_form_message_placeholder: "あなたのメッセージ",
            contact_form_submit_btn: "メッセージを送信",
            footer_text: "&copy; 2025 あなたの名前. ソフトウェア工学, RMUTL. 全著作権所有."
        }
    };

    const languageSelect = document.getElementById('language-select');

    function applyTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    if (key === 'hero_heading') {
                        const nameSpan = element.querySelector('.highlight');
                        if (nameSpan) {
                            element.innerHTML = translations[lang][key] + `<span class="highlight">${nameSpan.textContent}</span>`;
                        } else {
                            element.textContent = translations[lang][key];
                        }
                    } else {
                        element.innerHTML = translations[lang][key]; 
                    }
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('selectedLanguage', lang);
    }

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    applyTranslations(savedLanguage);

    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            const selectedLang = event.target.value;
            applyTranslations(selectedLang);
        });
    };