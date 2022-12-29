// Example 01 --------------------------
const promiseOne = new Promise((resolve, reject) => {
    
    // name: Data from an external request
    const name = 'Margot'

    if (name === 'Margot') resolve('User Margot found.') 
    else reject('User Margot not found.') 
})

// The promise is executed when the .then method is chained
promiseOne.then((data) => console.log(data))

// Example 02 --------------------------
const promiseTwo = new Promise((resolve, reject) => {
    const name = 'Nycole'

    if (name === 'Nycole') resolve('User Nycole found.')
    else reject('User Nycole not found.')
})

promiseTwo.then((data) => data.toUpperCase())
          .then((stringModificated) => console.log(stringModificated))

// Example 03 --------------------------
const promiseThree = new Promise((resolve, reject) => {
    const name = 'Any'

    if (name === 'Ana') resolve('User Ana found.')
    else reject('User Ana not found.')
})

promiseThree.then((data) => console.log(data))
            .catch((err) => console.log(err))

// Example 04 - All: Resolve multiple promises ----------
const promise1 = new Promise((resolve, reject) => resolve('Promise One ok!'))
const promise2 = new Promise((resolve, reject) => resolve('Promise Two ok!'))
const promise3 = new Promise((resolve, reject) => resolve('Promise Three ok!'))

const resolveAllPromises = Promise.all([promise1, promise2, promise3])
                                  .then((data) => console.log(data))

// Example 05 - Race: Resolve multiple promises ----------
const promise4 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise Four ok!'), 2000))
const promise5 = new Promise((resolve, reject) => resolve('Promise Five ok!'))
const promise6 = new Promise((resolve, reject) => resolve('Promise Six ok!'))

const resolveRacePromises = Promise.race([promise4, promise5, promise6])
                                   .then((data) => console.log(data))