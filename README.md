# Garage Instrument

B2B-лендинг Garage Instrument на Next.js для подбора оборудования автосервиса.

## Локальный запуск

```bash
npm ci
npm run dev
```

Сайт откроется на `http://localhost:3000`.

## Проверка перед деплоем

```bash
npm run lint
npm run build
```

`npm run lint` запускает генерацию типов Next.js и строгую проверку TypeScript.

## Vercel

1. Загрузите репозиторий в GitHub, GitLab или Bitbucket.
2. Импортируйте проект в Vercel как Next.js-приложение.
3. Укажите переменную окружения `NEXT_PUBLIC_SITE_URL` со значением production-домена.
4. Оставьте команды из `vercel.json`: установка через `npm ci`, сборка через `npm run build`.

Для production-домена без завершающего слеша используйте формат:

```env
NEXT_PUBLIC_SITE_URL=https://garage-instrument.com
```
