var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/mydb';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var collection = db.collection('test');
    var doc1 = {'hello':'doc1'};
    //collection.insert(doc1, function(err, result) {});
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs)
        db.close();
    });

});