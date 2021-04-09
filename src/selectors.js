import { createSelector } from "reselect";

const selectAllbooks = state => state.books.data;

export const selectAllFiction = createSelector(
    selectAllbooks,
    allbooks => allbooks.filter(p => p.type === "Fiction")
);

export const selectAllOthers = createSelector(
    selectAllbooks,
    allbooks => allbooks.filter(p => p.type === "Biography")
);



export const SelectBoth = createSelector(
    [selectAllbooks, selectAllOthers],

    (d, c) => [...d, ...c]
);
