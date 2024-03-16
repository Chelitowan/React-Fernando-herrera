const apiKey = '6pA0Hn9NaoHYhKstgoBxBjCM9MvAKG9L';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// .json() metodo regresa una promesa
peticion
    .then(resp => resp.json() )
    .then( ({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })

.catch(console.warn);