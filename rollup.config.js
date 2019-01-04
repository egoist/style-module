const createConfig = ({ format, minify, types }) => {
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
      require('rollup-plugin-typescript2')({
        tsconfigOverride: {
          compilerOptions: {
            declaration: types && true
          }
        }
      }),
      minify && require('rollup-plugin-terser').terser()
    ].filter(Boolean)
  }
}

export default [
  createConfig({ format: 'es', types: true }),
  createConfig({ format: 'cjs' }),
  createConfig({ format: 'umd' }),
  createConfig({ format: 'es', minify: true }),
  createConfig({ format: 'cjs', minify: true }),
  createConfig({ format: 'umd', minify: true })
]
