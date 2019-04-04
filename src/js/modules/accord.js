import {Accord} from '../classes/Accord'

//  accord group skills
const accordSkillsNodes = document.querySelectorAll('.js-accord-group-1')
const accordSkills = []
accordSkillsNodes.forEach(el => {
  accordSkills.push(new Accord(el, accordSkillsNodes))
})
