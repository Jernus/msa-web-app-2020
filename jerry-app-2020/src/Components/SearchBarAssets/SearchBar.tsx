import React, {useState} from 'react';
import './SearchBar.css';

import {Grid, TextField, Button} from '@material-ui/core';

import {IUserInput} from '../../Common/Interfaces';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

interface ISearchBarProps
{
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps)
{
    const [UsernameQuery, setUsernameQuery] = useState<string | null>("");
    const handleUsernameQueryChange = (s: string | null) =>
    {
        setUsernameQuery(s);
    }

    const [TimePeriod, setTimePeriod] = React.useState('');
    const handleTimePeriodChange = (event: React.ChangeEvent<{value: unknown}>) => 
    {
        setTimePeriod(event.target.value as string);
    }

    const handleSubmit = () =>
    {
        if (UsernameQuery?.length !== 0 && UsernameQuery !== null && UsernameQuery !== "")
        {
            let UserInput: IUserInput = 
            {
                UsernameQuery: UsernameQuery,
                TimePeriod: TimePeriod
            }

            props.SetUserInput(UserInput);
        }
        else
        {
            setHasFocus(true);
        }
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    return (
        <div className="SearchBarContainer">
            <div>
            <Grid container spacing={1} justify="center" direction="row" alignItems="center">
                <Grid item xs={6} sm={2} id="username-field">
                    <TextField
                        required
                        id="username"
                        label="Your name"
                        variant="outlined"
                        error={HasFocus && UsernameQuery === ""}
                        onClick={() => setHasFocus(true)}
                        value={UsernameQuery}
                        onChange={e => handleUsernameQueryChange(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6} sm={3} id="time-field">
                    <FormControl>
                        <InputLabel>Time Period</InputLabel>
                        <Select 
                            style={{width: `200px`}}
                            value={TimePeriod}
                            onChange={handleTimePeriodChange}>
                            <MenuItem value={1}>1 day</MenuItem>
                            <MenuItem value={7}>7 days</MenuItem>
                            <MenuItem value={30}>30 days</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} sm={1} id="submit-button">
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            </div>
            
        </div>
    )
}

export default SearchBar;