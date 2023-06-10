function fetchDefinitions(word) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch definitions');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error.message);
        });
    });
  }
  
  function displayDefinitions(definitions) {
    let definitionsElement = document.getElementById('definitions');
    definitionsElement.innerHTML = '';
  
    if (definitions.length === 0) {
        let alert = document.createElement('div');
      alert.classList.add('alert', 'alert-warning');
      alert.textContent = 'No definitions found.';
      definitionsElement.appendChild(alert);
    } else {
      definitions.forEach(definition => {
        let card = document.createElement('div');
        card.classList.add('card', 'mb-3');
  
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        let partOfSpeech = document.createElement('h5');
        partOfSpeech.classList.add('card-title');
        partOfSpeech.textContent = definition.meanings[0].partOfSpeech;
        cardBody.appendChild(partOfSpeech);
  
        definition.meanings.forEach(meaning => {
            let definitionText = document.createElement('p');
          definitionText.textContent = meaning.definitions[0].definition;
          cardBody.appendChild(definitionText);
        });
  
        card.appendChild(cardBody);
        definitionsElement.appendChild(card);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    let searchBtn = document.getElementById('searchBtn');
  
    searchBtn.addEventListener('click', () => {
        let wordInput = document.getElementById('wordInput');
        let word = wordInput.value.trim();
  
      fetchDefinitions(word)
        .then(definitions => {
          displayDefinitions(definitions);
        })
        .catch(error => {
          console.log('Error fetching definitions:', error);
        });
    });
  });
  