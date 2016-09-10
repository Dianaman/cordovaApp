angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $cordovaVibration, $cordovaFlashlight, $cordovaNativeAudio, $timeout) {
  $scope.Vibrar = function(){
    try{
      $cordovaVibration.vibrate(10000);
    }
    catch(err){
      console.log(err.message);
    }
  }

  $scope.NoVibrar = function(){
    try{
      $cordovaVibration.vibrate(0);
    }
    catch(err){
      console.log(err.message);
    }
  }

  $scope.Iluminar = function(){
    try{

      $cordovaFlashlight.available().then(function(){
        $cordovaFlashlight.switchOn()
    .then(
      function (success) { alert("Ilumino: " + success); },
      function (error) { alert("Error al iluminar: " + error); });

      }, function(mensaje){
        alert("No disponible" + mensaje);
      })
    }
    catch(err){
      alert(err.message);
    }
  }

  $scope.NoIluminar = function(){
    try{
      $cordovaFlashlight.available().then(function(){
        $cordovaFlashlight.switchOff()
    .then(
      function (success) {"Se apagó: " + alert(success); },
      function (error) {"Error al apagar: " + alert(error); });

      }, function(mensaje){
        alert("No disponible" + mensaje);
      })
    }
    catch(err){
      alert(err.message);
    }
  }
  
  try{
    $cordovaNativeAudio
      .preloadComplex('music', 'audio/Nightwish-10thManDown.mp3', 1, 1)
      .then(function (msg) {  
        alert('Funciono: ' + msg);
      }, function (error) {
      alert('No funciono: ' + error);
    });

    $scope.playMarchaPeronista = function(){
      $cordovaNativeAudio.loop('music');
    }

    $scope.stopMarchaPeronista = function(){
      $cordovaNativeAudio.stop('music');
    }
    //Faltan los reproductores de sonido

  }
  catch(err){ 
    alert("Entro en el catch: " +err.Message);
  }


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
