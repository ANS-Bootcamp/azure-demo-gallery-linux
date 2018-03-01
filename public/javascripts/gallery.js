var modal = document.getElementById('myModal');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const panelBody = document.getElementById('gallery');

const url = '/data';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  hostname.innerText =  data.server.hostname;
  //append(heading2, data.server.name);
  let gallery = data.results;
  return gallery.map(function(gallery) {
    //let div = createNode('div'),
    var tagsHtml = "<div> . . . . . </div><div><strong>Tags:</strong></div>";
    gallery.tags.forEach(tag => {
      tagsHtml = tagsHtml + '<div><strong>'+ tag.name + ' - </strong>' + (tag.confidence*100).toFixed(2) + '% </div>';
    });
    let thumb = createNode('img');
      thumb.id = "thumbId";
      thumb.src = gallery.thumbUri;
      thumb.title = gallery.description.value;
      thumb.onclick = function(){
        $('#myModal').modal('show');
        $('#modal-body').html('<img src="' + gallery.imageUri + '" id="imagepreview" style="width: 75%" ><div><strong>Description: </strong>' + gallery.description.value +'</div><div><strong>Confidence: </strong>' + gallery.description.confidence + '%</div><div><strong>Colours: </strong>' + gallery.colours + '</div>' + tagsHtml);

    }
    append(panelBody, thumb);
  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   





