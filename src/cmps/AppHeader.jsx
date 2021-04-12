import React from 'react';
import { NavLink } from 'react-router-dom';

const _AppHeader = () => {
    return (
        <header className="app-header-container p-3" >
            <div
                className="flex justify-between items-center main-layout">
                <div className="logo fg-2">Mamush</div>
                <nav className="main-nav fg-3">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/table" className="nav-link">Tables</NavLink>
                    <NavLink to="/data" className="nav-link">Data</NavLink>
                </nav>
            </div>
        </header>
    )
}

export const AppHeader = React.memo(_AppHeader)