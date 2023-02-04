const images = [
    "images/donkey_1.jpg",
    "images/donkey_2.jpg",
    "images/donkey_3.jpg",
    "images/donkey_4.jpg",
    "images/donkey_5.jpg",
    "images/donkey_6.jpg",
    "images/donkey_7.jpg",
    "images/donkey_8.jpg",
    "images/donkey_9.jpg",
    "images/donkey_10.jpg"
  ];
  
  const imageElement = document.getElementById("image");
  var randomIndex = Math.floor(Math.random() * images.length);
  
  function updateImage() {
    
    //imageElement.src = images[randomIndex];
    imageElement.innerHTML += '<img src="'+ images[randomIndex] +'" style="height:150px";/>';
  }
  
  updateImage();
  
  //window.onload = function() {
  //  setInterval(updateImage, 1000);
  // };
  