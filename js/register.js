const form_register = document.getElementById("form_register")
form_register.addEventListener("submit", (e)=>{
    e.preventDefault()
    const error = document.getElementById("error")
    const male = document.getElementById("gender-male")
    const female = document.getElementById("gender-female")
    const form_agree_tnc = document.getElementById("form_agree_tnc")
    if (!form_register.email.value || !form_register.name.value || !form_register.password.value || !form_register.confirm_password.value) 
        error.innerHTML = "All fields must be filled"
    else if(form_register.email.value.indexOf('@')<0) 
        error.innerHTML = "Email must contain '@'"
    else if(!form_register.email.value.endsWith('.com')) 
        error.innerHTML = "Email must ends with '.com'"
    else if (form_register.password.value.length <= 5) 
        error.innerHTML = "Password length should be more than 5 characters"
    else if (form_register.password.value != form_register.confirm_password.value) 
        error.innerHTML = "Password and confirm password should be the same"
    else if(!form_register.telephone.value.startsWith('+62')) 
        error.innerHTML = "Telephone must starts with '+62'"
    else if (!male.checked && !female.checked) 
        error.innerHTML = "Gender must be chosen"
    else if (!form_agree_tnc.checked) 
        error.innerHTML = "You must agree to terms and condition"
    else {
        error.innerHTML = ""
        alert("Register success")
        window.location.assign('/index.html')
    }
})