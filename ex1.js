let input = prompt ("Введите число:");
let number= +input;
if (typeof number === 'number' && !isNaN(number)) {
  if (number % 2 === 0) {console.log(`${number} - четное число`);
                        } else {
                          console.log(`${number} - нечетное число`)
                        }
} else {
  console.log("Упс, кажется вы ошиблись")
}