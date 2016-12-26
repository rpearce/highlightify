import Highlightify from '../lib/highlightify';
import { expect } from 'chai';

const error = 'Highlightify requires `text` and `filter` arguments'

describe('Highlightify', () => {
  describe('required properties', () => {
    it('throws when opts is blank', () => {
      expect(() => Highlightify({})).to.throw(error)
    })

    it('throws when text is undefined', () => {
      expect(() => Highlightify({ filter: 'foo' })).to.throw(error)
    })

    it('throws when filter is undefined', () => {
      expect(() => Highlightify({ text: 'foo' })).to.throw(error)
    })

    it('does not throw an error', () => {
      expect(() => Highlightify({ text: 'foo', filter: 'fo' })).to.not.throw(error)
    })
  });

  describe('highlighting', function() {
    it('highlights at the beginning', () => {
      const result = Highlightify({ text: 'foobar', filter: 'fo' })
      expect(result).to.equal('<mark class="highlightify-is-match">fo</mark>obar')
    })

    it('highlights in the middle', () => {
      const result = Highlightify({ text: 'foobar', filter: 'ob' })
      expect(result).to.equal('fo<mark class="highlightify-is-match">ob</mark>ar')
    })

    it('highlights at the end', () => {
      const result = Highlightify({ text: 'foobar', filter: 'bar' })
      expect(result).to.equal('foo<mark class="highlightify-is-match">bar</mark>')
    })

    it('highlights multiple matches', () => {
      const result = Highlightify({ text: 'foobar true bar', filter: 'bar' })
      expect(result).to.equal('foo<mark class="highlightify-is-match">bar</mark> true <mark class="highlightify-is-match">bar</mark>')
    })
  })

  describe('highlight className', () => {
    it('uses `highlightify-is-match` by default', () => {
      const result = Highlightify({ text: 'foobar', filter: 'fo' })
      expect(result).to.match(/highlightify-is-match/)
    })

    it('uses a custom className if provided', () => {
      const result = Highlightify({ text: 'foobar', filter: 'fo', className: 'is-highlighted' })
      expect(result).to.not.match(/highlightify-is-match/)
      expect(result).to.match(/is-highlighted/)
    })
  })

  describe('highlight tagName', () => {
    it('uses `mark` by default', () => {
      const result = Highlightify({ text: 'foobar', filter: 'ob' })
      expect(result).to.match(/mark/)
    })

    it('uses a custom tagName if provided', () => {
      const result = Highlightify({ text: 'foobar', filter: 'ob', tagName: 'div' })
      expect(result).to.match(/div/)
    })
  })
})
