import { React, useState } from "react";
import Nav from './Nav';
import Box from '@material-ui/core/Box';
import axios from "axios";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from './Table';
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

const Functionalities = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const addClick = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);
    //
    const [openEdit, setOpenEdit] = useState(false);
    const editClick = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [editValues, SeteditValues] = useState({});

    //
    const [openAdv, setOpenAdv] = useState(false);
    const advClick = () => setOpenAdv(true);
    const handleCloseAdv = () => setOpenAdv(false);
    const [AdvVal, setAdvVal] = useState({});
    const [advData, setAdvData] = useState({});
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    //
    const [openDelete, setOpenDelete] = useState(false);
    const deleteClick = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    //getting values from the advanced search
    const handleAdvChange = (e) => {
        const { name, value } = e.target;
        setAdvVal({
            ...AdvVal,
            [name]: value,
        });
    };
    //handler for edit entries
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        SeteditValues({
            ...editValues,
            [name]: value,
        });
    };
    //change handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    //

    //state creatio for add
    const [data, setData] = useState({});

    const onclick = () => {
        SeteditValues(" ");
        if (selectedRows > 0) {
            setOpenEdit(true);
        }
    };
    // console.log(AdvVal);

    const addData = async () => {
        await axios.post(
            `http://localhost:8080/HighRadius-Project/Add?business_code=${data.business_code}&cust_number=${data.cust_number}&clear_date=${data.clear_date}&buisness_year=${data.buisness_year}&doc_id=${data.doc_id}&posting_date=${data.posting_date}&document_create_date=${data.document_create_date}&due_in_date=${data.due_in_date}&invoice_currency=${data.invoice_currency}&document_type=${data.document_type}&posting_id=${data.posting_id}&total_open_amount=${data.total_open_amount}&baseline_create_date=${data.baseline_create_date}&cust_payment_terms=${data.cust_payment_terms}&invoice_id=${data.invoice_id}`
        );
    };
    // console.log(selectedRows);
    const editData = async () => {
        await axios.post(
            `http://localhost:8080/HighRadius-Project/Update?invoice_currency=${editValues.invoice_currency}&cust_payment_terms=${editValues.cust_payment_terms}&sl_no=${selectedRows[0]}`
        );
    };

    const delData = async () => {
        for (let i in selectedRows) {
            await axios.post(
                `http://localhost:8080/HighRadius-Project/Delete?sl_no=${selectedRows[i]}`
            );
        }
    };
    const AdvData = async () => {
        let res = await axios.post(
            `http://localhost:8080/HighRadius-Project/AdvanceSearch?doc_id=${AdvVal.doc_id}&invoice_id=${AdvVal.invoice_id}&cust_number=${AdvVal.cust_number}&buisness_year=${AdvVal.buisness_year}`
        );

        let x = res.data.Object;
        let y = x.map((Object, index) => ({ ...Object, "id": index }))
        setAdvData(y);
        handleShow();
        return x;
    };

    const classes = useStyles();
    return (
        <>
            <div>
                <Nav
                    addClick={addClick}
                    editClick={editClick}
                    deleteClick={deleteClick}
                    onclick={onclick}
                    advClick={advClick}
                />
                <Table
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                    AdvData={advData}
                    Show={show}
                />
            </div>
            <span>
                <Dialog style={{ backgroundColor: "rgba(0,0,0,0.3)" }} open={openAdd} onClose={handleCloseAdd} maxHeight="10%" maxWidth="lg" >
                    <DialogTitle style={{ backgroundColor: "#283d4a", color: "#fff" }}>ADD</DialogTitle>

                    <DialogContent style={{ backgroundColor: "#283d4a" }}>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Business Code"
                                name="business_code"
                                value={data.business_code}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Customer Number"
                                name="cust_number"
                                value={data.cust_number}
                                onChange={handleInputChange}
                                variant="outlined"
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Clear Date"
                                name="clear_date"
                                value={data.clear_date}
                                onChange={handleInputChange}
                                type="date"
                                //fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Buisness Year"
                                name="buisness_year"
                                value={data.buisness_year}
                                onChange={handleInputChange}
                                type="number"
                                maxWidth="15%"
                                variant="outlined"
                            />
                            <br></br>
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Document ID"
                                name="doc_id"
                                value={data.doc_id}
                                onChange={handleInputChange}
                                //type="email"
                                //fullWidth
                                variant="outlined"
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Posting Date"
                                name="posting_date"
                                value={data.posting_date}
                                onChange={handleInputChange}
                                type="date"
                                //fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Document Create Date"
                                name="document_create_date"
                                value={data.document_create_date}
                                onChange={handleInputChange}
                                type="date"
                                //fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Due In Date"
                                name="due_in_date"
                                value={data.due_in_date}
                                onChange={handleInputChange}
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
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Invoice Currency"
                                name="invoice_currency"
                                value={data.invoice_currency}
                                onChange={handleInputChange}
                                //type="email"
                                //fullWidth
                                variant="outlined"
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Document Type"
                                name="document_type"
                                value={data.document_type}
                                onChange={handleInputChange}
                                //type="email"
                                //fullWidth
                                variant="outlined"
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Posting ID"
                                name="posting_id"
                                value={data.posting_id}
                                onChange={handleInputChange}
                                type="number"
                                //fullWidth
                                variant="outlined"
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Total Open Amount"
                                name="total_open_amount"
                                value={data.total_open_amount}
                                onChange={handleInputChange}
                                type="number"
                                //fullWidth
                                variant="outlined"
                            />
                            <br></br>
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Baseline Create Date"
                                name="baseline_create_date"
                                value={data.baseline_create_date}
                                onChange={handleInputChange}
                                type="date"
                                //fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px', display: 'stretch' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Customer Payment Terms"
                                name="cust_payment_terms"
                                value={data.cust_payment_terms}
                                onChange={handleInputChange}
                                //type="email"
                                //fullWidth
                                variant="outlined"
                            />
                        </Box>
                        <Box component="span" sx={{ p: 1, border: '0px' }} >
                            <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Invoice ID"
                                name="invoice_id"
                                value={data.invoice_id}
                                onChange={handleInputChange}
                                //type="email"
                                //fullWidth
                                variant="outlined"
                            />
                        </Box>
                    </DialogContent>

                    <DialogActions className={classes.root} style={{ backgroundColor: "#283d4a" }} >
                        <Button variant='outlined' color='primary' onClick={(e) => { handleCloseAdd(); addData(); }}> Add </Button>
                        <Button variant='outlined' color='primary' onClick={handleCloseAdd} > Cancel </Button>
                    </DialogActions>
                </Dialog>
            </span>

            {/* for edit button */}
            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle style={{ backgroundColor: "#283d4a", color: "#fff" }}>EDIT</DialogTitle>

                <DialogContent style={{ backgroundColor: "#283d4a" }}>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Invoice Currency"
                            name="invoice_currency"
                            value={editValues.invoice_currency}
                            onChange={handleEditChange}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Customer Payment Terms"
                            name="cust_payment_terms"
                            value={editValues.cust_payment_terms}
                            onChange={handleEditChange}
                            variant="outlined"
                        />
                    </Box>
                </DialogContent>

                <DialogActions style={{ backgroundColor: "#283d4a" }} >
                    <Button variant='outlined' color='primary' onClick={(e) => { handleCloseEdit(); editData(); }} style={{ color: "white", border: "1px solid white", width: "50%" }}> Edit </Button>
                    <Button variant='outlined' color='primary' onClick={handleCloseEdit} style={{ color: "white", border: "1px solid white", width: "50%" }}> Cancel </Button>
                </DialogActions>
            </Dialog>

            {/*for delete button*/}
            <Dialog open={openDelete} onClose={handleCloseDelete}>
                <DialogTitle style={{ backgroundColor: "#283d4a", color: "#fff" }}>Delete Records ?</DialogTitle>

                <DialogContent style={{ backgroundColor: "#283d4a" }}>
                    <Box sx={{ color: '#fff', fontSize: 22 }}>
                        Are you sure you want to delete these record[s]?
                    </Box>
                </DialogContent>

                <DialogActions className={classes.root} style={{ backgroundColor: "#283d4a" }} >
                    <Button variant='outlined' color='primary' onClick={handleCloseDelete}>Cancel</Button>
                    <Button variant='outlined' color='primary' onClick={(e) => { handleCloseDelete(); delData(); }}> Delete </Button>
                </DialogActions>
            </Dialog>

            {/* for advance search */}
            <Dialog style={{ backgroundColor: "rgba(0,0,0,0.3)" }} open={openAdv} onClose={handleCloseAdv} maxHeight="10%" maxWidth="lg">
                <DialogTitle style={{ backgroundColor: "#283d4a", color: "#fff" }}>Advance Search</DialogTitle>

                <DialogContent style={{ backgroundColor: "#283d4a" }}>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Document ID"
                            name="doc_id"
                            value={AdvVal.doc_id}
                            onChange={handleAdvChange}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Invoice ID"
                            name="invoice_id"
                            value={AdvVal.invoice_id}
                            onChange={handleAdvChange}
                            variant="outlined"
                        />
                    </Box>
                    <br></br>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Customer Number"
                            name="cust_number"
                            value={AdvVal.cust_number}
                            onChange={handleAdvChange}
                            variant="outlined"
                        />
                    </Box>
                    <Box component="span" sx={{ p: 1, border: '0px' }} >
                        <TextField style={{ backgroundColor: "#fff", width: 240, borderRadius: 8 }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Buisness Year"
                            name="buisness_year"
                            value={AdvVal.buisness_year}
                            onChange={handleAdvChange}
                            type="number"
                            maxWidth="15%"
                            variant="outlined"
                        />
                    </Box>
                </DialogContent>

                <DialogActions style={{ backgroundColor: "#283d4a" }}>
                    <Button variant='outlined' color='primary' onClick={(e) => { handleCloseAdv(); AdvData(); }} style={{ color: "white", border: "1px solid white", width: "50%" }}>Search</Button>
                    <Button variant='outlined' color='primary' onClick={handleCloseAdv} style={{ color: "white", border: "1px solid white", width: "50%" }} > Cancel </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
export default Functionalities;