set dotenv-load := false

default:
  @just --list

docker-build:
  docker build -t nuxt-app .

docker-run:
  docker run --rm -p 3000:3000 --env-file .env nuxt-app

docker-run-no-env:
  docker run --rm -p 3000:3000 nuxt-app
