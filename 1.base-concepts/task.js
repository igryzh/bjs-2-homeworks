"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  // Проверяем значения дискриминанта и возвращаем соответствующий результат
  if (discriminant < 0) {
    // Нет корней
    arr = [];
    return arr;
  } else if (discriminant === 0) {
    // Один корень
    const root = -b / (2 * a);
    arr = [root];
    return arr;
  } else {
    // Два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [root1, root2];
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let result = 0;
  const monthPay =
    creditBody *
    (percentMonth + percentMonth / ((1 + percentMonth) ** countMonths - 1));

  result = Number((countMonths * monthPay).toFixed(2));
  return result;
}
