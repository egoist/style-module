const createConfig = ({ format, minify }) => {
  let ext = format === 'cjs' ? '.cjs.js' : format === 'es' ? '.mjs' : '.js'
  if (minify) {
    ext = ext.replace(/\.([a-z]+)$/, '.min.$1')
  }
  return {
    input: 'src/index.ts',
    output: {
      format: format,
      file: `dist/style-module${ext}`,
      name: 'styleModule'
    },
    plugins: [
      require('rollup-plugin-alias')({
        resolve: ['.ts', '.js'],
        './sheet/server': './sheet/browser'
      }),
      require('rollup-plugin-typescript')({
        declaration: false
      }),
      minify && require('rollup-plugin-terser').terser()
    ].filter(Boolean)
  }
}

export default [
  createConfig({ format: 'umd' }),
  createConfig({ format: 'umd', minify: true })
]
