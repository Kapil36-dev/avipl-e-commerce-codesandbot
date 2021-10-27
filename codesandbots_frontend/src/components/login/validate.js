export default function validateInfo(email,name,password,confirmpassword){
    const error={};
    if(!email){
        error.email='Email Required';
    }
    else if(!(/^([a-zA-Z0-9.\-_]+)@([a-zA-Z0-9.\-_]+)\.([a-zA-Z]+)$/.test(email))){
        error.email='Invalid Email';
    }
    if(!name){
        error.name='Name Required';
    }
    else if(!(/^[a-zA-Z]([a-zA-z\s]){3,40}$/.test(name))){
        error.name='Invalid name';
    }
    if(!password){
        error.password='Password Required';
    }
    else if(!(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password))){
        error.password='Password must be contains uppercase letters, lowercase letters, numbers and special characters';
    }

    if(!confirmpassword){
        error.confirmpassword="Please return password again";
    }
    else if(!(password===confirmpassword)){
        error.confirmpassword="Password dosen't match";
    }
    return error;
}
