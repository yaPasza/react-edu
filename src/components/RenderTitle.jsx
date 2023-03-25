import React from "react";

const RenderTitle = ({ number }) => {
    if (number > 4 && number < 20) return (
        <h1 className="m-2"><span className="badge text-bg-success">С тобой хотят общаться {number} пользователей</span></h1>
    )
    if (number % 10 === 1) return (
        <h1 className="m-2"><span className="badge text-bg-success">С тобой хочет общаться {number} пользователь</span></h1>
    )
    if (number % 10 > 1 && number % 10 < 5) return (
        <h1 className="m-2"><span className="badge text-bg-success">С тобой хотят общаться {number} пользователя</span></h1>
    )
    return <h1 className="m-2"><span className="badge text-bg-danger">Никто не хочет с тобой общаться</span></h1>
}

export default RenderTitle