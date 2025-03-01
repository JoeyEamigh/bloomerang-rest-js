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

/**
 * 
 * @export
 * @enum {string}
 */
export enum TimelineEntryType {
    Interaction = 'Interaction',
    Note = 'Note',
    Refund = 'Refund',
    SoftCredit = 'SoftCredit',
    Task = 'Task',
    Transaction = 'Transaction'
}


export function instanceOfTimelineEntryType(value: any): boolean {
    for (const key in TimelineEntryType) {
        if (Object.prototype.hasOwnProperty.call(TimelineEntryType, key)) {
            if (TimelineEntryType[key as keyof typeof TimelineEntryType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TimelineEntryTypeFromJSON(json: any): TimelineEntryType {
    return TimelineEntryTypeFromJSONTyped(json, false);
}

export function TimelineEntryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineEntryType {
    return json as TimelineEntryType;
}

export function TimelineEntryTypeToJSON(value?: TimelineEntryType | null): any {
    return value as any;
}

export function TimelineEntryTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): TimelineEntryType {
    return value as TimelineEntryType;
}

