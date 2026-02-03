# Nuxt EPI Suite Demo

Небольшое приложение, которое запрашивает данные по CAS и показывает первые карточки результата.

## Запуск через Docker

Алгоритм:
1) `just docker-build`
2) `just docker-run`
3) Открыть `http://localhost:3000/cas=002921-88-2`

## Запуск через Yarn

Установка зависимостей:
```bash
yarn install
```

Запуск dev-сервера:
```bash
yarn dev
```

Открыть в браузере:
```
http://localhost:3000/cas=002921-88-2
```

## Как искать CAS

Формат URL:
```
http://localhost:3000/cas=ВАШ_CAS
```

Примеры:
```
http://localhost:3000/cas=002921-88-2
http://localhost:3000/cas=005598-13-0
```

Если API вернет данные — они отобразятся в карточках.
