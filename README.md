# so-test-task
На входе массив объектов (прав доступа).

Примерная структура объекта:
```json
{
  "id": 10,
  "parentId": 1,
  "name": "Редактировать пользователя",
  "checked": true
}
```

Задача:
Массив произвольным набором элементов.
Отобразить этот массив в виде древовидной структуры, группировка по parentId.
Главное, чтобы это решение не имело предела вложенностей потомков.
Каждый элемент имеет чекбокс, который контролирует как свое внутреннее свойство checked, так и свойство
его родителя. Например, cвойство checked родителя может иметь значение true, но сам чекбокс будет в состоянии indeterminate, это если
не у всех потомков checked однозначно.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
