
const input = document.getElementById('birth');
const button = document.getElementById('btn');
const result = document.getElementById('result');

 


function ageCalculator(e) {

e.preventDefault(); /* BECAUSE THE EVENT IS ON FORM  */

    const birthdayValue = input.value

    if ( birthdayValue === '' ) {
        alert('Please Enter your date of birth')
    } else { 

        const age = getAge(birthdayValue);
        result.innerText = `you age is ${age}  ${age > 1 ?'years' : 'year'} old`;

    }

    function getAge(birthdayValue) {

        const today = new Date();
        const birthDate = new Date(birthdayValue)

     let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();

          if ( month < 0 || (month === '0' && day <= '0')) {
            age--;
          }

    return age;

    }

}

button.addEventListener('click', ageCalculator) 

