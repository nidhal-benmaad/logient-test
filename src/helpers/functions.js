export function handleUserFavorites(user, newItem) {
  let index = this.movies.findIndex((item) => item.imdbID === newItem.imdbID);
  this.movies.splice(index, 1, newItem);
  // get the user from localStorage

  if (newItem.liked) {
    if (!user.favorites.includes(newItem.imdbID))
      user.favorites.push(newItem.imdbID);
  } else {
    let index = user.movies.findIndex((item) => item === newItem.imdbID);
    user.favorites.splice(index, 1, newItem.imdbID);
  }
  localStorage.setItem("user", JSON.stringify(user));
}
