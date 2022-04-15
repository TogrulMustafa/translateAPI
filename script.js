
const form = document.querySelector('#translate-form')
const language = document.querySelector('#language')
const word = document.querySelector('#word')



eventListeners()

function eventListeners() {
    form.addEventListener('submit', translateWord)
    language.onchange = function() {
        ui.changeUI()
    }
}

const translate =new Translate(word.value, language.value)
// const translate =new Translate()
const ui = new UI()

function translateWord(e) {
    
    translate.changeParameters(word.value, language.value)
    // console.log(translate)
    translate.translateWord(function(err, response) {
        if (err === null) {
            ui.showTranslate(response)
        } 
        else {
            console.log(err)
        }
    })


    e.preventDefault()
}

