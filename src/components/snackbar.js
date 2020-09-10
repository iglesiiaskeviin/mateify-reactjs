import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Container } from '@material-ui/core';


const Snackbar = () => {
    return (
        <Fragment>
            <Container>
                <Box boxShadow="3" my={15} mx={20} py={2}>
                    <Grid container="bool" direction="column" justify="center">
                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Snackbar;