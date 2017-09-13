(function(){
    'use strict';
    var app = angular.module('app',[]);
    app.controller('myCtrl',function(){
        this.count=0;
       this.image_data={"url":"http://images.fonearena.com/blog/wp-content/uploads/2013/11/Lenovo-p780-camera-sample-10.jpg","img_name":"sample Text"}
    });
})();