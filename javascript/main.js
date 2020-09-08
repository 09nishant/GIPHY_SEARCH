document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
 
  
  search(input);

});
document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;
  
  if (e.which === 13){
      
      search(input);


  }
 
  
  

});


// AJAX Request
function search(query){
  var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+query;
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();
  GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
    
    pushToDOM(data);
    
    
    });
}



function pushToDOM(input){
  var response = JSON.parse(input);
  console.log(response);
  var imageURL = response.data;
  imageURL.forEach(function(image) {
    var src = image.images.fixed_height.url;
    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
;
    
  });
  
   
}
