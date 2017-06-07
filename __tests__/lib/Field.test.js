import Field, {RangeField} from '../../lib/Field'

describe('Field solr test', () => {
  describe('Base field', () => {
    test('initialize with name and value', () => {
      const field = new Field('fname', 'fvalue')

      expect(field.toString()).toEqual('fname:fvalue')
    })

    test('without value the default is * wildcard', () => {
      const field = new Field('fname')

      expect(field.toString()).toEqual('fname:*')
    })
  })

  describe('Range field', () => {
    test('initialize with name and values', () => {
      const range = new RangeField('weight', 20, 40)

      expect(range.toString()).toEqual('weight:[20 TO 40]')
    })
  })
})
