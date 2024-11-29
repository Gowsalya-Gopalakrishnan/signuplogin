// //signup 
let user=["name1","ram","jaanu","aditi","gopal"];

function signup(username){

    if((user=="name1")|| (user=="ram") || (user=="jaanu")|| 
    (user=="aditi")|| (user=="gopal"))
        return "User Already Regsistered, Please Login";
    
   else 
        if (user.push("username"))
            return "Signup Sucessfull, Please Login";

}
console.log(signup("name1"));

// check the login
let arr=["admin","Emp@123"];
function login(username,password){
    if(username=="admin" && password=="Emp@123")
        return "Login Sucessfull";
    else if(username!="admin" && password=="Emp@123")
        return "User Not Found, Please Signup";
    else if(username=="admin" && password!="Emp@123")
        return "Wrong Password....";
    
}
console.log(login("admin","Emp@123"));
console.log(login("asfsd","Emp@123"));
console.log(login("admin","E@123"));