import { Grid } from "@material-ui/core";
import React from "react";

function Footer() {
    return (
        <div>
            <Grid style={{ background: '#2d4250', paddingTop: "20px", paddingLeft: "35%", display: "flex", height: "180px" }}>
                <Grid>
                    <a href="##" style={{ color: "blue" }}>
                        Privacy Policy
                    </a>
                </Grid>
                <Grid>
                    <span style={{ color: "white" }}>
                        | &#169; 2022 HighRadius Corporation. All rights reserved.
                    </span>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;