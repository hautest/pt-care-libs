import z from "zod";
import { MMKV } from "react-native-mmkv";
export declare const mmkvStorage: MMKV;
interface MMKVSchemaParams<T extends z.ZodType> {
    key: string;
    value: T;
}
export declare function createMMKVSchema<T extends z.ZodType>({ key, value: valueType, }: MMKVSchemaParams<T>): {
    setValue: (newValue: z.infer<T>) => void;
    getValue: () => z.infer<T> | null;
    key: string;
    resetValue: () => void;
    useMMKV: () => [z.TypeOf<T> | null, (newValue: z.infer<T>) => void];
};
export {};
