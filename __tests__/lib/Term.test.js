import Term from '../../lib/Term'

describe('Term tests', () => {
  test('with a one world term', () => {
    const term = new Term('single_world')

    expect(term.toString()).toEqual('single_world')
  })

  test('with more than one word', () => {
    const term = new Term('more than one world')

    expect(term.toString()).toEqual('"more than one world"')
  })
})
