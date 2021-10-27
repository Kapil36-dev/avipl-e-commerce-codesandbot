export default function validationInfo(email,password){
    const error={};
    if(!email){
        error.email='Email Required';
    }
    else if(!(/^([a-zA-Z0-9.\-_]+)@([a-zA-Z0-9.\-_]+)\.([a-zA-Z]+)$/.test(email))){
        error.email='Invalid Email';
    }
    if(!password){
        error.password='Password Required';
    }
    else if(!(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password))){
        error.password='Password must be contains uppercase letters, lowercase letters, numbers and special characters';
    }
    return error;
}