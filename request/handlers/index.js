//const { mysql } = require('../../db/mysql/mysql');

const showIndex = async (req, res) => {
     res.render('index', {
                //text: results[0].text
         text: "Hello World"
            });
//     mysql.query('SELECT text from dummy', function (error, results) {
//         if (error) throw error;
//         else if( results ) {
//             res.render('index', {
//                 text: results[0].text
//             });
//         }
//     });
};


module.exports = {
    showIndex
}
