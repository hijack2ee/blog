import {compilerOptions} from './tsconfig.json';

const sanitize = (str: string) => str.replace(/[*/]*$/g, '');

const alias = (paths => {
  let result = {};
  for (const [key, value] of Object.entries(paths)) {
  result = {...result, [sanitize(key)]: sanitize(value[0])};
  }
  return result;
})(compilerOptions.paths);

export default alias;
