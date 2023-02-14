let area = document.getElementById('text')
let body = document.querySelector('body')
let checkboxes = document.querySelectorAll('input[type="checkbox"]')
let para = document.createElement('p')
body.insertAdjacentElement('beforeend', para)

area.addEventListener('blur', function() {
para.textContent = ''
wordCounter()
symbolCounter()
symbolNoSpacesCounter()
symbolPercentageCounter()
})

function wordCounter() {
if (checkboxes[0].checked === true) {
let withWordsSpaces = area.value.split(' ')
let counter = withWordsSpaces.reduce((total, number) => {
if (number) total.push(number)
return total}, [])
para.innerHTML += `Amount of words - ${counter.length}.   `
} 
}

function symbolCounter() {
if (checkboxes[1].checked === true)
para.textContent += `Amount of symbols - ${area.value.split('').length}.    `
}

function symbolNoSpacesCounter() {
if (checkboxes[2].checked == true){
let stringWithNoSpace = area.value.replace(/ /g, '')
para.textContent += `Amount of symbols ${stringWithNoSpace.split('').length}.   `
}
}

function symbolPercentageCounter() {
if (checkboxes[3].checked == true){
    let array = area.value.split('')
    let object = array.reduce(function (total, num) {
    if (total[num] == undefined) total[num] = 1
    else total[num]++
    return total
    }, {})
    let ghost = document.querySelectorAll('.ghost')//removing paragraphs of the last query
    for (let elem of ghost) elem.remove()
for (let key in object) {
        let lengthOfTextArea = area.value.split('').length
        let paragraph = document.createElement('p')
        paragraph.classList.add('ghost')
        if (key === ' ') paragraph.textContent = `character(s) 'space' - ${Math.round((object[key] / lengthOfTextArea * 100))}%`
        else paragraph.textContent = `character(s) ${key} - ${Math.round((object[key] / lengthOfTextArea * 100))}%`
        body.insertAdjacentElement('beforeend', paragraph)
    }
    }
}


/*

Дан textarea. Пусть в него вводится текст. 
Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.

Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.

Модифицируйте предыдущую задачу так,
чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.

Модифицируйте предыдущую задачу так, 
чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.

В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра. 
Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.

*/