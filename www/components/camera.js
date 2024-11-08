$(document).on("click", "#camera", function() {
  navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
  });

  function onSuccess(imageURI) {
    window.resolveLocalFileSystemURL(imageURI, function(fileEntry) {   // Usa resolveLocalFileSystemURL para resolver a URL local e torná-la acessível
      var image = document.getElementById('imagem');
      image.src = fileEntry.toURL(); // Converte a URL para um formato acessível
      image.style.display = 'block';
    }, function(error) {
      console.error("Erro ao resolver o arquivo: " + error.code);
      alert("Erro ao carregar a imagem.");
    });
  }

  function onFail(message) {
    alert('Failed because: ' + message);
  }
});



//Explicação do Código
//window.resolveLocalFileSystemURL(imageURI, callbackSucesso, callbackErro): Essa função converte o caminho de arquivo retornado pela câmera em uma URL acessível.
//fileEntry.toURL(): Gera uma URL acessível para a imagem.