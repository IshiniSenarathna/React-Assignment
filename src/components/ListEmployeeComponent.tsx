import React, { useEffect, useState } from "react";
import { getEmployees, type Employee } from "../services/EmployeeService";

const ListEmployeeComponent: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch employees", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container mt-3">
      <h3 className="text-primary">Employee List</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;


/* before backend connectivity*/
/*import React from "react";

const ListEmployeeComponent: React.FC = () => {
  const employees = [
    {
      id: 1,
      firstname: "EC21033",          // your student code
      lastname: "Ishini Senarathna", // your name
      email: "ec21033@example.com",
    },

    {
      id: 3,
      firstname: "Navod",
      lastname: "Gunasinghe",
      email: "navod@example.com",
    },
    { 
        id: 3, 
        firstname: 'Amara', 
        lastname: 'Senarath', 
        email: 'amara@example.com' 
    },


  ];

  return (
    <div className="container mt-3">
      <h3 className="text-primary">Employee List</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
*/