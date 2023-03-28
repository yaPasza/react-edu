import React, { useState } from "react";
import TagElement from "./TagElement";

const ElementsList = () => {
    const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

    const removeTag = (id) => {
        setTags((tags) => tags.filter((tag) => tag !== id));
    };

    if (!tags.length) return <h1>Empty list</h1>;
    return (
        <ul>
            {tags.map((tag) => (
                <TagElement onRemove={removeTag} tag={tag} key={tag} />
            ))}
        </ul>
    );
};

export default ElementsList;
