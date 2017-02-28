// Variables for the predefined sentences

// values for each sentence
var valuePlaceholder = '$valuePlaceholder'

// year
var yearPlaceholder = '$yearPlaceholder'

// price type: cheap or expensive (bool)
var priceType = '$priceType';

// oldest year to compare
var yearOldest = '$yearOldest';

// newer year to compare 
var yearNewest = '$yearNewest';

// how many years has passed?
var howManyYears = '$howManyYears'

// how much money do we have: more or less (bool)
var moreOrLess = '$moreOrLess';

// product classes in the IPC pasket
var productBasket = '$productBasket';

// Predefined sentences

  // Sentence 1
var sentence1 = 'Los productos son cada vez más $priceType ...';

  // Sentence 2
var sentence21 = 'En los últimos $howManyYears';

var sentence22 = ' años la renta por persona ha bajado $valuePlaceholder %';

var sentence2 = sentence21 + sentence22;

// Sentence 3
var sentence31 = 'Cada vez hay más trabajadores que cobran muy poco…';

var sentence32 = 'En $yearPlaceholder ';
var sentence33 = 'un $valuePlaceholder % de los trabajadores cobraban el salario mínimo o menos.';
var sentence34 = 'En $yearPlaceholder (último dato conocido)';
var sentence35 = ' ya son un $valuePlaceholder % de los trabajadores.';

var sentence3 = sentence32 + sentence33 + sentence34 + sentence35;

// Sentence 4

var sentence 41 = '… y menos trabajadores que cobran mucho.'

En 2008, un 1,42 % de los trabajadores cobraban más de 8 veces en salario mínimo. En 2014 (último dato conocido) son un 1,31 % de los trabajadores.


// In the string sentence, replace $variable with the real values

function replacer (sentence,placeholder) {
    this.sentence = sentence;
    this.placeholder = placeholder;

    var replaceVar = sentence.replace(sentence,placehonder);
    return replaceVar
};
