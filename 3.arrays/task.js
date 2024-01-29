function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index])
  );
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((item) => item.gender === gender)
    .map((item) => item.age)
    .reduce((acc, item, index, arr) => {
      const sum = acc + item;
      if (index === arr.length - 1) {
        return sum / arr.length;
      }
      return sum;
    }, 0);
  return result;
}
