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
    define(['ApiClient', 'egoiSdk/CampaignSmsOptions', 'egoiSdk/SmartSmsCampaignPatchRequestCampaignContent', 'egoiSdk/SmartSmsCampaignPatchRequestPageContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignSmsOptions'), require('./SmartSmsCampaignPatchRequestCampaignContent'), require('./SmartSmsCampaignPatchRequestPageContent'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.SmartSmsCampaignPatchRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.CampaignSmsOptions, root.egoiSdk.SmartSmsCampaignPatchRequestCampaignContent, root.egoiSdk.SmartSmsCampaignPatchRequestPageContent);
  }
}(this, function(ApiClient, CampaignSmsOptions, SmartSmsCampaignPatchRequestCampaignContent, SmartSmsCampaignPatchRequestPageContent) {
  'use strict';



  /**
   * The SmartSmsCampaignPatchRequest model module.
   * @module egoiSdk/SmartSmsCampaignPatchRequest
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>SmartSmsCampaignPatchRequest</code>.
   * @alias module:egoiSdk/SmartSmsCampaignPatchRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SmartSmsCampaignPatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/SmartSmsCampaignPatchRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/SmartSmsCampaignPatchRequest} The populated <code>SmartSmsCampaignPatchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('internal_name')) {
        obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
      }
      if (data.hasOwnProperty('campaign_content')) {
        obj['campaign_content'] = SmartSmsCampaignPatchRequestCampaignContent.constructFromObject(data['campaign_content']);
      }
      if (data.hasOwnProperty('page_content')) {
        obj['page_content'] = SmartSmsCampaignPatchRequestPageContent.constructFromObject(data['page_content']);
      }
      if (data.hasOwnProperty('sender_id')) {
        obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'Number');
      }
      if (data.hasOwnProperty('cname_id')) {
        obj['cname_id'] = ApiClient.convertToType(data['cname_id'], 'Number');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = CampaignSmsOptions.constructFromObject(data['options']);
      }
    }
    return obj;
  }

  /**
   * SMS campaign internal name
   * @member {String} internal_name
   */
  exports.prototype['internal_name'] = undefined;
  /**
   * @member {module:egoiSdk/SmartSmsCampaignPatchRequestCampaignContent} campaign_content
   */
  exports.prototype['campaign_content'] = undefined;
  /**
   * @member {module:egoiSdk/SmartSmsCampaignPatchRequestPageContent} page_content
   */
  exports.prototype['page_content'] = undefined;
  /**
   * @member {Number} sender_id
   */
  exports.prototype['sender_id'] = undefined;
  /**
   * @member {Number} cname_id
   */
  exports.prototype['cname_id'] = undefined;
  /**
   * @member {module:egoiSdk/CampaignSmsOptions} options
   */
  exports.prototype['options'] = undefined;


  /**
   * Returns SMS campaign internal name
   * @return {String}
   */
  exports.prototype.getInternalName = function() {
    return this['internal_name'];
  }

  /**
   * Sets SMS campaign internal name
   * @param {String} internalName SMS campaign internal name
   */
  exports.prototype.setInternalName = function(internalName) {
    this['internal_name'] = internalName;
  }


  /**
   * @return {module:egoiSdk/SmartSmsCampaignPatchRequestCampaignContent}
   */
  exports.prototype.getCampaignContent = function() {
    return this['campaign_content'];
  }

  /**
   * @param {module:egoiSdk/SmartSmsCampaignPatchRequestCampaignContent} campaignContent
   */
  exports.prototype.setCampaignContent = function(campaignContent) {
    this['campaign_content'] = campaignContent;
  }


  /**
   * @return {module:egoiSdk/SmartSmsCampaignPatchRequestPageContent}
   */
  exports.prototype.getPageContent = function() {
    return this['page_content'];
  }

  /**
   * @param {module:egoiSdk/SmartSmsCampaignPatchRequestPageContent} pageContent
   */
  exports.prototype.setPageContent = function(pageContent) {
    this['page_content'] = pageContent;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getSenderId = function() {
    return this['sender_id'];
  }

  /**
   * @param {Number} senderId
   */
  exports.prototype.setSenderId = function(senderId) {
    this['sender_id'] = senderId;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getCnameId = function() {
    return this['cname_id'];
  }

  /**
   * @param {Number} cnameId
   */
  exports.prototype.setCnameId = function(cnameId) {
    this['cname_id'] = cnameId;
  }


  /**
   * @return {module:egoiSdk/CampaignSmsOptions}
   */
  exports.prototype.getOptions = function() {
    return this['options'];
  }

  /**
   * @param {module:egoiSdk/CampaignSmsOptions} options
   */
  exports.prototype.setOptions = function(options) {
    this['options'] = options;
  }



  return exports;
}));


