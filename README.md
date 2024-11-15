# [Проект: "Фильмография"](https://eugene-gif.github.io/filmography/)

## Описание:
Pet-проект. Фильмография - это проект для поиска и сохранения ваших любимых фильмов.
Можно найти практически любой фильм или сериал, сохранить его в избранное, добавить его в список просмотренных, или добавить его в список непросмотренных фильмов. Также можно удалить. Используемые технологи: API Кинопоиска, Vite, Vue3, pinia, JS, CSS.

### Инициализация
```
npm i
```

### Запуск
```
npm run dev
```

### Сборка для продакшена
```
npm run build
```


### Деплой проекта:
##### 1. Создание и настройка репозитория.
##### 2. Установка в devDependencies gh-pages:
```
npm i gh-pages --save-dev
```
##### 3. Записываем в файл package.json в блок 'scripts':
```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
##### 4. В vite.config.js добавляем:
```
export default defineConfig({
  base: "/name-project",
})
```
##### 5. При необходимости вызываем команду:
```
npm run deploy
```
После ввода команды проект автоматически деплоится в ветку gh-pages
