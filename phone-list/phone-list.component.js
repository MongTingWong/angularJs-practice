'use strict'

angular.
module('phoneList').
component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', function PhoneListController(Phone) {
        // var self = this;
        // self.orderProp = 'age';

        // $http.get('phones/phones.json').then(function(response) {
        //     self.phones = response.data;
        // });
        this.phones = Phone.query();
        this.orderProp = 'age';
    }]
});