export const TYPES = {
  String: 'String',
  Number: 'Number',
  Null: 'Null',
  Undefined: 'Undefined',
  Array: 'Array',
  Object: Object,

}
/**
 * 判断是否是指定的类型
 * @param {any} value 要判断类型的值
 * @param {enum} type 类型
 * @returns {boolean}
 */
export const is = (value, type)=> {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

/**
 * 判断是否是时间戳
 * @param {string|number} value 要判断的值
 * @returns {boolean}
 */
export const isTimestamp = (value)=> {
  return /\d{13}/.test(value)
}
/**
 * 首字母大写
 * @param {string} s 要修改的string
 */
export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}