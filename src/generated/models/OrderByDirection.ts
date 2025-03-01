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
export enum OrderByDirection {
    Asc = 'Asc',
    Desc = 'Desc'
}


export function instanceOfOrderByDirection(value: any): boolean {
    for (const key in OrderByDirection) {
        if (Object.prototype.hasOwnProperty.call(OrderByDirection, key)) {
            if (OrderByDirection[key as keyof typeof OrderByDirection] === value) {
                return true;
            }
        }
    }
    return false;
}

export function OrderByDirectionFromJSON(json: any): OrderByDirection {
    return OrderByDirectionFromJSONTyped(json, false);
}

export function OrderByDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderByDirection {
    return json as OrderByDirection;
}

export function OrderByDirectionToJSON(value?: OrderByDirection | null): any {
    return value as any;
}

export function OrderByDirectionToJSONTyped(value: any, ignoreDiscriminator: boolean): OrderByDirection {
    return value as OrderByDirection;
}

