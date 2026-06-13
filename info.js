const CONTENT = {
  profile: {
    name: "Владимир",
    image: "./img/profile_image.png",
    imageAlt: "profile image"
  },
  about: {
    title: "Обо мне",
    paragraphs: [
      "Приветствую! Меня зовут Владимир",
      "Я увлекаюсь информационными технологиями, техникой и музыкой",
      "Закончил Сибирский государственный университет телекоммуникаций и информатики после чего более трёх лет работал специалистом по внедрению программного обеспечения в новосибирской компании Smart Consulting",
      "Внедрял комплексные информационные системы, участвовал в жизненном цикле программных продуктов от согласования ТЗ до внедрения, сопровождения и эксплуатации",
      "Мне интересны направление системного администрирования и DevOps"
    ]
  },
  links: {
    title: "Мои ссылки",
    items: [
      { label: "GitHub", url: "https://github.com/selvnv" },
      { label: "GitLab", url: "https://gitlab.com/test_group_selv" }
    ]
  },
  whatIDo: {
    title: "Чем я занимаюсь",
    image: "./img/gitlab_example.png",
    imageAlt: "Some image",
    intro: "В качестве специалиста по внедрению программного обеспечения выполняю следующие задачи:",
    tasks: [
      "Диагностика сетевой доступности виртуальных машин и сервисов (telnet, curl, ping)",
      "Подключение к хостам по SSH, передача файлов через SCP, проброс портов",
      "Сбор и анализ логов приложений, выявление и устранение проблем в работе ПО",
      "Диагностика ресурсов и управление службами (ps, top, systemctl)",
      "Обработка обращений заказчика (2-я линия поддержки)",
      "Настройка интеграций продуктов компании (внутренние и внешние API)",
      "Управление конфигурациями приложений",
      {
        text: "Автоматизация бизнес-процессов при настройке информационных систем",
        sub: [
          "Разработал скрипт для парсинга JSON и валидации форм госуслуг → сократил время проверки с 30 минут до 1 минуты на форму",
          "Разработал скрипт массового обновления сущностей в системе → сократил время с 5–10 часов до 1 минуты"
        ]
      },
      "Анализ и согласование технических заданий (ТЗ)",
      "Ведение технической и пользовательской документации в Confluence",
      "Утверждение и участие в приёмочных испытаниях по результатам внедрений",
      "Взаимодействие с командами разработки и представителями заказчика при решении инцидентов",
      "Обучение пользователей работе в системе"
    ],
    outro: "На предыдущем месте работы: более 3-х лет опыта в роли специалиста по внедрению комплексных информационных систем. Участвовал в жизненном цикле программных продуктов от согласования ТЗ до внедрения, сопровождения и эксплуатации"
  },
  projects: {
    title: "Личные проекты",
    image: "./img/edb.gif",
    imageAlt: "Some image",
    intro: "В свободное время, а также для решения рабочих задач создаю небольшие проекты. Среди которых:",
    items: [
      {
        text: "Получение рассылки о новых вакансиях на hh.ru по заданным фильтрам",
        url: "https://github.com/selvnv/subscribe_job_rss",
        sub: [
          "Используется RSS-лента hh.ru;",
          "Пользовательское взаимодействие осуществляется через Telegram-бота;",
          "Управление приложением через CLI"
        ]
      },
      {
        text: "Напоминание о днях рождения в Telegram",
        url: "https://github.com/selvnv/birthdate-alert",
        sub: [
          "Интерфейс командной строки на Python click;",
          "Запуск настраивается по кроне;",
          "Для хранения данных используется база данных sqlite3"
        ]
      },
      {
        text: "Telegram-бот для генерации данных",
        url: "https://github.com/selvnv/rest_gear_bot",
        sub: [
          "Бот разработан на основе библиотеки python-telegram-bot;",
          "Разработаны интеграции с GigaChat и RandomVar;",
          "Управление приложением через CLI"
        ]
      },
      {
        text: "CLI-Chatbot",
        url: "https://github.com/selvnv/chat_bot",
        sub: null,
        note: "с интеграцией с API GigaChat"
      },
      {
        text: "Запуск необходимых сервисов и создание дашбордов в Metabase (SQL, Docker)",
        url: "https://github.com/selvnv/sql_queries/tree/main/product_star_tasks/project_bi",
        sub: null
      },
      {
        text: "Скрипты на JavaScript для автоматизации массовых действий (fetch, понимание Event Loop, Promise, асинхронное выполнение кода, API)",
        url: null,
        sub: null
      },
      {
        text: "Различные учебные проекты:",
        url: null,
        sub: [
          { text: "Витрина изображений", url: "https://github.com/selvnv/simple_image_gallery" },
          { text: "Интерактивное портфолио (HTML, CSS, JavaScript)", url: "https://github.com/selvnv/portfolio_page" },
          { text: "Анимированный таймер (HTML canvas, Bootstrap, JavaScript)", url: "https://github.com/selvnv/animated_timer" },
          { text: "Конвеер CI/CD для Django-based приложения", url: "https://gitlab.com/test_group_selv/deploy_simple_project" },
          { text: "Сборка java-приложения с артефактами на GitLab", url: "https://gitlab.com/test_group_selv/test_project/-/jobs/8287884802" }
        ]
      }
    ]
  },
  experience: {
    title: "Мой опыт",
    items: [
      "Практический опыт сборки образов и развертывания приложений с использованием Docker, Docker Compose (Python/Django, PostgreSQL)",
      "Настройка пайплайнов в GitLab CI/CD для автоматизации сборки, тестирования и деплоя. Работа с Git, артефактами",
      "Базовый опыт настройки и конфигурирования Nginx, понимание HTTP/HTTPS, обратного проксирования. Настройка сетевой доступности, туннелирование (SSH)",
      "Выполнение административных задач, работа с командной строкой, управление процессами и службами",
      "Использование YAML для описания Docker Compose, формирование конфигурационных файлов (nginx, системные настройки)",
      "Разработка скриптов для автоматизации рутинных задач: Python-бот для генерация тестовых данных, обработка файлов, скрипты для автоматизации массовых действий на JavaScript через API и DOM, создание SQL-запросов в БД (PostgreSQL, Oracle)",
      "Создание технической документации и инструкций в базе знаний (Confluence)"
    ],
    outro: "За время обучения и работы в целом удалось потрогать различные технологии: C/C++, Python, JavaScript. Docker, Git (GitLab, GitHub), CI/CD, Linux, SQL, API, СМЭВ, XML, JSON, YAML, Freemarker и Apache Velocity, Jira, Confluence",
    image: "./img/subjob_bot.png",
    imageAlt: "Some image"
  },
  learning: {
    title: "Самообучение",
    image: "./img/web_example.png",
    imageAlt: "Some image",
    intro: "Постоянно обучаюсь чему-то новому. Некоторые курсы, которые я закончил или прохожу для саморазвития на данный момент:",
    courses: [
      { date: "Предполагаемая дата завершения: 2026", title: "ProductStar", desc: "Профессия: Python-разработчик" },
      { date: "Предполагаемая дата завершения: 2026", title: "Purple School", desc: "Основы Git" },
      { date: "Предполагаемая дата завершения: 2026", title: "Purple School", desc: "Bash скрипты" },
      { date: "Предполагаемая дата завершения: 2026", title: "Purple School", desc: "Docker и Ansible" },
      { date: "Завершён: 2025", title: "Purple School", desc: "Основы Linux" },
      { date: "Завершён: 2025", title: "SQLAcademy", desc: "Курс по SQL" }
    ]
  },
  skills: {
    title: "Навыки",
    image: "./img/dashboard_demo.gif",
    imageAlt: "Some image",
    intermediate: {
      label: "Навыки среднего уровня:",
      items: ["Linux", "Docker", "Python", "Git", "Bash", "SQL", "Atlassian Jira", "Atlassian Confluence", "HTML + CSS", "JavaScript", "CI/CD"]
    },
    basic: {
      label: "Навыки базового уровня:",
      items: ["Nginx", "Kubernetes", "React"]
    }
  },
  workHistory: {
    title: "Опыт работы",
    image: "./img/sc.png",
    imageAlt: "Some image",
    items: [
      { date: "2023.01-2025.12", title: "Smart Consulting", desc: "Специалист по внедрению программного обеспечения" }
    ]
  },
  certificates: {
    title: "Мои сертификаты",
    images: [
      { src: "./img/linux_basics.png", alt: "Linux basics certificate" },
      { src: "./img/sqlacademy.png", alt: "SQL Academy certificate" },
      { src: "./img/fullstack_spec_cert.jpg", alt: "Product Star Fullstack Specialization certificate" }
    ],
    defaultPreview: "./img/fullstack_spec_cert.jpg"
  },
  playlist: {
    title: "Мои музыкальные работы",
    paragraphs: [
      "Помимо информационных технологий я увлекаюсь музыкой в различном её проявлении",
      "В основном мне нравится писать свои треки, экспериментируя с жанрами и сочетаниями различных тембров. При создании треков использую Ableton Live",
      "Иногда играю на фортепиано и акустической/электрогитаре, что позволяет мне свободнее создавать"
    ],
    tracks: [
      { num: "01", title: "Surrender", duration: "4:12", src: "./audio/Surrender.mp3" },
      { num: "02", title: "Rain", duration: "3:53", src: "./audio/Rain.mp3" },
      { num: "03", title: "1743", duration: "3:00", src: "./audio/1743.mp3" },
      { num: "04", title: "Луч солнца золотого", duration: "2:26", src: "./audio/Луч солнца золотого.mp3" },
      { num: "05", title: "Crossroad", duration: "3:31", src: "./audio/Crossroad.mp3" },
      { num: "06", title: "Crazy for Love", duration: "2:32", src: "./audio/Crazy for Love.mp3" }
    ]
  },
};