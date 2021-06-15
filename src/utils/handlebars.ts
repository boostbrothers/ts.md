// import * as Handlebars from 'handlebars';
// import * as path from 'path';
// import ts = require('typescript');

// const hbsFiles = ts.sys.readDirectory('./templates', undefined, undefined, ['*.hbs']);
// const partials = hbsFiles.map((hbsFile) => {
//   const {name} = path.parse(hbsFile);
//   const file = ts.sys.readFile(hbsFile);

//   const template = Handlebars.compile(file);
//   Handlebars.registerPartial(name, templates);
// })

// export default (path: string, data: any) => {
//   const templateFile = ts.sys.readFile(path);

//   if (!templateFile) {
//     throw new Error(path + ' 파일을 찾을 수 없습니다.');
//   }

//   const template = Handlebars.compile(templateFile);

//   return template(data);
// };