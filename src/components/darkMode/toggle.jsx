import { IconButton } from "@mui/material";
import {Brightness4 , Brightness7} from '@mui/icons-material';
export default function ModeToggle({mode, setMode}) {

    return (
      <IconButton
        sx={{ m: 1 }}
        onClick = {()=>{
          setMode(mode === 'light' ? 'dark' : 'light')
        }}
        color='inherit'
      >
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    );
  }