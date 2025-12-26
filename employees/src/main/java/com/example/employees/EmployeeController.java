package com.example.employees;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    record Employee(int id, String firstName, String lastName, String email) {}

    @GetMapping("/api/employees")
    public List<Employee> getEmployees() {
        return List.of(
                new Employee(1, "EC21033", "Ishini Senarathna", "ec21033@example.com"),
                new Employee(2, "Navod", "Gunasinghe", "navod@example.com"),
                new Employee(3, "Amara", "Senarath", "amara@example.com")
        );
    }
}
