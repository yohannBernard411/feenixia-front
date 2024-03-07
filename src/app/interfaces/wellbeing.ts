import { Care } from "./care";

export interface Wellbeing extends Care {
    category: string;
    price_cents: number;
}
