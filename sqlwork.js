/**
 * Created by KrSaEg on 27.02.2017.
 */
var sqlite3 = require('sqlite3').verbose();
var mydb = "aktirovka.db";
var db = new sqlite3.Database(mydb);
//new function sqlwork(to,cl,sm) {
function showdate() {
    var dt = new Date();
    var day = dt.getDate();
    var month = dt.getMonth() + 1;
    var year = dt.getFullYear();
    if (month <= 9) month = '0' + month;
    if (day <= 9) day = '0' + day;
    var cooldate = year + "." + month + "." +day;
    return cooldate;
};
    db.serialize(function xxx(to, cl, sm) {
        var id = '';
        //var to = '3465';
        var da = showdate();
        //var sm = '2';
        //var cl = '8';
        if ((to != NULL)&&(cl != NULL)&&(sm != NULL)) {
            db.run('INSERT INTO aktirovka_days (city, date, smena, class) VALUES (?,?,?,?)', to, da, sm, cl);
        }
        //db.finalize();
        db.each('SELECT * FROM aktirovka_days', function (err, row) {
            /*        if (err)
             {
             res.render('index');
             }
             else*/
            console.log(row.akt_id + ': ' + row.city + ': ' + row.date + ': ' + row.smena + ': ' + row.class);
        });
    });
    db.close();

//};
