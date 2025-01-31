const main_container = document.getElementById('characters')

const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    const { info, results } = data;
    results.forEach(character => {
        const article = document.createElement('article');
        article.innerHTML = `
        <img src="${character.image}" alt="">
        <h2>${character.name}</h2>
        <div>
            <p>${character.species}</p> 
            <p>${character.status}</p>
        </div>
        <a href="">Ver Personaje</a>
        `;

        main_container.appendChild(article)
    })

}

getCharacters();
console.log("test")