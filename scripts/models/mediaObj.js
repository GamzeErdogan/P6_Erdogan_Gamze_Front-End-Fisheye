
class media {
    constructor(mediaJsonObj){
        this.id = mediaJsonObj.id
        this.photographerId = mediaJsonObj.photographerId
        this.title = mediaJsonObj.title
        this.image = mediaJsonObj.image
        this.likes = mediaJsonObj.likes
        this.date = mediaJsonObj.date
        this.price = mediaJsonObj.price
        this.video = mediaJsonObj.video
    };
    get mediaCardDom(){
        let creatCard = document.createElement('div');
        creatCard.innerHTML = `
        <img class="dimensionImg" src="assets/photographersMedia/${this.photographerId}/${this.image}" alt="likes"/>
        <div class="positionOfLikes">
        <p class="titleStyle"> ${this.title}</p>
            <div>
            <span>${this.likes}</span>
            <i class="fa-solid fa-heart colorOfHeart"></i>
           </div>
        </div>
        `;
    
        return creatCard;
    };
    get justVideoCardDom(){
        let creatVideoTag = document.createElement('div');
        creatVideoTag.innerHTML = `
        <video width="350px" height="350px" controls>
            <source src="assets/photographersMedia/${this.photographerId}/${this.video}" type="video/mp4">
        </video>
        <div class="positionOfLikes">
        <p class="titleStyle"> ${this.title}</p>
            <div>
            <span>${this.likes}</span>
            <i class="fa-solid fa-heart colorOfHeart"></i>
           </div>
        </div>
        `;
        return creatVideoTag;
    };

    // get fixedDiv(){
    //     let creatDiv = document.createElement('div');
    //     creatDiv.innerHTML = `
        
    //     `;
    // }
};

