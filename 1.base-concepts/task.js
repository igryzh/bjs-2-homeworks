"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  // Проверяем значения дискриминанта и возвращаем соответствующий результат
  if (discriminant < 0) {
    // Нет корней
    return (arr = []);
  } else if (discriminant === 0) {
    // Один корень
    const root = -b / (2 * a);
    return (arr = [root]);
  } else {
    // Два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return (arr = [root1, root2]);
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let result = 0;
  const monthPay =
    creditBody *
    (percentMonth + percentMonth / ((1 + percentMonth) ** countMonths - 1));
  if (monthPay == 0) {
    return result;
  } else {
    result = Number((countMonths * monthPay).toFixed(2));
    return result;
  }
}
