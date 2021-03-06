import { AlignSize } from '../components/alignSize'

const viewSize = 1000
const itemSize = 100

describe('AlignSize', () => {
  test('Measures start alignment for given number correctly', () => {
    const startAlign = AlignSize({ align: 'start', viewSize })
    const measure = startAlign.measure(itemSize)
    expect(measure).toBe(0)
  })

  test('Measures center alignment for given number correctly', () => {
    const centerAlign = AlignSize({ align: 'center', viewSize })
    const measure = centerAlign.measure(itemSize)
    expect(measure).toBe(450)
  })

  test('Measures end alignment for given number correctly', () => {
    const endAlign = AlignSize({ align: 'end', viewSize })
    const measure = endAlign.measure(itemSize)
    expect(measure).toBe(900)
  })
})
