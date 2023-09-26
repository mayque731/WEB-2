async function post() {
  let postagem = document.querySelector("#resul");
  let response = await fetch("https://rickandmortyapi.com/api/character/");
  let json = await response.json();

  console.log(json.results[5].id);

  if (json.results.length > 0) {
    postagem.innerHTML = "";
    for (let i in json.results) {
      let postsHTML = "<div id='bloco-cont'>" + json.results[i].name + "</div>";
      postagem.innerHTML = postagem.innerHTML + postsHTML;
    }
  } else {
    console.error;
    alert("Algo deu errado!:/");
    postagem.innerHTML = "ERRO!";
  }
}
post();

function search() {
  console.log("pesquisou");
}
