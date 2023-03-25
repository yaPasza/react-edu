import React, { useState } from "react";
import api from '../api';
import Pagination from "./Pagination";
import RenderTitle from "./RenderTitle";
import User from "./User";

const UsersList = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const count = users.length;
    const pageSize = 4;

    const removeUser = (userId) => {
        setUsers((users) => users.filter(user => user._id !== userId))
    }

    const swapFavorite = (userId) => {
        setUsers(users.map(user => {
            if (user._id === userId) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        }))
    }

    const handleChangePage = (pageIndex) => {
        console.log("page:", pageIndex)
    }

    return (
        <>
            <RenderTitle number={users.length} />
            {users.length
                ? (<table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Количество встреч</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <User {...user} key={user._id} onRemove={removeUser} onSwapFavorite={swapFavorite} />
                        )}
                    </tbody>
                </table>)
                : ''
            }
            <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handleChangePage} />
        </>
    )
}

export default UsersList;