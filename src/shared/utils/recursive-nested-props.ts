export const recursiveNestedProps = (
  obj: Record<string, unknown>,
  leftKeys: string[],
  value: unknown,
): Record<string, unknown> => {
  if (leftKeys.length <= 0) return obj;
  if (leftKeys.length === 1) {
    // eslint-disable-next-line no-param-reassign
    obj[leftKeys[0]] = value;
    return obj;
  }
  const key = leftKeys.shift();
  if (!key) return obj;

  if (!obj[key]) {
    // eslint-disable-next-line no-param-reassign
    obj[key] = {};
  }

  return recursiveNestedProps(
    obj[key] as Record<string, unknown>,
    leftKeys,
    value,
  );
};
