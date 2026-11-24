# Лендинг «Спецтехника 74»

Современный одностраничный сайт на **React + Vite** для аренды спецтехники в Челябинске.
Светлая палитра, синий градиент, стеклянные карточки, появление блоков при скролле,
parallax-фоны, hover-анимации и адаптивная вёрстка.

## Запуск

В текущей среде Node.js не установлен. Установите Node.js 20 LTS (или новее), затем:

```bash
npm install
npm run dev
```

Сборка для продакшена:

```bash
npm run build
npm run preview
```

## Структура

- `src/App.jsx` — сборка страницы и передача выбранной задачи в форму.
- `src/components/` — блоки: шапка, первый экран, шаги, техника, цены, гарантии, форма, контакты, подвал.
- `src/hooks/useScrollEffects.js` — IntersectionObserver для reveal-анимаций, parallax-переменная `--scroll-y`, состояние шапки.
- `src/styles.css` — вся стилистика, анимации и адаптив.

## Что нужно заменить перед публикацией

1. Телефон `+7 (XXX) XXX-XX-XX` — заменить на рабочий номер (в `Header.jsx`, `Hero.jsx`, `Contacts.jsx`).
2. E-mail `info@spec74.ru`, адрес `Челябинск, [улица, район]`, ссылки Telegram/WhatsApp.
3. ИНН/ОГРН и название компании в `Footer.jsx`.
4. Координаты метки в `Contacts.jsx` в `iframe` Яндекс.Карт — указать адрес базы.
5. Отправку заявки: кнопка «Отправить заявку — перезвоним за 15 минут» открывает модальное окно с полями «Имя» и «Телефон». Отправка реализована в `submitCall` (`RequestForm.jsx`) через Google Apps Script → Google Таблицу; URL веб-приложения хранится в `src/config.js`. Пока стоит заглушка `ВАШ_URL_GOOGLE_APPS_SCRIPT`, заявка выводится в консоль и показывается демо-экран успеха.
6. Ссылку на политику конфиденциальности (`#privacy` в `Footer.jsx`) — заменить на реальную страницу/файл.

## Настройка отправки заявок в Google Таблицу

1. Создайте Google Таблицу, например «Заявки Спецтехника 74».
2. В меню: **Расширения → Apps Script**. В открывшемся файле `Код.gs` удалите всё и вставьте скрипт ниже, сохраните.
3. **Развёртывание → Новое развёртывание → Веб-приложение**. «Выполнять как» — «Я», «У кого есть доступ» — «Все». Подтвердите доступ и скопируйте URL вида `https://script.google.com/macros/s/…/exec`.
4. Пришлите URL мне — я подставлю его в `src/config.js` и `preview.template.html`, пересоберу `preview.html` и проверю отправку.

Скрипт для Apps Script:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Заявки');
    if (!sheet) {
      sheet = ss.insertSheet('Заявки');
      sheet.appendRow(['Дата', 'Имя', 'Телефон', 'Техника', 'Комментарий']);
    }
    sheet.appendRow([
      data.createdAt || new Date().toISOString(),
      data.name || '',
      data.phone || '',
      data.task || '',
      data.comment || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Номер телефона отправляется с ведущим апострофом (`'+7...`), чтобы Google Таблицы не воспринимали его как формулу и не показывали `#ERROR!`.

⚠️ Доступ «Все» означает, что строку может записать любой, у кого есть ссылка. Для публичного лендинга это допустимо, но не публикуйте URL скрипта где попало.

## Особенности

- Кнопки карточек техники автоматически подставляют нужный «Вид задачи» в форму и плавно прокручивают к ней.
- Анимации учитывают `prefers-reduced-motion`.
- Формат файлов: JSX + CSS без внешних UI-библиотек (иконки — inline SVG).
