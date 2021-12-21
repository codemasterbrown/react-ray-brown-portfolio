import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import headshot from '../../assets/images/rbrown.jpg';
import { Fade } from 'react-awesome-reveal';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(255,255,255)",
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        container: {
            paddingBottom: theme.spacing(4),

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
            margin: theme.spacing(1)
        },
        contact: {
            paddingLeft: theme.spacing(1),
            margin: 0
        },
        icons: {
            fontSize: "5rem",
        },
        iconGroup: {
            textAlign: "center"
        },
        email: {
            color: "#ff3333",

        }


    })
);
// About component with contact links
export default function About() {

    const classes = useStyles();

    return (
        <section id="about" className={classes.root}>
            <Container className={classes.container}>
                <Typography component="h2" variant="h3" className={classes.heading}>About Me</Typography>
                <hr />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <Fade>

                            <Paper className={classes.paper}>

                                <img src={headshot}
                                    className={classes.img} alt="Headshot" />
                            </Paper>
                        </Fade>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Fade>
                                    <Typography variant="h5" component="h3" className={classes.heading}>
                                        Contact me:
                                </Typography>

                                    <Typography className={classes.contact} variant="body1" paragraph >
                                        <small>Phone: (937) 853-7707</small>
                                    </Typography>
                                    <Typography className={classes.contact} variant="body1" paragraph >
                                        <small>Email: <a className={classes.email} href="mailto:raynarde.brown@gmail.com">raynarde.brown@gmail.com</a></small>
                                    </Typography>
                                </Fade>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={7} >
                        <Fade>
                            <div className={classes.textBlock}>
                                <Typography variant="body1" paragraph >
                                Full Stack Developer with over a decade of front end experience. 
                                Worked with marketing agencies and now expanding my knowledge to backend. 
                                I plan to graduate with my full stack certification and place with a upward agency that can utilize 
                                all that I bring to the table. I'm looking forward to all of my future potential endeavors and oppourtunities.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    When I'm not coding, you'll find me playing keys or dj'ing or spending 
                                    time with friends and loved ones.
                        </Typography>
                            </div>
                        </Fade>
                        <Grid container spacing={2} className={classes.iconGroup}>
                            <Grid item xs={4}>

                                <IconButton color="primary" href="https://github.com/codemasterbrown" title="GitHub" target="_blank" >
                                    <i className={`fab fa-github-square ${classes.icons}`}></i>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} >
                                <IconButton color="primary" href="https://www.linkedin.com/in/ray-brown-01a01b31/" title="LinkedIn" target="_blank">
                                    <i className={`fab fa-linkedin ${classes.icons}`}></i>
                                </IconButton>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Container >
        </section >

    )

}
