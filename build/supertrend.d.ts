export type SupertrendProps = {
    initialArray: Array<{
        high: number;
        low: number;
        close: number;
    }>;
    period: number;
    multiplier: number;
};
export declare function supertrend({ initialArray, period, multiplier }: SupertrendProps): Array<number>;
