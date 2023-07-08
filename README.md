# Скріншоти виконання команд CLI application

## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
  ```node index.js --action list```

![screenshot-action-list](https://i.ibb.co/fCKkS4G/01-action-list.png)
[Link to photo](https://ibb.co/cNp6vDX)


## Отримуємо контакт за id - виводимо в консоль об'єкт контакту або null, якщо контакту з таким id не існує.
  ```node index.js --action get --id 05olLMgyVQdWRwgKfg5J6```

![screenshot-action-get](https://i.ibb.co/NYybFd7/02-action-get.png)
[Link to photo](https://ibb.co/QmKtJ3X)


## Додаємо контакт і виводимо в консоль створений контакт
  ```node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22```

![screenshot-action-add](https://i.ibb.co/186ZJmk/03-action-add.png)
[Link to photo](https://ibb.co/0htqVGx)


## Видаляємо контакт і виводимо в консоль видалений контакт або null, якщо контакту з таким id не існує.
 ```node index.js --action remove --id qdggE76Jtbfd9eWJHrssH```
 
![screenshot-action-remove](https://i.ibb.co/cY3gTLq/04-action-remove.png)
[Link to photo](https://ibb.co/vXqwzY9)