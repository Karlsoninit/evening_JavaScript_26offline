const arr = [1, 2, 3, 4, 4, 4, 44, 5, 6, 6, 87, 33, 22, 34];

console.log(arr);

const unique = arr => {
  const newArr = [];
  const repeat = [];
  const notRepeat = [];
  for (let elem of arr) {
    if (!newArr.includes(elem)) {
      //   console.log(!newArr.includes(elem));
      newArr.push(elem);
    } else {
      //   console.log("find", newArr.indexOf(elem));
      //   newArr.splice(newArr.indexOf(elem), 1, "delete");
      repeat.push(elem);
    }
  }

  console.log(repeat);
  console.log(newArr);

  for (let elem of newArr) {
    if (repeat.includes(elem)) {
      //   console.log(elem);
    } else {
    //   console.log(elem);
      notRepeat.push(elem);
    }
  }
  return notRepeat;
};

const result = unique(arr);

console.log(result);
