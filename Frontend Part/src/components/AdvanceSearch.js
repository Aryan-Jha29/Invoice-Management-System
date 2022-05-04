import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@material-ui/core/Box';
import Table from './Table';
import { makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles({
    root: {
        "& .MuiButton-root": {
            backgroundColor: "#283d4a",
            borderColor: "#fff",
            variant: 'outlined',
            color: 'white',
            alignItems: 'flex-end',
            width: '260px',
        },
    }
});

function AdvanceSearch() {

    const [open, setOpen] = React.useState(false);

    const [data, setData] = useState({
        cust_number: "",
        buisness_year: "",
        doc_id: "",
        invoice_id: ""
    })

    function handleChange(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let response = Axios.post("http://localhost:8080/HighRadius-Project/AdvanceSearch", {},
            {
                headers: { 'Content-Type': 'application/json' },
                params: data,
            })

        // useEffect(async () => {
        //     setData(await advData())
        // }, []);

        if (response) {
            setOpen(false)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
        setData({
            cust_number: "",
            buisness_year: "",
            doc_id: "",
            invoice_id: ""
        })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    return (
        <span>
            <Box component="span" sx={{ p: 1, border: '0px' }} >
                <Button variant='outlined' color='primary' onClick={handleClickOpen}>
                    Advance Search
                </Button>
            </Box>

            <Dialog sx={{ backgroundColor: "rgba(0,0,0,0.3)" }} open={open} onClose={handleClose} maxHeight="10%" maxWidth="lg" >
                <DialogTitle sx={{ backgroundColor: "#283d4a", color: "#fff" }}>Advance Search</DialogTitle>

                <DialogContent sx={{ backgroundColor: "#283d4a" }}>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Document ID"
                            name="doc_id"
                            value={data.doc_id}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Invoice ID"
                            name="invoice_id"
                            value={data.invoice_id}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
                    <br></br>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Customer Number"
                            name="cust_number"
                            value={data.cust_number}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Buisness Year"
                            name="buisness_year"
                            value={data.buisness_year}
                            onChange={(e) => handleChange(e)}
                            type="number"
                            maxWidth="15%"
                            variant="outlined"
                        />
                    </Box>
                </DialogContent>

                <DialogActions className={classes.root} sx={{ backgroundColor: "#283d4a" }}>
                    <Button variant='outlined' color='primary' onClick={handleSubmit}>Search</Button>
                    <Button variant='outlined' color='primary' onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}
export default AdvanceSearch;