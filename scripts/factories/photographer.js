function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const pageAdress = 'photographer.html';
        
    function getUserCardDOM() {
        const section = document.createElement('section')
        const link_a = document.createElement( 'a' );
        const infoAside = document.createElement('aside');
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const titleH4 = document.createElement( 'h4');
        const tagLine = document.createElement ('p');
        const money = document.createElement('p');
        infoAside.classList.add('photographerAside');
        img.setAttribute("src", picture);
        link_a.setAttribute("href",pageAdress);
        infoAside.setAttribute("aria-label", 'information');
        titleH4.classList.add("photographerTitle");
        tagLine.classList.add("photographerTag");
        money.classList.add("photographerMoney");
        h2.textContent = name;
        titleH4.textContent = city + ', ' + country;
        tagLine.textContent = tagline;
        money.textContent = price +'€/jour';
        section.appendChild(link_a);
        section.appendChild(infoAside)
        link_a.appendChild(img);
        link_a.appendChild(h2);
        infoAside.appendChild(titleH4);
        infoAside.appendChild(tagLine);
        infoAside.appendChild(money);
        
        return (section);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}
