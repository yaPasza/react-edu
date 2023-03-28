import React, {useState, useEffect, useRef} from "react";
import api from "../api"
import {paginate} from "../utils/paginate";
import Pagination from "./Pagination";
import RenderTitle from "./RenderTitle";
import User from "./User";
import GroupList from "./GroupList";

const UsersList = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();

    const count = users.length;
    const pageSize = 4;
    const filteredUsers = selectedProf?users.filter((user)=>user.profession===selectedProf):users;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
    }, [])

    const removeUser = (userId) => {
        setUsers((users) => users.filter((user) => user._id !== userId));
    };

    const swapFavorite = (userId) => {
        setUsers(
            users.map((user) => {
                if (user._id === userId) {
                    return {...user, bookmark: !user.bookmark};
                }
                return user;
            })
        );
    };

    const handleChangePage = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }

    return (
        <>
            {professions && <GroupList items={professions} onItemSelect={handleProfessionSelect} selectedItem={selectedProf}/>}
            <RenderTitle number={users.length}/>
            {users.length ? (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Количество встреч</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {userCrop.map((user) => (
                        <User
                            {...user}
                            key={user._id}
                            onRemove={removeUser}
                            onSwapFavorite={swapFavorite}
                        />
                    ))}
                    </tbody>
                </table>
            ) : (
                ""
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handleChangePage}
            />
        </>
    );
};

export default UsersList;
