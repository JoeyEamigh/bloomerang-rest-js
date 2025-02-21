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

import type { InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf } from './InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf';
import {
    instanceOfInteractionPostRequestAllOfAllOfAttachmentsInnerOneOf,
    InteractionPostRequestAllOfAllOfAttachmentsInnerOneOfFromJSON,
    InteractionPostRequestAllOfAllOfAttachmentsInnerOneOfFromJSONTyped,
    InteractionPostRequestAllOfAllOfAttachmentsInnerOneOfToJSON,
} from './InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf';
import type { InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1 } from './InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1';
import {
    instanceOfInteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1,
    InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1FromJSON,
    InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1FromJSONTyped,
    InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1ToJSON,
} from './InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1';

/**
 * @type DonationUpdateModelAllOfAttachments
 * 
 * @export
 */
export type DonationUpdateModelAllOfAttachments = InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf | InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1;

export function DonationUpdateModelAllOfAttachmentsFromJSON(json: any): DonationUpdateModelAllOfAttachments {
    return DonationUpdateModelAllOfAttachmentsFromJSONTyped(json, false);
}

export function DonationUpdateModelAllOfAttachmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationUpdateModelAllOfAttachments {
    if (json == null) {
        return json;
    }
    if (instanceOfInteractionPostRequestAllOfAllOfAttachmentsInnerOneOf(json)) {
        return InteractionPostRequestAllOfAllOfAttachmentsInnerOneOfFromJSONTyped(json, true);
    }
    if (instanceOfInteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1(json)) {
        return InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1FromJSONTyped(json, true);
    }

    return {} as any;
}

export function DonationUpdateModelAllOfAttachmentsToJSON(json: any): any {
    return DonationUpdateModelAllOfAttachmentsToJSONTyped(json, false);
}

export function DonationUpdateModelAllOfAttachmentsToJSONTyped(value?: DonationUpdateModelAllOfAttachments | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfInteractionPostRequestAllOfAllOfAttachmentsInnerOneOf(value)) {
        return InteractionPostRequestAllOfAllOfAttachmentsInnerOneOfToJSON(value as InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf);
    }
    if (instanceOfInteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1(value)) {
        return InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1ToJSON(value as InteractionPostRequestAllOfAllOfAttachmentsInnerOneOf1);
    }

    return {};
}

