//Lab 3 COMP3123
//Berlean Gregori 101465969

//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];

const getAllEmployees = () => {
    return employees;
};

const getEmployeeById = (id) => {
    return employees.find(employee => employee.id === id);
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
};