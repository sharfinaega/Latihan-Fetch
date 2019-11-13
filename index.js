function getFollower() {
  let ambilFollower = document.createElement("div");
  fetch("https://api.github.com/users/sharfinaega/followers")
    .then(response => response.json())
    .then(follower => {
      console.log(follower);

      let divCon = document.createElement("div");
      divCon.className = "row columns is-multiline";
      let isiText =
        "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.";
      //   loop follower
      follower.map(data => {
        let foto = document.createElement("div");
        foto.className = "column is-one-third";
        foto.innerHTML = `
                <div class="card large">
                    <div class="card-image">
                        <figure class="image">
                            <img src=${data.avatar_url} alt="Image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            </div>
                            <div class="media-content">
                                <p class="title is-4 no-padding">${data.login}</p>
                                <p><span class="title is-6"><a href="${data.html_url}#">GitHub Account</a></span></p>
                                <p class="subtitle is-6">Indonesia</p>
                            </div>
                        </div>
                        <div class="content">
                            ${isiText}
                            <div class="background-icon"><span class="icon-twitter"></span></div>
                        </div>`;
        //   setiap follower di append ke divCon
        divCon.append(foto);
      });
      document.getElementById("content").append(divCon);
    });
}

getFollower();
