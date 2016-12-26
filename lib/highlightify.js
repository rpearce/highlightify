const error = 'Highlightify requires `text` and `filter` arguments'

export default function Highlightify({ text, filter, className='highlightify-is-match', tagName='mark' }) {
  if (!text || !filter) throw new Error(error)

  return text.replace(
    RegExp(filter, 'ig'),
    (match) => `<${tagName} class="${className}">${match}</${tagName}>`
  )
}
