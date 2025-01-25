import {useDispatch, useSelector} from "react-redux";
import {selectVisiblePositions} from "./potition-slice";
import {selectFilters} from "../filter/filter-slice";

export const usePositions = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    return useSelector((state) => selectVisiblePositions(state, currentFilters))
}
