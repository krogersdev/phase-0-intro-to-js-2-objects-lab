const employee = {                        //template for which employees will be defined 
  name: "fullName" ,
  streetAddress: "line1" ,
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {                                    
   ...employee,                               //Spread operator clones a copy of employee template
   [key]: value,                              //key value is assigned to our cloned object template
  
  };
  
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const clonedEmployee = { ...employee };

  delete clonedEmployee[key];

  return clonedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}

