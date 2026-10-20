// Усі тексти сайту в одному місці. Щоб змінити текст, правте його тут.
// All site copy lives here: edit Ukrainian (uk) and English (en) side by side.

export type Lang = "uk" | "en"
export type T = { uk: string; en: string }

// === ПОСИЛАННЯ / LINKS — впишіть сюди адреси ===
export const LINKS = {
  instagram: "https://www.instagram.com/anastasiia.mind/",
  instagramHandle: "@anastasiia.mind",
  telegram: "", // напр. "https://t.me/назва_бота"
}

// === ЦІНИ / PRICES — впишіть, коли визначитеся (порожньо = показується заглушка) ===
export const PRICES = {
  single: "", // напр. "60 €"
  pack: "", // напр. "270 €"
  packInsteadOf: "", // напр. "300 €"
}

export const nav: { href: string; label: T }[] = [
  { href: "#about", label: { uk: "Про мене", en: "About" } },
  { href: "#topics", label: { uk: "Запити", en: "Topics" } },
  { href: "#methods", label: { uk: "Методи", en: "Methods" } },
  { href: "#pricing", label: { uk: "Вартість", en: "Pricing" } },
  { href: "#contact", label: { uk: "Контакт", en: "Contact" } },
]

export const hero = {
  badge: { uk: "Психологиня · mind-body підхід · онлайн", en: "Psychologist · mind-body approach · online" },
  titleA: { uk: "Тіло пам'ятає те, що ми", en: "The body remembers what we" },
  titleAccent: { uk: "не сказали", en: "never said" },
  titleB: { uk: "вголос", en: "out loud" },
  lead: {
    uk: "Я Анастасія, психологиня і персональна тренерка. Допомагаю почути себе: свої емоції, свої межі і своє тіло. М'яко, без тиску, у твоєму темпі.",
    en: "I'm Anastasiia, a psychologist and personal trainer. I help you hear yourself: your emotions, your boundaries and your body. Gently, without pressure, at your own pace.",
  },
  rotatePrefix: { uk: "Простір, де можна", en: "A space where you can" },
  rotate: {
    uk: ["видихнути", "бути собою", "почути тіло", "знайти опору"],
    en: ["breathe out", "be yourself", "hear your body", "find support"],
  },
  ctaPrimary: { uk: "Записатися на консультацію", en: "Book a session" },
  ctaSecondary: { uk: "Дізнатися більше", en: "Learn more" },
  meta: [
    { uk: "Українська", en: "Ukrainian" },
    { uk: "Російська", en: "Russian" },
    { uk: "Онлайн з Норвегії", en: "Online from Norway" },
  ],
}

export const stats: { value: number; unit?: T; label: T }[] = [
  { value: 4, label: { uk: "напрями сертифікації", en: "certified approaches" } },
  { value: 2, label: { uk: "мови роботи: українська і російська", en: "working languages: Ukrainian and Russian" } },
  { value: 50, unit: { uk: "хв", en: "min" }, label: { uk: "триває одна онлайн-сесія", en: "for one online session" } },
  { value: 5, label: { uk: "сесій у пакеті з подарунками", en: "sessions in the gift package" } },
]

export const phrasesA: T[] = [
  { uk: "безпечний простір", en: "a safe space" },
  { uk: "без осуду", en: "no judgement" },
  { uk: "у твоєму темпі", en: "at your own pace" },
  { uk: "емоції живуть у тілі", en: "emotions live in the body" },
  { uk: "твої відповіді вже в тобі", en: "your answers are already in you" },
]
export const phrasesB: T[] = [
  { uk: "тіло", en: "body" },
  { uk: "емоції", en: "emotions" },
  { uk: "межі", en: "boundaries" },
  { uk: "ресурс", en: "resources" },
  { uk: "тут і тепер", en: "here and now" },
  { uk: "прийняття", en: "acceptance" },
]

export const about = {
  eyebrow: { uk: "Про мене", en: "About me" },
  titleA: { uk: "Психологія і тіло", en: "Psychology and the body" },
  titleEm: { uk: "в одній роботі", en: "in one practice" },
  quote: {
    uk: "Я не «лагоджу» людей. Я допомагаю побачити себе, свої ресурси і знайти власні відповіді.",
    en: "I don't \"fix\" people. I help you see yourself, find your resources and arrive at your own answers.",
  },
  p1: {
    uk: "Я закінчила психологічний факультет Херсонського державного університету, а ще працюю тренеркою. Тому добре знаю, як стрес, тривога і невиражені почуття осідають у тілі: у напрузі, втомі, симптомах без видимої причини.",
    en: "I graduated from the Faculty of Psychology at Kherson State University, and I also work as a trainer. So I know well how stress, anxiety and unexpressed feelings settle in the body: as tension, fatigue, symptoms with no clear cause.",
  },
  p2: {
    uk: "Живу в Норвегії і працюю онлайн, українською та російською. Мій стиль м'який і підтримуючий: без тиску, без поспіху і без «ти повинна».",
    en: "I live in Norway and work online, in Ukrainian and Russian. My style is gentle and supportive: no pressure, no rush and no \"you should\".",
  },
}

export const topics = {
  eyebrow: { uk: "З чим я працюю", en: "What I work with" },
  titleA: { uk: "Коли всередині", en: "When it feels" },
  titleEm: { uk: "важко", en: "heavy" },
  titleB: { uk: ", а пояснити складно", en: " inside and hard to explain" },
  lead: {
    uk: "Мої клієнти — звичайні люди, які стикнулися з внутрішніми труднощами й хочуть краще розуміти себе. Без вузьких рамок за віком чи професією.",
    en: "My clients are ordinary people facing inner struggles who want to understand themselves better. No narrow limits by age or profession.",
  },
  groups: [
    {
      key: "emotions",
      num: "I",
      title: { uk: "Емоції", en: "Emotions" },
      items: [
        { uk: "Тривога, страхи, внутрішня напруга", en: "Anxiety, fears, inner tension" },
        { uk: "Емоційне вигорання", en: "Emotional burnout" },
        { uk: "Робота з емоціями", en: "Working with emotions" },
        { uk: "Адаптація до змін у житті", en: "Adapting to life changes" },
      ],
    },
    {
      key: "self",
      num: "II",
      title: { uk: "Я та інші", en: "Self & others" },
      items: [
        { uk: "Низька самооцінка, невпевненість", en: "Low self-esteem, self-doubt" },
        { uk: "Стосунки й повторювані сценарії", en: "Relationships and repeating patterns" },
        { uk: "Особисті кордони", en: "Personal boundaries" },
        { uk: "Залежність від думки інших", en: "Depending on others' opinions" },
        { uk: "Пізнання себе і цілі", en: "Self-discovery and goals" },
      ],
    },
    {
      key: "body",
      num: "III",
      title: { uk: "Тіло", en: "Body" },
      items: [
        { uk: "Психосоматичні прояви", en: "Psychosomatic symptoms" },
        { uk: "Прийняття тіла", en: "Body acceptance" },
        { uk: "Підтримка спортсменів: мотивація, впевненість", en: "Support for athletes: motivation, confidence" },
        { uk: "Ментальна підготовка до стартів", en: "Mental preparation for competition" },
      ],
    },
  ],
  ctaTitle: { uk: "Не знайшла свій запит?", en: "Don't see your topic?" },
  ctaText: {
    uk: "Напиши кількома словами, що відчуваєш. Разом розберемося, чи підійде тобі моя робота.",
    en: "Write a few words about how you feel. Together we'll see whether my work fits you.",
  },
  ctaLink: { uk: "Написати мені", en: "Message me" },
}

export const methods = {
  eyebrow: { uk: "Методи", en: "Methods" },
  titleA: { uk: "На що я", en: "What I" },
  titleEm: { uk: "спираюся", en: "draw on" },
  lead: {
    uk: "Простими словами про підходи, з якими я працюю. Обираємо те, що підходить саме тобі.",
    en: "The approaches I use, in plain words. We choose what fits you.",
  },
  items: [
    {
      title: { uk: "Психосоматика", en: "Psychosomatics" },
      tag: { uk: "емоції і тіло", en: "emotions & body" },
      text: {
        uk: "Шукаємо зв'язок між тим, що ти відчуваєш, і тим, як реагує тіло. Як невиражені почуття, стрес і напруга стають тілесними сигналами. Це не заміна лікаря: при симптомах спершу варто перевірити здоров'я.",
        en: "We look for the link between what you feel and how your body reacts: how unexpressed feelings, stress and tension turn into bodily signals. It doesn't replace a doctor: symptoms should be checked medically first.",
      },
    },
    {
      title: { uk: "НЛП", en: "NLP" },
      tag: { uk: "переконання і мова", en: "beliefs & language" },
      text: {
        uk: "Нейролінгвістичне програмування. Працюємо з переконаннями, внутрішніми установками, словами й образами, якими ти думаєш про себе і свою ситуацію.",
        en: "Neuro-linguistic programming. We work with beliefs, inner assumptions, and the words and images you use to think about yourself and your situation.",
      },
    },
    {
      title: { uk: "Позитивна психологія", en: "Positive psychology" },
      tag: { uk: "ресурси і сенси", en: "strengths & meaning" },
      text: {
        uk: "Опора на твої сильні сторони, цінності й сенси. Мета не лише прибрати проблему, а й допомогти жити повніше.",
        en: "Building on your strengths, values and sense of meaning. The goal is not only to remove a problem but to help you live more fully.",
      },
    },
    {
      title: { uk: "Гештальт", en: "Gestalt" },
      tag: { uk: "тут і тепер", en: "here and now" },
      text: {
        uk: "Увага до того, що відбувається з тобою зараз: відчуття, емоції, потреби. Допомагає завершувати те, що «висить» усередині.",
        en: "Attention to what is happening with you right now: sensations, emotions, needs. It helps close what still feels unfinished inside.",
      },
    },
  ],
}

export const life = {
  eyebrow: { uk: "Поза кабінетом", en: "Outside the session" },
  titleA: { uk: "Жива людина,", en: "A real person," },
  titleEm: { uk: "не", en: "not" },
  titleB: { uk: "підручник", en: "a textbook" },
  lead: {
    uk: "Спорт, подорожі, північна зима. Те, що наповнює мене і що я приношу в роботу з тілом і емоціями.",
    en: "Sport, travel, northern winters. What fills me up and what I bring into working with body and emotions.",
  },
  photos: [
    { src: "img/museum.jpg", alt: "У музеї перед великою проєкцією картини", title: { uk: "Мистецтво", en: "Art" }, text: { uk: "Помічати красу навіть у звичайному дні", en: "Noticing beauty even on an ordinary day" } },
    { src: "img/brera.jpg", alt: "Серед колон старовинного палацу", title: { uk: "Пауза", en: "Pause" }, text: { uk: "Відпочинок теж частина роботи", en: "Rest is part of the work too" } },
    { src: "img/gym.jpg", alt: "У тренажерному залі", title: { uk: "Тіло", en: "Body" }, text: { uk: "Рух як спосіб повернутися в тіло", en: "Movement as a way back into the body" } },
    { src: "img/arena.jpg", alt: "На гандбольному матчі", title: { uk: "Спорт", en: "Sport" }, text: { uk: "Психологічна підтримка спортсменів", en: "Psychological support for athletes" } },
    { src: "img/galleria.jpg", alt: "У галереї Віктора Емануїла в Мілані", title: { uk: "Мілан", en: "Milan" }, text: { uk: "Дозволити собі бути собою", en: "Letting yourself be yourself" } },
    { src: "img/ski.jpg", alt: "На гірськолижному схилі", title: { uk: "Норвегія", en: "Norway" }, text: { uk: "Північна зима вчить берегти ресурс", en: "Northern winters teach you to protect your energy" } },
    { src: "img/paris-day.jpg", alt: "Біля Ейфелевої вежі", title: { uk: "Париж", en: "Paris" }, text: { uk: "Легкість, яку можна повернути", en: "A lightness you can get back" } },
  ],
}

export const steps = {
  eyebrow: { uk: "Як проходить робота", en: "How it works" },
  titleA: { uk: "Три кроки", en: "Three steps" },
  titleEm: { uk: "до першої зустрічі", en: "to our first session" },
  lead: {
    uk: "Онлайн, з будь-якої точки світу. Тобі потрібні лише тихе місце і трохи часу для себе.",
    en: "Online, from anywhere in the world. All you need is a quiet place and a little time for yourself.",
  },
  items: [
    { n: "i.", title: { uk: "Напиши мені", en: "Message me" }, text: { uk: "Коротко розкажи, що тебе турбує. Можна кількома словами, цього достатньо.", en: "Tell me briefly what's on your mind. A few words are enough." } },
    { n: "ii.", title: { uk: "Знайомство", en: "First session" }, text: { uk: "Перша онлайн-сесія: говоримо про твій запит і про те, чого ти хочеш від роботи.", en: "Our first online session: we talk about your request and what you want from our work." } },
    { n: "iii.", title: { uk: "У твоєму темпі", en: "At your pace" }, text: { uk: "Рухаємося поступово. Ти сама вирішуєш, про що і коли говорити.", en: "We move gradually. You decide what to talk about, and when." } },
  ],
}

export const education = {
  eyebrow: { uk: "Освіта", en: "Education" },
  title: { uk: "Бакалавр психології, 2024", en: "Bachelor of Psychology, 2024" },
  p1: {
    uk: "Херсонський державний університет. Освітня програма «Психологія», акредитована Міністерством освіти і науки України. Галузь знань: соціальні та поведінкові науки.",
    en: "Kherson State University. Psychology programme accredited by the Ministry of Education and Science of Ukraine. Field of study: social and behavioural sciences.",
  },
  p2: {
    uk: "Зараз проходжу професійну перекваліфікацію в школі «Експерт».",
    en: "Currently completing professional retraining at the \"Expert\" school.",
  },
  certEyebrow: { uk: "Сертифікати", en: "Certificates" },
  certs: [
    { name: { uk: "НЛП", en: "NLP" }, note: { uk: "сертифікат", en: "certified" } },
    { name: { uk: "Позитивна психологія", en: "Positive psychology" }, note: { uk: "сертифікат", en: "certified" } },
    { name: { uk: "Гештальт-терапія", en: "Gestalt therapy" }, note: { uk: "сертифікат", en: "certified" } },
    { name: { uk: "Психологія підсвідомого", en: "Psychology of the subconscious" }, note: { uk: "сертифікат", en: "certified" } },
    {
      name: {
        uk: "Конференція «Особистість у кризових умовах та критичних ситуаціях життя», СумДПУ ім. А. С. Макаренка",
        en: "Conference \"Personality in Crisis Conditions and Critical Life Situations\", Sumy State Pedagogical University",
      },
      note: { uk: "2024 · 13 год", en: "2024 · 13 h" },
    },
    { name: { uk: "Персональний тренінг", en: "Personal training" }, note: { uk: "практика", en: "practising" } },
  ],
}

export const pricing = {
  eyebrow: { uk: "Формати і вартість", en: "Formats & pricing" },
  titleA: { uk: "Одна зустріч або", en: "One session or" },
  titleEm: { uk: "шлях", en: "a path" },
  titleB: { uk: "у кілька кроків", en: "of several steps" },
  lead: {
    uk: "Можна прийти на одну консультацію, щоб познайомитися. А для глибшої роботи є пакет із подарунками, які допомагають між сесіями.",
    en: "You can start with a single session to get to know each other. For deeper work there is a package with gifts that support you between sessions.",
  },
  single: {
    kicker: { uk: "Одна сесія", en: "Single session" },
    unit: { uk: "· 50 хв онлайн", en: "· 50 min online" },
    text: { uk: "Знайомство з запитом, перші відповіді й розуміння, куди рухатися далі.", en: "We explore your request, find first answers and see where to go next." },
    cta: { uk: "Записатися", en: "Book" },
    placeholder: { uk: "[ціна]", en: "[price]" },
  },
  pack: {
    kicker: { uk: "Пакет 5 сесій", en: "5-session package" },
    badge: { uk: "+ подарунки", en: "+ gifts" },
    insteadOf: { uk: "· замість", en: "· instead of" },
    text: { uk: "Регулярна робота в твоєму темпі. Між сесіями ти отримуєш матеріали, які допомагають закріпити зміни.", en: "Regular work at your own pace. Between sessions you get materials that help the changes stick." },
    placeholder: { uk: "[ціна пакета]", en: "[package price]" },
    placeholderInstead: { uk: "[5 × ціна]", en: "[5 × price]" },
    gifts: [
      { ph: { uk: "[подарунок 1]", en: "[gift 1]" }, text: { uk: "наприклад, авторська колода метафоричних карт", en: "e.g. an original metaphorical card deck" } },
      { ph: { uk: "[подарунок 2]", en: "[gift 2]" }, text: { uk: "наприклад, робочий зошит із вправами", en: "e.g. a workbook with exercises" } },
      { ph: { uk: "[подарунок 3]", en: "[gift 3]" }, text: { uk: "наприклад, аудіопрактика для розслаблення тіла", en: "e.g. an audio practice for body relaxation" } },
    ],
    cta: { uk: "Обрати пакет", en: "Choose package" },
  },
}

export const contact = {
  eyebrow: { uk: "Запис", en: "Booking" },
  titleA: { uk: "Перший крок можна зробити", en: "The first step can be" },
  titleEm: { uk: "маленьким", en: "a small one" },
  text: {
    uk: "Напиши мені в Instagram або в Telegram-бот. Я відповім і запропоную час для першої онлайн-сесії.",
    en: "Message me on Instagram or via the Telegram bot. I'll reply and suggest a time for our first online session.",
  },
  tgSoon: { uk: "Telegram-бот · скоро", en: "Telegram bot · soon" },
  tg: { uk: "Telegram-бот", en: "Telegram bot" },
  copy: { uk: "Копіювати нік", en: "Copy handle" },
  copied: { uk: "Нік скопійовано", en: "Handle copied" },
  selected: { uk: "Нік виділено, скопіюй його", en: "Handle selected, copy it" },
  facts: [
    { uk: "Онлайн", en: "Online" },
    { uk: "Українська · Російська", en: "Ukrainian · Russian" },
    { uk: "Дорослі клієнти", en: "Adult clients" },
  ],
}

export const footer = {
  note: {
    uk: "Психологічна консультація не замінює лікування і не є медичною допомогою. Я не ставлю діагнозів. Якщо тобі зараз дуже важко або є загроза життю, звернися до лікаря чи екстреної служби.",
    en: "Psychological counselling does not replace medical treatment. I don't make diagnoses. If you're in crisis or your life is at risk, please contact a doctor or emergency services.",
  },
}
