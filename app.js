var app = angular.module("projects", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://brilliant-heat-8477.firebaseio.com/");

    // create a synchronized array
    $scope.messages = $firebaseArray(ref);

    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addMessage = function() {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };
});
