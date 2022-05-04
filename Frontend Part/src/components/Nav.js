import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Table from './Table';
import Edit from "./Edit";
import Add from "./Add";
import Delete from "./Delete";
import AdvanceSearch from './AdvanceSearch';
import Refresh from './Refresh';

const useStyles = makeStyles({
    root: {
        "& .MuiButton-root": {
            color: 'white',
            alignItems: 'flex-end',
            width: '170px',
        },
    }
});

const Nav = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid container justifyContent="flex-start" alignItems='flex-end' style={{ height: '70px', backgroundColor: '#283d4a' }}>
                <Grid item xs={4} className={classes.root}>
                    {/* <Box component="span" sx={{ p: 1, border: '0px' }}><Button variant='contained' color='primary' >PREDICT</Button></Box> */}
                    {/* <Box component="span" sx={{ p: 1, border: '0px' }}><Button variant='outlined' color='primary'>ANALYTICS VIEW</Button></Box> */}
                    <Box component="span" sx={{ p: 1, border: '0px' }}><Button variant='outlined' color='primary' onClick={props.advClick} >Advance Search</Button></Box>
                    {/* <AdvanceSearch /> */}
                    <Box component="span" sx={{ p: 1, border: '0px' }}><Button variant='outlined' color='primary' onClick={props.addClick}
                    >Add</Button></Box>
                </Grid>
                <Grid item xs={1}>
                    <Refresh />
                </Grid>
                <Grid item xs={3} className={classes.root}>
                    <TextField placeholder="Search Customer ID" variant='outlined'
                        style={{ height: '35px', backgroundColor: 'white', fontSize: '4px', borderRadius: '7px', paddingBottom: "5px" }} />
                </Grid>

                <Grid item xs={4} className={classes.root}>
                    {/* <Add /> */}
                    {/* <Edit /> */}
                    <Box component="span" sx={{ p: 1, border: '0px' }}><Button variant='outlined' color='primary' onClick={(props.editClick)}>Edit</Button></Box>
                    {/* <Delete /> */}
                    <Box component="span" sx={{ p: 1, border: '0px' }}><Button variant='outlined' color='primary' onClick={props.deleteClick}>Delete</Button></Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Nav;