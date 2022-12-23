/*
const {EventEmitter} = require('events')
const ev = new EventEmitter()

// ouvindo o evento
// on - ouve todos os evento
// once - ouve apenas o primeiro evento
ev.once('saySomething', (message) => console.log('Eu ouvi você:', message))  

// emitindo o evento
ev.emit('saySomething', 'Nycole') 
ev.emit('saySomething', 'Margot') 
ev.emit('saySomething', 'Java') 
*/

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) { this.name = name }

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')