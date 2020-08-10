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
    define(['ApiClient', 'egoiSdk/EmailClicksByUrlCampaignFields', 'egoiSdk/EmailClicksByUrlListStatsFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailClicksByUrlCampaignFields'), require('./EmailClicksByUrlListStatsFields'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.AdvancedReportEmailClicksByUrlColumns = factory(root.egoiSdk.ApiClient, root.egoiSdk.EmailClicksByUrlCampaignFields, root.egoiSdk.EmailClicksByUrlListStatsFields);
  }
}(this, function(ApiClient, EmailClicksByUrlCampaignFields, EmailClicksByUrlListStatsFields) {
  'use strict';



  /**
   * The AdvancedReportEmailClicksByUrlColumns model module.
   * @module egoiSdk/AdvancedReportEmailClicksByUrlColumns
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>AdvancedReportEmailClicksByUrlColumns</code>.
   * Columns of the report
   * @alias module:egoiSdk/AdvancedReportEmailClicksByUrlColumns
   * @class
   * @param listBaseFields {Array.<String>} Array of base fields
   * @param listExtraFields {Array.<Object>} 
   * @param listStatsFields {module:egoiSdk/EmailClicksByUrlListStatsFields} 
   * @param campaignFields {module:egoiSdk/EmailClicksByUrlCampaignFields} 
   */
  var exports = function(listBaseFields, listExtraFields, listStatsFields, campaignFields) {
    var _this = this;

    _this['list_base_fields'] = listBaseFields;
    _this['list_extra_fields'] = listExtraFields;
    _this['list_stats_fields'] = listStatsFields;
    _this['campaign_fields'] = campaignFields;
  };

  /**
   * Constructs a <code>AdvancedReportEmailClicksByUrlColumns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/AdvancedReportEmailClicksByUrlColumns} obj Optional instance to populate.
   * @return {module:egoiSdk/AdvancedReportEmailClicksByUrlColumns} The populated <code>AdvancedReportEmailClicksByUrlColumns</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('list_base_fields')) {
        obj['list_base_fields'] = ApiClient.convertToType(data['list_base_fields'], ['String']);
      }
      if (data.hasOwnProperty('list_extra_fields')) {
        obj['list_extra_fields'] = ApiClient.convertToType(data['list_extra_fields'], [Object]);
      }
      if (data.hasOwnProperty('list_stats_fields')) {
        obj['list_stats_fields'] = EmailClicksByUrlListStatsFields.constructFromObject(data['list_stats_fields']);
      }
      if (data.hasOwnProperty('campaign_fields')) {
        obj['campaign_fields'] = EmailClicksByUrlCampaignFields.constructFromObject(data['campaign_fields']);
      }
    }
    return obj;
  }

  /**
   * Array of base fields
   * @member {Array.<String>} list_base_fields
   */
  exports.prototype['list_base_fields'] = undefined;
  /**
   * @member {Array.<Object>} list_extra_fields
   */
  exports.prototype['list_extra_fields'] = undefined;
  /**
   * @member {module:egoiSdk/EmailClicksByUrlListStatsFields} list_stats_fields
   */
  exports.prototype['list_stats_fields'] = undefined;
  /**
   * @member {module:egoiSdk/EmailClicksByUrlCampaignFields} campaign_fields
   */
  exports.prototype['campaign_fields'] = undefined;


  /**
   * Returns Array of base fields
   * @return {Array.<String>}
   */
  exports.prototype.getListBaseFields = function() {
    return this['list_base_fields'];
  }

  /**
   * Sets Array of base fields
   * @param {Array.<String>} listBaseFields Array of base fields
   */
  exports.prototype.setListBaseFields = function(listBaseFields) {
    this['list_base_fields'] = listBaseFields;
  }


  /**
   * @return {Array.<Object>}
   */
  exports.prototype.getListExtraFields = function() {
    return this['list_extra_fields'];
  }

  /**
   * @param {Array.<Object>} listExtraFields
   */
  exports.prototype.setListExtraFields = function(listExtraFields) {
    this['list_extra_fields'] = listExtraFields;
  }


  /**
   * @return {module:egoiSdk/EmailClicksByUrlListStatsFields}
   */
  exports.prototype.getListStatsFields = function() {
    return this['list_stats_fields'];
  }

  /**
   * @param {module:egoiSdk/EmailClicksByUrlListStatsFields} listStatsFields
   */
  exports.prototype.setListStatsFields = function(listStatsFields) {
    this['list_stats_fields'] = listStatsFields;
  }


  /**
   * @return {module:egoiSdk/EmailClicksByUrlCampaignFields}
   */
  exports.prototype.getCampaignFields = function() {
    return this['campaign_fields'];
  }

  /**
   * @param {module:egoiSdk/EmailClicksByUrlCampaignFields} campaignFields
   */
  exports.prototype.setCampaignFields = function(campaignFields) {
    this['campaign_fields'] = campaignFields;
  }



  return exports;
}));


