import React, { useEffect, useState } from 'react';
import { getData } from '../services/data';
import { makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles({
    root: {
        "& .MuiDataGrid-columnHeaderTitle": {
            overflow: "visible",
            lineHeight: "0.9rem",
            whiteSpace: "normal",
        },
        '& .MuiTablePagination-root:last-child': {
            color: 'white',
        },
        "& .MuiSelect-icon": {
            color: ' white',
        },
        '& .MuiCheckbox-root': {
            color: "white",
            '&.Mui-checked': {
                color: "#3f51b5",
            },
        },
    }
});
const Table = ({ setSelectedRows, selectedRows, AdvData, Show }) => {

    const classes = useStyles();
    const [data, setData] = useState([]);
    const columns = [
        { field: "sl_no", headerName: "Sl no", width: 72 },
        { field: "business_code", headerName: "Business Code", width: 112 },
        { field: "cust_number", headerName: 'Customer Number', width: 112 },
        { field: "clear_date", headerName: 'Clear Date', width: 112 },
        { field: "buisness_year", headerName: 'Buisness Year', width: 112 },
        { field: "doc_id", headerName: 'Document ID', width: 112 },
        { field: "posting_date", headerName: 'Posting Date', width: 112 },
        { field: "document_create_date", headerName: 'Document Create Date', width: 112 },
        { field: "due_in_date", headerName: "Due Date", width: 112 },
        { field: "invoice_currency", headerName: 'Invoice Currency', width: 112 },
        { field: "document_type", headerName: 'Document Type', width: 112 },
        { field: "posting_id", headerName: "Posting ID" },
        { field: "total_open_amount", headerName: "Total Open Amount" },
        { field: "baseline_create_date", headerName: "Baseline Create Date", width: 112 },
        { field: "cust_payment_terms", headerName: "Customer Payment Terms", width: 112 },
        { field: "invoice_id", headerName: "Invoice ID", width: 112 },
    ];

    // useEffect(async () => {
    //     setData(await getData())
    // }, []);

    useEffect(() => {
        if (Show === true) {
            setData(AdvData);
        } else {
            async function fetchData() {
                setData(await getData());
            }
            fetchData();
        }
    }, [Show]);

    const [pageSize, setPageSize] = React.useState(10);


    return (
        <div style={{ height: '475px', width: '100%' }}>
            <DataGrid className={classes.root} headerHeight={85} style={{ text: 'white', backgroundColor: '#283d4a', color: 'white', borderColor: 'white' }}
                sx={{
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                    '& .MuiPagination-root': {
                        color: '#fff',
                        text: 'center',
                    },
                }}
                getRowId={(s) => s.sl_no}
                rows={data}
                columns={columns}
                rowHeight={32}
                checkboxSelection
                // onSelectionModelChange={(ids) => {
                //     const selectedIDs = new Set(ids);
                //     console.log(selectedIDs);
                // }}
                onSelectionModelChange={setSelectedRows}

                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                pagination
            // {...data}

            />
        </div>
    )
};

export default Table;