function Translate(word,lang) {
    this.apiKey = 'trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481';
    this.word = word;
    this.lang = lang;
    this.xhr = new XMLHttpRequest
}

// function Translate() {
//     this.apiKey = 'trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481';
//     this.xhr = new XMLHttpRequest
// }



Translate.prototype.translateWord = function(callback) {
    const request = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.lang}`


    this.xhr.open('GET', request, true)
    this.xhr.send()
    this.xhr.onload = function() {
        if (this.status === 200) {
            const json = JSON.parse(this.responseText)
            const text = json.text[0]
            callback(null,text)
        } 
        else {
            callback('Hata olustu',null)
        }
    }
}

Translate.prototype.changeParameters = function(newWord,newLang) {
    this.word = newWord;
    this.lang = newLang
}