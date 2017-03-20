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
function addAct(to, cl, sm, callback) {
    // console.log("We are in XXX");
    if (cl != -1) {
        db.serialize(function () {
            var da = showdate();
            // console.log(to, cl, sm);
            if ((to != null) && (cl != null) && (sm != null)) {
                //console.log(showdate());
                query = db.prepare('INSERT INTO aktirovka_days (city, date, smena, class) VALUES (?,?,?,?)')
                query.run(to, da, sm, cl);
                query.finalize();
            }
            /*        db.each('SELECT * FROM aktirovka_days', function (err, row) {
             console.log(row.akt_id + ': ' + row.city + ': ' + row.date + ': ' + row.smena + ': ' + row.class);
             });
             */
            callback();
        });
    } else {
        db.serialize(function () {
            db.all('DELETE FROM aktirovka_days WHERE (city = ?)AND(smena=?)',[to,sm], function (err, rows) {
            })
        });
        callback();
    }
}

function selectData(res) {
    db.serialize(function () {
        db.all('SELECT * FROM aktirovka_days WHERE class <> "-1"', function (err, rows) {
            //console.log(rows);
            res.render('index', { title: 'Актированные дни',data: rows });
        });
    });
}
exports.addAct = addAct;
exports.selectData = selectData;
//selectData();
//exports.row = addAct.row;
