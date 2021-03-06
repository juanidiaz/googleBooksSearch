import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../Button';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 340,
    },
};

function MediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        Written by: {props.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions onClick={props.isSaved ? null : () => {props.handleSaveBook(props)} }>
                <Button
                    text={props.isSaved ? 'SAVED' : 'Save book'}
                    color={props.isSaved ? 'warning' : 'success'}
                />
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
