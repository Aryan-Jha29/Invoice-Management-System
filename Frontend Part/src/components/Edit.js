import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import Table from './Table';
import { getData } from '../services/data';
import { GridRow, gridRowsLookupSelector } from "@material-ui/data-grid";
import { DataGrid } from '@material-ui/data-grid';


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

function Edit(props) {
    // const Edit = (props) => {
    const [open, setOpen] = React.useState(false);

    const [editdata, setEditData] = useState({
        sl_no: "",
        invoice_currency: "",
        cust_payment_terms: "",
    })

    // useEffect(async () => {
    //     setData(await getData())
    // }, []);

    // useEffect(() => {
    //     setEditData({
    //         ...editdata,
    //         sl_no: props.selectionModel[0],
    //     });
    // }, [props.selectionModel]);

    // function handleChange(e) {
    //     const newdata = { ...editdata }
    //     newdata[e.target.name] = e.target.value
    //     setEditData(newdata)
    // }
    const handleChange = (e) => {
        setEditData({
            ...editdata,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        let response = Axios.post("http://localhost:8080/HighRadius-Project/Update", {},
            {
                headers: { 'Content-Type': 'application/json' },
                params: editdata,
            })
        if (response) {
            setOpen(false)
            // setData(props.data)
            // window.location.reload();
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
        setEditData({
            sl_no: "",
            invoice_currency: "",
            cust_payment_terms: "",
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
                    EDIT
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ backgroundColor: "#283d4a", color: "#fff" }}>EDIT</DialogTitle>

                <DialogContent sx={{ backgroundColor: "#283d4a" }}>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Sl no"
                            name="sl_no"
                            value={editdata.sl_no}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Invoice Currency"
                            name="invoice_currency"
                            value={editdata.invoice_currency}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Customer Payment Terms"
                            name="cust_payment_terms"
                            value={editdata.cust_payment_terms}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Total Open Amount"
                            name="total_open_amount"
                            value={editdata.total_open_amount}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
                </DialogContent>

                <DialogActions className={classes.root} sx={{ backgroundColor: "#283d4a" }} >
                    <Box>
                        <Button variant='outlined' color='primary' onClick={handleSubmit}>Edit</Button>
                        <Button variant='outlined' color='primary' onClick={handleClose}>Cancel</Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </span>
    );
}

export default Edit;