(function(){
    console.log('ddd');
    'use strict';
    angular.module('ShoppingListCheckOff',[]).controller('ToBuyController',ToBuyController).controller('AlreadyBoughtController',AlreadyBoughtController).service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    this.final=function(num){
        ShoppingListCheckOffService.final(num);}
   // this.add=function(){ShoppingListCheckOffService.addit(this.name,this.quan)};
 
    this.tobuy=ShoppingListCheckOffService.getbuy();
    }
    function AlreadyBoughtController(ShoppingListCheckOffService){
        this.boughtl=ShoppingListCheckOffService.getbought();
    }
    function ShoppingListCheckOffService(){
        var service=this;
        service.tobuy=[{name:'cookies',quantity:'10'},{name:'biscuits',quantity:'20'},{name:'pencil',quantity:'30'},{name:'pens',quantity:'40'},{name:'books    ',quantity:'22'},{name:'beds',quantity:'22'} ];
        service.bought=[];
//        service.addit=function(name,quan){
//            var x={name:name,
//                   quantity:quan};
//            
//            service.tobuy.push(x);
//        }
         service.final=function(num){
            service.bought.push(service.tobuy[num]);
            service.tobuy.splice(num,1);
        }
        service.getbought=function(){
               
            return service.bought;
        };
          service.getbuy=function(){
            return service.tobuy;
        }
    }
})();