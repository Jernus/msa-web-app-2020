import React, {useState} from 'react';
import './SearchBar.css';

import {Grid, TextField, Button} from '@material-ui/core';

import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {IUserInput} from '../../Common/Interfaces';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

interface ISearchBarProps
{
    SetUserInput: (a: IUserInput) => void;
}

// props: ISearchBarProps
function SearchBar()
{
    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) =>
    {
        setSearchQuery(s);
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const [StartDate, setStartDate] = useState<Date | null>(new Date('2019-01-01'),);
    const [EndDate, setEndDate] = useState<Date | null>(new Date('2020-01-01'),);
    const handleStartDateChange = (date: Date | null) =>
    {
        setStartDate(date);
    }
    const handleEndDateChange = (date: Date | null) =>
    {
        setEndDate(date);
    }

    const handleSubmit = () =>
    {
        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "")
        {
            let UserInput: IUserInput = 
            {
                SearchQuery: SearchQuery,
                StartDate: StartDate,
                EndDate: EndDate
            }

            // datePickerDefaultProps.SetUserInput(UserInput);
        }
        else
        {
            setHasFocus(true);
        }
    }

    return <div className="SearchBarContainer">
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Search"
                        variant="outlined"
                        error={HasFocus && SearchQuery === ""}
                        onClick={() => setHasFocus(true)}
                        value={SearchQuery}
                        onChange={e => handleSearchQueryChange(e.target.value)}
                    />
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6} sm={3}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="StartDate"
                            label="Start Date (optional)"
                            value={StartDate}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps=
                            {
                                {'aria-label': 'change date',}
                            }
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="EndDate"
                            label="End Date (optional)"
                            value={EndDate}
                            onChange={handleEndDateChange}
                            KeyboardButtonProps=
                            {
                                {'aria-label': 'change date',}
                            }
                        />
                    </Grid>
                </MuiPickersUtilsProvider>

                <Grid item xs={6} sm={3}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </div>
}

export default SearchBar;