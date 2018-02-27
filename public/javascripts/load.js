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



