function HasVowel(word) {
    if (word.length > 0) {
        var vowels = ["a", "e", "i", "o", "u"];
        var hasVowel = false;
        
        for (var char of word.toLowerCase()) {
            if (vowels.includes(char)) {
                hasVowel = true;
                break;
            }
        }
        
        if (!hasVowel) {
            NoVowels.push(word);
        }
    }
}

var NoVowels = [];
HasVowel("apple");
HasVowel("sky");
HasVowel("orange");
HasVowel("vaibhav");
HasVowel("Tck");
HasVowel("ypk");

console.log(NoVowels); 
