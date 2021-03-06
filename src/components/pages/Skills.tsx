import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Fade } from 'react-awesome-reveal';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#fff",
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        img: {
            width: "100%",
        },
        paper: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        heading: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        textBlock: {
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        }

    })
);

export default function Skills() {

    const classes = useStyles();

    return (
        <section className={classes.root}>

            <Container>
                <Typography component="h2" variant="h3" className={classes.heading}>Skills</Typography>
                <hr />
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={8} >
                        <Fade>
                            <div className={classes.textBlock}>
                                <Typography gutterBottom variant="h5" component="h2" color="primary">
                                    Front End
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" paragraph>
                                    HTML | CSS | JavaScript | Bootstrap | jQuery | React
                            </Typography>
                                <Typography gutterBottom variant="h5" component="h2" color="primary">
                                    Back End
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" paragraph>
                                    Node.js | Express | MySQL | Sequelize | MongoDB | Mongoose | Heroku
                            </Typography>
                                <Typography gutterBottom variant="h5" component="h2" color="primary">
                                    Professional Skills
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" paragraph>
                                    IT/Network Management | Project/Team Management | Graphic-Design | Video Production | AWS/Cloudflare Cloud Experience | Training 
                            </Typography>
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </Container >

        </section >

    )

}
