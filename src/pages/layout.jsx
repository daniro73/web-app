import {ThemeProvider , createTheme } from "@mui/material/styles";
import {CssBaseline} from "@mui/material"

function setTheme(mode,theme){
    if(theme && theme.palette){ theme.palette.mode = mode; }
    else { theme = {palette: {mode}} }
    return createTheme(theme);
}

function Layout({mode, theme, children}) {

  return (
    <ThemeProvider theme={ setTheme(mode,theme) }>
        <CssBaseline />
          {children}
    </ThemeProvider>
  )
}

export default Layout