

function createOrgGroup() {
    var resource = {
      name: "200 TEST",
      description: "The sales support team",
      parentOrgUnitPath: "/",
      blockInheritance: false
    }
    var customer = 'ID';  // This is your user ID and most likely should be an admin.
 var org = AdminDirectory.Orgunits.insert(resourse, customer);
 
    var group = {
      email: 'test444@email.edu.mx',
      name: 'a test',
      description: 'this is a test'
    }
 var gro = AdminDirectory.Groups.insert(group);
}


// https://stackoverflow.com/questions/33493998/how-do-i-find-the-immutable-id-of-my-google-apps-account


