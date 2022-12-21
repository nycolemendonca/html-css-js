/*
    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado') 
    } 

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = fahrenheit => ((fahrenheit - 32) * 5/9).toFixed(2)
    let degreeSign = 'C'

    // fluxo alternativo, C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''))
        let formula = celsius => (celsius * 9/5 + 32).toFixed(2)
        let degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))
    
} catch(error) { 
    console.log(error.message)
}