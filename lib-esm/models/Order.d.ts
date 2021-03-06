import { Model, ModelProps } from './Model';
import { TypeApi } from '../types';
export interface OrderProps {
    id?: number;
    paymethod_id?: number;
    business_id?: number;
    customer_id?: number;
    delivery_type?: number;
    delivery_datetime?: string;
    service_fee?: number;
    tax_type?: number;
    tax?: number;
    delivery_zone_price?: number;
    offer?: number;
    offer_type?: number;
    offer_rate?: number;
    discount?: number;
    coupon?: string;
    status?: number;
    comment?: string;
    driver_id?: number;
    driver_tip?: number;
    pay_data?: string;
    refund_data?: string;
    to_print?: boolean;
    language_id?: number;
    app_id?: string;
    cash?: number;
    delivery_zone_id?: number;
    locked?: boolean;
    order_group_id?: number;
    logistic_status?: number;
    created_at?: string;
    updated_at?: string;
    offer_id?: number;
    business?: object;
    products?: Array<object>;
    customer?: object;
    [metadata: string]: any;
}
export declare class Order extends Model implements ModelProps {
    id: number;
    paymethod_id: number;
    business_id: number;
    customer_id: number;
    delivery_type: number;
    delivery_datetime: string;
    service_fee: number;
    tax_type: number;
    tax: number;
    delivery_zone_price: number;
    offer: number;
    offer_type: number;
    offer_rate: number;
    discount: number;
    coupon: string;
    status: number;
    comment: string;
    driver_id: number;
    driver_tip: number;
    pay_data: string;
    refund_data: string;
    to_print: boolean;
    language_id: number;
    app_id: string;
    cash: number;
    delivery_zone_id: number;
    locked: boolean;
    order_group_id: number;
    logistic_status: number;
    created_at: string;
    updated_at: string;
    offer_id: number;
    business: object;
    products: Array<object>;
    customer: object;
    [metadata: string]: any;
    constructor(order: OrderProps, api: TypeApi);
    /**
     * Get indentifier of model
     */
    getId(): number;
    get subtotal(): number;
    get deliveryFee(): number;
    get serviceFee(): number;
    get totalTax(): number;
    get totalDriverTip(): number;
    get total(): number;
}
