const _name = new WeakMap()
const _value = new WeakMap()

class Field {
  constructor (fieldName, fieldValue = '*') {
    _name.set(this, fieldName)
    _value.set(this, fieldValue)
  }

  toString () {
    return `${_name.get(this)}:${_value.get(this)}`
  }
}

export default Field
