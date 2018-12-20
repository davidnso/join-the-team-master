import { MongoClient } from 'mongodb';
import { MongoDriver } from './MongoConnector';
import {Promise} from 'es6-promise';

// Set the connection url based on the defaults provided
const url = 'mongodb://localhost:27017';

export class MongoDriverFactory {

  static build() {
    return new Promise<MongoDriver>((resolve, reject) => {
      MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        if (err) reject(err);
        resolve(new MongoDriver(client));
      });
    })
  }
}
