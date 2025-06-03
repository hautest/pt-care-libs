import z from "zod";
import { MMKV } from "react-native-mmkv";

export const mmkvStorage = new MMKV();

interface MMKVSchemaParams<T extends z.ZodType> {
  key: string;
  value: T;
}

export function createMMKVSchema<T extends z.ZodType>({
  key,
  value: valueType,
}: MMKVSchemaParams<T>) {
  const setValue = (newValue: z.infer<T>) => {
    if (valueType.safeParse(newValue).success) {
      mmkvStorage.set(key, JSON.stringify(newValue));
    } else {
      throw new Error(`${key}에 대한 값이 유효하지 않습니다.`);
    }
  };

  const getValue = (): z.infer<T> | null => {
    const value = mmkvStorage.getString(key);
    if (value) {
      return valueType.parse(JSON.parse(value));
    }
    return null;
  };

  const resetValue = () => {
    mmkvStorage.delete(key);
  };

  return {
    setValue,
    getValue,
    key,
    resetValue,
  };
}
