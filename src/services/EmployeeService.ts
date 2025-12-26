import axios from "axios";

const API_URL = "http://localhost:8080/api/employees"; // your backend URL

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get<Employee[]>(API_URL);
  return response.data;
};
