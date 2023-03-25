import React from "react";

const TagElement = ({ tag, onRemove }) => {
    return <li className="btn btn-primary m-1" onClick={() => onRemove(tag)}>{tag}</li>
}

export default TagElement;