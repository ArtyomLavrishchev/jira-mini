import React from 'react';
import {AppBar, Badge, Grid, IconButton, InputBase, Toolbar} from "@material-ui/core";
import {Computer, DateRange} from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import styles from './header.module.scss'

const Header = () => {
    return (
        <AppBar position={"static"} >
            <Toolbar>
                <Grid container alignItems={"center"}>
                    <Grid item>
                        <InputBase
                            className={styles.search}
                            placeholder={"Search..."}
                            endAdornment={<SearchIcon fontSize={"small"} />}
                        />
                    </Grid>
                    <Grid item sm/>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color={"secondary"}>
                                <Computer fontSize={"small"}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={1} color={"secondary"}>
                                <DateRange fontSize={"small"}/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;