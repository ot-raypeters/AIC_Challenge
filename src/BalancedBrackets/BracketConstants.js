export const BRACKETS_MAP = {
  '{': '}',
  '(': ')',
  '[': ']'
};

export const OPENING_BRACKETS = Object.keys(BRACKETS_MAP);
export const CLOSING_BRACKETS = Object.values(BRACKETS_MAP);
export const BRACKETS = [...OPENING_BRACKETS, ...CLOSING_BRACKETS];
