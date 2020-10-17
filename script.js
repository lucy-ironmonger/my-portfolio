
/*RESET BUTTON*/
/*The reset button element*/
const resetBtn = document.getElementById('reset');

/*What to do if the event is met for the reset button*/
const resetFunction = () => {
    document.getElementById('contactLucy').reset;
};

/*Watching the reset button and telling it what to do in the event of a click, or not*/
resetBtn.addEventListener('click', resetFunction, false);


/*SUBMIT BUTTON*/
/*The submit button element*/
const submitBtn = document.getElementById('submit');

/*What to do if the event is met for the submit button*/
const submitFunction = () => {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const fullMessage = `Name: ${fullName} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`;
    alert(fullMessage);                                           
  };
  
/*Watching the submit button and telling it what to do in the event of a click, or not*/
submitBtn.addEventListener('click', submitFunction, false);

