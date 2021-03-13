import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  buttons: {
    textTransform: "none",
    fontWeight: "300",
  },
  links: {
    textDecoration: "none",
  },
  flexRight:{
    display:"flex",
    flexDirection:"row-reverse"
  }
});

function ProjectCard(props) {
  const { classes } = props;

  const handleLinks = ()=>{
    window.open("https://crowndfunding-product-page.vercel.app/");
  }
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleLinks}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="auto"
            src="images/1.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Crowdfunding Product Page
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              HTML | CSS | JS
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.flexRight}>
          <Button size="small" color="primary" className={classes.buttons}>
            <a
              href="https://crowndfunding-product-page.vercel.app/"
              className={classes.links}
              target="_blank"
            >
              View
            </a>
          </Button>
          <Button size="small" color="primary" className={classes.buttons}>
          <a
              href="https://github.com/ThyChristiansen/crowndfunding-product-page"
              className={classes.links}
              target="_blank"
            >
              Code
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default withStyles(useStyles)(ProjectCard);
