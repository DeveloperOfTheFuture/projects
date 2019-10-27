window.onload = function() {

    var btn = document.querySelector('button');

    btn.addEventListener('click', function(e) {
        e.preventDefault();

    var req = new XMLHttpRequest();

    var API_KEY = 'trnsl.1.1.20191024T170933Z.6eb66501f4b34ad6.7e2e026ed9f8d587147947f1aac0e6131d093951';

    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    
    var sourceWord = document.querySelector('.source-word').value,
        sourceLang = document.querySelector('.source-lang').value,
        responseLang = document.querySelector('.response-lang').value;
  
    if (sourceWord === '') {
      alert('Слово не введено');
      return;
    }

    url += '?key=' + API_KEY; 
    url += '&text=' + sourceWord; 
    url += '&lang=' + sourceLang + "-" + responseLang; 
    
    var translate = document.querySelector('.translate');

    req.addEventListener('load', function () {
      console.log(req.response); 
      var response = JSON.parse(req.response); 
  
      if (response.code !== 200) {
        translate.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
        return;
      }
  
      if (response.text.length === 0) {
        translate.innerHTML = 'К сожалению, перевод для данного слова не найден';
        return;
      }

      translate.innerHTML = response.text.join('<br>');
    });
  
    req.open('get', url);
    req.send();
    });
  };