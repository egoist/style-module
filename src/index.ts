let _id: number
let sheet: StyleSheet | null

function reset() {
  _id = 0
  sheet = document.head.appendChild(document.createElement('style')).sheet
}

reset()

function kebabcase(str: string) {
  return str.replace(/[A-Z]/g, '-$&').toLowerCase()
}

function insert(rule: string) {
  if (sheet instanceof CSSStyleSheet) {
    sheet.insertRule(rule, sheet.cssRules.length)
  }
}

interface RuleObj {
  [k: string]: string | RuleObj
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

function wrap(stringToWrap: string, wrapper: string) {
  return wrapper + '{' + stringToWrap + '}'
}

function parse(obj: RuleObj, className: string, isInsideObj = false) {
  const rules = ['']
  let composes

  for (let prop of Object.keys(obj)) {
    let value = obj[prop]

    if (prop === 'composes' && typeof value === 'string') {
      composes = value
      continue
    }

    prop = kebabcase(prop)
    if (typeof value === 'object') {
      if (/^(:|>|\.|\*)/.test(prop)) {
        prop = className + prop
      }
      // replace & in "&:hover", "p>&"
      prop = prop.replace(/&/g, className)
      const res = parse(value, className, !/^@/.test(prop))
      rules.push(wrap(res.rules.join(''), prop))
    } else {
      rules[0] += `${prop}:${value};`
    }
  }
  if (!isInsideObj) {
    rules[0] = wrap(rules[0], className)
  }
  return { rules, composes }
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
