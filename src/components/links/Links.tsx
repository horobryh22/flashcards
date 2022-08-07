import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './Links.module.css';

import { ReturnComponentType } from 'types';

export const Links = (): ReturnComponentType => {
    return (
        <div style={{ color: 'red' }} className={classes.links}>
            <NavLink className={classes.login} to="/login">
                Login
            </NavLink>
            <NavLink className={classes.reg} to="/registration">
                Registration
            </NavLink>
            <NavLink className={classes.error} to="/not_found">
                404
            </NavLink>
            <NavLink className={classes.prof} to="/profile">
                Profile
            </NavLink>
            <NavLink className={classes.passrecovery} to="/password_recovery">
                Pass recovery
            </NavLink>
            <NavLink className={classes.forgotpass} to="/enter_new_password">
                Forgot pass
            </NavLink>
            <NavLink className={classes.packs} to="/packs">
                Packs
            </NavLink>
            <NavLink className={classes.main} to="/">
                Main
            </NavLink>
        </div>
    );
};
