import Term from '../../../lib/solr/Term'

describe('Term tests', () => {
  it('with a one world term', () => {
    const term = new Term('single_world')

    expect(term.toString()).toEqual('single_world')
  })

  it('with more than one word', () => {
    const term = new Term('more than one world')

    expect(term.toString()).toEqual('"more than one world"')
  })
})
