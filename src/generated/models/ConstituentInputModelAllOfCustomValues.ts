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

import type { ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf } from './ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf';
import {
    instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfFromJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfFromJSONTyped,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfToJSON,
} from './ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf';
import type { ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 } from './ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1';
import {
    instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1FromJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1FromJSONTyped,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1ToJSON,
} from './ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1';
import type { ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2 } from './ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2';
import {
    instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2FromJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2FromJSONTyped,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2ToJSON,
} from './ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2';

/**
 * @type ConstituentInputModelAllOfCustomValues
 * 
 * @export
 */
export type ConstituentInputModelAllOfCustomValues = ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf | ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 | ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2;

export function ConstituentInputModelAllOfCustomValuesFromJSON(json: any): ConstituentInputModelAllOfCustomValues {
    return ConstituentInputModelAllOfCustomValuesFromJSONTyped(json, false);
}

export function ConstituentInputModelAllOfCustomValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentInputModelAllOfCustomValues {
    if (json == null) {
        return json;
    }
    if (instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf(json)) {
        return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfFromJSONTyped(json, true);
    }
    if (instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1(json)) {
        return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1FromJSONTyped(json, true);
    }
    if (instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2(json)) {
        return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2FromJSONTyped(json, true);
    }

    return {} as any;
}

export function ConstituentInputModelAllOfCustomValuesToJSON(json: any): any {
    return ConstituentInputModelAllOfCustomValuesToJSONTyped(json, false);
}

export function ConstituentInputModelAllOfCustomValuesToJSONTyped(value?: ConstituentInputModelAllOfCustomValues | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf(value)) {
        return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfToJSON(value as ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf);
    }
    if (instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1(value)) {
        return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1ToJSON(value as ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1);
    }
    if (instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2(value)) {
        return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2ToJSON(value as ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf2);
    }

    return {};
}

