import {addPositions} from "./potition-slice";
import data from "../../mock/data.json";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

export const useFetchPositions = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addPositions(data));
    }, [dispatch])
}
