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
    define(['ApiClient', 'egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid', 'egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenIos', 'egoiSdk/Language'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid'), require('./ContactBaseWithStatusFieldsSchemaBasePushTokenIos'), require('./Language'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.ContactInsideBase = factory(root.egoiSdk.ApiClient, root.egoiSdk.ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid, root.egoiSdk.ContactBaseWithStatusFieldsSchemaBasePushTokenIos, root.egoiSdk.Language);
  }
}(this, function(ApiClient, ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid, ContactBaseWithStatusFieldsSchemaBasePushTokenIos, Language) {
  'use strict';



  /**
   * The ContactInsideBase model module.
   * @module egoiSdk/ContactInsideBase
   * @version 1.1.0RC2
   */

  /**
   * Constructs a new <code>ContactInsideBase</code>.
   * @alias module:egoiSdk/ContactInsideBase
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactInsideBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ContactInsideBase} obj Optional instance to populate.
   * @return {module:egoiSdk/ContactInsideBase} The populated <code>ContactInsideBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contact_id')) {
        obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('consent')) {
        obj['consent'] = ApiClient.convertToType(data['consent'], 'String');
      }
      if (data.hasOwnProperty('consent_date')) {
        obj['consent_date'] = ApiClient.convertToType(data['consent_date'], 'Date');
      }
      if (data.hasOwnProperty('subscription_method')) {
        obj['subscription_method'] = ApiClient.convertToType(data['subscription_method'], 'String');
      }
      if (data.hasOwnProperty('subscription_date')) {
        obj['subscription_date'] = ApiClient.convertToType(data['subscription_date'], 'Date');
      }
      if (data.hasOwnProperty('subscription_form')) {
        obj['subscription_form'] = ApiClient.convertToType(data['subscription_form'], 'Number');
      }
      if (data.hasOwnProperty('unsubscription_method')) {
        obj['unsubscription_method'] = ApiClient.convertToType(data['unsubscription_method'], 'String');
      }
      if (data.hasOwnProperty('unsubscription_reason')) {
        obj['unsubscription_reason'] = ApiClient.convertToType(data['unsubscription_reason'], 'String');
      }
      if (data.hasOwnProperty('unsubscription_observation')) {
        obj['unsubscription_observation'] = ApiClient.convertToType(data['unsubscription_observation'], 'String');
      }
      if (data.hasOwnProperty('unsubscription_date')) {
        obj['unsubscription_date'] = ApiClient.convertToType(data['unsubscription_date'], 'Date');
      }
      if (data.hasOwnProperty('change_date')) {
        obj['change_date'] = ApiClient.convertToType(data['change_date'], 'Date');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('birth_date')) {
        obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = Language.constructFromObject(data['language']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('email_status')) {
        obj['email_status'] = ApiClient.convertToType(data['email_status'], 'String');
      }
      if (data.hasOwnProperty('cellphone')) {
        obj['cellphone'] = ApiClient.convertToType(data['cellphone'], 'String');
      }
      if (data.hasOwnProperty('cellphone_status')) {
        obj['cellphone_status'] = ApiClient.convertToType(data['cellphone_status'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('phone_status')) {
        obj['phone_status'] = ApiClient.convertToType(data['phone_status'], 'String');
      }
      if (data.hasOwnProperty('push_token_android')) {
        obj['push_token_android'] = ApiClient.convertToType(data['push_token_android'], [ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid]);
      }
      if (data.hasOwnProperty('push_token_ios')) {
        obj['push_token_ios'] = ApiClient.convertToType(data['push_token_ios'], [ContactBaseWithStatusFieldsSchemaBasePushTokenIos]);
      }
    }
    return obj;
  }

  /**
   * @member {String} contact_id
   */
  exports.prototype['contact_id'] = undefined;
  /**
   * Status of the contact
   * @member {module:egoiSdk/ContactInsideBase.StatusEnum} status
   * @default 'active'
   */
  exports.prototype['status'] = 'active';
  /**
   * Contact consent
   * @member {module:egoiSdk/ContactInsideBase.ConsentEnum} consent
   * @default 'consent'
   */
  exports.prototype['consent'] = 'consent';
  /**
   * Date and hour of the contact consent
   * @member {Date} consent_date
   */
  exports.prototype['consent_date'] = undefined;
  /**
   * Contact subscription method
   * @member {module:egoiSdk/ContactInsideBase.SubscriptionMethodEnum} subscription_method
   */
  exports.prototype['subscription_method'] = undefined;
  /**
   * Date and hour of the contact subscription
   * @member {Date} subscription_date
   */
  exports.prototype['subscription_date'] = undefined;
  /**
   * Contact subscription form
   * @member {Number} subscription_form
   */
  exports.prototype['subscription_form'] = undefined;
  /**
   * Contact unsubscription method
   * @member {module:egoiSdk/ContactInsideBase.UnsubscriptionMethodEnum} unsubscription_method
   */
  exports.prototype['unsubscription_method'] = undefined;
  /**
   * Contact unsubscription reason
   * @member {module:egoiSdk/ContactInsideBase.UnsubscriptionReasonEnum} unsubscription_reason
   */
  exports.prototype['unsubscription_reason'] = undefined;
  /**
   * Contact unsubscription observation
   * @member {String} unsubscription_observation
   */
  exports.prototype['unsubscription_observation'] = undefined;
  /**
   * Contact unsubscription date
   * @member {Date} unsubscription_date
   */
  exports.prototype['unsubscription_date'] = undefined;
  /**
   * Last modification date of the contact
   * @member {Date} change_date
   */
  exports.prototype['change_date'] = undefined;
  /**
   * First name of the contact
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * Last name of the contact
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * Birth date of the contact
   * @member {Date} birth_date
   */
  exports.prototype['birth_date'] = undefined;
  /**
   * @member {module:egoiSdk/Language} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Email of the contact
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Email channel status
   * @member {module:egoiSdk/ContactInsideBase.EmailStatusEnum} email_status
   * @default 'active'
   */
  exports.prototype['email_status'] = 'active';
  /**
   * Cellphone of the contact
   * @member {String} cellphone
   */
  exports.prototype['cellphone'] = undefined;
  /**
   * Cellphone channel status
   * @member {module:egoiSdk/ContactInsideBase.CellphoneStatusEnum} cellphone_status
   * @default 'active'
   */
  exports.prototype['cellphone_status'] = 'active';
  /**
   * Phone of the contact
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Phone channel status
   * @member {module:egoiSdk/ContactInsideBase.PhoneStatusEnum} phone_status
   * @default 'active'
   */
  exports.prototype['phone_status'] = 'active';
  /**
   * Android push token of the contact
   * @member {Array.<module:egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid>} push_token_android
   */
  exports.prototype['push_token_android'] = undefined;
  /**
   * IOS push token of the contact
   * @member {Array.<module:egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenIos>} push_token_ios
   */
  exports.prototype['push_token_ios'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getContactId = function() {
    return this['contact_id'];
  }

  /**
   * @param {String} contactId
   */
  exports.prototype.setContactId = function(contactId) {
    this['contact_id'] = contactId;
  }


  /**
   * Returns Status of the contact
   * @return {module:egoiSdk/ContactInsideBase.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets Status of the contact
   * @param {module:egoiSdk/ContactInsideBase.StatusEnum} status Status of the contact
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
  }


  /**
   * Returns Contact consent
   * @return {module:egoiSdk/ContactInsideBase.ConsentEnum}
   */
  exports.prototype.getConsent = function() {
    return this['consent'];
  }

  /**
   * Sets Contact consent
   * @param {module:egoiSdk/ContactInsideBase.ConsentEnum} consent Contact consent
   */
  exports.prototype.setConsent = function(consent) {
    this['consent'] = consent;
  }


  /**
   * Returns Date and hour of the contact consent
   * @return {Date}
   */
  exports.prototype.getConsentDate = function() {
    return this['consent_date'];
  }

  /**
   * Sets Date and hour of the contact consent
   * @param {Date} consentDate Date and hour of the contact consent
   */
  exports.prototype.setConsentDate = function(consentDate) {
    this['consent_date'] = consentDate;
  }


  /**
   * Returns Contact subscription method
   * @return {module:egoiSdk/ContactInsideBase.SubscriptionMethodEnum}
   */
  exports.prototype.getSubscriptionMethod = function() {
    return this['subscription_method'];
  }

  /**
   * Sets Contact subscription method
   * @param {module:egoiSdk/ContactInsideBase.SubscriptionMethodEnum} subscriptionMethod Contact subscription method
   */
  exports.prototype.setSubscriptionMethod = function(subscriptionMethod) {
    this['subscription_method'] = subscriptionMethod;
  }


  /**
   * Returns Date and hour of the contact subscription
   * @return {Date}
   */
  exports.prototype.getSubscriptionDate = function() {
    return this['subscription_date'];
  }

  /**
   * Sets Date and hour of the contact subscription
   * @param {Date} subscriptionDate Date and hour of the contact subscription
   */
  exports.prototype.setSubscriptionDate = function(subscriptionDate) {
    this['subscription_date'] = subscriptionDate;
  }


  /**
   * Returns Contact subscription form
   * minimum: 0
   * @return {Number}
   */
  exports.prototype.getSubscriptionForm = function() {
    return this['subscription_form'];
  }

  /**
   * Sets Contact subscription form
   * @param {Number} subscriptionForm Contact subscription form
   */
  exports.prototype.setSubscriptionForm = function(subscriptionForm) {
    this['subscription_form'] = subscriptionForm;
  }


  /**
   * Returns Contact unsubscription method
   * @return {module:egoiSdk/ContactInsideBase.UnsubscriptionMethodEnum}
   */
  exports.prototype.getUnsubscriptionMethod = function() {
    return this['unsubscription_method'];
  }

  /**
   * Sets Contact unsubscription method
   * @param {module:egoiSdk/ContactInsideBase.UnsubscriptionMethodEnum} unsubscriptionMethod Contact unsubscription method
   */
  exports.prototype.setUnsubscriptionMethod = function(unsubscriptionMethod) {
    this['unsubscription_method'] = unsubscriptionMethod;
  }


  /**
   * Returns Contact unsubscription reason
   * @return {module:egoiSdk/ContactInsideBase.UnsubscriptionReasonEnum}
   */
  exports.prototype.getUnsubscriptionReason = function() {
    return this['unsubscription_reason'];
  }

  /**
   * Sets Contact unsubscription reason
   * @param {module:egoiSdk/ContactInsideBase.UnsubscriptionReasonEnum} unsubscriptionReason Contact unsubscription reason
   */
  exports.prototype.setUnsubscriptionReason = function(unsubscriptionReason) {
    this['unsubscription_reason'] = unsubscriptionReason;
  }


  /**
   * Returns Contact unsubscription observation
   * @return {String}
   */
  exports.prototype.getUnsubscriptionObservation = function() {
    return this['unsubscription_observation'];
  }

  /**
   * Sets Contact unsubscription observation
   * @param {String} unsubscriptionObservation Contact unsubscription observation
   */
  exports.prototype.setUnsubscriptionObservation = function(unsubscriptionObservation) {
    this['unsubscription_observation'] = unsubscriptionObservation;
  }


  /**
   * Returns Contact unsubscription date
   * @return {Date}
   */
  exports.prototype.getUnsubscriptionDate = function() {
    return this['unsubscription_date'];
  }

  /**
   * Sets Contact unsubscription date
   * @param {Date} unsubscriptionDate Contact unsubscription date
   */
  exports.prototype.setUnsubscriptionDate = function(unsubscriptionDate) {
    this['unsubscription_date'] = unsubscriptionDate;
  }


  /**
   * Returns Last modification date of the contact
   * @return {Date}
   */
  exports.prototype.getChangeDate = function() {
    return this['change_date'];
  }

  /**
   * Sets Last modification date of the contact
   * @param {Date} changeDate Last modification date of the contact
   */
  exports.prototype.setChangeDate = function(changeDate) {
    this['change_date'] = changeDate;
  }


  /**
   * Returns First name of the contact
   * @return {String}
   */
  exports.prototype.getFirstName = function() {
    return this['first_name'];
  }

  /**
   * Sets First name of the contact
   * @param {String} firstName First name of the contact
   */
  exports.prototype.setFirstName = function(firstName) {
    this['first_name'] = firstName;
  }


  /**
   * Returns Last name of the contact
   * @return {String}
   */
  exports.prototype.getLastName = function() {
    return this['last_name'];
  }

  /**
   * Sets Last name of the contact
   * @param {String} lastName Last name of the contact
   */
  exports.prototype.setLastName = function(lastName) {
    this['last_name'] = lastName;
  }


  /**
   * Returns Birth date of the contact
   * @return {Date}
   */
  exports.prototype.getBirthDate = function() {
    return this['birth_date'];
  }

  /**
   * Sets Birth date of the contact
   * @param {Date} birthDate Birth date of the contact
   */
  exports.prototype.setBirthDate = function(birthDate) {
    this['birth_date'] = birthDate;
  }


  /**
   * @return {module:egoiSdk/Language}
   */
  exports.prototype.getLanguage = function() {
    return this['language'];
  }

  /**
   * @param {module:egoiSdk/Language} language
   */
  exports.prototype.setLanguage = function(language) {
    this['language'] = language;
  }


  /**
   * Returns Email of the contact
   * @return {String}
   */
  exports.prototype.getEmail = function() {
    return this['email'];
  }

  /**
   * Sets Email of the contact
   * @param {String} email Email of the contact
   */
  exports.prototype.setEmail = function(email) {
    this['email'] = email;
  }


  /**
   * Returns Email channel status
   * @return {module:egoiSdk/ContactInsideBase.EmailStatusEnum}
   */
  exports.prototype.getEmailStatus = function() {
    return this['email_status'];
  }

  /**
   * Sets Email channel status
   * @param {module:egoiSdk/ContactInsideBase.EmailStatusEnum} emailStatus Email channel status
   */
  exports.prototype.setEmailStatus = function(emailStatus) {
    this['email_status'] = emailStatus;
  }


  /**
   * Returns Cellphone of the contact
   * @return {String}
   */
  exports.prototype.getCellphone = function() {
    return this['cellphone'];
  }

  /**
   * Sets Cellphone of the contact
   * @param {String} cellphone Cellphone of the contact
   */
  exports.prototype.setCellphone = function(cellphone) {
    this['cellphone'] = cellphone;
  }


  /**
   * Returns Cellphone channel status
   * @return {module:egoiSdk/ContactInsideBase.CellphoneStatusEnum}
   */
  exports.prototype.getCellphoneStatus = function() {
    return this['cellphone_status'];
  }

  /**
   * Sets Cellphone channel status
   * @param {module:egoiSdk/ContactInsideBase.CellphoneStatusEnum} cellphoneStatus Cellphone channel status
   */
  exports.prototype.setCellphoneStatus = function(cellphoneStatus) {
    this['cellphone_status'] = cellphoneStatus;
  }


  /**
   * Returns Phone of the contact
   * @return {String}
   */
  exports.prototype.getPhone = function() {
    return this['phone'];
  }

  /**
   * Sets Phone of the contact
   * @param {String} phone Phone of the contact
   */
  exports.prototype.setPhone = function(phone) {
    this['phone'] = phone;
  }


  /**
   * Returns Phone channel status
   * @return {module:egoiSdk/ContactInsideBase.PhoneStatusEnum}
   */
  exports.prototype.getPhoneStatus = function() {
    return this['phone_status'];
  }

  /**
   * Sets Phone channel status
   * @param {module:egoiSdk/ContactInsideBase.PhoneStatusEnum} phoneStatus Phone channel status
   */
  exports.prototype.setPhoneStatus = function(phoneStatus) {
    this['phone_status'] = phoneStatus;
  }


  /**
   * Returns Android push token of the contact
   * @return {Array.<module:egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid>}
   */
  exports.prototype.getPushTokenAndroid = function() {
    return this['push_token_android'];
  }

  /**
   * Sets Android push token of the contact
   * @param {Array.<module:egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid>} pushTokenAndroid Android push token of the contact
   */
  exports.prototype.setPushTokenAndroid = function(pushTokenAndroid) {
    this['push_token_android'] = pushTokenAndroid;
  }


  /**
   * Returns IOS push token of the contact
   * @return {Array.<module:egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenIos>}
   */
  exports.prototype.getPushTokenIos = function() {
    return this['push_token_ios'];
  }

  /**
   * Sets IOS push token of the contact
   * @param {Array.<module:egoiSdk/ContactBaseWithStatusFieldsSchemaBasePushTokenIos>} pushTokenIos IOS push token of the contact
   */
  exports.prototype.setPushTokenIos = function(pushTokenIos) {
    this['push_token_ios'] = pushTokenIos;
  }


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",
    /**
     * value: "removed"
     * @const
     */
    "removed": "removed",
    /**
     * value: "unconfirmed"
     * @const
     */
    "unconfirmed": "unconfirmed"  };

  /**
   * Allowed values for the <code>consent</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ConsentEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "consent"
     * @const
     */
    "consent": "consent",
    /**
     * value: "contract"
     * @const
     */
    "contract": "contract",
    /**
     * value: "legitimate_interest"
     * @const
     */
    "legitimate_interest": "legitimate_interest",
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "protect_vital_interests"
     * @const
     */
    "protect_vital_interests": "protect_vital_interests",
    /**
     * value: "public_interests"
     * @const
     */
    "public_interests": "public_interests",
    /**
     * value: "required_by_law"
     * @const
     */
    "required_by_law": "required_by_law",
    /**
     * value: "withdrawn"
     * @const
     */
    "withdrawn": "withdrawn"  };

  /**
   * Allowed values for the <code>subscription_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubscriptionMethodEnum = {
    /**
     * value: "manual"
     * @const
     */
    "manual": "manual",
    /**
     * value: "form"
     * @const
     */
    "form": "form",
    /**
     * value: "imported"
     * @const
     */
    "imported": "imported",
    /**
     * value: "referral"
     * @const
     */
    "referral": "referral",
    /**
     * value: "api"
     * @const
     */
    "api": "api"  };

  /**
   * Allowed values for the <code>unsubscription_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UnsubscriptionMethodEnum = {
    /**
     * value: "manual"
     * @const
     */
    "manual": "manual",
    /**
     * value: "form"
     * @const
     */
    "form": "form",
    /**
     * value: "unsubscribe_link"
     * @const
     */
    "unsubscribe_link": "unsubscribe_link",
    /**
     * value: "bounce"
     * @const
     */
    "bounce": "bounce",
    /**
     * value: "api"
     * @const
     */
    "api": "api",
    /**
     * value: ""
     * @const
     */
    "empty": ""  };

  /**
   * Allowed values for the <code>unsubscription_reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UnsubscriptionReasonEnum = {
    /**
     * value: "not_interested"
     * @const
     */
    "not_interested": "not_interested",
    /**
     * value: "lack_of_time"
     * @const
     */
    "lack_of_time": "lack_of_time",
    /**
     * value: "email_address_change"
     * @const
     */
    "email_address_change": "email_address_change",
    /**
     * value: "spam"
     * @const
     */
    "spam": "spam",
    /**
     * value: "other"
     * @const
     */
    "other": "other",
    /**
     * value: ""
     * @const
     */
    "empty": ""  };

  /**
   * Allowed values for the <code>email_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EmailStatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"  };

  /**
   * Allowed values for the <code>cellphone_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CellphoneStatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"  };

  /**
   * Allowed values for the <code>phone_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PhoneStatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"  };


  return exports;
}));


