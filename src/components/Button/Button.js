import React from "react";

export function Button({ onClick, placeholder }){
    return (
        <button onClick={onClick} placeholder={placeholder} />
    )
}