const data = require("./daily-task-js.json");

function usersWithGraceAndFruit(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    const friends = user.friends;
    const favoriteFruit = user.favoriteFruit;

    // Memeriksa apakah teman ada yang bernama "Grace"
    const hasGraceFriend = friends.some((friend) => friend.name === "Grace");

    // Memeriksa apakah favorit fruit adalah "apple" atau "banana"
    const isFavoriteFruitValid =
      favoriteFruit === "apple" || favoriteFruit === "banana";

    // Jika memiliki teman "Grace" dan favorit fruit valid, tambahkan pengguna ke hasil
    if (hasGraceFriend && isFavoriteFruitValid) {
      result.push(user);
    }
  }

  return {
    resultUser: result,
    totalUser: result.length,
  };
}

console.log(usersWithGraceAndFruit(data));
