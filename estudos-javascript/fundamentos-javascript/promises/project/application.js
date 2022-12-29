// Fetch Request na API do GitHub

fetch('https://api.github.com/users/nycolemendonca', {
    method: 'GET',
    headers: {
        Accept: 'application/vng.github.v3/json',
    },

}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()

}).then((data) => {
    console.log(`Nome de usuário: ${data.name}`)

}).catch((err) => `Houve um erro: ${err}`)
  