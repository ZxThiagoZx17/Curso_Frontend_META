function letterFinder(word, match) {

    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;

    if(condition1 && condition2){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                return('Found the', match, 'at', i)
            } else {
                return('---No match found at', i)
            }
        }
    } else {
        return("Please pass correct arguments to the function.")
    }
}

a = letterFinder("JH", 1)
console.log(a)