class User{
    #id;
    #username;
    #email;
    #password;
    
    
    constructor(props){
        this.username = props.username;
        this.email = props.email;
        this.password = props.password;
    }
    
    get id(){
        return this.#id;
    }
    
    set id(id){
        if(id <= 0){
            console.log("id must be positive!");
        }
        else{
            this.#id = id;
        }
    }
    
    get username(){
        return this.#username;
    }
    
    set username(username){
        if(username.match('[a-z][a-z0-9]+')!=null){
            this.#username = username
        }
        else{
            console.log("username must be consist of lowercase letters and may consist digits");
        }
    }
    
    
    get password(){
        return this.#password;
    }
    
    set password(password){
        if(password.length < 8){
            console.log("password length must be greater or equal 8 symbols");
        }else{
            this.#password = password;
        }
    }
    
    get email(){
        return this.#password;
    }
    
    set email(email){
        if(email.match("[a-z][a-z0-9]+@[a-z]+.[a-z]{2,10}") == null){
            console.log("incorrect email");
        }else{
            this.#email = email;
        }
    }
}


var user = new User({
    id: 1,
    username: "test",
    email: "test@test.test",
    password: "123456789"
});

console.log(user);
console.log(user.id);
user.id = 2;
console.log(user.id);
user.id = 1;
console.log(user.id);

console.log(user.username);
user.username = "1234";
console.log(user.username);
user.username = "dwadaw123dwadaw";
console.log(user.username);

user.password = "test password";
console.log(user.password);
user.password = user.password.split(" ")[0];
console.log(user.password);
