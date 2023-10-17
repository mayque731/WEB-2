async function post() {
  let postagem = document.querySelector("#lista_personagens");
  let response = await fetch("https://swapi.dev/api/people/");
  let json = await response.json();

  //console.log(json.results);

  if (json.results.length > 0) {
    //postagem.innerHTML = "";
    for (let i in json.results) {
      let postsHTML =
        "<tr><td>" +
        json.results[i].name +
        "</td><td>" +
        json.results[i].height +
        "</td><td>" +
        json.results[i].mass +
        "</td><td>" +
        json.results[i].hair_color +
        "</td><td>" +
        json.results[i].skin_color +
        "</td><td>" +
        json.results[i].eye_color +
        "</td><td>" +
        json.results[i].birth_year +
        "</td><td>" +
        json.results[i].gender +
        "</td></tr>";
      postagem.innerHTML = postagem.innerHTML + postsHTML;
    }
  } else {
    console.error;
    alert("Algo deu errado!:/");
    postagem.innerHTML = "ERRO!";
  }
}
post();
