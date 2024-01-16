export const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const formatQuery = (query: string) => {
  let gap = 0;
  let isArgumentsLine = false;

  return query
    .replace(/ *\n\s*/g, '\n')
    .replace(/ +/g, ' ')
    .replace(/(\s*(?<char>[{|}|\(|\)|,|:])\s*)/g, '$<char>')
    .split('')
    .map((char, idx, arr) => {
      if (char === '(') {
        isArgumentsLine = true;
        return char;
      } else if (char === ')') {
        isArgumentsLine = false;
        return char;
      }

      if (char === '{') {
        gap += 1;
        const gapTab = ' '.repeat(gap * 2);

        if (idx === 0) return `${char}\n${gapTab}`;

        return isArgumentsLine ? ` ${char} ` : ` ${char}\n${gapTab}`;
      }

      if (char === '}') {
        gap = gap - 1 >= 0 ? gap - 1 : 0;
        const gapTab = ' '.repeat(gap * 2);

        return isArgumentsLine
          ? ` ${char}`
          : arr[idx + 1] === '}'
            ? `\n${gapTab}${char}`
            : `\n${gapTab}${char}\n${gapTab}`;
      }

      if (arr[idx - 1] === '\n') {
        const gapTab = ' '.repeat(gap * 2);
        return `${gapTab}${char}`;
      }

      return char;
    })
    .join('')
    .replace(/(?<char>[,|:])\s*/g, '$<char> ');
};
