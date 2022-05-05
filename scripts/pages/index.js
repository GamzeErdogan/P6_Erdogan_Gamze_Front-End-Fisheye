//----------This function displays the entire page of the index-------------------------
async function displayHomePage(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographerProfil) => {
        const photographerTemplate = new photographerObj(photographerProfil);
        photographersSection.appendChild(photographerTemplate.cardDom);
    });
}

async function init() {
    const photographersObj = await fishEyesAPI();
    console.log("result: ",photographersObj);
    displayHomePage(photographersObj.photographers);

}

init();


   