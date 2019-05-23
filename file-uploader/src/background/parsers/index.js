export function CSVtoJSON(contents) {
  let result = []
  const csv_rows = contents.split(/\r?\n/)
  const csv_column_headings = csv_rows.shift().split(',')

  csv_rows.forEach(row => {
    let row_result = {}
    row = row.split(',')
    if (row.length === csv_column_headings.length) {
      row.forEach((entry, index) => {
        row_result[csv_column_headings[index]] = entry
      })
      result.push(row_result)
    }
  })

  return JSON.stringify(result)
}
