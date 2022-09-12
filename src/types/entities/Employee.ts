export interface Employee {
  name: string;
  surname: string;
  email: string;
  avatar: string | null;
  id: string;
}

export type EmployeesMap = Record<string, Employee>;
export type EmployeesArr = Array<Employee>;
