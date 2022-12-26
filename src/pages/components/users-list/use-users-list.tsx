import {useEffect} from "react";
import {fetchUsers} from "../../../store/reducers/user-actions";
import {userActions} from "../../../store/reducers/user-slice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import { UsersList } from './users-list';

export const UseUsersList = () => {
    const dispatch = useAppDispatch();
    const {usersList, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    const showUserDetails = (id: number) => dispatch(userActions.setDetails(id));

    return (
        <>
            {isLoading && <h4>Loading...</h4>}
            {error && <h3>{error}</h3>}
            <UsersList users={usersList} showUserDetails={showUserDetails} />
        </>

    )
}
