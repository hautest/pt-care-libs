import z from "zod";
import { MMKV, useMMKVString } from "react-native-mmkv";

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
      mmkvStorage.set(
        key,
        typeof newValue === "string" ? newValue : JSON.stringify(newValue)
      );
    } else {
      throw new Error(`${key}에 대한 값이 유효하지 않습니다.`);
    }
  };

  const getValue = (): z.infer<T> | null => {
    const value = mmkvStorage.getString(key);
    if (value) {
      return valueType.parse(
        typeof value === "string" ? value : JSON.parse(value)
      );
    }
    return null;
  };

  const resetValue = () => {
    mmkvStorage.delete(key);
  };

  const useMMKV = () => {
    const [value, _setValue] = useMMKVString(key);

    const setValue = (newValue: z.infer<T>) => {
      if (valueType.safeParse(newValue).success) {
        _setValue(JSON.stringify(newValue));
      } else {
        throw new Error(`${key}에 대한 값이 유효하지 않습니다.`);
      }
    };

    return [value, setValue] as [z.infer<T>, (newValue: z.infer<T>) => void];
  };

  return {
    setValue,
    getValue,
    key,
    resetValue,
    useMMKV,
  };
}
