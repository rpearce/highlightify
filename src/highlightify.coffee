Highlightify =
  highlightMatches: (opts) ->
    if not opts or not opts.text or not opts.filter
      return throw 'Highlightify.highlightMatches requires `text` and `filter` options'

    className = opts.className or 'is-match'
    opts.text.replace RegExp(opts.filter, 'ig'), (match) ->
        "<span class=\"#{className}\">#{match}</span>"

module.exports = Highlightify
