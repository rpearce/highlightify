Highlightify = require '../src/Highlightify'
chai = require 'chai'
expect = chai.expect

describe 'Highlightify', ->

  describe 'required properties', ->
    before ->
      @error = 'Highlightify.highlightMatches requires `text` and `filter` options'

    it 'throws when opts is blank', ->
      expect(-> Highlightify.highlightMatches()).to.throw(@error)

    it 'throws when opts.text is undefined', ->
      expect(-> Highlightify.highlightMatches(filter: 'foo')).to.throw(@error)

    it 'throws when opts.filter is undefined', ->
      expect(-> Highlightify.highlightMatches(text: 'foo')).to.throw(@error)

    it 'does not throw an error', ->
      expect(-> Highlightify.highlightMatches(text: 'foo', filter: 'fo')).to.not.throw(@error)

  describe 'highlighting', ->
    it 'highlights at the beginning', ->
      result = Highlightify.highlightMatches(text: 'foobar', filter: 'fo')
      expect(result).to.equal('<span class="is-match">fo</span>obar')

    it 'highlights in the middle', ->
      result = Highlightify.highlightMatches(text: 'foobar', filter: 'ob')
      expect(result).to.equal('fo<span class="is-match">ob</span>ar')

    it 'highlights at the end', ->
      result = Highlightify.highlightMatches(text: 'foobar', filter: 'bar')
      expect(result).to.equal('foo<span class="is-match">bar</span>')

    it 'highlights multiple matches', ->
      result = Highlightify.highlightMatches(text: 'foobar true bar', filter: 'bar')
      expect(result).to.equal('foo<span class="is-match">bar</span> true <span class="is-match">bar</span>')

  describe 'highlight className', ->
    it 'uses `is-match` by default', ->
      result = Highlightify.highlightMatches(text: 'foobar', filter: 'fo')
      expect(result).to.match(/is-match/)

    it 'uses a custom className if provided', ->
      result = Highlightify.highlightMatches(text: 'foobar', filter: 'fo', className: 'is-highlighted')
      expect(result).to.not.match(/is-match/)
      expect(result).to.match(/is-highlighted/)
