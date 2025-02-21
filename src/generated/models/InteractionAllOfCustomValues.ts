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

import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf';
import {
    instanceOfConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfFromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfFromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfToJSON,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf';
import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1 } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1';
import {
    instanceOfConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1FromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1FromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1ToJSON,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1';

/**
 * @type InteractionAllOfCustomValues
 * 
 * @export
 */
export type InteractionAllOfCustomValues = ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf | ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1;

export function InteractionAllOfCustomValuesFromJSON(json: any): InteractionAllOfCustomValues {
    return InteractionAllOfCustomValuesFromJSONTyped(json, false);
}

export function InteractionAllOfCustomValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InteractionAllOfCustomValues {
    if (json == null) {
        return json;
    }
    if (instanceOfConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf(json)) {
        return ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfFromJSONTyped(json, true);
    }
    if (instanceOfConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1(json)) {
        return ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1FromJSONTyped(json, true);
    }

    return {} as any;
}

export function InteractionAllOfCustomValuesToJSON(json: any): any {
    return InteractionAllOfCustomValuesToJSONTyped(json, false);
}

export function InteractionAllOfCustomValuesToJSONTyped(value?: InteractionAllOfCustomValues | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf(value)) {
        return ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfToJSON(value as ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf);
    }
    if (instanceOfConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1(value)) {
        return ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1ToJSON(value as ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOf1);
    }

    return {};
}

