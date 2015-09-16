angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$state) {
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
    //
    $scope.goDynamic = function(){
      //
      $state.go('dynamic');
    }
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

.controller('MeCtrl', function($scope,$state) {
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
    //
    $scope.gotoDetail = function(){
      //
      $state.go('me_detail');
    };
    //
    $scope.gotoWeiboAll = function(){
      $state.go('weibo_all');
    }
    //
    $scope.gotoAttentionAll = function(){
      $state.go('attention_all');
    }
})

.controller('DynamicCtrl', function($scope,$state){
    //
    $scope.goHome = function(){
      $state.go('tab.home');
    }
})

.controller('MeDetailCtrl', function($scope,$state){
    //
    $scope.backtoMe = function(){
      $state.go('tab.i');
    }
})

.controller('WeiboAllCtrl', function($scope,$state){
    //
    $scope.backtoMe = function(){
      $state.go('tab.i');
    }
  })

.controller('AttentionAllCtrl', function($scope,$state){
    //
    $scope.backtoMe = function(){
      $state.go('tab.i');
    }
    //
    $scope.persons = [
      {name: '缴收到货肺结核', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '的回复个三分', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '缴收到货肺结核', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '的回复个三分', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '缴收到货肺结核', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '的回复个三分', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '缴收到货肺结核', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '的回复个三分', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '缴收到货肺结核', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'},
      {name: '的回复个三分', infor: '水电费哈利我看大家发垃圾分...', photo: 'img/image1.jpg'}
    ]
});
