angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
    //
    $scope.TitleClick = function(){
      //
      $scope.smallWindow = !$scope.smallWindow;
    };
    //
    $scope.sorts = [
      {title: '首页'},
      {title: '首页'},
      {title: '首页'},
      {title: '首页'}
    ];
  })

.controller('MessagesCtrl', function($scope, Chats) {
    //
    $scope.modules1 = [
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'}
    ];
    //
    $scope.features = [{
      icon: 'img/ionic.png',
      title: 'Linhehe'
    },{
      icon: 'img/ionic.png',
      title: 'Linhehe'
    },{
      icon: 'img/ionic.png',
      title: 'Linhehe'
    },{
      icon: 'img/ionic.png',
      title: 'Linhehe'
    }];
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
    $scope.Photos = [
      {'src': 'http://lorempixel.com/500/500'},
      {'src': 'http://lorempixel.com/600/500'},
      {'src': 'http://lorempixel.com/500/600'},
      {'src': 'http://lorempixel.com/550/500'}
    ];
    //
    $scope.modules1 = [
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'}
    ];
    //
    $scope.modules2 = [
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'}
    ];
    //
    $scope.modules3 = [
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'}
    ];
})

.controller('MeCtrl', function($scope) {
    //
    $scope.modules1 = [
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'}
    ];
    //
    $scope.modules2 = [
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'}
    ];
    //
    $scope.modules3 = [
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'},
      {icon: 'img/ionic.png', title: 'Linhehe'}
    ];
});
