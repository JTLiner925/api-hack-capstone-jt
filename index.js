const key = 'AIzaSyC8F-Vb3TOUgzstqyKRFmNnz4qq65jNf1A';
const searchURL = 'https://www.youtube.com/';

const bibleKey = 'ccbf0a4b9f501f9c1e71052941583c219e9c85ce';
const API_URL = 'https://api.esv.org/v3/passage/text/';

// Authorization: Token ccbf0a4b9f501f9c1e71052941583c219e9c85ce

const STORE ={
  stories: [
    {
      title: 'Sinful Woman',
      scripture: 'Luke+7:36-50',
      questions: [ 
        'What grabbed your attention?',
        'What did you like in the passage?',
        'What bothered you in the passage?',
        'What does this say about God?',
        'What does this say about humankind?',
        'What does this say about the life God wants us to live?'
      ],
      resources: ['oZcEY6qPV84','oZcEY6qPV84','oZcEY6qPV84'] 
    },
    {
      title: 'Who can come to God',
      scripture: 'Luke+18:9-17',
      questions: [ 
        'What grabbed your attention?',
        'What did you like in the passage?',
        'What bothered you in the passage?',
        'What does this say about God?',
        'What does this say about humankind?',
        'What does this say about the life God wants us to live?'
      ],
      resources: ['oZcEY6qPV84','oZcEY6qPV84','oZcEY6qPV84'] 
    },
    {
      title: 'Forgiveness',
      scripture: 'Matthew 18:21-35',
      questions: [ 
        'What grabbed your attention?',
        'What did you like in the passage?',
        'What bothered you in the passage?',
        'What does this say about God?',
        'What does this say about humankind?',
        'What does this say about the life God wants us to live?'
      ],
      resources: ['oZcEY6qPV84','oZcEY6qPV84','oZcEY6qPV84'] 
    },
    {
      title: 'Merciful Father',
      scripture: 'Luke+15:11-32',
      questions: [ 
        'What grabbed your attention?',
        'What did you like in the passage?',
        'What bothered you in the passage?',
        'What does this say about God?',
        'What does this say about humankind?',
        'What does this say about the life God wants us to live?'
      ],
      resources: ['oZcEY6qPV84','oZcEY6qPV84','oZcEY6qPV84'] 
    },
    {
      title: 'Who is Jesus',
      scripture: 'Mark+2:1-12',
      questions: [ 
        'What grabbed your attention?',
        'What did you like in the passage?',
        'What bothered you in the passage?',
        'What does this say about God?',
        'What does this say about humankind?',
        'What does this say about the life God wants us to live?'
      ],
      resources: ['oZcEY6qPV84','oZcEY6qPV84','oZcEY6qPV84'] 
    },
    {
      title: 'Crucifixion',
      scripture: 'Luke+23:32-50',
      questions: [ 
        'What grabbed your attention?',
        'What did you like in the passage?',
        'What bothered you in the passage?',
        'What does this say about God?',
        'What does this say about humankind?',
        'What does this say about the life God wants us to live?'
      ],
      resources: ['oZcEY6qPV84','oZcEY6qPV84','oZcEY6qPV84'] 
    },
    {
      title: 'Born Again',
      scripture: 'John+3:1-21',
      questions: [ 
        'What grabbed your attention?',
        'What did you like in the passage?',
        'What bothered you in the passage?',
        'What does this say about God?',
        'What does this say about humankind?',
        'What does this say about the life God wants us to live?'
      ],
      resources: ['oZcEY6qPV84','oZcEY6qPV84','oZcEY6qPV84'] 
    }

  ],
  1:['YihKbG8-X3U','bETuP57T_90','e7iKmka651U','oZcEY6qPV84'],
  2:['OpfuKKH_SCE','N9w6284vC1w','huTo3G248S8','oZcEY6qPV84'],
  3:['7O3prdbRpAk','zPQKj2Zptr0','9f2FXxDVO6w','oZcEY6qPV84'],
  4:['2emelR7lGmw','36zYEgcS_Z8','kHeucaCZcKQ','oZcEY6qPV84'],
  5:['_H62gNjAYOs','LqBpifDpNKc','riO7nzyqnSw','oZcEY6qPV84'],
  6:['ASYyTebCods','GFLk6v7US3I','Fvb6o50A5j4','oZcEY6qPV84'],
  7:['leh-4fCc5MI','yOzf0VrDNGU','9f2FXxDVO6w','oZcEY6qPV84'],

};

 

function formatQueryParams(params){
  const queryItems = Object.keys(params)
    .map(key => `${key}=${params[key]}`);
  return queryItems.join('&');
}

function getVerses(passage){
  const params = {
    q: passage, 
  };
  const queryString = formatQueryParams(params);
  const url = API_URL + '?' + queryString;
  console.log(url);

  // const headers = {
  //   'Authorization': bibleKey, 
  // };
  const options = {
    headers: new Headers({
      "Authorization": bibleKey})
  };
  fetch(url, options)
    .then(response => { 
      if(response.ok){
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(resJson => displayVerses(resJson))
    .catch(err => { $('#js-verse-error-message')
      .text(`Something went wrong: ${err.message}`);
    });

}
function displayVerses(resJson){
  console.log(resJson);
  
  $('#bible-verses').empty();
  // for(let i = 0; i< resJson.length; i++){
  $('#bible-verses').append(
    `<li><h3>${resJson.canonical}</h3>
    <h4>Read passage 2X / Rebuild it.</h4>
      <p>${resJson.passages[0]}</p></li>`
      
  );
  
  // }
  $('#bottom-section').removeClass('hidden');

  $('#scripture').removeClass('hidden');
}

function displayResults(responseJson){
  console.log(responseJson);
  $('#results-list').empty();
  for(let i = 0; i< responseJson.length; i++){
    $('#results-list').append(
      `<li><h3>By ${responseJson[i].items[0].snippet.title}</h3>
      
      <iframe id="thumbnail"
    title="${responseJson[i].items[0].snippet.title}"
    width="320"
    height="180"
    src="https://www.youtube.com/embed/${responseJson[i].items[0].id}" frameborder="0" controls>
</iframe>
      </li>`
    );}
  $('#questions-section').removeClass('hidden');
  $('#results').removeClass('hidden');
  
}

function getVideo(lesson){
  // GET `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high&key=[YOUR_API_KEY]`

  // Authorization: Bearer [YOUR_ACCESS_TOKEN]
  // Accept: application/json
  Promise.all(STORE[lesson].map(id => {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${key}&part=snippet,contentDetails,statistics,status`)
      .then(response => { 
      
        return response.json();
      })
      .then(responseJson => responseJson)
      .catch(err => { $('#js-error-message')
        .text(`Something went wrong: ${err.message}`);
      });
  })).then(responseJson => {
    console.log(responseJson);
    return displayResults(responseJson);});
  
}

// function watchForm(){
//   let lessonSelect;
//   let youTubeId;
//   $('#lesson-select').change( event => {
//     event.preventDefault();
//     // const searchTerm = $('').val();
//     // youTubeVid = STORE.stories.resources;
//     youTubeId = $('#lesson-select option:selected').attr('ytid');
//     lessonSelect = $('#lesson-select option:selected').val();
//     getVerses(lessonSelect);
//     getVideo(youTubeId);
//   });
  
// }
function watchForm2() {
  let lessonSelect;
  let youTubeId;
  $("button").on("click", event => {
    event.preventDefault();
    youTubeId = $(event.target).attr("ytid");
    lessonSelect = $(event.target).val();
    getVerses(lessonSelect);
    getVideo(youTubeId);
  });
}

// $(watchForm);
$(watchForm2);