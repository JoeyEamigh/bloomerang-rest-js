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
import type { TransactionPostRequestAllOfDesignationsInner } from './TransactionPostRequestAllOfDesignationsInner';
import {
    TransactionPostRequestAllOfDesignationsInnerFromJSON,
    TransactionPostRequestAllOfDesignationsInnerFromJSONTyped,
    TransactionPostRequestAllOfDesignationsInnerToJSON,
    TransactionPostRequestAllOfDesignationsInnerToJSONTyped,
} from './TransactionPostRequestAllOfDesignationsInner';
import type { InteractionPostRequestAllOfAllOfAttachmentsInner } from './InteractionPostRequestAllOfAllOfAttachmentsInner';
import {
    InteractionPostRequestAllOfAllOfAttachmentsInnerFromJSON,
    InteractionPostRequestAllOfAllOfAttachmentsInnerFromJSONTyped,
    InteractionPostRequestAllOfAllOfAttachmentsInnerToJSON,
    InteractionPostRequestAllOfAllOfAttachmentsInnerToJSONTyped,
} from './InteractionPostRequestAllOfAllOfAttachmentsInner';

/**
 * 
 * @export
 * @interface TransactionPostRequest
 */
export interface TransactionPostRequest {
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof TransactionPostRequest
     */
    accountId: number;
    /**
     * 
     * @type {Date}
     * @memberof TransactionPostRequest
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof TransactionPostRequest
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    method: TransactionPostRequestMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    entryMethod?: TransactionPostRequestEntryMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    methodOrigin?: TransactionPostRequestMethodOriginEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    checkNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof TransactionPostRequest
     */
    checkDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    creditCardType?: TransactionPostRequestCreditCardTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    creditCardLastFourDigits?: string;
    /**
     * 
     * @type {number}
     * @memberof TransactionPostRequest
     */
    creditCardExpMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionPostRequest
     */
    creditCardExpYear?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    eftAccountType?: TransactionPostRequestEftAccountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    eftLastFourDigits?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    eftRoutingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    inKindDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionPostRequest
     */
    inKindType?: TransactionPostRequestInKindTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TransactionPostRequest
     */
    inKindMarketValue?: number;
    /**
     * The ID of the wallet item to use to process this transaction
     * @type {number}
     * @memberof TransactionPostRequest
     */
    walletItemId?: number;
    /**
     * The deep URL when a transaction is created by qgiv
     * @type {string}
     * @memberof TransactionPostRequest
     */
    integrationUrl?: string;
    /**
     * 
     * @type {Array<TransactionPostRequestAllOfDesignationsInner>}
     * @memberof TransactionPostRequest
     */
    designations: Array<TransactionPostRequestAllOfDesignationsInner>;
    /**
     * 
     * @type {Array<InteractionPostRequestAllOfAllOfAttachmentsInner>}
     * @memberof TransactionPostRequest
     */
    attachments?: Array<InteractionPostRequestAllOfAllOfAttachmentsInner>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionPostRequestMethodEnum {
    None = 'None',
    Cash = 'Cash',
    Check = 'Check',
    CreditCard = 'CreditCard',
    Eft = 'Eft',
    InKind = 'InKind',
    ApplePay = 'ApplePay',
    GooglePay = 'GooglePay',
    PayPal = 'PayPal',
    Venmo = 'Venmo'
}
/**
* @export
* @enum {string}
*/
export enum TransactionPostRequestEntryMethodEnum {
    Tap = 'Tap',
    Manual = 'Manual',
    Insert = 'Insert',
    ExistingWalletItem = 'ExistingWalletItem',
    AutoProcessed = 'AutoProcessed'
}
/**
* @export
* @enum {string}
*/
export enum TransactionPostRequestMethodOriginEnum {
    Forms = 'Forms',
    Mobile = 'Mobile',
    Crm = 'CRM'
}
/**
* @export
* @enum {string}
*/
export enum TransactionPostRequestCreditCardTypeEnum {
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
export enum TransactionPostRequestEftAccountTypeEnum {
    Checking = 'Checking',
    Savings = 'Savings'
}
/**
* @export
* @enum {string}
*/
export enum TransactionPostRequestInKindTypeEnum {
    Goods = 'Goods',
    Services = 'Services'
}


/**
 * Check if a given object implements the TransactionPostRequest interface.
 */
export function instanceOfTransactionPostRequest(value: object): value is TransactionPostRequest {
    if (!('accountId' in value) || value['accountId'] === undefined) return false;
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('designations' in value) || value['designations'] === undefined) return false;
    return true;
}

export function TransactionPostRequestFromJSON(json: any): TransactionPostRequest {
    return TransactionPostRequestFromJSONTyped(json, false);
}

export function TransactionPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accountId': json['AccountId'],
        'date': (new Date(json['Date'])),
        'amount': json['Amount'],
        'method': json['Method'],
        'entryMethod': json['EntryMethod'] == null ? undefined : json['EntryMethod'],
        'methodOrigin': json['MethodOrigin'] == null ? undefined : json['MethodOrigin'],
        'checkNumber': json['CheckNumber'] == null ? undefined : json['CheckNumber'],
        'checkDate': json['CheckDate'] == null ? undefined : (new Date(json['CheckDate'])),
        'creditCardType': json['CreditCardType'] == null ? undefined : json['CreditCardType'],
        'creditCardLastFourDigits': json['CreditCardLastFourDigits'] == null ? undefined : json['CreditCardLastFourDigits'],
        'creditCardExpMonth': json['CreditCardExpMonth'] == null ? undefined : json['CreditCardExpMonth'],
        'creditCardExpYear': json['CreditCardExpYear'] == null ? undefined : json['CreditCardExpYear'],
        'eftAccountType': json['EftAccountType'] == null ? undefined : json['EftAccountType'],
        'eftLastFourDigits': json['EftLastFourDigits'] == null ? undefined : json['EftLastFourDigits'],
        'eftRoutingNumber': json['EftRoutingNumber'] == null ? undefined : json['EftRoutingNumber'],
        'inKindDescription': json['InKindDescription'] == null ? undefined : json['InKindDescription'],
        'inKindType': json['InKindType'] == null ? undefined : json['InKindType'],
        'inKindMarketValue': json['InKindMarketValue'] == null ? undefined : json['InKindMarketValue'],
        'walletItemId': json['WalletItemId'] == null ? undefined : json['WalletItemId'],
        'integrationUrl': json['IntegrationUrl'] == null ? undefined : json['IntegrationUrl'],
        'designations': ((json['Designations'] as Array<any>).map(TransactionPostRequestAllOfDesignationsInnerFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(InteractionPostRequestAllOfAllOfAttachmentsInnerFromJSON)),
    };
}

export function TransactionPostRequestToJSON(json: any): TransactionPostRequest {
    return TransactionPostRequestToJSONTyped(json, false);
}

export function TransactionPostRequestToJSONTyped(value?: TransactionPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'AccountId': value['accountId'],
        'Date': ((value['date']).toISOString().substring(0,10)),
        'Amount': value['amount'],
        'Method': value['method'],
        'EntryMethod': value['entryMethod'],
        'MethodOrigin': value['methodOrigin'],
        'CheckNumber': value['checkNumber'],
        'CheckDate': value['checkDate'] == null ? undefined : ((value['checkDate']).toISOString().substring(0,10)),
        'CreditCardType': value['creditCardType'],
        'CreditCardLastFourDigits': value['creditCardLastFourDigits'],
        'CreditCardExpMonth': value['creditCardExpMonth'],
        'CreditCardExpYear': value['creditCardExpYear'],
        'EftAccountType': value['eftAccountType'],
        'EftLastFourDigits': value['eftLastFourDigits'],
        'EftRoutingNumber': value['eftRoutingNumber'],
        'InKindDescription': value['inKindDescription'],
        'InKindType': value['inKindType'],
        'InKindMarketValue': value['inKindMarketValue'],
        'WalletItemId': value['walletItemId'],
        'IntegrationUrl': value['integrationUrl'],
        'Designations': ((value['designations'] as Array<any>).map(TransactionPostRequestAllOfDesignationsInnerToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(InteractionPostRequestAllOfAllOfAttachmentsInnerToJSON)),
    };
}

export const TransactionPostRequestPropertyValidationAttributesMap: {
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
    designations: {
        maxItems: 20,
        minItems: 1,
        uniqueItems: false,
    },
}

