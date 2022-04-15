function UI() {
    this.outputImage = document.querySelector('#outputImage');
    this.outputLanguage = document.querySelector('#outputLanguage');
    this.outputWord = document.querySelector('#outputWord');
    this.language = document.querySelector('#language')
}

UI.prototype.changeUI = function() {
    this.outputImage.src = `images/${this.language.value}.png`;
    this.outputLanguage.innerHTML = this.language.options[this.language.selectedIndex].textContent
}

UI.prototype.showTranslate = function(response) {
    this.outputWord.innerHTML = response
}