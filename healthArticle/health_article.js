var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true); // créé la requete - true valide le coté asynchrone
xhr.responseType = 'json'; // indique que la reponse est en format json

xhr.onload = function() { //  définir ce qui doit se passer lorsque les données sont chargées avec succès
    var articles = xhr.response.articles; // pour récupérer le tableau d’articles de la réponse JSON.
    var articlesDiv = document.getElementById('articles'); //pour récupérer l’élément HTML avec l’ID 'articles' où le contenu récupéré sera affiché.

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Moyens d\'atteindre :';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Avantages :';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });

}
xhr.send();
    