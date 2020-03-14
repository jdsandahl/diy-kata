const getEmployerRole = (name, employees) => {
    return employees.find(employee => {
        return employee.name === name;
    }).role;
};

module.exports = getEmployerRole;
