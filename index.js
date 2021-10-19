const modal = document.getElementById("modal");
const paragraph = document.getElementById("p");
const containerModal = document.getElementById("container-modal");
const buttonClose = document.getElementById("close");

async function swapi(type) {
  const response = await axios.get(`https://swapi.dev/api/${type}`);
  return response.data.results;
}

async function openModal(type) {
  modal.style.display = "block";
  paragraph.innerHTML = "";
  const response = await swapi(type);

  if (type == "films") {
    for (let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      paragraph.innerHTML += response[i].title + "<br>";
    }
  } else {
    for (let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      paragraph.innerHTML += response[i].name + "<br>";
    }
  }
}

function closeModal() {
  modal.style.display = "none";
}
