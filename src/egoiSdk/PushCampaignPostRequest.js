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
    define(['ApiClient', 'egoiSdk/CampaignPushContent', 'egoiSdk/PushCampaignPostRequestActions', 'egoiSdk/PushCampaignPostRequestGeoOptions', 'egoiSdk/PushCampaignPostRequestNotificationOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignPushContent'), require('./PushCampaignPostRequestActions'), require('./PushCampaignPostRequestGeoOptions'), require('./PushCampaignPostRequestNotificationOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.PushCampaignPostRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.CampaignPushContent, root.egoiSdk.PushCampaignPostRequestActions, root.egoiSdk.PushCampaignPostRequestGeoOptions, root.egoiSdk.PushCampaignPostRequestNotificationOptions);
  }
}(this, function(ApiClient, CampaignPushContent, PushCampaignPostRequestActions, PushCampaignPostRequestGeoOptions, PushCampaignPostRequestNotificationOptions) {
  'use strict';



  /**
   * The PushCampaignPostRequest model module.
   * @module egoiSdk/PushCampaignPostRequest
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>PushCampaignPostRequest</code>.
   * Push campaign post request schema
   * @alias module:egoiSdk/PushCampaignPostRequest
   * @class
   * @param appId {Number} 
   * @param title {String} Push campaign subject
   * @param content {module:egoiSdk/CampaignPushContent} 
   */
  var exports = function(appId, title, content) {
    var _this = this;

    _this['app_id'] = appId;
    _this['title'] = title;
    _this['content'] = content;
  };

  /**
   * Constructs a <code>PushCampaignPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/PushCampaignPostRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/PushCampaignPostRequest} The populated <code>PushCampaignPostRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('app_id')) {
        obj['app_id'] = ApiClient.convertToType(data['app_id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = CampaignPushContent.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [PushCampaignPostRequestActions]);
      }
      if (data.hasOwnProperty('geo_options')) {
        obj['geo_options'] = PushCampaignPostRequestGeoOptions.constructFromObject(data['geo_options']);
      }
      if (data.hasOwnProperty('notification_options')) {
        obj['notification_options'] = PushCampaignPostRequestNotificationOptions.constructFromObject(data['notification_options']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} app_id
   */
  exports.prototype['app_id'] = undefined;
  /**
   * Push campaign subject
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:egoiSdk/CampaignPushContent} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Actions for push campaign
   * @member {Array.<module:egoiSdk/PushCampaignPostRequestActions>} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * @member {module:egoiSdk/PushCampaignPostRequestGeoOptions} geo_options
   */
  exports.prototype['geo_options'] = undefined;
  /**
   * @member {module:egoiSdk/PushCampaignPostRequestNotificationOptions} notification_options
   */
  exports.prototype['notification_options'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getAppId = function() {
    return this['app_id'];
  }

  /**
   * @param {Number} appId
   */
  exports.prototype.setAppId = function(appId) {
    this['app_id'] = appId;
  }


  /**
   * Returns Push campaign subject
   * @return {String}
   */
  exports.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * Sets Push campaign subject
   * @param {String} title Push campaign subject
   */
  exports.prototype.setTitle = function(title) {
    this['title'] = title;
  }


  /**
   * @return {module:egoiSdk/CampaignPushContent}
   */
  exports.prototype.getContent = function() {
    return this['content'];
  }

  /**
   * @param {module:egoiSdk/CampaignPushContent} content
   */
  exports.prototype.setContent = function(content) {
    this['content'] = content;
  }


  /**
   * Returns Actions for push campaign
   * @return {Array.<module:egoiSdk/PushCampaignPostRequestActions>}
   */
  exports.prototype.getActions = function() {
    return this['actions'];
  }

  /**
   * Sets Actions for push campaign
   * @param {Array.<module:egoiSdk/PushCampaignPostRequestActions>} actions Actions for push campaign
   */
  exports.prototype.setActions = function(actions) {
    this['actions'] = actions;
  }


  /**
   * @return {module:egoiSdk/PushCampaignPostRequestGeoOptions}
   */
  exports.prototype.getGeoOptions = function() {
    return this['geo_options'];
  }

  /**
   * @param {module:egoiSdk/PushCampaignPostRequestGeoOptions} geoOptions
   */
  exports.prototype.setGeoOptions = function(geoOptions) {
    this['geo_options'] = geoOptions;
  }


  /**
   * @return {module:egoiSdk/PushCampaignPostRequestNotificationOptions}
   */
  exports.prototype.getNotificationOptions = function() {
    return this['notification_options'];
  }

  /**
   * @param {module:egoiSdk/PushCampaignPostRequestNotificationOptions} notificationOptions
   */
  exports.prototype.setNotificationOptions = function(notificationOptions) {
    this['notification_options'] = notificationOptions;
  }



  return exports;
}));


