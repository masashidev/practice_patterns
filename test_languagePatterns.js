const data =
  "Здравствуйте! Чем могу помочь? Добрый день! Я хотел бы забронировать билеты на поезд до Санкт-Петербурга. Конечно, на какую дату вы планируете поездку? На следующую пятницу, 15-го числа. Хорошо, давайте посмотрим, что у нас есть. Вам нужен билет туда и обратно или только в одну сторону? Туда и обратно, пожалуйста. Я планирую вернуться в воскресенье. Отлично. На утренний или вечерний поезд? Предпочитаю утренний, если возможно. У нас есть поезд, отправляющийся в 7:30 утра. Подойдет? Да, это было бы идеально. А обратно есть что-нибудь вечером в воскресенье? Да, есть поезд в 18:45. Устраивает? Прекрасно. Давайте забронируем эти варианты. Какой тип места вы предпочитаете: купе или плацкарт? Купе, пожалуйста. Хорошо. На ваше имя бронировать? Да, на Иванова Сергея Петровича. Спасибо. Вам нужен верхний или нижний?  Нижний, если возможно. Да, есть свободные нижние места. Я забронировал для вас нижнее место в купе на оба направления. Отлично, спасибо большое! Сколько это будет стоить? Общая стоимость составляет 5600 рублей. Как вы будете оплачивать? Картой, пожалуйста. Хорошо, вставьте карту в терминал и введите пин-код. Готово. Платеж прошел успешно. Ваши билеты готовы. Вот, пожалуйста. Большое спасибо за помощь! Не за что. Приятной поездки! Спасибо, всего доброго! До свидания!";

function getBigrams(text) {
  return Array.from(text)
    .slice(0, -1)
    .map((char, i) => char + text[i + 1]);
}

const bigrams = getBigrams(data);
console.log(bigrams);


const formattedBigram = []
bigrams.forEach((bigram) => {
  if(bigram[0] === " " || bigram[1] === " ") {
    return;
  } else if (bigram[0] === "." || bigram[1] === ".") {
    return;
  } else {
    formattedBigram.push(bigram);
  }
});

console.log(formattedBigram);

function countDuplicates(array) {
  return array.reduce((acc, element) => {
    acc[element] = acc[element] ? acc[element] + 1 : 1;
    return acc;
  }, {});
}

const bigramFrequency = countDuplicates(formattedBigram);
console.log(bigramFrequency);

const sortedBigramFrequency = Object.entries(bigramFrequency)
  .sort((a, b) => b[1] - a[1]);

console.log(sortedBigramFrequency);

const topBigrams = sortedBigramFrequency.slice(0, 30);
console.log(topBigrams);

const onlyKeys = topBigrams.map((bigram) => bigram[0]);
console.log(onlyKeys);

const keysString = onlyKeys.join(", ");
console.log(keysString);

const sortByAlphabet = onlyKeys.sort();
console.log(sortByAlphabet);


const toString = sortByAlphabet.join(", ");
console.log(toString);
