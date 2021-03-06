/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import template from './bank-details.html!text';
import {RouteConfig} from '../../../../../ng-decorators'; // jshint unused: false

//start-non-standard
@RouteConfig('app.employees.edit.bank-details', {
    url: '/bank-details',
    views: {
        'modal@': {
            template: template
        }
    }
})
//end-non-standard
class EmployeeEditBankDetails {}
