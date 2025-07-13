/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {

  if (!name) {
    return false;
  }
  let len = name.length;
  /* проверка если длина строки меньше 4 или 0 
  */


  if (len < 4) {
    return false;
  }
  if (/\s/g.test(name)) {
    return false;
  }
  return true;

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
