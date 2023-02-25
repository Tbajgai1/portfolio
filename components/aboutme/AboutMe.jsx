
import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import ListItem from '@mui/material/ListItem';

import styles from "../../styles/Home.module.css";


const AboutMe = () => {
    return (
        <Box
            className = {styles.aboutMe}
            sx={{
                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
            }}
            >
            <ListItem sx={{ gridRow: '1', gridColumn: 'span 3' }}
                className = {styles.listItem1}
            >
                span 2
            </ListItem>
            {/* The second non-visible column has width of 1/4 */}
            <ListItem sx={{ gridRow: '1', gridColumn: '4 / 5' }}
                className = {styles.listItem2}
            >
                4 / 5
            </ListItem>
        </Box>
    )
}

export default AboutMe;