import { Care } from "./care";

export interface Guidance extends Care {
    category: string;
    price_cents: number;
}
