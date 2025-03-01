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
import type { ConstituentPostRequestAllOfAllOfCustomValuesInner } from './ConstituentPostRequestAllOfAllOfCustomValuesInner';
import {
    ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSONTyped,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSONTyped,
} from './ConstituentPostRequestAllOfAllOfCustomValuesInner';
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
 * @interface TransactionIdPutRequestAllOfDesignationsInnerOneOf2
 */
export interface TransactionIdPutRequestAllOfDesignationsInnerOneOf2 {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf2
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf2
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf2
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf2
     */
    acknowledgementStatus?: TransactionIdPutRequestAllOfDesignationsInnerOneOf2AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf2
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {Array<ConstituentPostRequestAllOfAllOfCustomValuesInner>}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf2
     */
    customValues?: Array<ConstituentPostRequestAllOfAllOfCustomValuesInner>;
    /**
     * 
     * @type {Array<InteractionPostRequestAllOfAllOfAttachmentsInner>}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf2
     */
    attachments?: Array<InteractionPostRequestAllOfAllOfAttachmentsInner>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionIdPutRequestAllOfDesignationsInnerOneOf2AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}


/**
 * Check if a given object implements the TransactionIdPutRequestAllOfDesignationsInnerOneOf2 interface.
 */
export function instanceOfTransactionIdPutRequestAllOfDesignationsInnerOneOf2(value: object): value is TransactionIdPutRequestAllOfDesignationsInnerOneOf2 {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf2FromJSON(json: any): TransactionIdPutRequestAllOfDesignationsInnerOneOf2 {
    return TransactionIdPutRequestAllOfDesignationsInnerOneOf2FromJSONTyped(json, false);
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIdPutRequestAllOfDesignationsInnerOneOf2 {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(InteractionPostRequestAllOfAllOfAttachmentsInnerFromJSON)),
    };
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf2ToJSON(json: any): TransactionIdPutRequestAllOfDesignationsInnerOneOf2 {
    return TransactionIdPutRequestAllOfDesignationsInnerOneOf2ToJSONTyped(json, false);
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf2ToJSONTyped(value?: TransactionIdPutRequestAllOfDesignationsInnerOneOf2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(InteractionPostRequestAllOfAllOfAttachmentsInnerToJSON)),
    };
}

export const TransactionIdPutRequestAllOfDesignationsInnerOneOf2PropertyValidationAttributesMap: {
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

