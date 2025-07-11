let form =document.getElementById("form");
let uname =document.getElementById("uname");
let email =document.getElementById("email");
let password =document.getElementById("password");
let cpass =document.getElementById("confirm-password");
let btn=document.getElementById("submit");
let TCcheck=document.getElementById("TCcheck");


let isValidName=false;
let isValidEmail=false;
let isValidPassword=false;
let isValidCPassword=false;
let isValidTCcheck=false;


btn.addEventListener('click', (e)=>{
        e.preventDefault();
        validate();
});
function validate(){
    isValidName = false;
    isValidEmail = false;
    isValidPassword = false;
    isValidCPassword = false;
    isValidTCcheck = false;


    if(uname.value.trim()===""){
        setError(uname,"Input should not be empty")
    }
    else if(uname.value.length< 3){
        setError(uname,"text should be greater than  3 characters long");
    }
    else{
        setSuccess(uname,"entered value is correct");
         isValidName=true;
    }

    if(email.value.trim() === ""){
        setError(email,"Input should not be empty")
    }
    else if(!ValidEmail(email.value)){
        setError(email,"Email is not valid");
    }
    else{
        setSucess(email,"entered value is correct");
        isValidEmail=true;
    }

    if(password.value === ""){
        setError(password,"Input should not be empty")
    }
    else if(!(password.value.length < 6 && password.value=='')){
        setError(password,"Password should be greater than 6 characters long & and it should contain capital letter, small letter, number and special character");
    }
    else{
        setSucess(password,"entered value is correct");
     isValidPassword=true;

    }
    if(cpass.value === ""){
        setError(cpass,"Input should not be empty")
    }
    else if(cpass.value !== password.value){
        setError(cpass,"Password does not match");
    }
    else{

        setSucess(cpass,"entered value is correct");
        isValidCPassword=true;

    }

    if(!TCcheck.checked){
        setError(TCcheck,"Please accept the terms and conditions");
    }
    else{
        setSuccess(TCcheck,"Terms and conditions accepted");
        isValidTCcheck=true;
    }

    if(isValidName && isValidEmail && isValidPassword && isValidCPassword && isValidTCcheck){
        form.submit(); //anni form fields yokka values correct ayinappudu matrame form ni submit cheyyamantannam
    }
}

function setError(ele, message){
    let parent = ele.parentElement;
    parent.classList.add("error");
    parent.classList.remove("success");
    let small = parent.querySelector("small");
    small.textContent = message;
}
function setSuccess(ele, message){
    let parent = ele.parentElement;
    parent.classList.add("success");
    parent.classList.remove("error");

}

function ValidEmail(email){
    let emailReg=/^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let  valid=emailReg.test(email); // we use test method
    return valid;
}