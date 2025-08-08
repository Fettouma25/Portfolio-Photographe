// const cards = document.querySelector(".cards");
// const btnAdd = document.getElementById("btn");
// const title = document.getElementById("title");
// const desc = document.getElementById("desc");
// const url = document.getElementById("url");
// const form = document.getElementById("form-add");

// // Afficher toutes les cartes
// function afficherCards() {
//   axios.get("http://localhost:1000/projects") // ✅ port 1000
//     .then(res => {
//       console.log("Données reçues :", res.data); // debug
//       cards.innerHTML = '';

//       res.data.forEach(card => {
//         // Image par défaut si undefined
//         const imageSrc = card.ImageURL && card.ImageURL.trim() !== "" 
//           ? card.ImageURL 
//           : "https://via.placeholder.com/300";

//         // Crée une div pour la carte
//         const div = document.createElement('div');
//         div.classList.add('card-item');
//         div.innerHTML = `
//           <img src="${imageSrc}" alt="${card.ProjectTitle}" style="width:100%; border-radius: 8px; max-height: 200px; object-fit: cover;" />
//           <h3>${card.ProjectTitle}</h3>
//           <p>${card.Description}</p>
//           <button class="btn-delete" data-id="${card.id}">🗑️</button>
//         `;

//         cards.appendChild(div);
//       });

//       // Ajouter la fonction de suppression
//       document.querySelectorAll(".btn-delete").forEach(btn => {
//         btn.addEventListener("click", (e) => {
//           const id = e.currentTarget.getAttribute("data-id");
//           supprimerCard(id);
//         });
//       });
//     })
//     .catch(err => console.error(err));
// }

// // Supprimer une carte
// function supprimerCard(id) {
//   axios.delete(`http://localhost:1000/projects/${id}`)
//     .then(() => afficherCards())
//     .catch(err => console.error(err));
// }

// // Ajouter une carte
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newCard = {
//     ProjectTitle: title.value,
//     Description: desc.value,
//     ImageURL: url.value
//   };

//   axios.post('http://localhost:1000/projects', newCard)
//     .then(() => {
//       form.reset();
//       afficherCards();
//     })
//     .catch(err => console.error(err));
// });

// // Charger les cartes au démarrage
// afficherCards();



const cards = document.querySelector(".cards")
const btnAdd = document.getElementById("btn")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const url = document.getElementById("url")
const form = document.getElementById("form-add")



function afficherCards() {
  axios.get("http://localhost:1000/projects")
    .then(res => {
      cards.innerHTML = '';
      res.data.forEach(card => {
        const div = document.createElement('div')
        div.classList.add('card-item')
        div.innerHTML = `
          <h3>${card.TITLE}</h3>
          <p>${card.DESCRIPTION}</p>
          <img src="${card.URL}"  style="width:100%; border-radius: 8px; max-height: 200px; object-fit: cover;" />
          <button class="btn-delete" data-id="${card.id}">🗑️</button>
        `;
        cards.appendChild(div);
      })
      document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.getAttribute("data-id");
          supprimercard(id);
        })
      })
    }).catch(err => console.error(err));
}
afficherCards()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const newCard = {
    TITLE: form.ProjectTitle.value,
    DESCRIPTION: form.Description.value,
    URL: form.ImageURL.value
  }

  axios.post('http://localhost:1000/projects', newCard).then(() => {
      form.reset()
      afficherCards()
    }).catch(err => console.error(err))
})

 function supprimercard(id) {
   axios.delete(`http://localhost:1000/projects/${id}`)
    .then(() => afficherCards())
    .catch(err => console.error(err))
 }