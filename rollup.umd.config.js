import basicConfig, { file, name } from './rollup.config.js'

export default {
  ...basicConfig,
  output: {
    name: 'PosBizComponents', // UMD 格式需要指定全局变量名
    exports: 'named', // 关键配置：指定使用命名导出
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    }
  }
}