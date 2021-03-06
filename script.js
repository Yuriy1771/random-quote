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
        '-Флоренс Найтингейл' : '"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
        '-Майкл Джордан' : '"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."',
        '-Амелия Эрхарт' : '"Сложнее всего начать действовать, все остальное зависит только от упорства."',
        '-Федор Достоевский' : '"Надо любить жизнь больше, чем смысл жизни."',
        '-Джон Леннон' : '"Жизнь - это то, что с тобой происходит, пока ты строишь планы."',
        '-Альберт Эйнштейн' : '"Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно."',
        '-Марк Твен' : '"Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!"',
        '-Борис Стругацкий' : '"Начинать всегда стоит с того, что сеет сомнения."',
        '-Фазиль Искандер' : '"Настоящая ответственность бывает только личной."',
        '-Сократ' : '"Неосмысленная жизнь не стоит того, чтобы жить"',
        '-Платон' : '"Не стоит винить ребенка за то, что он боится темноты. Настоящая трагедия – это когда взрослый человек боится света."'
    }


    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];
    
    let quote = quotes[author];
    
    quotesP.innerHTML = quote;
    authorP.innerHTML = author;
}