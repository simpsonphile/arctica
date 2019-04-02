import {Accord} from '../classes/Accord'

//  accord group 1
const accordGroup1 = document.querySelectorAll('.js-accord-group-1')
const accordGroup1a = []
accordGroup1.forEach(el => {
  accordGroup1a.push(new Accord(el, accordGroup1))
})
