// how to read obj properties and method 
 
let emp = { name : 'drake',
           email:  'drake@gmail.com',
           mobileno :'525260',
           info: ()=> { 
               console.log ('hello',emp.name);
           },
};
console.log (emp);
// how to read obj properties

console.log (emp.email);
// how to read obj methods 
console.log (emp.info);

// update or create new properties 
 
emp.mobileno = '9865430';
emp.sal= '50000';
console.log (emp);

console.log ('......read property ',emp['sal']);
console.log (emp);
delete email;
console.log (emp);

