export interface Company {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  company: Company;
}
