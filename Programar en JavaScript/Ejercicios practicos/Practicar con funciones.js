function letterFinder(word, match) {
    for (let x = 0; x < word.length; x++) {

        if(word[x]==match){
            console.log ("Encontramos el", match, "es", x)
        }

        else{
            console.log("No se encontro contador")
        };
    }
}

letterFinder("test", "t")
