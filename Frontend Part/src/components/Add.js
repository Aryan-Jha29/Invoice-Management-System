import React, { useState } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@material-ui/core/Box';
import { border, maxHeight } from "@mui/system";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        "& .MuiButton-root": {
            backgroundColor: "#283d4a",
            borderColor: "#fff",
            variant: 'outlined',
            color: 'white',
            alignItems: 'flex-end',
            width: '540px',
        },
    }
});

function Add() {

    const [open, setOpen] = React.useState(false);

    const [data, setData] = useState({
        business_code: "",
        cust_number: "",
        clear_date: "",
        buisness_year: "",
        doc_id: "",
        posting_date: "",
        document_create_date: "",
        due_in_date: "",
        invoice_currency: "",
        document_type: "",
        posting_id: "",
        total_open_amount: "",
        baseline_create_date: "",
        cust_payment_terms: "",
        invoice_id: ""
    })

    function handleChange(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let response = Axios.post("http://localhost:8080/HighRadius-Project/Add", {},
            {
                headers: { 'Content-Type': 'application/json' },
                params: data,
            })
        if (response)
            setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
        setData({
            business_code: "",
            cust_number: "",
            clear_date: "",
            buisness_year: "",
            doc_id: "",
            posting_date: "",
            document_create_date: "",
            due_in_date: "",
            invoice_currency: "",
            document_type: "",
            posting_id: "",
            total_open_amount: "",
            baseline_create_date: "",
            cust_payment_terms: "",
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
                    Add
                </Button>
            </Box>

            <Dialog sx={{ backgroundColor: "rgba(0,0,0,0.3)" }} open={open} onClose={handleClose} maxHeight="10%" maxWidth="lg" >
                <DialogTitle sx={{ backgroundColor: "#283d4a", color: "#fff" }}>ADD</DialogTitle>

                <DialogContent sx={{ backgroundColor: "#283d4a" }}>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Business Code"
                            name="business_code"
                            value={data.business_code}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                    </Box>
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
                            label="Clear Date"
                            name="clear_date"
                            value={data.clear_date}
                            onChange={(e) => handleChange(e)}
                            type="date"
                            //fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                        <br></br>
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Document ID"
                            name="doc_id"
                            value={data.doc_id}
                            onChange={(e) => handleChange(e)}
                            //type="email"
                            //fullWidth
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Posting Date"
                            name="posting_date"
                            value={data.posting_date}
                            onChange={(e) => handleChange(e)}
                            type="date"
                            //fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Document Create Date"
                            name="document_create_date"
                            value={data.document_create_date}
                            onChange={(e) => handleChange(e)}
                            type="date"
                            //fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Due In Date"
                            name="due_in_date"
                            value={data.due_in_date}
                            onChange={(e) => handleChange(e)}
                            type="date"
                            //fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br></br>
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Invoice Currency"
                            name="invoice_currency"
                            value={data.invoice_currency}
                            onChange={(e) => handleChange(e)}
                            //type="email"
                            //fullWidth
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Document Type"
                            name="document_type"
                            value={data.document_type}
                            onChange={(e) => handleChange(e)}
                            //type="email"
                            //fullWidth
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Posting ID"
                            name="posting_id"
                            value={data.posting_id}
                            onChange={(e) => handleChange(e)}
                            type="number"
                            //fullWidth
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
                            value={data.total_open_amount}
                            onChange={(e) => handleChange(e)}
                            type="number"
                            //fullWidth
                            variant="outlined"
                        />
                        <br></br>
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Baseline Create Date"
                            name="baseline_create_date"
                            value={data.baseline_create_date}
                            onChange={(e) => handleChange(e)}
                            type="date"
                            //fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px', display: 'stretch' }} >
                        <TextField sx={{ backgroundColor: "#fff", width: 240, borderRadius: 2 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Customer Payment Terms"
                            name="cust_payment_terms"
                            value={data.cust_payment_terms}
                            onChange={(e) => handleChange(e)}
                            //type="email"
                            //fullWidth
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
                            //type="email"
                            //fullWidth
                            variant="outlined"
                        />
                    </Box>
                </DialogContent>

                <DialogActions className={classes.root} sx={{ backgroundColor: "#283d4a" }}>
                    <Button variant='outlined' color='primary' onClick={handleSubmit}>ADD</Button>
                    <Button variant='outlined' color='primary' onClick={handleClose}>CANCEL</Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}

export default Add;