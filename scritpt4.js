let form =document.getElementById("form");
let uname =document.getElementById("uname");
let email =document.getElementById("email");
let password =document.getElementById("password");
let cpass =document.getElementById("confirm-password");
let btn=document.getElementById("submit");


btn.addEventListener('click', (e)=>{
        e.preventDefault();
        validate();
});
function validate(){
    if(uname.value.trim===""){
        setError(uname,"Input should not be empty")
    }
    else if(uname.value.length< 3){
        setError(uname,"text should be greater than  3 characters long");
    }
    else{
        setSuccess(uname,"entered value is correct")
    }

    if(email.value.trim() === ""){
        setError(email,"Input should not be empty")
    }
    else if(!isValidEmail(email.value)){
        setError(email,"Email is not valid");
    }
    else{
        setSucess(email,"entered value is correct")
    }

    if(password.value === ""){
        setError(password,"Input should not be empty")
    }
    else if(!(password.value.length < 6 && password.value=='')){
        setError(password,"Password should be greater than 6 characters long & and it should contain capital letter, small letter, number and special character");
    }
    else{
        setSucess(password,"entered value is correct")
    }
    if(cpass.value === ""){
        setError(cpass,"Input should not be empty")
    }
    else if(cpass.value !== password.value){
        setError(cpass,"Password does not match");
    }
    else{
        setSucess(cpass,"entered value is correct")
    }
}

function setError(input, message){
    let parent = input.parentElement;
    parent.classList.add("error");
    parent.classList.remove("success");
    let small = parent.querySelector("small");
    small.textContent = message;
}
function setSuccess(input, message){
    let parent = input.parentElement;
    parent.classList.add("success");
    parent.classList.remove("error");

}