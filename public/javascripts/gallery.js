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

$('.nav-tabs a').on('shown.bs.tab', function(event){
  tabRefresh(String(event.target).split("#")[1]);
});

$('.refresh-btn').on('click', function (){
  location.reload();
});

$('.refresh-btn-tab').on('click', function (){
  location.reload();
  tabFace();
});

$('.home-btn').on('click', function (){
  location.replace("/");
});

$('#myModal').on('hidden.bs.modal', function () {
  location.reload();
});

$(document).ready(function(){
	$('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', $(e.target).attr('href'));
	});
	var activeTab = localStorage.getItem('activeTab');
	if(activeTab){
		$('#myTab a[href="' + activeTab + '"]').tab('show');
	}
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
    panelBodyImage.innerHTML = "";
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
          document.getElementById("modal-title").innerHTML = "Image Gallery";
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
    panelBodyFace.innerHTML = "";
    hostnameFace.innerText =  data.server.hostname;
    let faceGallery = data.results.face;
    return faceGallery.map(function(faceGallery) {
      let thumb = createNode('img');
        thumb.id = "thumbId";
        thumb.src = faceGallery.thumbUri;
        thumb.title = "Age: " + faceGallery.faceAttributes.age + "\r\nGender: " + faceGallery.faceAttributes.gender;
        thumb.onclick = function(){
          var glasses;
          if(faceGallery.faceAttributes.glasses){
            glasses = faceGallery.faceAttributes.glasses;
          }else{
            glasses = "not wearing glasses";
          };
          $('#myModal').modal('show');
          document.getElementById("modal-title").innerHTML = "Face Gallery";
          $('#modal-body').html('<img src="' + faceGallery.imageUri + '" id="imagepreview" style="width: 75%" ><div><strong>Gender: </strong>' + faceGallery.faceAttributes.gender +'</div><div><strong>Age: </strong>' + faceGallery.faceAttributes.age + ' years</div><div><strong>Smile: </strong>' + (faceGallery.faceAttributes.smile * 100).toString() + '%</div><div><strong>Glasses: </strong>' + glasses + '</div>');
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
    panelBodyText.innerHTML = "";
    hostnameText.innerText =  data.server.hostname;
    let textGallery = data.results.text;
    return textGallery.map(function(textGallery) {
      let thumb = createNode('img');
        thumb.id = "thumbId";
        thumb.src = textGallery.thumbUri;
        thumb.title = textGallery.handwriting;
        thumb.onclick = function(){
          $('#myModal').modal('show');
          document.getElementById("modal-title").innerHTML = "Text Gallery";
          $('#modal-body').html('<img src="' + textGallery.imageUri + '" id="imagepreview" style="width: 75%" ><div><strong>Handwriting: </strong>' + textGallery.handwriting +'</div>');
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

function tabRefresh(api){
  if(api == "Face"){
    tabFace();
  }else if(api == "Text"){
    tabText();
  }else{
    tabImage();
  };
};









  




