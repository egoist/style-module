import { parse, RuleObj } from './parse'

let _id: number
let sheet: StyleSheet | null

function reset() {
  _id = 0
  sheet = document.head.appendChild(document.createElement('style')).sheet
}

reset()

function insert(rule: string) {
  if (sheet instanceof CSSStyleSheet) {
    sheet.insertRule(rule, sheet.cssRules.length)
  }
}

function css(obj: RuleObj) {
  const id = `sm_${_id++}`
  const { rules, composes } = parse(obj, `.${id}`)
  for (const rule of rules) {
    insert(rule)
  }
  if (composes) {
    return `${composes} ${id}`
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

export { css, styleModule, sheet, reset }
