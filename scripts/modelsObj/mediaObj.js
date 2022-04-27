class Media {
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
        <img class="dimensionImg cursor" photoId="${this.id}" title="${this.title}" 
        src="assets/photographersMedia/${this.photographerId}/${this.image}" 
        alt="${this.title}" onclick="openModalLightBox(this)"/>
        <div class="positionOfLikes">
            <p class="titleStyle"> ${this.title}</p>
            <div class="positionOfDiv">
                <p class="heartP">${this.likes}</p>
                <div class="heartDiv">
                 <img class="heartStyle heartPosition like-no" src="assets/icons/love.png"  onclick="likeMe(this)"/>
                </div>
            </div>
        </div>
        `;
        return creatCard;
    };
    
    get justVideoCardDom(){
        let creatVideoTag = document.createElement('div');
        creatVideoTag.innerHTML = `
        <video class="cursor" width="350px" height="350px" title="${this.title}" onclick="openModalLightBox(this)">
            <source src="assets/photographersMedia/${this.photographerId}/${this.video}" type="video/mp4">
        </video>
        <div class="positionOfLikes">
            <p class="titleStyle"> ${this.title}</p>
            <div class="positionOfDiv">
                <p class="heartP">${this.likes}</p>
                <div class="heartDiv">
                    <img class="heartStyle heartPosition like-no" src="assets/icons/love.png" onclick="likeMe(this)"/>
                </div>
            </div>
        </div>
        `;
        return creatVideoTag;
    };

};

function likeMe(obj){
    var heartP = obj.parentElement.parentElement.getElementsByClassName("heartP")[0];

    if (heartP.classList.contains('clicked')) {
        //Remove like
        obj.src='assets/icons/love.png';
        heartP.textContent--;
        heartP.classList.remove('clicked');

        document.getElementById('totalLikes').textContent--;
    } else {
        //Add like
        obj.src='assets/icons/like.png';
        heartP.textContent++;
        heartP.classList.add('clicked');

        document.getElementById('totalLikes').textContent++;
    };
};


function openModalLightBox (obj){
    //Loading image src
    document.getElementById('lightbox').style.display = 'block';
    var lightBox = document.getElementById('lightbox__container');
    var title = obj.getAttribute('title');
    switch(obj.tagName) {
        
        case 'IMG':
            var srcInfo= obj.getAttribute('src');
            lightBox.innerHTML =`<img src="${srcInfo}" alt="${title}" />
                                 <p class="lightBocTitle">${title}</p>
            `;
            
            break;
            case 'VIDEO':
                var srcInfo= obj.querySelector('source').getAttribute('src');
                lightBox.innerHTML =`<video controls alt="${title}">
                                        <source src="${srcInfo}" type="video/mp4"/>
                                     </video>
                                     <p class="lightBocTitle">${title}</p>`;
            break;
    };

    // Action for next button
    var currentObj = obj;
    var lightBoxNext = document.getElementsByClassName('lightbox__next')[0];
    lightBoxNext.addEventListener('click',() => {
       
        let nextObj = currentObj.parentElement.nextSibling;
        
        if (nextObj) {
            let nextImgObj =  nextObj.getElementsByClassName('cursor')[0];
            let nextTitle =nextImgObj.getAttribute('title');
            srcInfo = nextImgObj.getAttribute('src');
            lightBox.innerHTML =`<img src="${srcInfo}" alt="${title}"/>
                                <p class="lightBocTitle">${nextTitle}</p>`;
    
            currentObj = nextImgObj;
        }
    });

    // Action for back button
    var lightBoxBack = document.getElementsByClassName('lightbox__back')[0];
    lightBoxBack.addEventListener('click',() => {
        let previousObj = currentObj.parentElement.previousElementSibling;
        if (previousObj) {
            let previousImgObj =  previousObj.getElementsByClassName('cursor')[0];
            let previousTitle =previousImgObj.getAttribute('title');
            switch(previousImgObj.tagName) {
                case 'IMG':
                    srcInfo = previousImgObj.getAttribute('src');
                    lightBox.innerHTML =`<img src="${srcInfo}" alt="${title}"/>
                                            <p class="lightBocTitle">${previousTitle}</p>`;
                    break;
                case 'VIDEO':
                        srcInfo = previousImgObj.querySelector('source').getAttribute('src');
                        lightBox.innerHTML =`<video controls alt="${title}">
                                                <source src="${srcInfo}" type="video/mp4"/>
                                             </video>
                                             <p class="lightBocTitle">${previousTitle}</p>`;
                    break;
            };
            currentObj = previousImgObj;
        };
    });
    

    //Action for cancel button
    var lightBoxClose = document.getElementsByClassName('lightbox__close')[0];
    lightBoxClose.addEventListener('click',() => {
        document.getElementById('lightbox').style.display = 'none';
    });

    //Accebility
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }
        switch (event.key) {
          case "ArrowRight":
            // Do something for "right arrow" key press.
            let nextObj = currentObj.parentElement.nextSibling;
            if (nextObj) {
                let nextImgObj =  nextObj.getElementsByClassName('cursor')[0];
                let nextTitle =nextImgObj.getAttribute('title');
                srcInfo = nextImgObj.getAttribute('src');
                lightBox.innerHTML =`<img src="${srcInfo}" alt="${title}"/>
                                    <p class="lightBocTitle">${nextTitle}</p>`;
        
                currentObj = nextImgObj;
            };
            break;
          case "ArrowLeft":
            // Do something for "left arrow" key press.
            let previousObj = currentObj.parentElement.previousElementSibling;
            if (previousObj) {
                        
                let previousImgObj =  previousObj.getElementsByClassName('cursor')[0];
                let previousTitle =previousImgObj.getAttribute('title');
                switch(previousImgObj.tagName) {
                    case 'IMG':
                        srcInfo = previousImgObj.getAttribute('src');
                        lightBox.innerHTML =`<img src="${srcInfo}" alt="${title}"/>
                                                <p class="lightBocTitle">${previousTitle}</p>`;
                        break;
                    case 'VIDEO':
                            srcInfo = previousImgObj.querySelector('source').getAttribute('src');
                            lightBox.innerHTML =`<video controls alt="${title}">
                                                    <source src="${srcInfo}" type="video/mp4"/>
                                                 </video>
                                                 <p class="lightBocTitle">${previousTitle}</p>`;
                        break;
                };
                currentObj = previousImgObj;
            };
                    
            break;
          case "Escape":
            // Do something for "esc" key press.
            document.getElementById('lightbox').style.display = 'none';
            break;
          default:
            return; // Quit when this doesn't handle the key event.
        };
      
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      }, true)};

      function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      };

      function compareLikes( a, b ) {
        return a.likes - b.likes;
      };