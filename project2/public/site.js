"use strict";
(function(){

    const emailErrorEl = document.querySelector('.register-email__error');
    const confirmErrorEl = document.querySelector('.register-confirm__error');
    const modalEl = document.querySelector('.modal');
    const openEl = document.querySelector('.open');
    const closeEl = document.querySelector('.close');

    openEl.addEventListener('click',() => {
        modalEl.showModal();
    });
    const formEl = document.getElementById('form_data');
    const emailEl = document.getElementsByClassName('.register-email__input');
    const confirmEl = document.getElementsByClassName('.register-confirm__input');
    formEl.addEventListener('subscribe',(event) => {
        let isInvalid = false;
        let emailReg = "/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/";
        if(emailEl.value === ''){
            emailErrorEl.innerText ="This field is required";
            isInvalid = true;
        } 
        if(emailReg.test(emailEl)){
            emailErrorEl.innerText = "This field be a valid email address including @"; 
            isInvalid = true;  
        } 
        if ( confirmEl.value != emailEl.value ) {
            confirmErrorEl.innerText = "This field must match the provided email address";
            isInvalid = true;
        }
        if( isInvalid){
            event.preventDefault();
        }
    });
    
    closeEl.addEventListener('click',() =>{
        //console.log("exit");
        modalEl.close();
    });
    
})();