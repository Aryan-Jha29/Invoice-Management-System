import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { getData } from '../services/data';
import RefreshIcon from '@material-ui/icons/Refresh';

const Refresh = () => {

    const [data, setData] = useState([]);

    const refresh = () => {
        // re-renders the component
        // setData({ getData });
        window.location.reload();
    }

    return (
        <span>
            <Button variant="outlined" color="primary" onClick={refresh} startIcon={<RefreshIcon />}></Button>
        </span>
    );
}

export default Refresh;