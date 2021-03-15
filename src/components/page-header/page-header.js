import React from 'react';
import {Card, Paper, Typography} from "@material-ui/core";
import styles from "./page-header.module.scss"


const PageHeader = ({title, subTitle, icon}) => {
    return (
        <Paper elevation={3} square className={styles.container}>
            <div>
                <Card>
                    {icon}
                </Card>
                <div>
                    <Typography
                        variant={"h6"}
                        component={"div"}>
                        {title}
                    </Typography>
                    <Typography
                        variant={"subtitle2"}
                        component={"div"}>
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    );
};

export default PageHeader;