import createSheet from './sheet/server'
import { parse, RuleObj, wrap } from './parse'

let _id = 0
let sheet = createSheet()

function reset() {
  _id = 0
  sheet = createSheet()
}

reset()

function insert(rule: string) {
  if (sheet instanceof CSSStyleSheet) {
    sheet.insertRule(rule, sheet.cssRules.length)
  }
}

function css(obj: RuleObj) {
  const id = `sm_${_id++}`
  const rules = parse(obj, `.${id}`)
  for (const rule of rules) {
    insert(rule)
  }
  if (obj.composes) {
    return `${obj.composes} ${id}`
  }
  return id
}

interface StyleModuleInput {
  [k: string]: RuleObj
}

interface StyleModuleOutput {
  [k: string]: string
}

function styleModule(
  obj: StyleModuleInput | (() => StyleModuleInput)
): StyleModuleOutput {
  const decl = typeof obj === 'function' ? obj() : obj
  return Object.keys(decl).reduce((res: StyleModuleOutput, className) => {
    res[className] = css(decl[className])
    return res
  }, {})
}

function keyframes(obj: { [k: string]: { [k: string]: any } }) {
  const id = `sm_${_id++}`
  insert(wrap(parse(obj, id, true).join(''), '@keyframes ' + id))
  return id
}

export { css, styleModule, sheet, reset, keyframes }
