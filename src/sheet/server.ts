import createSheet from './browser'

export default () => {
  if (typeof document !== 'undefined') return createSheet()

  const rules: { [k: string]: any } = {}
  return {
    insertRule(rule: string, position: number) {
      rules[position] = {
        cssText: rule
      }
    },
    cssRules: rules
  }
}
