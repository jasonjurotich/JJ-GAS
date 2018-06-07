function addUser() {
  var user = {
    primaryEmail: 'teststudent@school.edu.mx',
    
    name: {
      givenName: 'test',
      familyName: 'Smith'
    },
 
    suspended: false,
    changePasswordAtNextLogin: false,
    includeInGlobalAddressList: true,
    password: 'teststudent12345',
    orgUnitPath: "/TESTS",
  };
  user = AdminDirectory.Users.insert(user); 
}


function moveUser() {
  var or = {
  orgUnitPath: "/TESTS",
  }
  var org = AdminDirectory.Users.update(or, 'teststudent@mirafloresleon.edu.mx');
}
