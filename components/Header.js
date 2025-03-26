import React from "react";

const Header = ({ title = "Todo List", subtitle = "Made for JS Class" }) => {
    return (
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-600 mb-4">{title}</h1>
            <h2 className="text-xl font-semibold">{subtitle}</h2>
        </div>
    )
}

export  default Header;