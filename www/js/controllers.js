angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('MessagesCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})

.controller('AddCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('FindCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
