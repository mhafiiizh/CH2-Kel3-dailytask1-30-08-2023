const data = require("./daily-task-js.json");

function notIrfiAndAdellaFriend(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isIrfiOrAdellaFriend = false;
    for (let j = 0; j < arr[i].friends.length; j++) {
      if (
        arr[i].friends[j].name === "Irfi" &&
        arr[i].friends[j].name === "Adella"
      ) {
        isIrfiOrAdellaFriend = true;
        break;
      }
    }
    if (!isIrfiOrAdellaFriend) {
      result.push(arr[i]);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

// console.log(notIrfiAndAdellaFriend(data));
console.log(notIrfiAndAdellaFriend(data));
