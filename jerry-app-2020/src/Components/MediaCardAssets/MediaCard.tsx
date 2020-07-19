import React from 'react';
import './MediaCard.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

interface IMediaCardProps
{
    ImageUrl: string | undefined;
    Title: string | undefined;
    Abstract: string | undefined;
    ArticleUrl: string | undefined;
}

function MediaCard(props: IMediaCardProps)
{
    return (
        <div>
            <Card className="MediaCardContainer">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.Title}
                        height="140"
                        image={props.ImageUrl}
                        title={props.ImageUrl}
                        className="MediaCardImage"
                    />
                    <CardContent className="card-body">
                        <div>
                            <Typography gutterBottom variant="h5" component="h2" className="MediaCardTitle">
                                {props.Title}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" color="textSecondary" component="p" className="MediaCardAbstract">
                                {props.Abstract}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={props.ArticleUrl}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MediaCard;