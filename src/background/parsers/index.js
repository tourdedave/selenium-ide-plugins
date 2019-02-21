export function CSVtoJSON(contents) {
  let result = {}
  const _contents = contents.split('\n')
  const keys = _contents.shift().split(',')

  keys.forEach(function(key, keyIndex) {
    if (!result[key]) result[key] = []
    _contents.forEach(function(contentRow) {
      contentRow.split(',').forEach(function(content, contentIndex) {
        if (keyIndex === contentIndex && content) {
          result[key].push(content)
        }
      })
    })
  })

  return JSON.stringify(result)
}
