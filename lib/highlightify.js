const Highlightify = ({ text, filter, className = 'highlightify-is-match' }) => {
  if (!text || !filter) {
    throw 'Highlightify requires `text` and `filter` options';
  }
  return text.replace(RegExp(filter, 'ig'), (match) => `<span class="${className}">${match}</span>`);
};

export default Highlightify;
