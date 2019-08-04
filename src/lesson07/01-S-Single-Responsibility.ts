/**
 * Single Responsibility
 *
 * A class or method should be responsible for a single part of the functionality.
 *
 * An example where the Single Responsibility is violated is when you have the error handling into
 * your class/method instead of using a dedicated class/method.
 *
 */

import { IHttpClient } from './_HttpClient';
import { IEmployee } from './_employees.dumb-data';
import { MessageBox } from './_MessageBox';


class ManageEmployees {

  private static _removeDuplicateFilters(filters: Array<string>): Array<string> {
    return [...new Set(filters)];
  }

  private static _applyFilters(employees: Array<IEmployee>, filters: Array<string>): Array<IEmployee> {
    return employees.filter(employee => filters.indexOf(employee.position) >= 0);
  }

  static filterEmployeesViolatingSingleResponsibility(httpClient: IHttpClient, filters: Array<string>) {
    try {
      filters = this._removeDuplicateFilters(filters);
      httpClient.get('/api/employees')
        .then(employees => {
          const result = this._applyFilters(employees, filters);
          return result;
        })
        .catch(error => {
          console.error('Something went wrong while fetching the employees');
          const messageBox = new MessageBox();
          messageBox.show('Something went wrong while fetching the employees');
        })
    } catch (error) {
      console.error('Application critical error');
      const  messageBox = new MessageBox();
      messageBox.show('Something went wrong while fetching the employees');
    }
  }

}

export {
  ManageEmployees
}