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
    var cooldate = year + "." + month + "." + day;
    return cooldate;
};
function xxx(to, cl, sm) {
    console.log("We are in XXX");
    db.serialize(function () {
        var da = showdate();
        //console.log(to, cl, sm);
        if ((to != null) && (cl != null) && (sm != null)) {
            console.log(showdate());
            query = db.prepare('INSERT INTO aktirovka_days (city, date, smena, class) VALUES (?,?,?,?)')
            query.run(to, da, sm, cl);
            query.finalize();
        }
        db.each('SELECT * FROM aktirovka_days', function (err, row) {
            /*        if (err)
             {
             res.render('index');
             }
             else*/
            console.log(row.akt_id + ': ' + row.city + ': ' + row.date + ': ' + row.smena + ': ' + row.class);
        });
    });
};
exports.abc = xxx;
