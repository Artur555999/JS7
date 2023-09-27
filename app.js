// Первая часть

 let a = prompt('Введите своё имя');
 let b = +prompt('Введите свой год рождение');
 let c = +prompt('Введите нынешний год');

 function res() {
     let sum = a + ', ' + 'Ваш возраст ' + (c - b) + '.'
     return sum 
 }

console.log(res());

// Первая часть окончена

// Вторая часть 

function r(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

 let x = +prompt('Введите количество примеров'); 
 
    for (i = 0; i < x; i++) {
      
      let max = 30;
      
      let Number1 = r(max);
      let Number2 = r(max);
      
       if (Number1 <= 15 && Number2 >= 17) {
      var word = Number1 + Number2
      var primer = +prompt(Number1 + ' + ' + Number2 + ' =');
       }
       else if (Number1 <= 20 && Number2 <= 16) {
        var word = Number1 - Number2
        var primer = +prompt(Number1 + ' - ' + Number2 + ' =');
       }
       else if (Number1 >= 10 && Number2 <= 8) {
        var word = Number1 * Number2
        var primer = +prompt(Number1 + ' * ' + Number2 + ' =');
       }
       else{
        var word = Number1 / Number2
        var primer = +prompt(Number1 + ' / ' + Number2 + ' =');
       }
       
       if (primer == word) {
        console.log('Ваш ответ верный  - ' + word + '.');
      }else{
        console.log('Ваш ответ не верный - ' + primer + '.Верный ответ - '  + word + '!');
      } 
      
    }
    
    // Вторая часть окончена