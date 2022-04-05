var URLparams = new URLSearchParams(window.location.search);
var photographerID = URLparams.get("photographerID");
console.log("received id: ",photographerID);

async function displayPhotographerPage(photographerID) {
    const photographersJsonObj = await fishEyesAPI();
    var photographerJsonObj = photographersJsonObj.photographers.find(p => p.id == photographerID);
    console.log("photographer: ",photographerJsonObj);
    const photographerObjj = new photographerObj(photographerJsonObj);

    //photographer json informations
    //I created the photographer profil on the top of the photographer page.
    const photographersSection = document.querySelector(".photograph-header");
    photographersSection.appendChild(photographerObjj.profilDom);

    //media json informations
    // var medias = photographersJsonObj.media.filter(m => m.photographerId == photographerID);
    var images = photographersJsonObj.media.filter(m => m.image);
    var videos = photographersJsonObj.media.filter(v => v.video);
    let getContainerImage = document.getElementById('containerImage');

    //I took all relevant videos of the photographer
    videos.forEach(findVideo =>{
        if(findVideo.photographerId == photographerID){
            const mediaObj = new media(findVideo);
            const mediaVideoDom = mediaObj.justVideoCardDom;
            getContainerImage.appendChild(mediaVideoDom);
        }
    });

     //I took all relevant images of the photographer
    images.forEach(findImage =>{
        if(findImage.photographerId == photographerID){
            const mediaObjV = new media(findImage);
            const mediaImagesDom = mediaObjV.mediaCardDom;
            getContainerImage.appendChild(mediaImagesDom);
        }
    });
};

displayPhotographerPage(photographerID);

