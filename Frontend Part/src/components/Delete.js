import React, { useState } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        "& .MuiButton-root": {
            backgroundColor: "#283d4a",
            borderColor: "#fff",
            variant: 'outlined',
            color: 'white',
            alignItems: 'flex-end',
            width: '280px',
        },
    }
});

function Delete() {
    const [open, setOpen] = React.useState(false);

    const [deldata, setDelData] = useState({
        sl_no: "",
    })

    function handleChange(e) {
        const newdata = { ...deldata }
        newdata[e.target.name] = e.target.value
        setDelData(newdata)
    }


    function handleSubmit(e) {
        e.preventDefault();
        let response = Axios.post("http://localhost:8080/HighRadius-Project/Delete", {},
            {
                headers: { 'Content-Type': 'application/json' },
                params: deldata,
            })
        if (response)
            setOpen(false)
    }



    const handleClickOpen = () => {
        setOpen(true);
        setDelData({
            sl_no: "",
        })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    return (
        <span>

            <Box component="span" sx={{ p: 1, border: '0px' }} >
                <Button variant='outlined' color='primary' onClick={handleClickOpen} style={{ color: 'white', width: '140px' }}>
                    DELETE
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ backgroundColor: "#283d4a", color: "#fff" }}>Delete Records ?</DialogTitle>



                <DialogContent sx={{ backgroundColor: "#283d4a" }}>
                    <Box sx={{ color: '#fff', fontSize: 22 }}>
                        Are you sure you want to delete these record[s]?
                    </Box>
                </DialogContent>

                <DialogActions className={classes.root} sx={{ backgroundColor: "#283d4a" }} >
                    <Box>
                        <Button variant='outlined' color='primary' onClick={handleClose}>Cancel</Button>
                        <Button variant='outlined' color='primary' onClick={handleSubmit}>Delete</Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </span>
    );
}

export default Delete;