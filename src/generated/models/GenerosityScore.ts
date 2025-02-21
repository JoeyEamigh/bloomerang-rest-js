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
export enum GenerosityScore {
    Low = 'Low',
    MediumLow = 'MediumLow',
    Medium = 'Medium',
    MediumHigh = 'MediumHigh',
    High = 'High',
    NotScanned = 'NotScanned'
}


export function instanceOfGenerosityScore(value: any): boolean {
    for (const key in GenerosityScore) {
        if (Object.prototype.hasOwnProperty.call(GenerosityScore, key)) {
            if (GenerosityScore[key as keyof typeof GenerosityScore] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GenerosityScoreFromJSON(json: any): GenerosityScore {
    return GenerosityScoreFromJSONTyped(json, false);
}

export function GenerosityScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerosityScore {
    return json as GenerosityScore;
}

export function GenerosityScoreToJSON(value?: GenerosityScore | null): any {
    return value as any;
}

export function GenerosityScoreToJSONTyped(value: any, ignoreDiscriminator: boolean): GenerosityScore {
    return value as GenerosityScore;
}

