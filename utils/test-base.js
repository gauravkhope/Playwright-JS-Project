const base = require('@playwright/test');

exports.customtest = base.test.extend(
{
    testData_Login : {
        username : "grkhope.gk@gmail.com",
        password : "Gaurav31"
    }    
}
)




