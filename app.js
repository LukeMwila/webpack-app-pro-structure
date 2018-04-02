const people = require('./people.js')
const $ = require('jquery')

$.each(people, function(key, value){
    $('body').append('<h1>'+ people[key].name +'</h1>')
})