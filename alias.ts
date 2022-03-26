import {compilerOptions} from './tsconfig.json';

const normalize = (value: string, replaced: RegExp, replacing?: string) => {
  const _replacing = replacing || '';
  return value.replace(replaced, _replacing);
};
const normalizePath = (value: string) => normalize(value, /[*/]*$/g, '');

const alias = (paths => {
  let result = {};
  for (const [key, value] of Object.entries(paths)) {
    result = {...result, [normalizePath(key)]: normalizePath(value[0])};
  }
  return result;
})(compilerOptions.paths);

export default alias;
