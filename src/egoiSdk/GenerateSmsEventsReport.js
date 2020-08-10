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
    define(['ApiClient', 'egoiSdk/AdvancedReportCampaignsObject', 'egoiSdk/AdvancedReportRange', 'egoiSdk/AdvancedReportSmsEventsColumns', 'egoiSdk/AdvancedReportSmsEventsOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdvancedReportCampaignsObject'), require('./AdvancedReportRange'), require('./AdvancedReportSmsEventsColumns'), require('./AdvancedReportSmsEventsOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.GenerateSmsEventsReport = factory(root.egoiSdk.ApiClient, root.egoiSdk.AdvancedReportCampaignsObject, root.egoiSdk.AdvancedReportRange, root.egoiSdk.AdvancedReportSmsEventsColumns, root.egoiSdk.AdvancedReportSmsEventsOptions);
  }
}(this, function(ApiClient, AdvancedReportCampaignsObject, AdvancedReportRange, AdvancedReportSmsEventsColumns, AdvancedReportSmsEventsOptions) {
  'use strict';



  /**
   * The GenerateSmsEventsReport model module.
   * @module egoiSdk/GenerateSmsEventsReport
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>GenerateSmsEventsReport</code>.
   * Generate SMS events report schema
   * @alias module:egoiSdk/GenerateSmsEventsReport
   * @class
   * @param title {String} Advanced report title
   * @param range {module:egoiSdk/AdvancedReportRange} 
   * @param campaigns {Array.<module:egoiSdk/AdvancedReportCampaignsObject>} Campaigns of the report
   * @param columns {module:egoiSdk/AdvancedReportSmsEventsColumns} 
   * @param options {module:egoiSdk/AdvancedReportSmsEventsOptions} 
   */
  var exports = function(title, range, campaigns, columns, options) {
    var _this = this;

    _this['title'] = title;
    _this['range'] = range;
    _this['campaigns'] = campaigns;
    _this['columns'] = columns;
    _this['options'] = options;
  };

  /**
   * Constructs a <code>GenerateSmsEventsReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/GenerateSmsEventsReport} obj Optional instance to populate.
   * @return {module:egoiSdk/GenerateSmsEventsReport} The populated <code>GenerateSmsEventsReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('range')) {
        obj['range'] = AdvancedReportRange.constructFromObject(data['range']);
      }
      if (data.hasOwnProperty('campaigns')) {
        obj['campaigns'] = ApiClient.convertToType(data['campaigns'], [AdvancedReportCampaignsObject]);
      }
      if (data.hasOwnProperty('columns')) {
        obj['columns'] = AdvancedReportSmsEventsColumns.constructFromObject(data['columns']);
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = AdvancedReportSmsEventsOptions.constructFromObject(data['options']);
      }
      if (data.hasOwnProperty('callback_url')) {
        obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Advanced report title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:egoiSdk/AdvancedReportRange} range
   */
  exports.prototype['range'] = undefined;
  /**
   * Campaigns of the report
   * @member {Array.<module:egoiSdk/AdvancedReportCampaignsObject>} campaigns
   */
  exports.prototype['campaigns'] = undefined;
  /**
   * @member {module:egoiSdk/AdvancedReportSmsEventsColumns} columns
   */
  exports.prototype['columns'] = undefined;
  /**
   * @member {module:egoiSdk/AdvancedReportSmsEventsOptions} options
   */
  exports.prototype['options'] = undefined;
  /**
   * URL which will receive the information of the report
   * @member {String} callback_url
   */
  exports.prototype['callback_url'] = undefined;


  /**
   * Returns Advanced report title
   * @return {String}
   */
  exports.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * Sets Advanced report title
   * @param {String} title Advanced report title
   */
  exports.prototype.setTitle = function(title) {
    this['title'] = title;
  }


  /**
   * @return {module:egoiSdk/AdvancedReportRange}
   */
  exports.prototype.getRange = function() {
    return this['range'];
  }

  /**
   * @param {module:egoiSdk/AdvancedReportRange} range
   */
  exports.prototype.setRange = function(range) {
    this['range'] = range;
  }


  /**
   * Returns Campaigns of the report
   * @return {Array.<module:egoiSdk/AdvancedReportCampaignsObject>}
   */
  exports.prototype.getCampaigns = function() {
    return this['campaigns'];
  }

  /**
   * Sets Campaigns of the report
   * @param {Array.<module:egoiSdk/AdvancedReportCampaignsObject>} campaigns Campaigns of the report
   */
  exports.prototype.setCampaigns = function(campaigns) {
    this['campaigns'] = campaigns;
  }


  /**
   * @return {module:egoiSdk/AdvancedReportSmsEventsColumns}
   */
  exports.prototype.getColumns = function() {
    return this['columns'];
  }

  /**
   * @param {module:egoiSdk/AdvancedReportSmsEventsColumns} columns
   */
  exports.prototype.setColumns = function(columns) {
    this['columns'] = columns;
  }


  /**
   * @return {module:egoiSdk/AdvancedReportSmsEventsOptions}
   */
  exports.prototype.getOptions = function() {
    return this['options'];
  }

  /**
   * @param {module:egoiSdk/AdvancedReportSmsEventsOptions} options
   */
  exports.prototype.setOptions = function(options) {
    this['options'] = options;
  }


  /**
   * Returns URL which will receive the information of the report
   * @return {String}
   */
  exports.prototype.getCallbackUrl = function() {
    return this['callback_url'];
  }

  /**
   * Sets URL which will receive the information of the report
   * @param {String} callbackUrl URL which will receive the information of the report
   */
  exports.prototype.setCallbackUrl = function(callbackUrl) {
    this['callback_url'] = callbackUrl;
  }



  return exports;
}));


