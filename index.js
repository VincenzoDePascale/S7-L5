const getLibrary = async () => {
  try {
    let discografiaRancore = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=rancore",
      {
        method: "GET",
      }
    );
    let CanzoneCaparezza = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=Jodellavitanonhocapitouncazzo",
      {
        method: "GET",
      }
    );

    if (discografiaRancore.ok) {
      console.log("discografiaRancore", discografiaRancore);
      let elencoDischi = await discografiaRancore.json();
      let nomeACaso = elencoDischi.data;

      let rowOne = document.getElementById("rowOne");

      for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * nomeACaso.length);
        rowOne.innerHTML += `<div class="card p-0 col-sm-2 col-md-3 col-lg-4 mb-2">
         <img src="${nomeACaso[num].album.cover_big}" class="card-img-top" style="height: 65%" alt="...">
         <div class="card-body d-flex flex-column justify-content-between">
         <h5 class="card-title">${nomeACaso[num].title}</h5>
         <p class="card-text">${nomeACaso[num].album.title}</p>
         </div>
         </div>`;
      }
    } else {
      throw "c'è stato un errore dentro il primo if";
    }
    if (CanzoneCaparezza.ok) {
      console.log("CanzoneCaparezza", CanzoneCaparezza);
      let canzoneSez2 = await CanzoneCaparezza.json();
      let nomeACaso2 = canzoneSez2.data;

      let rowTwo = document.getElementById("rowTwo");

      rowTwo.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${nomeACaso2[0].data.artist.picture_big}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${nomeACaso2[0].data.title}</h5>
            <p class="card-text">${nomeACaso2[0].data.album.title}</p>
          </div>
        </div>
      </div>
    </div>`;
    } else {
      throw "c'è stato un errore dentro il secondo if";
    }
  } catch (err) {
    console.log(err);
  }
};

getLibrary();
