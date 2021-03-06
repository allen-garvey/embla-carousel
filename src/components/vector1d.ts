export type Vector1D = {
  get: () => number
  set: (v: Vector1D) => Vector1D
  add: (v: Vector1D) => Vector1D
  subtract: (v: Vector1D) => Vector1D
  multiply: (n: number) => Vector1D
  setNumber: (n: number) => Vector1D
  addNumber: (n: number) => Vector1D
  subtractNumber: (n: number) => Vector1D
  divide: (n: number) => Vector1D
  magnitude: () => number
  normalize: () => Vector1D
}

export function Vector1D(value: number): Vector1D {
  const state = { value }

  function get(): number {
    return state.value
  }

  function set(v: Vector1D): Vector1D {
    state.value = v.get()
    return self
  }

  function add(v: Vector1D): Vector1D {
    state.value += v.get()
    return self
  }

  function subtract(v: Vector1D): Vector1D {
    state.value -= v.get()
    return self
  }

  function multiply(n: number): Vector1D {
    state.value *= n
    return self
  }

  function divide(n: number): Vector1D {
    state.value /= n
    return self
  }

  function setNumber(n: number): Vector1D {
    state.value = n
    return self
  }

  function addNumber(n: number): Vector1D {
    state.value += n
    return self
  }

  function subtractNumber(n: number): Vector1D {
    state.value -= n
    return self
  }

  function magnitude(): number {
    return get()
  }

  function normalize(): Vector1D {
    const m = magnitude()
    if (m !== 0) divide(m)
    return self
  }

  const self: Vector1D = {
    add,
    addNumber,
    divide,
    get,
    magnitude,
    multiply,
    normalize,
    set,
    setNumber,
    subtract,
    subtractNumber,
  }
  return Object.freeze(self)
}
