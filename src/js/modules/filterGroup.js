import {FilterGroup} from '../classes/FilterGroup'
import {tooltipGroupModern} from './tooltipGroup'

const modernBtnGroup = document.querySelectorAll('.js-btn-group-modern')
const modernBoxGroup = document.querySelectorAll('.js-box-group-modern')

const modernGroup = new FilterGroup(modernBtnGroup, modernBoxGroup, tooltipGroupModern)
modernGroup.init()

const newsBtnGroup = document.querySelectorAll('.js-btn-group-news')
const newsBoxGroup = document.querySelectorAll('.js-box-group-news')

const newsGroup = new FilterGroup(newsBtnGroup, newsBoxGroup)
newsGroup.init()
