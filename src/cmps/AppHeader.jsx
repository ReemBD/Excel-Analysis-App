import React from 'react';
import { NavLink } from 'react-router-dom';

const _AppHeader = () => {

    return (
        <header className="app-header-container " >
            <div
                className="app-header flex justify-between items-center main-layout">
                <div className="logo fg-2">Mamush</div>
                <ul className="main-nav list-none flex fg-3">
                    <li>
                        <NavLink
                            to="/"
                            className="nav-link"
                            /* activeClassName="selected-link" */>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/table"
                            className="nav-link"
                            activeClassName="selected-link">
                            Tables
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/data"
                            className="nav-link"
                            activeClassName="selected-link"
                        >
                            Data
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export const AppHeader = React.memo(_AppHeader)