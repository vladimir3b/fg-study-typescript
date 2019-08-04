/**
 * HttpClient
 *
 * This is a dumb class, it doesn't do anything just helps for the Single Responsibility example
 */

import * as _ from 'lodash';
import { IEmployee, Employee } from './_employees.dumb-data';


interface IHttpClient {

  get: (uri: string) => Promise<Array<IEmployee>>;

}

class HttpClient implements IHttpClient {

  get(uri: string): Promise<Array<IEmployee>>  {
    return new Promise((resolve, reject) => {
      if (_.random(false) % 2 === 1) {
        throw new Error('No reason but rejected');
      }
      setTimeout(() => {
        resolve([
         new Employee('John Smith', 'manager', 5000),
         new Employee('Jane Smith', 'CEO', 9000),
         new Employee('Emilio Cortega', 'IT Specialist', 2000)
        ]);
      });
    });
  }

}

export {
  IHttpClient,
  HttpClient
}