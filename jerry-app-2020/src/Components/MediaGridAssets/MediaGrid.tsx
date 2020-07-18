import React, {useState, useEffect} from 'react';
import './MediaGrid.css';

import {Grid} from '@material-ui/core';

import MediaCard from '../MediaCardAssets/MediaCard';

interface IState
{
    media: any[];
    title: string;
    abstract: string;
    url: string;
}

interface IMediaGridProps
{
    UsernameQuery: (string | null);
    TimePeriod: (string | null);
}

function MediaGrid(props: IMediaGridProps)
{
    const [ItemArray, setItemArray] = useState<IState[]>([{media: [], title: '', abstract: '', url: ''}]);

    useEffect(() => 
    {
        fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/' + props.TimePeriod + '.json?api-key=wzsBUGCJgcjYHWsEqm5tulawvJjOltXg')
            .then(response => response.json())
            .then(response => {
                setItemArray(response.results)
            })
            .catch(() => console.log("it did not work")
            );
    }, [props.TimePeriod]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => 
    {
        if (!el || !el.media[0] || !el.title || !el.abstract || !el.url)
        {
            return;
        }

        Cards.push(
            <Grid item key={"card_" + i} sm={6} md={4} lg={3} className="MediaGeidCard">
                <MediaCard ImageUrl={el['media'][0]['media-metadata'][1]['url']} Title={el['title']} Abstract={el['abstract']} ArticleUrl={el['url']}/>
            </Grid>
        )
    })






    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid;