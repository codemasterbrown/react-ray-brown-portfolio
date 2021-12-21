import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import heroImg from '../../assets/images/main-hero.jpg'
import { Slide } from 'react-awesome-reveal';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        hero: {
            height: 400,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover"
        },
        title: {
            paddingTop: 50,
            color: "#fff",
        }
    })
);

// Hero image and page title
export default function Hero() {

    const classes = useStyles();

    return (
        <section className={classes.hero}>
            <Container>
                <div className={classes.title}>
                    <Slide direction="left">
                        <Typography variant="h2" component="h1">Ray Brown</Typography>
                        <Typography component="h2" variant="h5">Full Stack Web Developer</Typography>
                    </Slide>
                </div>
            </Container>
        </section>
    )
}