'use strict';
angular.module('twAppApp')
  .factory('Currencies', function (/*$http, API_URL*/) {
  	return {
  		getAll : function(){
        // return $http.get(API_URL + 'currency/pairs');
        // mockec up data from API
        return {
            'total': 25,
            'currencies': [
                {
                    'code': 'EUR',
                    'symbol': '€',
                    'name': 'Euro',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 1200000,
                    'maxTargetAmount': 1200000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'GBP',
                    'symbol': '£',
                    'name': 'Pound Sterling',
                    'defaultRecipientType': 'SORT_CODE',
                    'recipientTypes': [
                        'IBAN',
                        'SORT_CODE',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 18,
                    'maxSourceAmount': 1000000,
                    'maxTargetAmount': 1000000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'USD',
                    'symbol': '$',
                    'name': 'United States dollar',
                    'defaultRecipientType': 'ABA',
                    'recipientTypes': [
                        'ABA',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 1000000,
                    'maxTargetAmount': 1600000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 17
                },
                {
                    'code': 'PLN',
                    'symbol': 'zł',
                    'name': 'Polish Zloty',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 5000000,
                    'maxTargetAmount': 5000000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'CHF',
                    'symbol': 'CHF',
                    'name': 'Swiss franc',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': true,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 50,
                    'maxSourceAmount': 60000,
                    'maxTargetAmount': 35000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'NOK',
                    'symbol': 'kr',
                    'name': 'Norwegian krone',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': true,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 9000000,
                    'maxTargetAmount': 9000000,
                    'minSourceAmount': 108,
                    'minTargetAmount': 108
                },
                {
                    'code': 'SEK',
                    'symbol': 'kr',
                    'name': 'Swedish krona',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': true,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 15,
                    'maxSourceAmount': 9000000,
                    'maxTargetAmount': 220000,
                    'minSourceAmount': 118,
                    'minTargetAmount': 1
                },
                {
                    'code': 'DKK',
                    'symbol': 'kr',
                    'name': 'Danish krone',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': true,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 9000000,
                    'maxTargetAmount': 9000000,
                    'minSourceAmount': 95,
                    'minTargetAmount': 95
                },
                {
                    'code': 'AUD',
                    'symbol': 'A$',
                    'name': 'Australian dollar',
                    'defaultRecipientType': 'AUSTRALIAN',
                    'recipientTypes': [
                        'AUSTRALIAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 50,
                    'maxSourceAmount': 1800000,
                    'maxTargetAmount': 40000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'CAD',
                    'symbol': 'C$',
                    'name': 'Canadian dollar',
                    'defaultRecipientType': 'CANADIAN',
                    'recipientTypes': [
                        'CANADIAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 50,
                    'maxSourceAmount': 1500000,
                    'maxTargetAmount': 70000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'HUF',
                    'symbol': 'Ft',
                    'name': 'Hungarian Forint',
                    'defaultRecipientType': 'HUNGARIAN',
                    'recipientTypes': [
                        'IBAN',
                        'HUNGARIAN',
                        'EMAIL'
                    ],
                    'hasDecimals': false,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 300000000,
                    'maxTargetAmount': 300000000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'GEL',
                    'symbol': 'GEL',
                    'name': 'Georgian lari',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 2600000,
                    'maxTargetAmount': 2600000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'HKD',
                    'symbol': '$',
                    'name': 'Hong Kong Dollar',
                    'defaultRecipientType': 'HONGKONG',
                    'recipientTypes': [
                        'HONGKONG',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 50,
                    'maxSourceAmount': 240000,
                    'maxTargetAmount': 240000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'INR',
                    'symbol': '₹',
                    'name': 'Indian Rupee',
                    'defaultRecipientType': 'INDIAN',
                    'recipientTypes': [
                        'INDIAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 16,
                    'maxSourceAmount': 100000000,
                    'maxTargetAmount': 100000000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'MYR',
                    'symbol': 'RM',
                    'name': 'Malaysian Ringgit',
                    'defaultRecipientType': 'MALAYSIAN',
                    'recipientTypes': [
                        'MALAYSIAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 200000,
                    'maxTargetAmount': 200000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'MXN',
                    'symbol': '$',
                    'name': 'Mexican Peso',
                    'defaultRecipientType': 'MEXICAN',
                    'recipientTypes': [
                        'MEXICAN',
                        'EMAIL'
                    ],
                    'hasDecimals': false,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 50,
                    'maxSourceAmount': 800000,
                    'maxTargetAmount': 800000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'RON',
                    'symbol': 'L',
                    'name': 'New Romanian Leu',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 30,
                    'maxSourceAmount': 5300000,
                    'maxTargetAmount': 5300000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'TRY',
                    'symbol': 'TL',
                    'name': 'Turkish Lira',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 3100000,
                    'maxTargetAmount': 3100000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'NZD',
                    'symbol': '$',
                    'name': 'New Zealand Dollar',
                    'defaultRecipientType': 'NEWZEALAND',
                    'recipientTypes': [
                        'NEWZEALAND',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 50,
                    'maxSourceAmount': 40000,
                    'maxTargetAmount': 40000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'PHP',
                    'symbol': '₱',
                    'name': 'Philippine Peso',
                    'defaultRecipientType': 'PHILIPPINES',
                    'recipientTypes': [
                        'PHILIPPINES',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 50000,
                    'maxTargetAmount': 7500000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'SGD',
                    'symbol': '$',
                    'name': 'Singapore Dollar',
                    'defaultRecipientType': 'SINGAPORE',
                    'recipientTypes': [
                        'SINGAPORE',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 40000,
                    'maxTargetAmount': 40000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'ZAR',
                    'symbol': 'R',
                    'name': 'South African Rand',
                    'defaultRecipientType': 'SOUTHAFRICA',
                    'recipientTypes': [
                        'SOUTHAFRICA',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 150000,
                    'maxTargetAmount': 150000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'THB',
                    'symbol': '฿',
                    'name': 'Thai Baht',
                    'defaultRecipientType': 'THAILAND',
                    'recipientTypes': [
                        'THAILAND',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': true,
                    'paymentReferenceAllowed': false,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 2000000,
                    'maxTargetAmount': 2000000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'CZK',
                    'symbol': 'Kč',
                    'name': 'Czech Koruna',
                    'defaultRecipientType': 'CZECH',
                    'recipientTypes': [
                        'IBAN',
                        'CZECH',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 25000000,
                    'maxTargetAmount': 25000000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                },
                {
                    'code': 'BGN',
                    'symbol': 'лв',
                    'name': 'Bulgarian Lev',
                    'defaultRecipientType': 'IBAN',
                    'recipientTypes': [
                        'IBAN',
                        'EMAIL'
                    ],
                    'hasDecimals': true,
                    'recipientBicRequired': false,
                    'recipientEmailRequired': false,
                    'paymentReferenceAllowed': true,
                    'paymentReferenceMaxLength': 35,
                    'maxSourceAmount': 2000000,
                    'maxTargetAmount': 2000000,
                    'minSourceAmount': 1,
                    'minTargetAmount': 1
                }
            ]
        };
  		},
  		getRate : function(/*from, to*/){
        return {
            'bankRate': 1.2110643849999998,
            'bankTransferFee': 10,
            'bankRateMarkup': 28.900197572897856,
            'bankTotalFee': 38.90019757289785,
            'bankPayIn': 835.7199306542237,
            'bankPayOut': 1000,
            'transferwiseRate': 1.254989,
            'transferwiseTransferFee': 3.98,
            'transferwisePayIn': 825.44,
            'transferwisePayOut': 1000,
            'transferwiseRefund': 24.640266918674133,
            'estimatedDelivery': '2015-01-01 15:30:26',
            'formattedEstimatedDelivery': 'January 1, 4 PM (GMT)',
            'isFixedRate': false
        };
  		}
  	};
});