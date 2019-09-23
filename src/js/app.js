import Ractive from 'ractive'
import template from '../templates/template.html'

var database = {"things":"stuff"}

var ractive = new Ractive({
            events: { 
            el: '#app',
            data: database,
            template: template
        }})

console.log("blah")