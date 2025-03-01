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

import type { PledgeIdPaymentsGet200Response } from './PledgeIdPaymentsGet200Response';
import {
    instanceOfPledgeIdPaymentsGet200Response,
    PledgeIdPaymentsGet200ResponseFromJSON,
    PledgeIdPaymentsGet200ResponseFromJSONTyped,
    PledgeIdPaymentsGet200ResponseToJSON,
} from './PledgeIdPaymentsGet200Response';
import type { TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf } from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf';
import {
    instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfFromJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfFromJSONTyped,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfToJSON,
} from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf';
import type { TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1 } from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1';
import {
    instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1FromJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1FromJSONTyped,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1ToJSON,
} from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1';
import type { TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2 } from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2';
import {
    instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2FromJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2FromJSONTyped,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2ToJSON,
} from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2';
import type { TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3 } from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3';
import {
    instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3FromJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3FromJSONTyped,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3ToJSON,
} from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3';

/**
 * @type TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner
 * 
 * @export
 */
export type TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner = PledgeIdPaymentsGet200Response | TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf | TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1 | TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2 | TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3;

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerFromJSON(json: any): TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner {
    return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerFromJSONTyped(json, false);
}

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner {
    if (json == null) {
        return json;
    }
    if (instanceOfPledgeIdPaymentsGet200Response(json)) {
        return PledgeIdPaymentsGet200ResponseFromJSONTyped(json, true);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf(json)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfFromJSONTyped(json, true);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1(json)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1FromJSONTyped(json, true);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2(json)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2FromJSONTyped(json, true);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3(json)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3FromJSONTyped(json, true);
    }

    return {} as any;
}

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerToJSON(json: any): any {
    return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerToJSONTyped(json, false);
}

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerToJSONTyped(value?: TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfPledgeIdPaymentsGet200Response(value)) {
        return PledgeIdPaymentsGet200ResponseToJSON(value as PledgeIdPaymentsGet200Response);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf(value)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfToJSON(value as TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1(value)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1ToJSON(value as TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2(value)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2ToJSON(value as TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf2);
    }
    if (instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3(value)) {
        return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3ToJSON(value as TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf3);
    }

    return {};
}

