import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

// we are using selector because we know that the evenSelector is depended on the count
//  and selector is defined as a derived state. (A selector represents a piece of derived state)
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0;
  },
});
