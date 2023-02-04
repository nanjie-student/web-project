"use strict";
(function(){
    //1.get element
    const nameEl = document.querySelector('.register__name');
    const emailEl = document.querySelector('.register__email');
    const confirmEl = document.querySelector('.register__confirm');
    const formEl = document.querySelector('.register');
    const emailErrorEl = document.querySelector('.register-email__error');
    const confirmErrorEl = document.querySelector('.register-confirm__error');
    nameEl.addEventListener('change', (event) => { //fat arrow function
        //can decide if value is ok as they type
        console.log(event.target.value);
        if(!event.target.value){
            formEl.classList.add('register-name--invalid');
        }
    });
    emailEl.addEventListener('change',(event) =>{
        console.log(event.target.value);
        if(!event.target.value){
            emailEl.classList.add('register-email--invalid');
        }
    });
    confirmEl.addEventListener('change',(event) =>{
        console.log(event.target.value);
        if(!event.target.value){
            formEl.classList.add('register-confirm--invalid');
        }
    });
    //El variables are already defined
    formEl.addEventListener('submit',(event) => {
        let isInvalid = false;
        //event.target is the form,not the fields
        const name = nameEl.value;
        const isFormInvalid = !name; //Code decides based on fields
        formEl.classList.remove('register-name--invalid');
        if( !name ){
            formEl.classList.add('register-name--invalid');
            isInvalid = true;
        }
        const email = emailEl.value;
        isFormInvalid = !email;
        if( !email){
            //formEl.innerText ="This field is required";
            emailErrorEl.innerText = "This field is required";
            //console.log("code run");
            isInvalid = true;
            // console.log("This field is required");
        }
        const confirm = confirmEl.value;
        if( confirm != email ){
            confirmErrorEl.innerText="This field must match the email";
            isInvalid = true;
            //console.log("This field must match the email");

        }
        if( isInvalid){
            event.preventDefault();
        }
        if(isFormInvalid){
            //should also tell the user what to fix!
            console.log('submit prevented');
            event.preventDefault();
        }
    });
    

})();