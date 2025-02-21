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

import type { ConstituentPost200Response } from './ConstituentPost200Response';
import {
    instanceOfConstituentPost200Response,
    ConstituentPost200ResponseFromJSON,
    ConstituentPost200ResponseFromJSONTyped,
    ConstituentPost200ResponseToJSON,
} from './ConstituentPost200Response';
import type { ConstituentsSearchGet200ResponseAllOfResultsInnerOneOf } from './ConstituentsSearchGet200ResponseAllOfResultsInnerOneOf';
import {
    instanceOfConstituentsSearchGet200ResponseAllOfResultsInnerOneOf,
    ConstituentsSearchGet200ResponseAllOfResultsInnerOneOfFromJSON,
    ConstituentsSearchGet200ResponseAllOfResultsInnerOneOfFromJSONTyped,
    ConstituentsSearchGet200ResponseAllOfResultsInnerOneOfToJSON,
} from './ConstituentsSearchGet200ResponseAllOfResultsInnerOneOf';

/**
 * @type ConstituentsSearchGet200ResponseAllOfResultsInner
 * 
 * @export
 */
export type ConstituentsSearchGet200ResponseAllOfResultsInner = ConstituentPost200Response | ConstituentsSearchGet200ResponseAllOfResultsInnerOneOf;

export function ConstituentsSearchGet200ResponseAllOfResultsInnerFromJSON(json: any): ConstituentsSearchGet200ResponseAllOfResultsInner {
    return ConstituentsSearchGet200ResponseAllOfResultsInnerFromJSONTyped(json, false);
}

export function ConstituentsSearchGet200ResponseAllOfResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentsSearchGet200ResponseAllOfResultsInner {
    if (json == null) {
        return json;
    }
    if (instanceOfConstituentPost200Response(json)) {
        return ConstituentPost200ResponseFromJSONTyped(json, true);
    }
    if (instanceOfConstituentsSearchGet200ResponseAllOfResultsInnerOneOf(json)) {
        return ConstituentsSearchGet200ResponseAllOfResultsInnerOneOfFromJSONTyped(json, true);
    }

    return {} as any;
}

export function ConstituentsSearchGet200ResponseAllOfResultsInnerToJSON(json: any): any {
    return ConstituentsSearchGet200ResponseAllOfResultsInnerToJSONTyped(json, false);
}

export function ConstituentsSearchGet200ResponseAllOfResultsInnerToJSONTyped(value?: ConstituentsSearchGet200ResponseAllOfResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfConstituentPost200Response(value)) {
        return ConstituentPost200ResponseToJSON(value as ConstituentPost200Response);
    }
    if (instanceOfConstituentsSearchGet200ResponseAllOfResultsInnerOneOf(value)) {
        return ConstituentsSearchGet200ResponseAllOfResultsInnerOneOfToJSON(value as ConstituentsSearchGet200ResponseAllOfResultsInnerOneOf);
    }

    return {};
}

