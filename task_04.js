// itgid.info - курс Node.js 2024

// Task 04.
// Напишите анонимный модуль, который с помощью модуля getCSV читает файл ./f_06/v_04.csv, возвращает информацию из файла в виде одномерного массива цветов. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function () {
  const result = await getCSV('./f_06/v_04.csv',{
                                                  columns: true,
                                                  delimiter: ";",

  });
    let arr = [];
    result.map(colors => {
        for(let key in colors){
             arr.push(colors[key]);
        }
    });
    return arr;
}

