/* tslint:disable */
/* eslint-disable */
/**
 * Bloomerang API
 * Private-key API for Bloomerang CRM
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@bloomerang.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface WalletitemsGet200ResponseAllOfResultsInner
 */
export interface WalletitemsGet200ResponseAllOfResultsInner {
    /**
     * 
     * @type {number}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    id?: number;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    accountId?: number;
    /**
     * The ID of the processor account used in the API
     * @type {number}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    transactionProcessorAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    type?: WalletitemsGet200ResponseAllOfResultsInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    creditCardType?: WalletitemsGet200ResponseAllOfResultsInnerCreditCardTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    creditCardLastFour?: string;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    creditCardExpiration?: string;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    eftAccountType?: WalletitemsGet200ResponseAllOfResultsInnerEftAccountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    eftAccountLastFour?: string;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    eftRoutingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof WalletitemsGet200ResponseAllOfResultsInner
     */
    paymentMethodToken?: string;
}

/**
* @export
* @enum {string}
*/
export enum WalletitemsGet200ResponseAllOfResultsInnerTypeEnum {
    CreditCard = 'CreditCard',
    Eft = 'Eft',
    ApplePay = 'ApplePay',
    GooglePay = 'GooglePay'
}
/**
* @export
* @enum {string}
*/
export enum WalletitemsGet200ResponseAllOfResultsInnerCreditCardTypeEnum {
    Visa = 'Visa',
    MasterCard = 'MasterCard',
    Discover = 'Discover',
    AmericanExpress = 'AmericanExpress',
    DinersClub = 'DinersClub',
    Jcb = 'JCB'
}
/**
* @export
* @enum {string}
*/
export enum WalletitemsGet200ResponseAllOfResultsInnerEftAccountTypeEnum {
    Checking = 'Checking',
    Savings = 'Savings'
}


/**
 * Check if a given object implements the WalletitemsGet200ResponseAllOfResultsInner interface.
 */
export function instanceOfWalletitemsGet200ResponseAllOfResultsInner(value: object): value is WalletitemsGet200ResponseAllOfResultsInner {
    return true;
}

export function WalletitemsGet200ResponseAllOfResultsInnerFromJSON(json: any): WalletitemsGet200ResponseAllOfResultsInner {
    return WalletitemsGet200ResponseAllOfResultsInnerFromJSONTyped(json, false);
}

export function WalletitemsGet200ResponseAllOfResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletitemsGet200ResponseAllOfResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'transactionProcessorAccountId': json['TransactionProcessorAccountId'] == null ? undefined : json['TransactionProcessorAccountId'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'creditCardType': json['CreditCardType'] == null ? undefined : json['CreditCardType'],
        'creditCardLastFour': json['CreditCardLastFour'] == null ? undefined : json['CreditCardLastFour'],
        'creditCardExpiration': json['CreditCardExpiration'] == null ? undefined : json['CreditCardExpiration'],
        'eftAccountType': json['EftAccountType'] == null ? undefined : json['EftAccountType'],
        'eftAccountLastFour': json['EftAccountLastFour'] == null ? undefined : json['EftAccountLastFour'],
        'eftRoutingNumber': json['EftRoutingNumber'] == null ? undefined : json['EftRoutingNumber'],
        'paymentMethodToken': json['PaymentMethodToken'] == null ? undefined : json['PaymentMethodToken'],
    };
}

export function WalletitemsGet200ResponseAllOfResultsInnerToJSON(json: any): WalletitemsGet200ResponseAllOfResultsInner {
    return WalletitemsGet200ResponseAllOfResultsInnerToJSONTyped(json, false);
}

export function WalletitemsGet200ResponseAllOfResultsInnerToJSONTyped(value?: WalletitemsGet200ResponseAllOfResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'AccountId': value['accountId'],
        'TransactionProcessorAccountId': value['transactionProcessorAccountId'],
        'Type': value['type'],
        'CreditCardType': value['creditCardType'],
        'CreditCardLastFour': value['creditCardLastFour'],
        'CreditCardExpiration': value['creditCardExpiration'],
        'EftAccountType': value['eftAccountType'],
        'EftAccountLastFour': value['eftAccountLastFour'],
        'EftRoutingNumber': value['eftRoutingNumber'],
        'PaymentMethodToken': value['paymentMethodToken'],
    };
}

export const WalletitemsGet200ResponseAllOfResultsInnerPropertyValidationAttributesMap: {
    [property: string]: {
        maxLength?: number,
        minLength?: number,
        pattern?: string,
        maximum?: number,
        exclusiveMaximum?: boolean,
        minimum?: number,
        exclusiveMinimum?: boolean,
        multipleOf?: number,
        maxItems?: number,
        minItems?: number,
        uniqueItems?: boolean
    }
} = {
}

