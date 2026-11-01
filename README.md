# Anastasiia Mind

Сайт психологині Анастасії: Next.js 15, Tailwind CSS 4 та оригінальні компоненти [Magic UI](https://magicui.design).

## Що де лежить

| Файл | Що в ньому |
|---|---|
| `src/content.ts` | **Усі тексти (UA + EN), посилання і ціни.** Щоб щось змінити на сайті, найчастіше достатньо цього файлу. |
| `src/app/page.tsx` | Розмітка сторінки, тобто які секції і в якому порядку. |
| `src/app/globals.css` | Кольори бренду, шрифти й анімації Magic UI. |
| `src/components/magicui/` | Оригінальні компоненти Magic UI (ліцензія MIT). |
| `public/img/` | Фото. Нове фото кладете сюди і вказуєте його ім'я в `content.ts`. |

### Як вписати ціни і Telegram-бот

Відкрийте `src/content.ts` і заповніть рядки на початку файлу:

```ts
export const LINKS = {
  telegram: "https://t.me/назва_бота",
}
export const PRICES = {
  single: "60 €",
  pack: "270 €",
  packInsteadOf: "300 €",
}
```

Подарунки в пакеті змінюються в тому ж файлі, у блоці `pricing.pack.gifts`.

## Як викласти сайт в інтернет (GitHub + Vercel, безкоштовно)

1. **GitHub.** Зареєструйтеся на github.com. Натисніть **New repository**, назвіть його `anastasiia-mind` і натисніть **Create**. На сторінці репозиторію виберіть **uploading an existing file** і перетягніть туди **вміст** цієї папки, без `node_modules`, `.next` і `out`. Потім натисніть **Commit changes**.
2. **Vercel.** Зайдіть на vercel.com і виберіть **Sign up with GitHub**. Натисніть **Add New → Project**, виберіть репозиторій `anastasiia-mind` і натисніть **Deploy**. Більше нічого налаштовувати не треба.
3. Приблизно через хвилину сайт працюватиме за адресою `anastasiia-mind.vercel.app`, цілодобово й без вашої участі.
4. **Свій домен** (необов'язково): у Vercel відкрийте **Project → Settings → Domains** і додайте домен, наприклад `anastasiia-mind.com`. Купити його можна просто там (близько 10–15 € на рік).

Після кожної зміни файлів на GitHub Vercel сам перезбирає сайт за 1–2 хвилини.

## Запуск на своєму комп'ютері (необов'язково)

Потрібен Node.js 20 або новіший.

```bash
npm install
npm run dev      # відкрийте http://localhost:3000
npm run build    # готовий статичний сайт з'явиться в папці out/
```

Папку `out/` можна викласти на будь-який хостинг: Netlify, Cloudflare Pages чи GitHub Pages.

## Портфоліо курсів (папка `docs/`)

Окремий односторінковий сайт з 4 курсами: `docs/index.html`, а поруч документи `privacy.html`, `terms.html` і `refund.html`. Він не залежить від Next.js-сайту і нічого не потребує для збирання.

Щоб він запрацював в інтернеті безкоштовно: **Settings → Pages → Source: Deploy from a branch → Branch: `main`, папка `/docs` → Save**. Через 1–2 хвилини сайт буде за адресою `https://anastasiakalcenko197-wq.github.io/anastasiia-mind/`, а кожен курс за посиланням `…/#course-1` … `#course-4`.

Meta Pixel вмикається, якщо вписати ID у рядок `window.PIXEL_ID=""` у `docs/index.html`, і завантажується лише після згоди людини на cookies.

---

**EN:** Next.js 15 static site built with original Magic UI components. Edit copy, links and prices in `src/content.ts`. To deploy, push this folder to GitHub and import it in Vercel (no configuration needed). `npm run build` writes a static site to `out/`.
