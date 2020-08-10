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
    root.egoiSdk.EmailUnsubscriptionsCampaignFields = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EmailUnsubscriptionsCampaignFields model module.
   * @module egoiSdk/EmailUnsubscriptionsCampaignFields
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>EmailUnsubscriptionsCampaignFields</code>.
   * Campaign fields to include in the report
   * @alias module:egoiSdk/EmailUnsubscriptionsCampaignFields
   * @class
   * @param internalName {Boolean} True to include the internal name of the campaign, false otherwise
   * @param campaignHash {Boolean} True to include the hash of the campaign, false otherwise
   * @param sender {Boolean} True to include the sender of the campaign, false otherwise
   */
  var exports = function(internalName, campaignHash, sender) {
    var _this = this;

    _this['internal_name'] = internalName;
    _this['campaign_hash'] = campaignHash;
    _this['sender'] = sender;
  };

  /**
   * Constructs a <code>EmailUnsubscriptionsCampaignFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/EmailUnsubscriptionsCampaignFields} obj Optional instance to populate.
   * @return {module:egoiSdk/EmailUnsubscriptionsCampaignFields} The populated <code>EmailUnsubscriptionsCampaignFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('internal_name')) {
        obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'Boolean');
      }
      if (data.hasOwnProperty('campaign_hash')) {
        obj['campaign_hash'] = ApiClient.convertToType(data['campaign_hash'], 'Boolean');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * True to include the internal name of the campaign, false otherwise
   * @member {Boolean} internal_name
   */
  exports.prototype['internal_name'] = undefined;
  /**
   * True to include the hash of the campaign, false otherwise
   * @member {Boolean} campaign_hash
   */
  exports.prototype['campaign_hash'] = undefined;
  /**
   * True to include the sender of the campaign, false otherwise
   * @member {Boolean} sender
   */
  exports.prototype['sender'] = undefined;


  /**
   * Returns True to include the internal name of the campaign, false otherwise
   * @return {Boolean}
   */
  exports.prototype.getInternalName = function() {
    return this['internal_name'];
  }

  /**
   * Sets True to include the internal name of the campaign, false otherwise
   * @param {Boolean} internalName True to include the internal name of the campaign, false otherwise
   */
  exports.prototype.setInternalName = function(internalName) {
    this['internal_name'] = internalName;
  }


  /**
   * Returns True to include the hash of the campaign, false otherwise
   * @return {Boolean}
   */
  exports.prototype.getCampaignHash = function() {
    return this['campaign_hash'];
  }

  /**
   * Sets True to include the hash of the campaign, false otherwise
   * @param {Boolean} campaignHash True to include the hash of the campaign, false otherwise
   */
  exports.prototype.setCampaignHash = function(campaignHash) {
    this['campaign_hash'] = campaignHash;
  }


  /**
   * Returns True to include the sender of the campaign, false otherwise
   * @return {Boolean}
   */
  exports.prototype.getSender = function() {
    return this['sender'];
  }

  /**
   * Sets True to include the sender of the campaign, false otherwise
   * @param {Boolean} sender True to include the sender of the campaign, false otherwise
   */
  exports.prototype.setSender = function(sender) {
    this['sender'] = sender;
  }



  return exports;
}));


