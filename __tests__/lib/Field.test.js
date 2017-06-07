
import Term from '../../lib/Field'

describe('Field solr test', () => {
  it('initialize with name and value', () => {
    const term = new Term('fname', 'fvalue')

    expect(term.toString()).toEqual('fname:fvalue')
  })

  it('without value the default is * wildcard', () => {
    const term = new Term('fname')

    expect(term.toString()).toEqual('fname:*')
  })
})
