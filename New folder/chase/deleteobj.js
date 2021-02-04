let emp = { name : 'drake',
           email:  'drake@gmail.com',
           mobileno :'525260',
           info: ()=> { 
               console.log ('hello',emp.name);
           },
};
 delete emp.mobileno ;
 delete emp.info;
 console.log (emp);
