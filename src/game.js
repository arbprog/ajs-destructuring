/* eslint-disable guard-for-in */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
export default function destructing(data) {
  if (data.hasOwnProperty('special')) {
    const result = [];
    for (const prop in data.special) {
      const {
        id, name, description = 'Описание недоступно', icon,
      } = data.special[prop];
      result.push({
        id, name, description, icon,
      });
    }
    return result;
  }
}
