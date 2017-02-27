export default {
  toolbar:[
      'redo | bold italic underline strikethrough | removeformat |',
      'insertorderedlist insertunorderedlist | selectall cleardoc paragraph' ,
      '| justifyleft justifycenter justifyright justifyjustify |',
      'link unlink save',
      '| horizontal print preview', 'drafts', 'formula'
  ],
  /* 传入配置参数,可配参数列表看umeditor.config.js */
  elementPathEnabled: false,
  autoHeight: false,
  wordCount: false,
  maximumWords: Infinity,
  serverUrl: '',
  initialFrameHeight: window.innerHeight - 100,
}
