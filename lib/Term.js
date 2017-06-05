const _value = new WeakMap()

class Term {
  constructor (termValue) {
    _value.set(this, termValue)
  }

  toString () {
    let solrRepr = _value.get(this)
    if (solrRepr.search(/\s/) !== -1) {
      solrRepr = `"${solrRepr}"`
    }

    return solrRepr
  }
}

export default Term
