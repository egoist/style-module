import { css, sheet, styleModule, reset } from '../src'

const getStyle = () => {
  let res = ''
  if (sheet instanceof CSSStyleSheet) {
    for (let i = 0; i < sheet.cssRules.length; i++) {
      res += sheet.cssRules[i].cssText
    }
  }
  return res
}

beforeEach(() => {
  reset()
})

describe('css', () => {
  test('simple', () => {
    expect(
      css({
        color: 'red',
        fontSize: '16px',
        ':hover': {
          color: 'blue'
        },
        '& .foo': {
          color: 'yellow'
        }
      })
    ).toBe('sm_0')
    expect(getStyle()).toMatchSnapshot()
  })

  test('composes', () => {
    const black = css({
      color: 'black'
    })
    const className = css({
      composes: black,
      color: 'red'
    })
    expect(className).toBe('sm_0 sm_1')
    expect(getStyle()).toMatchSnapshot()
  })

  // test('nesting', () => {
  //   const className = css({
  //     '& .button': {
  //       color: 'pink',
  //       ':hover': {
  //         color: 'red'
  //       }
  //     }
  //   })
  //   expect(className).toBe('sm_0')
  //   expect(getStyle()).toMatchSnapshot()
  // })
})

test('styleModule', () => {
  const styles = styleModule({
    button: {
      color: 'red',
      fontSize: '16px',
      ':hover': {
        color: 'blue'
      },
      '& .foo': {
        color: 'yellow'
      }
    }
  })
  expect(styles.button).toBe('sm_0')
  expect(getStyle()).toMatchSnapshot()
})
