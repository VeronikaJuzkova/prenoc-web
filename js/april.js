/* I said there is nothing to see here! */

let april_chance = 0.1;

let d = new Date();
if((d.getMonth() != 3) || (d.getDate() != 1) || Math.random() > april_chance)
{
    console.log("Here comes nothing");
}
else
{
    executeKarelApril();
}

function executeDDLCApril() {
    console.log("It's party time!!");

    document.body.innerHTML += '<link rel="stylesheet" type="text/css" href="css/april.css">';

    sayori(0.05);
}

function sayori(chance) {
    console.log("JUST MONIKA");
    if(Math.random() <= chance) {
        console.log("Sayori STRIKES");
        document.body.innerHTML = '<img class="disappearing" src="img/screenshot0060.png" />' + document.body.innerHTML;

        if(chance < 1.5)
            window.setTimeout(() => sayori(chance + 0.2), 2000);
    }
}

function executeKarelApril() {
    let orgs = document.getElementsByClassName("org-name");
    for (let i = 0; i < orgs.length; i++) {
        const org = orgs[i];
        org.innerText = "Karel Sedláček";
    }

    let title = document.getElementsByClassName("logo")[0];
    title.innerHTML = "<img src='img/prenoc-chemsketch.png' style='height: 12em; max-height: 100vh'/>";
    window.setTimeout(() => replaceRandomWordWithKarel(), 2000);
}

const regex_word = /[a-zA-ZěščřžýáíéůúĚŠČŘŽÝÁÍÉŮÚ]{2,}/g
function replaceRandomWordWithKarel() {
    let all_paragraphs = document.getElementsByTagName("p");
    let random_paragraph = all_paragraphs[Math.floor((Math.random() * (all_paragraphs.length - 1)) + 0)];
    let words = random_paragraph.innerText.match(regex_word);
    if(words != null){
        let words_without_karel = [];
        for (let i = 0; i < words.length; i++){
            if(words[i] != "Karel")
            {
                words_without_karel.push(words[i]);
            }
        }
        let random_word = words_without_karel[Math.floor((Math.random() * (words_without_karel.length - 1)) + 0)];
        random_paragraph.innerText = random_paragraph.innerText.replace(random_word, "Karel");
    }

    window.setTimeout(() => replaceRandomWordWithKarel(), 500);
}
