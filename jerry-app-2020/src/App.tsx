import React, { useState } from 'react';
import './App.css';

import Header from './Components/HeaderAssets/Header';
import SearchBar from './Components/SearchBarAssets/SearchBar';
import MediaGrid from './Components/MediaGridAssets/MediaGrid';

import {IUserInput} from './Common/Interfaces';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme(
  {
    breakpoints: 
    {
      values: 
      {
        xs: 0,
        sm: 700,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  }
)

function App() 
{
  const [UserInput, setUserInput] = useState<IUserInput>({
    UsernameQuery: "Jernus",
    TimePeriod: "30",
  });

  function SetUserInput(a: IUserInput)
  {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header/>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
        <MediaGrid UsernameQuery={UserInput.UsernameQuery} TimePeriod={UserInput.TimePeriod}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;