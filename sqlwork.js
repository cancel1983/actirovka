/**
 * Created by KrSaEg on 27.02.2017.
 */
var sqlite3 = require('sqlite3').verbose();
var mydb = "aktirovka.db";
var db = new sqlite3.Database(mydb);
//new function sqlwork(to,cl,sm) {

db.serialize(function() {
    var id = '1';
    var to = '3466';
    var da = '01.01.2017';
    var sm = '2';
    var cl = '8';
    //db.run('CREATE TABLE lorem (info TEXT)');
    db.run('INSERT INTO aktirovka_days VALUES (:id, :to, :da, :sm, :cl)');
    //stmt.run();
    //db.finalize();

    db.each('SELECT * FROM aktirovka_days', function(err, row) {
        console.log(row.akt_id + ': ' + row.city + ': ' + row.date + ': ' + row.smena + ': ' + row.class);
    });
});
    db.close();
//};
