interface RuleObj {
  [k: string]: string | RuleObj
}

function kebabcase(str: string) {
  return str.replace(/[A-Z]/g, '-$&').toLowerCase()
}

function wrap(stringToWrap: string, wrapper: string) {
  return wrapper + '{' + stringToWrap + '}'
}

function parse(obj: RuleObj, className: string, isInsideObj = false) {
  const rules = ['']

  for (let prop of Object.keys(obj)) {
    let value = obj[prop]

    if (prop === 'composes') {
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
      rules.push(wrap(res.join(''), prop))
    } else {
      rules[0] += `${prop}:${value};`
    }
  }
  if (!isInsideObj) {
    rules[0] = wrap(rules[0], className)
  }
  return rules
}

export {
  RuleObj,
  parse,
  wrap
}
