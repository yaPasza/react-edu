import React from "react";

const User = ({ ...props }) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.qualities.map(item => <span key={item._id} className={"badge m-1 bg-" + item.color}>{item.name}</span>)}</td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td>
                <button onClick={() => props.onRemove(props._id)}>Удалить</button>
            </td>
        </tr>
    )
}

export default User;