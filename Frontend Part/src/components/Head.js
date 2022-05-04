import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import logoCompany from '../assets/Abc.svg';
import logoHRC from '../assets/hrclogo.svg';

const useStyles = makeStyles({
    root: {
        background: '#2d4250',
        flexGrow: 1,
    },
    companyImg: {
        display: 'block',
        maxWidth: '65%',
        maxHeight: '65%',
    },
    hrcImg: {
        display: 'block',
        maxWidth: '56%',
        maxHeight: '56%',
    },
});


function Head() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="flex-start" style={{ height: '90px' }}>
                <Grid
                    item
                    xs={3}
                    sm={3}
                    lg={3}
                    justify="flex-start"
                    alignItems="center"
                    style={{
                        display: 'flex',
                        marginLeft: '1.563vw',
                    }}>
                    <img src={logoCompany} alt="companyLogo" className={classes.companyImg} />
                </Grid>
                <Grid
                    item
                    xs={3}
                    sm={3}
                    lg={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{
                        display: 'flex',
                        marginLeft: '10.4vw'
                    }}>
                    <img src={logoHRC} alt="HighRadius Logo" className={classes.hrcImg} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Head;