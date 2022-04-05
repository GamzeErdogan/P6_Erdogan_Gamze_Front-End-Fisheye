function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    // function openProfil() {
    //     window.open(`photographer.html?photographerID=${id}`)
    //   }   
    function getUserCardDOM() {
        // I created Dom elements
        const section = document.createElement('section');
        const link_a = document.createElement( 'a' );
        const infoAside = document.createElement('aside');
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const titleH4 = document.createElement( 'h4');
        const tagLine = document.createElement ('p');
        const money = document.createElement('p');

        //I gave the properties to DOM elements
        infoAside.classList.add('photographerAside');
        img.setAttribute("src", picture);
        link_a.setAttribute("href", '#');
        infoAside.setAttribute("aria-label", 'information');// aria-label
        titleH4.classList.add("photographerTitle");
        tagLine.classList.add("photographerTag");
        money.classList.add("photographerMoney");
        
        // TextContents
        h2.textContent = name;
        titleH4.textContent = city + ', ' + country;
        tagLine.textContent = tagline;
        money.textContent = price +'€/jour';

        //appendChild
        section.appendChild(link_a);
        section.appendChild(infoAside)
        link_a.appendChild(img);
        link_a.appendChild(h2);
        infoAside.appendChild(titleH4);
        infoAside.appendChild(tagLine);
        infoAside.appendChild(money);
        
        //When you click on the photographer you will go to the page of the photographer
        link_a.addEventListener('click', () =>{
            var para = new URLSearchParams();
            para.append("photographerID",id);
            location.href = "http://127.0.0.1:5500/photographer.html?" + para.toString();
        });
       
        return (section);
      }
    
    return { name, id, picture, city, country, tagline, price, getUserCardDOM }
}

