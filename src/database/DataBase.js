/**
 * Created by yangzhenyu on 2017/7/20.
 */

// let MongoClient = require('mongodb').MongoClient;

class DataBase
{
    constructor() {
        // let url = 'mongodb://localhost:27017';
        // MongoClient.connect(url, function(err, db) {
        //     console.log("Connected correctly to server.");
        // });

        this.db ={};
    }

    insertData(col, data, cb) {
        // let collection = this.db.collection(col);
        // collection.insert(data, cb);

        this.db[col] = data;
    }


    updateData(col, data, cb) {
        // let collection = db.collection(col);
        // collection.save(data, cb);
    }

    getData(col, cb) {
        // let collection=this.db[col];
        // collection.find().toArray(cb);
            cb(this.db[col]);
    }

}

module.exports = new DataBase;