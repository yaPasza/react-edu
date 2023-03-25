import React, { useState } from "react";
import api from '../api';
import RenderTitle from "./RenderTitle";
import User from "./User";

const UsersList = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const removeUser = (userId) => {
        setUsers((users) => users.filter(user => user._id !== userId))
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
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <User {...user} key={user._id} onRemove={removeUser} />
                        )}
                    </tbody>
                </table>)
                : ''
            }
        </>
    )
}

export default UsersList;