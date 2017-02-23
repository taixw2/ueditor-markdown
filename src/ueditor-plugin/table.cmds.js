const UMT = UM.UMTable
function getTableItemsByRange(editor) {
  return UMT.getTableItemsByRange(editor)
}
function getDefaultValue() {
  return UMT.getDefaultValue()
}

/**
 * 插入表格行
 */
function insertrow(postion) {
  const { tr } = getTableItemsByRange(this)
  const $trTmp = $(tr).clone()
  $trTmp.find('td').html('<br />')
  $(tr)[postion]($trTmp)
}

function operationcol(position) {
  const { table, cell } = getTableItemsByRange(this)
  const { cellIndex } = cell
  const callback = typeof position === 'function' ? position : false
  $.each($('tr', table), (i, v) => {
    if (callback) {
      callback(v, cellIndex, i)
    } else {
      v.find('td').eq(cellIndex)[position]('<td><br /></td>')
    }
  })
}

function queryRowState() {
  const tableItems = getTableItemsByRange(this)
  const cell = tableItems.cell
  return cell ? 0 : -1
}

$.extend(UM.commands, {
  /**
   * 插入表格
   * @type {Object}
   */
  inserttable: {
    queryCommandState() {
      return getTableItemsByRange(this).table ? -1 : 0
    },
    execCommand(cmd,
    opt = {
      numCols: 2,
      numRows: 2,
    }) {
      const defaultValue = getDefaultValue()
      const tableWidth = this.body.offsetWidth
      const tdWidth = Math.floor(
        (tableWidth / opt.numCols) - (defaultValue.tdPadding * 2) - defaultValue.tdBorder)

      const html = []
      let i = 0
      for (; i < opt.numRows; i += 1) {
        html.push(`<tr${i === 0 ? ' class=\'firstRow\'' : ''}>`)
        for (let c = 0; c < opt.numCols; c += 1) {
          /**
           * 此处有浏览器兼容问题
           * browser < 11
           * @type {String}
           */
          html.push(`<td width="${tdWidth}" vAlign="${opt.tdvalign}"><br /></td>`)
        }
        html.push('</tr>')
      }
      this.execCommand('inserthtml', `<table><tbody>${html.join('')}</tbody></table>`)
    },
  },
  /**
   * https://github.com/fex-team/ueditor/blob/75ff96ce4a74ec12dd818d1d7311fabdc3270173/_src/plugins/table.core.js
   * 删除光标所在表格
   */
  deletetable: {
    queryCommandState() {
      return getTableItemsByRange(this).table ? -1 : 0
    },
    execCommand() {
      let rng = this.selection.getRange()
      const $table = $(rng.startContainer).closest('table')
      if ($table.length) {
        const $next = $table.next()
        const table = $table.get(0)
        let next = $next.get(0)
        if (!$next.length) {
          next = rng.document.createElement('p')
          next.innerHTML = '<br />'
          table.parentNode.insertBefore(next, table)
        }
        $table.remove()
        rng = this.selection.getRange()
        if (next.nodeType === 3) {
          rng.setStartBefore(next)
        } else {
          rng.setStart(next, 0)
        }
        rng.setCursor(false, true)
      }
    },
  },
  /**
   * 插入行
   */
  insertrow: {
    queryCommandState: queryRowState,
    execCommand() {
      insertrow.call(this, 'after')
    },
  },
  /**
   * 往前插入行
   */
  insertbeforerow: {
    queryCommandState() {
      const tableItems = getTableItemsByRange(this)
      const cell = tableItems.cell
      return cell && (cell.tagName === 'TD' || (cell.tagName === 'TH' && tableItems.tr !== tableItems.table.row[0])) ? 0 : -1
    },
    execCommand() {
      insertrow.call(this, 'before')
    },
  },
  /**
   * 删除当前行
   */
  deleterow: {
    queryCommandState: queryRowState,
    execCommand() {
      const { tr } = getTableItemsByRange(this)
      $(tr).remove()
    },
  },
  /**
   * 插入列
   */
  insertcol: {
    queryCommandState: queryRowState,
    execCommand() {
      operationcol.call(this, 'after')
    },
  },
  /**
   * 插入前列
   */
  insertbeforecol: {
    queryCommandState: queryRowState,
    execCommand() {
      operationcol.call(this, 'before')
    },
  },
  /**
   * 删除列
   */
  deletecol: {
    queryCommandState: queryRowState,
    execCommand() {
      operationcol.call(this, (row, colIndex) => {
        $(row).find('td').eq(colIndex).remove()
      })
    },
  },
})

export default UMT
