// Javascript event handlers
$("#tabImage").on("click", function () {
  tabImage();
});

$("#tabFace").on("click", function () {
  tabFace();
});

$("#tabText").on("click", function () {
  tabText();
});

$('.refresh-btn').on('click', function (){
  location.reload();
});

$('.refresh-btn-tab').on('click', function (){
  location.hash.reload();
});

$('.home-btn').on('click', function (){
  location.replace("/");
});

$('#myModal').on('hidden.bs.modal', function () {
  location.reload();
});


// Functions and Variables
var modal = document.getElementById('myModal');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function tabImage(){
  const url = '/data';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    const panelBodyImage = document.getElementById('imageGallery');
    hostnameImage.innerText = data.server.hostname;
    let imageGallery = data.results.image;
    return imageGallery.map(function(imageGallery) {
      //let div = createNode('div'),
      var tagsHtml = "<div> . . . . . </div><div><strong>Tags:</strong></div>";
      imageGallery.tags.forEach(tag => {
        tagsHtml = tagsHtml + '<div><strong>'+ tag.name + ' - </strong>' + (tag.confidence*100).toFixed(2) + '% </div>';
      });
      let thumb = createNode('img');
        thumb.id = "thumbId";
        thumb.src = imageGallery.thumbUri;
        thumb.title = imageGallery.description.value;
        thumb.onclick = function(){
          $('#myModal').modal('show');
          $('#modal-body').html('<img src="' + imageGallery.imageUri + '" id="imagepreview" style="width: 75%" ><div><strong>Description: </strong>' + imageGallery.description.value +'</div><div><strong>Confidence: </strong>' + imageGallery.description.confidence + '%</div><div><strong>Colours: </strong>' + imageGallery.colours + '</div>' + tagsHtml);
      }
      append(panelBodyImage, thumb);
    }) 
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  }); 
};

function tabFace(){
  const url = '/data';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    const panelBodyFace = document.getElementById('faceGallery');
    hostnameFace.innerText =  data.server.hostname;
    let faceGallery = data.results.face;
    return faceGallery.map(function(faceGallery) {
      //let div = createNode('div'),
      var tagsHtml = "<div> . . . . . </div><div><strong>Tags:</strong></div>";
      faceGallery.tags.forEach(tag => {
        tagsHtml = tagsHtml + '<div><strong>'+ tag.name + ' - </strong>' + (tag.confidence*100).toFixed(2) + '% </div>';
      });
      let thumb = createNode('img');
        thumb.id = "thumbId";
        thumb.src = faceGallery.thumbUri;
        thumb.title = faceGallery.description.value;
        thumb.onclick = function(){
          $('#myModal').modal('show');
          $('#modal-body').html('<img src="' + faceGallery.imageUri + '" id="imagepreview" style="width: 75%" ><div><strong>Description: </strong>' + faceGallery.description.value +'</div><div><strong>Confidence: </strong>' + faceGallery.description.confidence + '%</div><div><strong>Colours: </strong>' + faceGallery.colours + '</div>' + tagsHtml);
      }
      append(panelBodyFace, thumb);
    })
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
};

function tabText(){
  const url = '/data';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    const panelBodyText = document.getElementById('textGallery');
    hostnameText.innerText =  data.server.hostname;
    let textGallery = data.results.text;
    return textGallery.map(function(textGallery) {
      //let div = createNode('div'),
      var tagsHtml = "<div> . . . . . </div><div><strong>Tags:</strong></div>";
      textGallery.tags.forEach(tag => {
        tagsHtml = tagsHtml + '<div><strong>'+ tag.name + ' - </strong>' + (tag.confidence*100).toFixed(2) + '% </div>';
      });
      let thumb = createNode('img');
        thumb.id = "thumbId";
        thumb.src = textGallery.thumbUri;
        thumb.title = textGallery.description.value;
        thumb.onclick = function(){
          $('#myModal').modal('show');
          $('#modal-body').html('<img src="' + textGallery.imageUri + '" id="imagepreview" style="width: 75%" ><div><strong>Description: </strong>' + textGallery.description.value +'</div><div><strong>Confidence: </strong>' + textGallery.description.confidence + '%</div><div><strong>Colours: </strong>' + textGallery.colours + '</div>' + tagsHtml);
      }
      append(panelBodyText, thumb);
    })
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
};

function hostInformation(){
  // Load modal data
  const url = '/data';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    hostinfo.innerText =  data.server.hostname;
    hostname.innerText =  "Hostname: " + data.server.hostname;
    osname.innerText =  "OS Name: " + data.server.osname;
    osplatform.innerText =  "OS Platform: " + data.server.osplatform;
    osrelease.innerText =  "OS Release: " + data.server.osrelease;
    osuptime.innerText =  "Uptime: " + data.server.osuptime;
    cpuarch.innerText =  "CPU Architecture: " + data.server.cpuarch;
    cpuload1.innerText =  "CPU Load: " + data.server.cpuload[0];
    memtotal.innerText =  "Memory Total: " + data.server.memtotal;
    memfree.innerText =  "Memory Free: " + data.server.memfree;
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
};









  




