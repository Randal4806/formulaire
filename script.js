let myForm = document.getElementById('myForm');



myForm.addEventListener('submit',function(e){



      let myInput1 = document.getElementById('exampleInputtext1');
      let myRegex = /^[a-zA-Z-\s]+$/;
      


      if(myInput1.value.trim()==''){
        let myError = document.getElementById('error');
        myError.innerHTML = "le champs usename  est requis.";
        myError.style.color = 'red';
          e.preventDefault();
    } else if(myRegex.test(myInput1.value) == false){ 
        let myError = document.getElementById('error');
        myError.innerHTML = "le nom doit comporter des lettres et tirets uniquement.";
        myError.style.color = 'red';
        e.preventDefault();  

        }

    let myMail = document.getElementById('exampleInputEmail1');
 


    if(myMail.value.trim()==''){
       let myError2 = document.getElementById('error2');
       myError2.innerHTML = "le champs email est requis.";
       myError2.style.color = 'red';
      e.preventDefault();

    } 


    let myPassword = document.getElementById('exampleInputPassword1');


    if(myPassword.value.trim()==''){
       let myError3 = document.getElementById('error3');
       myError3.innerHTML = "le champs password est requis.";
       myError3.style.color = 'red';
      e.preventDefault();
    }

    let myConfirmation = document.getElementById('exampleInputPassword1Confirmation');


    if(myConfirmation.value.trim()==''){
       let myError4 = document.getElementById('error4');
       myError4.innerHTML = "le champs  de confirmation  est requis.";
       myError4.style.color = 'red';
      e.preventDefault();
    }



});


