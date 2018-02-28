$('.health200-btn').on('click', function (){
  fetch('/200')
  .then((resp) => resp.json())
  .then(function(data) {
    location.reload();
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  }); 
});

$('.health500-btn').on('click', function (){
  fetch('/500')
  .then((resp) => resp.json())
  .then(function(data) {
    location.reload();
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  }); 
});

$('.highcpu-btn').on('click', function (){
  fetch('/kill')
  .then((resp) => resp.json())
  .then(function(data) {
    location.reload();
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  }); 
});



