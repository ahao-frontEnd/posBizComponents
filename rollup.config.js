import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json' assert { type: 'json' }

export const name = pkg.name
export const file = type => `dist/${name}.${type}.js`

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins: [
    nodeResolve(), // 处理第三方模块
    vue(),
    // 这个插件会默认使用 tsconfig.json 的配置
    typescript({
      tsconfigOverride: {
        include: ["src/index.ts", "src/**/*.vue", "src/**/*.ts", "shims-vue.d.ts"],
        exclude: ["src/**/__tests__/*", "src/main.ts", "node_modules"],
        compilerOptions: {
          paths: {
            "@/*": ["./src/*"],
            "vue": ["./node_modules/vue/dist/vue.esm-bundler.js"],
            "tslib": ["./node_modules/tslib/modules/index.js"]
          },
          declaration: true,  // 生成 .d.ts 类型声明文件
          importHelpers: true,   // 启用 tslib 辅助函数导入
        },
      }
    }),
    css({ output: 'bundle.css' }),
  ],
  external: ['vue', 'lodash-es']
}