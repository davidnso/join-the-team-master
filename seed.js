const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err;
  
  client.db('task-service').collection('tasks').insertOne({ text: 'This is a sample task', completed: false })
    .then(result => {
      const text= result.text
      //const id = result.insertedId.toHexString().toString();
      client.db('task-service').collection('categories').insertOne({
        name: 'Another Starting Task', tasks: [text]
      }).then(_ => {
        client.close();
      });
    });
});