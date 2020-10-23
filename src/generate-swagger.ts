const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'path',
  remoteUrl:'https://xce-factor.ru/swagger/v1/swagger.json',
  useClassTransformer: false,
  outputDir: './src/services/xce-factor-swagger',
  multipleFileMode: true,
  modelMode: 'interface'
})
