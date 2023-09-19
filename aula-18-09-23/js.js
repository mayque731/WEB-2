async function post() {
  let postagem = document.querySelector("#post");
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();

  if (json.length > 0) {
    postagem.innerHTML = "";
    for (let i in json) {
      let postsHTML =
        "<div><h1>" + json[i].title + "</h1>" + json[i].body + "</div>";
      postagem.innerHTML = postagem.innerHTML + postsHTML;
    }
  } else {
    console.error;
    alert("Algo deu errado!:/");
    postagem.innerHTML = "servidor parou";
  }
}
post();
