set dotenv-load := false

default:
  @just --list

# 1) Собрать docker-образ
docker-build:
  docker build -t nuxt-app .

# 2) Запустить контейнер с .env
docker-run:
  docker run --rm -p 3000:3000 --env-file .env nuxt-app

# 3) Запустить контейнер без .env
docker-run-no-env:
  docker run --rm -p 3000:3000 nuxt-app
