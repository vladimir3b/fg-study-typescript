interface IEmployee {
  name: string;
  position: string;
  salary: number;
}

class Employee implements IEmployees {
  constructor(
    public name: string,
    public position: string,
    public salary: number
  ) {}

  logEmployee() {
    console.log(`Employee ${this.name} is a ${this.position} and has $${this.salary} salary.`);
  }
}

export {
  IEmployee,
  Employee
}