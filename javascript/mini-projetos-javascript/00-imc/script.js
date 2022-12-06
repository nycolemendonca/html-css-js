const calculate = document.getElementById("calculate");

function imcCalculation() {
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (name !== '' && height !=='' !== weight !== '') {
        const imc = (weight / (height*height)).toFixed(1);
        let classification = '';

        if (imc < 18.5) classification = "under weight."
        else if (imc < 25) classification = "ideal weight. Congratulations!"
        else if (imc < 30) classification = "slightly overweight."
        else if (imc < 35) classification = "grade I obesity."
        else if (imc < 40) classification = "grade II obesity."
        else classification = "grade III obesity. Watch out!"

        result.textContent = `${name} your IMC is ${imc} and you are ${classification}`;
    } else {
        result.textContent = "Fill in all fields!"
    }
}

calculate.addEventListener("click", imcCalculation);

