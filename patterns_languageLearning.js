display.innerHTML = text

text = getNextText(currentText)

const getNextText = (currentText, learningDirection) => {
  const semanticParameters = getSemanticParameters(currentText)
  const nextText = getNextTextFromSemanticParameters(semanticParameters, learningDirection)
  return nextText
}

const translateTextIntoArray = (text) => {
  return text.split(' ')
}

const nextTestArray = translateTextIntoArray(nextText)

nextTestArray.forEach((word, index) => {
  const span = document.createElement('span')
  span.innerHTML = word
  span.id = index
  display.appendChild(span)
})

function hideFirstWord() {
  display.children[0].style.display = 'none'
}

const collectionOfTexts = []

function countFrequencyOfFirstWords(collectionOfTexts){
  const firstWords = collectionOfTexts.map(text => text.split(' ')[0])
  const frequency = {}
  firstWords.forEach(word => {
    if(frequency[word]) {
      frequency[word]++
    } else {
      frequency[word] = 1
    }
  })
  return frequency
}

function showFrequencyAsTable(frequency){
  const table = document.createElement('table')
  for (const word in frequency) {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.innerHTML = word
    const td2 = document.createElement('td')
    td2.innerHTML = frequency[word]
    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
  }
  display.appendChild(table)
}


