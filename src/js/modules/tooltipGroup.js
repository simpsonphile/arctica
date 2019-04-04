import {TooltipGroup} from '../classes/TooltipGroup'
import {BREAKPOINTS} from '../utils'

const triggersModern = document.querySelectorAll('.js-tooltip-trigger-modern')
const tooltipsModern = document.querySelectorAll('.js-tooltip-modern')
const gridBreakpointsModern = [
  {
    breakpoint: BREAKPOINTS.tabletMiddle,
    shift: 4,
    mode: '>'
  },
  {
    breakpoint: BREAKPOINTS.mobile,
    shift: 3,
    mode: '>'
  },
  {
    breakpoint: BREAKPOINTS.mobileSmall,
    shift: 2,
    mode: '>'
  },
  {
    breakpoint: BREAKPOINTS.mobileSmall,
    shift: 1,
    mode: '<='
  }
]

export const tooltipGroupModern = new TooltipGroup(triggersModern, tooltipsModern, gridBreakpointsModern)
tooltipGroupModern.init()

const triggersUser = document.querySelectorAll('.js-tooltip-trigger-user')
const tooltipsUser = document.querySelectorAll('.js-tooltip-user')
const gridBreakpointsUser = [
  {
    breakpoint: BREAKPOINTS.mobile,
    shift: 4,
    mode: '>'
  },
  {
    breakpoint: BREAKPOINTS.mobile,
    shift: 2,
    mode: '<='
  }
]

const tooltipGroupUser = new TooltipGroup(triggersUser, tooltipsUser, gridBreakpointsUser)
tooltipGroupUser.init()
