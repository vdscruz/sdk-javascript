/**
 * APIv3 (Beta)
 *  # Introduction Just a quick peek!!! This is our new version of API. Remember, it is not stable yet!!! But we invite you play with it and give us your feedback ;) # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB. <security-definitions/>
 *
 * OpenAPI spec version: 3.0.0-beta
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.Country = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Country model module.
   * @module egoiSdk/Country
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>Country</code>.
   * Country schema
   * @alias module:egoiSdk/Country
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/Country} obj Optional instance to populate.
   * @return {module:egoiSdk/Country} The populated <code>Country</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('iso_code')) {
        obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Name of the country
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * ISO code of the country
   * @member {String} iso_code
   */
  exports.prototype['iso_code'] = undefined;
  /**
   * Currency of the country
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Country code to be used in phone numbers
   * @member {String} country_code
   */
  exports.prototype['country_code'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getCountry = function() {
    return this['country'];
  }

  /**
   * @param {Number} country
   */
  exports.prototype.setCountry = function(country) {
    this['country'] = country;
  }


  /**
   * Returns Name of the country
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets Name of the country
   * @param {String} name Name of the country
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * Returns ISO code of the country
   * @return {String}
   */
  exports.prototype.getIsoCode = function() {
    return this['iso_code'];
  }

  /**
   * Sets ISO code of the country
   * @param {String} isoCode ISO code of the country
   */
  exports.prototype.setIsoCode = function(isoCode) {
    this['iso_code'] = isoCode;
  }


  /**
   * Returns Currency of the country
   * @return {String}
   */
  exports.prototype.getCurrency = function() {
    return this['currency'];
  }

  /**
   * Sets Currency of the country
   * @param {String} currency Currency of the country
   */
  exports.prototype.setCurrency = function(currency) {
    this['currency'] = currency;
  }


  /**
   * Returns Country code to be used in phone numbers
   * @return {String}
   */
  exports.prototype.getCountryCode = function() {
    return this['country_code'];
  }

  /**
   * Sets Country code to be used in phone numbers
   * @param {String} countryCode Country code to be used in phone numbers
   */
  exports.prototype.setCountryCode = function(countryCode) {
    this['country_code'] = countryCode;
  }



  return exports;
}));


