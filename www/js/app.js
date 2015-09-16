// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
      //cache: false,
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })

      .state('dynamic', {
        url: '/dynamic',
        templateUrl: 'templates/friends-attention-dynamic.html',
        controller: 'DynamicCtrl'
      })

    .state('tab.messages', {
        url: '/messages',
        views: {
          'tab-messages': {
            templateUrl: 'templates/tab-messages.html',
            controller: 'MessagesCtrl'
          }
        }
      })
      //.state('tab.chat-detail', {
      //  url: '/chats/:chatId',
      //  views: {
      //    'tab-chats': {
      //      templateUrl: 'templates/chat-detail.html',
      //      controller: 'ChatDetailCtrl'
      //    }
      //  }
      //})

    .state('tab.add', {
      url: '/add',
      views: {
        'tab-add': {
          templateUrl: 'templates/tab-add.html',
          controller: 'AddCtrl'
        }
      }
    })

    .state('tab.find', {
      url: '/find',
      views: {
        'tab-find': {
          templateUrl: 'templates/tab-find.html',
          controller: 'FindCtrl'
        }
      }
    })

    .state('tab.i', {
      url: '/i',
      views: {
        'tab-i': {
          templateUrl: 'templates/tab-me.html',
          controller: 'MeCtrl'
        }
      }
    })

    .state('me_detail', {
      url: '/me_detail',
      templateUrl: 'templates/me-detail.html',
      controller: 'MeDetailCtrl'
    })

    .state('weibo_all', {
      url: '/weibo_all',
      templateUrl: 'templates/weibo_all.html',
      controller: 'WeiboAllCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});
