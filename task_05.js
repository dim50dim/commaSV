// itgid.info - курс Node.js 2024

// Task 05.
// Напишите анонимный модуль, который с помощью модуля getCSV читает файл ./f_06/v_05.csv, и возвращает массив заголовков csv файла. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function () {
     const result = await getCSV('./f_06/v_05.csv',{
                                                     columns:true,
                                                     delimiter: '=',
     });
     const colors = [];
     result.map(item => {
         for(let key in item){
            colors.push(key); 
         }
     });
     console.log(colors);
     return result;
     
}
