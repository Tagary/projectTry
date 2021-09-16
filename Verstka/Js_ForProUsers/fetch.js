const getResource = (url) => {
    const res = fetch(url),
          some = res.json();
          return some;
}

getResource()
    .then((myJson) => console.log(myJson))
    .then()