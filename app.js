document.querySelector('#bmi-form').addEventListener('submit', function(e){
    //Hide results
    document.querySelector('.results').style.display = 'none';

    //Show loader
    document.querySelector('.gif').style.display = 'block';

    setTimeout(calculateBMI, 2000);

    e.preventDefault();
});


function calculateBMI(){
    //UI Variables
    const weight = document.querySelector('#weight');
    const height = document.querySelector('#height');
    const bmi = document.querySelector('#bmi');

    //Inputs for calculations
    const calcWt = parseFloat(weight.value);
    const calcHt = parseFloat(height.value);
    
    //BMI Computations
    const calcBMI = (calcWt/(Math.pow(calcHt, 2))).toFixed(2);

    //Function to check if the calcBMI variable is a finite number
    if(isFinite(calcBMI)){
        bmi.value = calcBMI;

        //Show results
        document.querySelector('.results').style.display = 'block';

        //Hide loader
        document.querySelector('.gif').style.display = "none";
    }else{
        showError("Please check your numbers, there's a wrong input somewhere.");
    };
};

//Show Error Function
function showError(error){
    //Show results
    document.querySelector('.results').style.display = 'none';

    //Hide loader
    document.querySelector('.gif').style.display = "none";

    //Create a Div element
    const errorDiv = document.createElement('div');

    //Get elements for positional inputs
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger text-center';

    //Create a textnode and append to errorDiv
    errorDiv.appendChild(document.createTextNode(error));

    //Inserting the errorDiv before heading
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError, 3000);

};

//Clear error after 3seconds
function clearError(){
    document.querySelector('.alert').remove();
};

//Pop-up Function
function popup(number){
    if(number <= 18.5){
        return alert('Your Body Mass Index seems to indicate that you are underweight.')
    }else if(number >= 18.5 && number <= 25.0){
        return alert('Your Body Mass Index falls within the normal range.')
    }else if(number >= 25.0 && number <= 30.0){
        return alert('Your Body Mass Index falls within the overweight range.')
    }else{
        return alert('It seems your Body Mass Index falls within obese range.')
    }
}