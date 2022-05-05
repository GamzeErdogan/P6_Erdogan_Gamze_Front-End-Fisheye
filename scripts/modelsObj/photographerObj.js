
class photographerObj {
    
    constructor(photographerJsonObj){
        
        this.name = photographerJsonObj.name
        this.id = photographerJsonObj.id
        this.city = photographerJsonObj.city
        this.country = photographerJsonObj.country
        this.tagline = photographerJsonObj.tagline
        this.price = photographerJsonObj.price
        this.portrait = photographerJsonObj.portrait
    }

    //Property of the photographer class
    //This property returns home page card complated dom
    get cardDom(){
        let innerHtml = `
            <a href="photographer.html?photographerID=${this.id}">
                <img class="photographerImagePosition"
                 src="assets/photographersMedia/PhotographersIdPhotos/${this.portrait}" alt="${this.name}"/>
                <h2 class="photographerTitlePosition">${this.name}</h2>
            </a>
            <div class="photographerAside">
                <h4 class="photographerTitle">${this.city}, ${this.country}</h4>
                <p class="photographerTag">${this.tagline} </p>
                <p class="photographerMoney">${this.price}€/jour</p>
            </div> `;

        return this.appendHtmlDomToSection(innerHtml);
    }
    
    //This property returns photographer page profil dom
    get profilDom(){
        let innerHtml = `
                <h2 id="photographerNameStyle" class="photographerPosition">${this.name}</h2>
                <h4 class="photographerTitle photographerPosition"
                    id="photographerTitleStyle">${this.city}, ${this.country}</h4>
                <p class="photographerTag photographerPosition" id="photographerTagStyle">${this.tagline} </p>
            `;

        return this.appendHtmlDomToSection(innerHtml);
    }
    get profilImageDom(){
        let imageDom = document.createElement('div');
        imageDom.setAttribute('id','imageDiv');
        imageDom.innerHTML = `<img id="photographerImageStyle"
        src="assets/photographersMedia/PhotographersIdPhotos/${this.portrait}"
        alt="${this.name}"
     />`
        return imageDom;
    }

    appendHtmlDomToSection(innerHTML){
        const creatSection = document.createElement('div');
        creatSection.setAttribute('id','profilInfo');
        creatSection.innerHTML = innerHTML;

        return creatSection;
    }

   
}