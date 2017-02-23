/* global someFunction UE:true*/
UM.UMTable = (table) => {
  this.table = table
  this.indexTable = []
  this.selectedTds = []
  this.cellsRange = {}
  this.update(table)
}

const UMT = UM.UMTable

UMT.getTableItemsByRange = (editor) => {
  const start = editor.selection.getStart()
  const cell = start && $(start).closest('td,th').get(0)
  const tr = cell && cell.parentNode
  const table = tr && $(tr).closest('table').get(0)
  const caption = table && table.getElementsByTagName('caption')[0]

  return {
    cell,
    tr,
    table,
    caption,
  }
}

UMT.getDefaultValue = () => ({
  tableBorder: 0,
  tdPadding: 2,
  tdBorder: 1,
})

export default UMT
