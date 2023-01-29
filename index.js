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

    let xenoverso = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=xenoverso",
      {
        method: "GET",
      }
    );

    let anastasis = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=anastasis",
      {
        method: "GET",
      }
    );

    let animals = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd",
      {
        method: "GET",
      }
    );

    class CanzoneInPagina {
      constructor(titolo, rank, album) {
        this.title = titolo;
        this.rank = rank;
        this.album = album;
      }
    }

    let arrayButton = [];
    console.log("primo arrayButton", arrayButton);

    if (discografiaRancore.ok) {
      console.log("discografiaRancore", discografiaRancore);
      let elencoDischi = await discografiaRancore.json();
      let music = elencoDischi.data;

      let rowOne = document.getElementById("rowOne");

      rowOne.innerHTML += `<div class="card p-0 col-3 mb-2">
         <img src="${music[0].album.cover_big}" class="card-img-top" style="height: 65%" alt="...">
         <div class="card-body d-flex flex-column justify-content-between">
         <h5 class="card-title">${music[0].title}</h5>
         <p class="card-text">${music[0].album.title}</p>
         </div>
         </div>`;

      const canzone1 = new CanzoneInPagina(
        `${music[0].title}`,
        `${music[0].rank}`,
        `${music[0].album.title}`
      );
      arrayButton.push(canzone1);

      rowOne.innerHTML += `<div class="card p-0 col-3 mb-2">
         <img src="${music[1].album.cover_big}" class="card-img-top" style="height: 65%" alt="...">
         <div class="card-body d-flex flex-column justify-content-between">
         <h5 class="card-title">${music[1].title}</h5>
         <p class="card-text">${music[1].album.title}</p>
         </div>
         </div>`;

      const canzone2 = new CanzoneInPagina(
        `${music[1].title}`,
        `${music[1].rank}`,
        `${music[1].album.title}`
      );
      arrayButton.push(canzone2);

      rowOne.innerHTML += `<div class="card p-0 col-3 mb-2">
         <img src="${music[15].album.cover_big}" class="card-img-top" style="height: 65%" alt="...">
         <div class="card-body d-flex flex-column justify-content-between">
         <h5 class="card-title">${music[15].title}</h5>
         <p class="card-text">${music[15].album.title}</p>
         </div>
         </div>`;

      const canzone3 = new CanzoneInPagina(
        `${music[15].title}`,
        `${music[15].rank}`,
        `${music[15].album.title}`
      );
      arrayButton.push(canzone3);

      rowOne.innerHTML += `<div class="card p-0 col-3 mb-2">
         <img src="${music[3].album.cover_big}" class="card-img-top" style="height: 65%" alt="...">
         <div class="card-body d-flex flex-column justify-content-between">
         <h5 class="card-title">${music[3].title}</h5>
         <p class="card-text">${music[3].album.title}</p>
         </div>
         </div>`;

      const canzone4 = new CanzoneInPagina(
        `${music[3].title}`,
        `${music[3].rank}`,
        `${music[3].album.title}`
      );
      arrayButton.push(canzone4);
    }

    if (CanzoneCaparezza.ok) {
      console.log("CanzoneCaparezza", CanzoneCaparezza);
      let canzoneSez2 = await CanzoneCaparezza.json();
      let music2 = canzoneSez2.data;

      let rowTwo = document.getElementById("rowTwo");

      rowTwo.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${music2[0].artist.picture_big}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${music2[0].title}</h5>
            <p class="card-text">${music2[0].album.title}</p>
          </div>
        </div>
      </div>
    </div>`;

      const canzone5 = new CanzoneInPagina(
        `${music2[0].title}`,
        `${music2[0].rank}`,
        `${music2[0].album.title}`
      );
      arrayButton.push(canzone5);

      arrayButton.push(((title = music2[0].title), (rank = music2[0].title)));
    }

    if (xenoverso.ok && anastasis.ok && animals.ok) {
      console.log("xenoverso", xenoverso);
      let albumSez3a = await xenoverso.json();
      let music3a = albumSez3a.data;

      console.log("anastasis", anastasis);
      let albumSez3b = await anastasis.json();
      let music3b = albumSez3b.data;

      console.log("animals", animals);
      let albumSez3c = await animals.json();
      let music3c = albumSez3c.data;

      let rowThree = document.getElementById("rowThree");

      rowThree.innerHTML += `<div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${music3a[0].artist.picture_xl}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>${music3a[0].title}</h5>
            <p>${music3a[0].album.title}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="${music3b[0].artist.picture_xl}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>${music3b[0].title}</h5>
            <p>${music3b[0].album.title}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="${music3c[0].artist.picture_xl}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>${music3c[0].title}</h5>
            <p>${music3c[0].album.title}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;

      const canzone6 = new CanzoneInPagina(
        `${music3a[0].title}`,
        `${music3a[0].rank}`,
        `${music3a[0].album.title}`
      );
      arrayButton.push(canzone6);

      const canzone7 = new CanzoneInPagina(
        `${music3b[0].title}`,
        `${music3b[0].rank}`,
        `${music3b[0].album.title}`
      );
      arrayButton.push(canzone7);

      const canzone8 = new CanzoneInPagina(
        `${music3c[0].title}`,
        `${music3c[0].rank}`,
        `${music3c[0].album.title}`
      );
      arrayButton.push(canzone8);
    }
    console.log("arrayButton dopo il push", arrayButton);
    //{arrayButton.sort(a,b) => a.rank - b.rank);}
    let oderedButton = arrayButton.sort((a, b) => a.rank - b.rank);

    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

    const alert = (message, type) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fixed-top" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById("liveAlertBtn");
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        alert(
          `<h5>Queste sono le canzoni presenti in questa pagina!</h5>
           <ul>
           <li>${oderedButton[0].title}</li>
           <li>${oderedButton[1].title}</li>
           <li>${oderedButton[2].title}</li>
           <li>${oderedButton[3].title}</li>
           <li>${oderedButton[4].title}</li>
           <li>${oderedButton[5].title}</li>
           <li>${oderedButton[6].title}</li>
           <li>${oderedButton[7].title}</li>
           </ul>`,
          "success"
        );
      });
    }

    //modale
    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML += `<ul>
    <li>${arrayButton[0].album}, ${arrayButton[0].title}</li>
           <li>${arrayButton[1].album}, ${arrayButton[1].title}</li>
           <li>${arrayButton[2].album}, ${arrayButton[2].title}</li>
           <li>${arrayButton[3].album}, ${arrayButton[3].title}</li>
           <li>${arrayButton[4].album}, ${arrayButton[4].title}</li>
           <li>${arrayButton[5].album}, ${arrayButton[5].title}</li>
           <li>${arrayButton[6].album}, ${arrayButton[6].title}</li>
           <li>${arrayButton[7].album}, ${arrayButton[7].title}</li>
    </ul>`;
  } catch (err) {
    console.log(err);
  }
};

getLibrary();
