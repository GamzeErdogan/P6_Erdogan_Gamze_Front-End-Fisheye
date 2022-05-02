var URLparams = new URLSearchParams(window.location.search);
var photographerID = URLparams.get("photographerID");
console.log("received id: ",photographerID);

//----------This function displays the entire page of the photographer-------------------------
async function displayPhotographerPage(photographerID) {
    const photographersJsonObj = await fishEyesAPI();
    
//----------photographer json informations-----------------------------------------------
//----------I created the photographer profil on the top of the photographer page.-------
    var photographerJsonObj = photographersJsonObj.photographers.find(p => p.id == photographerID);
    console.log("photographer: ",photographerJsonObj);
    const photographerObjj = new photographerObj(photographerJsonObj);
    const photographersSection = document.querySelector(".photograph-header");
    photographersSection.appendChild(photographerObjj.profilDom);   
    document.getElementById('totalLikesPrice').textContent = photographerObjj.price +"€ / jour";
    document.getElementById('titleForm').textContent = photographerObjj.name;

//-----------media json informations-----------------------------------------------------
    var medias = photographersJsonObj.media.filter(m => m.photographerId == photographerID);
    let getContainerImage = document.getElementById('containerImage');

//-----------I took all relevant images and videos of the photographer-------------------------------
    let totalLikes = 0;
    medias.forEach(displayMedia =>{
        const displayMediaObj = new Media(displayMedia);
        totalLikes += displayMedia.likes;
        if(displayMedia.image){
            const mediaImagesDomNew = displayMediaObj.mediaCardDom;
            getContainerImage.appendChild(mediaImagesDomNew); 
        }else if(displayMedia.video){
            const mediaVideoDom = displayMediaObj.justVideoCardDom;
            getContainerImage.appendChild(mediaVideoDom);
        }
    });
    
//----------Total likes div---------------------------------------------------------------
    document.getElementById('totalLikes').textContent = totalLikes;
    
//----------Selection Sort For Title Order and Popularity
    const sectionSort = document.getElementById('section-sort');
    sectionSort.addEventListener('change', (e) =>{
        getContainerImage.innerText = " ";
        if(e.target.value == 'title'){ 
                medias.sort(compare).forEach(t =>{
                    const mediaObjTitle = new Media(t);
                    if(t.image){
                        const mediaImagesDomNew = mediaObjTitle.mediaCardDom;
                        getContainerImage.appendChild(mediaImagesDomNew);
                    } else if(t.video){
                        const mediaVideoDom = mediaObjTitle.justVideoCardDom;
                        getContainerImage.appendChild(mediaVideoDom);
                    };
                });
            } else if(e.target.value == 'popularite'){ 
                    medias.sort(compareLikes).reverse().forEach(p =>{
                        const mediaObjTitle = new Media(p);
                        if(p.image){
                            const mediaImagesDomNew = mediaObjTitle.mediaCardDom;
                            getContainerImage.appendChild(mediaImagesDomNew);
                        } else if(p.video){
                            const mediaVideoDom = mediaObjTitle.justVideoCardDom;
                            getContainerImage.appendChild(mediaVideoDom);
                        };
                    });
                }; 
    });
};
    


displayPhotographerPage(photographerID);

