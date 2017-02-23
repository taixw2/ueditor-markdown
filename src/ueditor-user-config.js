export default {
  toolbars: [
    [
      'redo', // 重做
      'bold', // 加粗
      'italic', // 斜体
      'underline', // 下划线
      'strikethrough', // 删除线
      'horizontal', // 分隔线
      'removeformat', // 清除格式
      'time', // 时间
      'date', // 日期
      'unlink', // 取消链接
      'insertrow', // 前插入行
      'insertcol', // 前插入列
      'mergeright', // 右合并单元格
      'mergedown', // 下合并单元格
      'deleterow', // 删除行
      'deletecol', // 删除列
      'splittorows', // 拆分成行
      'splittocols', // 拆分成列
      'splittocells', // 完全拆分单元格
      'deletecaption', // 删除表格标题
      'inserttitle', // 插入标题
      'mergecells', // 合并多个单元格
      'deletetable', // 删除表格
      'cleardoc', // 清空文档
      'insertparagraphbeforetable', // "表格前插入行"
      'insertcode', // 代码语言
      'fontsize', // 字号
      'paragraph', // 段落格式
      'edittable', // 表格属性
      'edittd', // 单元格属性
      'link', // 超链接
      'justifyleft', // 居左对齐
      'justifyright', // 居右对齐
      'justifycenter', // 居中对齐
      'justifyjustify', // 两端对齐
      'insertorderedlist', // 有序列表
      'insertunorderedlist', // 无序列表
      'imagecenter', //  居中
      'touppercase', //  字母大写
      'tolowercase', //  字母小写
      'inserttable', // 插入表格
    ],
  ],
  /* 传入配置参数,可配参数列表看umeditor.config.js */
  elementPathEnabled: false,
  autoHeight: false,
  wordCount: false,
  maximumWords: Infinity,
  serverUrl: '',
  initialFrameHeight: window.innerHeight - 100,
}
