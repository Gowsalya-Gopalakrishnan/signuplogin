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

