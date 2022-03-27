const btnGenerate = document.querySelector('.btnRandomQuote');
let quotesP = document.querySelector('.quoteP');
let authorP = document.querySelector('.author');

btnGenerate.onclick = () => {
    btnGenerate1();
}

function btnGenerate1() {
    let quotes = {
        "-Наполеон Хилл" :'"Что разум человека может постигнуть и во что он может поверить, того он способен достичь."',
        '-Альберт Эйнштейн' : '"Стремитесь не к успеху, а к ценностям, которые он дает"',
        '-Флоренс Найтингейл' : '"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.'
    }


    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];
    
    let quote = quotes[author];
    
    quotesP.innerHTML = quote;
    authorP.innerHTML = author;
}