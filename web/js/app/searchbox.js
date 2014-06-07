/**
 * This file is subject to the terms and conditions defined in the
 * 'LICENSE.txt' file, which is part of this source code package.
 */

'use strict';

/*---------------------------------------------------------------------------*/
/* Application                                                               */


/* global angular */
(function () {
    angular.module('solr-ajax',
            [
                'ngRoute','SearchHints','Solr','TextFilters','Utils'
            ])
      /*  .constant('EHELVETICA_CONFIG', {
            defaultLandingUrl: '/',
            translationFilesPath: 'js/commons/translation'
        })*/
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/:query', { event: "/query" }).
                otherwise({ event: "/" });
        }])
}());