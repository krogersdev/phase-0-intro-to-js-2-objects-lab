const employee = {
  name: 'fullName', 
  streetAddress: 'street',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
  ...employee,
  [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const cloneEmployee = {...employee };
  
  delete cloneEmployee[key]
   
  return cloneEmployee;
} 
  
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
} 
