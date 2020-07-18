import React, {useState} from 'react';
import './SearchBar.css';

import {Grid, TextField, Button} from '@material-ui/core';

import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {IUserInput} from '../../Common/Interfaces';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

    




//     const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }),
// );







    return (
        <div className="SearchBarContainer">
            <Grid container spacing={1}>
                <Grid item xs={6} sm={3}>
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

                <Grid item xs={6} sm={3}>
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

                <Grid item xs={6} sm={3}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <div className="SearchBarContainer">
    //         <Grid container spacing={3}>
    //             <Grid item xs={12} sm={3}>
    //                 <FormControl>
    //                     <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    //                         <Select
    //                         style={{width: `200px`}}
    //                         inputProps={{
    //                             name: 'age',
    //                             id: 'age-native-simple',
    //                         }}
    //                         >
    //                         <option aria-label="None" value="" />
    //                         <option value={10}>Ten</option>
    //                         <option value={20}>Twenty</option>
    //                         <option value={30}>Thirty</option>
    //                         </Select>
    //                 </FormControl>
    //             </Grid>
            
    //         {/* <FormControl>
    //             <InputLabel id="input-label">Time Period</InputLabel>
    //                 <Select>
    //                 <option aria-label="None" value="" />
    //                 <option value={1}>1 day</option>
    //                 <option value={7}>7 days</option>
    //                 <option value={30}>30 days</option>
    //                 </Select>
    //         </FormControl> */}
    //             {/* <Grid item xs={6} sm={3}>
    //                 <TextField
    //                     required
    //                     id="outlined-required"
    //                     label="Search"
    //                     variant="outlined"
    //                     error={HasFocus && SearchQuery === ""}
    //                     onClick={() => setHasFocus(true)}
    //                     value={SearchQuery}
    //                     onChange={e => handleSearchQueryChange(e.target.value)}
    //                 />
    //             </Grid>

    //             <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //                 <Grid item xs={6} sm={3}>
    //                     <KeyboardDatePicker
    //                         disableToolbar
    //                         variant="inline"
    //                         format="MM/dd/yyyy"
    //                         margin="normal"
    //                         id="StartDate"
    //                         label="Start Date (optional)"
    //                         value={StartDate}
    //                         onChange={handleStartDateChange}
    //                         KeyboardButtonProps=
    //                         {
    //                             {'aria-label': 'change date',}
    //                         }
    //                     />
    //                 </Grid>
    //                 <Grid item xs={6} sm={3}>
    //                     <KeyboardDatePicker
    //                         disableToolbar
    //                         variant="inline"
    //                         format="MM/dd/yyyy"
    //                         margin="normal"
    //                         id="EndDate"
    //                         label="End Date (optional)"
    //                         value={EndDate}
    //                         onChange={handleEndDateChange}
    //                         KeyboardButtonProps=
    //                         {
    //                             {'aria-label': 'change date',}
    //                         }
    //                     />
    //                 </Grid>
    //             </MuiPickersUtilsProvider>

    //              */}

    //             <Grid item xs={6} sm={3}>
    //                 <Button variant="contained" color="primary" onClick={handleSubmit}>
    //                     Search
    //                 </Button>
    //             </Grid>
    //         </Grid>
    //     </div>
}

export default SearchBar;