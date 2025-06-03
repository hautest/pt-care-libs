import z from "zod";
import { MMKV, useMMKVString } from "react-native-mmkv";

function isStringIncludeQuotesOrDoubleQuotes(value: string) {
  return (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  );
}

function removeQuotesOrDoubleQuotes(value: string) {
  return value.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
}

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
      const jsonParsedValue = JSON.parse(value);

      return valueType.parse(
        isStringIncludeQuotesOrDoubleQuotes(jsonParsedValue)
          ? removeQuotesOrDoubleQuotes(jsonParsedValue)
          : jsonParsedValue
      );
    }
    return null;
  };

  const resetValue = () => {
    mmkvStorage.delete(key);
  };

  const useMMKV = () => {
    const [_value, _setValue] = useMMKVString(key);

    const setValue = (newValue: z.infer<T>) => {
      if (valueType.safeParse(newValue).success) {
        _setValue(JSON.stringify(newValue));
      } else {
        throw new Error(`${key}에 대한 값이 유효하지 않습니다.`);
      }
    };

    const jsonParsedValue = JSON.parse(_value || "");

    const value = valueType.parse(
      isStringIncludeQuotesOrDoubleQuotes(jsonParsedValue)
        ? removeQuotesOrDoubleQuotes(jsonParsedValue)
        : jsonParsedValue
    );

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
