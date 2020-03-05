export const transformResult = param =>
  Object.keys(param).map(key => ({
    ...param[key],
    id: key
  }));
