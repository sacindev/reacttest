function filter(item, keyword) {
  if (keyword.length === 0) {
    return item;
  } else {
    if (item.gender.toLowerCase() === keyword.toLowerCase()) {
      return item;
    } else if (item.species.toLowerCase() === keyword.toLowerCase()) {
      return item;
    } else if (item.name.toLowerCase() === keyword.toLowerCase()) {
      return item;
    } else if (item.status.toLowerCase() === keyword.toLowerCase()) {
      return item;
    } else if (item.type.toLowerCase() === keyword.toLowerCase()) {
      return item;
    }
  }
}

export function getCharacthers(page, keyword) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((res) => res.json())
    .then((res) => {
      return res.results.filter((item) => filter(item, keyword));
    })
    .catch((err) => {
      return err;
    });
}
