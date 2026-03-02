# Healthcover - Landing Page

Лендинг для сервиса частного медицинского страхования. Сайт рассказывает об услугах, позволяет получить предварительный расчёт стоимости полиса и записаться на консультацию со специалистом.

**Живой сайт:** [happyfrog-dev.github.io/healthcover](https://happyfrog-dev.github.io/vanilla---healthcover/)

---

## Стек
| HTML5| CSS3 | Vanilla JS ES6+ | Google Fonts | GitHub Pages

Никаких фреймворков, сборщиков и зависимостей - проект открывается напрямую в браузере.

---

## Запуск локально

Никакой установки не требуется.

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/healthcover.git
cd healthcover

# Просто открыть файл в браузере
open index.html или npx serve .
```

Так как JS использует ES-модули (`type="module"`), при открытии через `file://` в некоторых браузерах возникнет CORS-ошибка. В этом случае нужен локальный сервер:

```bash
# Python (встроен в систему)
python3 -m http.server 3000

# Node.js
npx serve .

# VS Code — расширение Live Server
# Правый клик на index.html → Open with Live Server
```

Затем открой [http://localhost:3000](http://localhost:3000).

---

## Деплой на GitHub Pages

1. Создай репозиторий на GitHub и запушь проект:

```bash
git init
git add .
git commit -m "init: healthcover landing"
git remote add origin https://github.com/your-username/healthcover.git
git push -u origin main
```

2. В настройках репозитория перейди:
**Settings → Pages → Source → Deploy from a branch → branch: `main` / folder: `/ (root)` → Save**

3. Через минуту сайт будет доступен по адресу:

```
https://your-username.github.io/healthcover/
```

