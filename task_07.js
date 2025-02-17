// itgid.info - курс Node.js 2024

// Task 07.
// Создайте анонимный модуль, который помощью модуля getCSV читает файл ./f_06/v_07.csv, и возвращает сумму всех чисел файла. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function () {
   const result = await getCSV('./f_06/v_07.csv',{
                                                  columns: true,
                                                  delimiter: ';',
   });
   let numbers = 0;
   result.map(item => {
    for(let key in item){
        if(Number(item[key])) numbers += +item[key];
    }
   });
   return numbers;
}
