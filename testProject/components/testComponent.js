(function(){
    'use strict';

    var app = angular.module('app');

    app.component('testComponent',{
        bindings:{
            model : '=',
            data : '<'
        },
        templateUrl : 'components/testComponent.html',
        controller:function(){
           // this.arr=[];
            this.$onInit = function(){
                console.log(this.model,'this.model');
                console.log(this.data,'this.model');
                this.arr=[];
                
            };
            this.increament = function(){
              this.data++;
              this.arr.push(this.data);
          };
          this.decreament = function(){
              this.data--;
              this.arr.pop(this.data);
          };                                         
          console.log(this.arr);
        }
    });
})();