import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllFiction, SelectBoth } from "./selectors";

const BooksContainer = () => {
    const novels = useSelector(selectAllFiction);
    const nAndOthers = useSelector(SelectBoth);
    useEffect(() => {
        console.log(nAndOthers);
    }, [novels, nAndOthers]);

    return <pre>{JSON.stringify(nAndOthers, null, 2)}</pre>;
};

export default BooksContainer;
