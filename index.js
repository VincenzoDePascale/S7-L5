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
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=animals",
      {
        method: "GET",
      }
    );

    let arrayButton = [];
    console.log("primo arrayButton", arrayButton);

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
        arrayButton.push(
          ((title = nomeACaso[num].title), (rank = nomeACaso[num].title))
        );
      }
    }

    if (CanzoneCaparezza.ok) {
      console.log("CanzoneCaparezza", CanzoneCaparezza);
      let canzoneSez2 = await CanzoneCaparezza.json();
      let nomeACaso2 = canzoneSez2.data;

      let rowTwo = document.getElementById("rowTwo");

      rowTwo.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${nomeACaso2[0].artist.picture_big}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${nomeACaso2[0].title}</h5>
            <p class="card-text">${nomeACaso2[0].album.title}</p>
          </div>
        </div>
      </div>
    </div>`;

      arrayButton.push(
        ((title = nomeACaso2[0].title), (rank = nomeACaso2[0].title))
      );
    }

    if (xenoverso.ok && anastasis.ok && animals.ok) {
      console.log("xenoverso", xenoverso);
      let albumSez3a = await xenoverso.json();
      let nomeACaso3a = albumSez3a.data;

      console.log("anastasis", anastasis);
      let albumSez3b = await anastasis.json();
      let nomeACaso3b = albumSez3b.data;

      console.log("animals", animals);
      let albumSez3c = await animals.json();
      let nomeACaso3c = albumSez3c.data;

      let rowThree = document.getElementById("rowThree");

      rowThree.innerHTML += `<div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${nomeACaso3a[0].artist.picture_xl}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>${nomeACaso3a[0].title}</h5>
            <p>${nomeACaso3a[0].album.title}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="${nomeACaso3b[0].artist.picture_xl}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>${nomeACaso3b[0].title}</h5>
            <p>${nomeACaso3b[0].album.title}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="${nomeACaso3c[0].artist.picture_xl}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>${nomeACaso3c[0].title}</h5>
            <p>${nomeACaso3c[0].album.title}</p>
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

      arrayButton.push(
        ((title = nomeACaso3a[0].title.value), (rank = nomeACaso3a[0].rank)),
        ((title = nomeACaso3b[0].title.value), (rank = nomeACaso3b[0].rank)),
        ((title = nomeACaso3c[0].title.value), (rank = nomeACaso3c[0].rank))
      );
    }
    console.log("arrayButton dopo il push", arrayButton);
    //azione bottone prima inserire le canzoni salvate in un array, poi {aray.sort(a,b) => a.rank - b.rank);}

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
          `<h5>Queste sono le canzoni che sono in questa pagina!</h5>
          <li>&{arrayButton[0].title}</li>
          <li>${arrayButton[1].title}</li>
          <li>${arrayButton[2].title}</li>
          <li>${arrayButton[3].title}</li>
          <li>${arrayButton[4].title}</li>
          <li>&{arrayButton[5].title}</li>
          <li>&{arrayButton[6].title}</li>
          <li>&{arrayButton[7].title}</li>`,
          "success"
        );
      });
    }
  } catch (err) {
    console.log(err);
  }
};

getLibrary();
