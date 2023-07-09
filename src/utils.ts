/**
 * Склоняет слова в зависимости от числа
 * @param number число в зависимости от которого будет склонение
 * @param words массив строк для склонения в необходимом порядке. Пример ['минута', 'минуты', 'минут']
 */
export const declOfNum = (number: number, words: string[]) => {
  const cases = [
    2,
    0,
    1,
    1,
    1,
    2
  ];
  return words[(number % 100 > 4 && number % 100 < 20) ?
    2 :
    cases[(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
};
