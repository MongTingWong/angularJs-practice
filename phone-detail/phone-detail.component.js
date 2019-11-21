'use strict'

angular.
module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$routeParams', 'Phone',
            function PhoneDetailController($routeParams, Phone) {
                var self = this;

                // $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
                //     self.phone = response.data;
                //     self.setImage(self.phone.images[0]);
                // });
                //this.phoneId = $routeParams.phoneId;
                self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(phone) {
                    self.setImage(phone.images[0]);
                });

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };
            }
        ]
    });