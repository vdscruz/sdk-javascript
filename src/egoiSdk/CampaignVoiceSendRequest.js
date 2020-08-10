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
    define(['ApiClient', 'egoiSdk/AbstractSendVoice', 'egoiSdk/CampaignVoiceScheduleRequest', 'egoiSdk/LimitHourActionSendLimitHour', 'egoiSdk/OLimitContactsActionSend', 'egoiSdk/OSegmentsActionSend'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AbstractSendVoice'), require('./CampaignVoiceScheduleRequest'), require('./LimitHourActionSendLimitHour'), require('./OLimitContactsActionSend'), require('./OSegmentsActionSend'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.CampaignVoiceSendRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.AbstractSendVoice, root.egoiSdk.CampaignVoiceScheduleRequest, root.egoiSdk.LimitHourActionSendLimitHour, root.egoiSdk.OLimitContactsActionSend, root.egoiSdk.OSegmentsActionSend);
  }
}(this, function(ApiClient, AbstractSendVoice, CampaignVoiceScheduleRequest, LimitHourActionSendLimitHour, OLimitContactsActionSend, OSegmentsActionSend) {
  'use strict';



  /**
   * The CampaignVoiceSendRequest model module.
   * @module egoiSdk/CampaignVoiceSendRequest
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>CampaignVoiceSendRequest</code>.
   * Campaign voice send request schema
   * @alias module:egoiSdk/CampaignVoiceSendRequest
   * @class
   * @implements module:egoiSdk/AbstractSendVoice
   * @implements module:egoiSdk/CampaignVoiceScheduleRequest
   */
  var exports = function() {
    var _this = this;

    AbstractSendVoice.call(_this);
    CampaignVoiceScheduleRequest.call(_this);
  };

  /**
   * Constructs a <code>CampaignVoiceSendRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/CampaignVoiceSendRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/CampaignVoiceSendRequest} The populated <code>CampaignVoiceSendRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      AbstractSendVoice.constructFromObject(data, obj);
      CampaignVoiceScheduleRequest.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement AbstractSendVoice interface:
  /**
   * @member {} segments
   */
exports.prototype['segments'] = undefined;

  /**
   * Array of IDs of the users to notify
   * @member {} notify
   */
exports.prototype['notify'] = undefined;

  /**
   * @member {} limit_contacts
   */
exports.prototype['limit_contacts'] = undefined;

  /**
   * @member {} limit_hour
   */
exports.prototype['limit_hour'] = undefined;

  /**
   * Speed limit to send the campaign
   * @member {} limit_speed
   */
exports.prototype['limit_speed'] = undefined;

  /**
   * Destination field of this campaign
   * @member {} destination_field
   */
exports.prototype['destination_field'] = undefined;

  // Implement CampaignVoiceScheduleRequest interface:
  /**
   * @member {} list_id
   */
exports.prototype['list_id'] = undefined;

  /**
   * @member {} segments
   */
exports.prototype['segments'] = undefined;

  /**
   * Array of IDs of the users to notify
   * @member {} notify
   */
exports.prototype['notify'] = undefined;

  /**
   * Destination field of this campaign
   * @member {} destination_field
   */
exports.prototype['destination_field'] = undefined;

  /**
   * @member {} limit_contacts
   */
exports.prototype['limit_contacts'] = undefined;

  /**
   * @member {} limit_hour
   */
exports.prototype['limit_hour'] = undefined;

  /**
   * Speed limit to send the campaign
   * @member {} limit_speed
   */
exports.prototype['limit_speed'] = undefined;

  /**
   * The date and time
   * @member {} schedule_date
   */
exports.prototype['schedule_date'] = undefined;



  return exports;
}));


