import { 
  Box,
  Card,
  Grid,
  Button,
  Typography,
  FormControl,
  TextField,  
} from "@mui/material"
import { useState } from "react"
import './animation.css'

function Regiser({screen , user, setUser, setMenu}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState({});
  return (
    <>
    <Box sx={{
      maxWidth: (screen === 'mobile') ? '100vw' : '95vw',
      height: (screen === 'mobile') ? '70vh' : '50vh',
      margin: (screen === 'mobile') ? '0' : '15px auto 0 auto',
      borderRadius: (screen === 'mobile') ? '0 0 50% 50%': '24px',
      backgroundColor: 'black',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: " linear-gradient(45deg,#f17c58,#e94584,#24aadb,#27dbb1,#ffdc18), url('./backgroundImgs/registerBG.jpg')",
      transition: 'height 1s cubic-bezier(.68,-0.55,.27,1.55), margin 1s cubic-bezier(.68,-0.55,.27,1.55)',
      position: 'relative',
      animation: 'BgMorphing 10s linear infinite',
      animationDirection: 'alternate',
      backgroundSize: '600% 100%'
      }}
    />
    
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Card sx={{
        overflow: 'visible',
        borderRadius: '1rem',
        maxWidth: (screen === 'mobile') ? '70vw' : '45vw',
        maxHeight: 'fit-content',
        transition: 'width 1s cubic-bezier(.68,-0.55,.27,1.55)',
        position:'relative',
        bottom: (screen === 'mobile') ? '35vh' : '20vh',
      }}
      >
        <Grid container sx={{
          height: 0,
          bottom:'10vh',
          position:'relative',
          justifyContent: 'center'
          }}>
          <Typography color='Window' component='h2'fontSize='2rem'>
            Welcome!
          </Typography>
        </Grid>
        <Grid mt='20px' container direction='column'>
          <Box px='20px' py='5px' >
            <Typography display='inline-block' component='h1' variant="h4">
              Sign up
            </Typography>
            <Typography component='span' variant="body2" >
              &nbsp;to continue.
            </Typography>
          </Box>
          <Box
            mx='40px'
            mt='20px'
            role='form'
            component='form'
            autoComplete="on"
          >
            <FormControl
              required
              fullWidth
              >
                <TextField
                  required
                  type='text'
                  id="username"
                  label='username'
                  autoComplete='on'
                  variant='standard'
                  helperText='example @username'
                  value={username}
                  error={(error.username)}
                  onChange={(e)=>{setUsername(e.target.value)}}
                  sx={{marginTop: '5px'}}
                />
                <TextField
                  required
                  type='password'
                  id="password"
                  label='password'
                  autoComplete='on'
                  variant='standard'
                  helperText='example password'
                  value={password}
                  error={(error.password)}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  sx={{marginTop: '15px'}}
                />
                <TextField
                  required
                  type='tel'
                  id="phoneNumber"
                  label='phone number'
                  autoComplete='on'
                  variant='standard'
                  helperText='example +989123456789'
                  value={phone}
                  error={(error.phone)}
                  onChange={(e)=>{setPassword(e.target.value); console.log(e.target.value);}}
                  sx={{marginTop: '15px'}}
                />
            </FormControl>
            <Button type="submit" variant="contained"
              sx={{
                mt: 3,
                mb: 4,
                width: '100%'                  
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Card>
      </Box>
    <Box >
      
    </Box>
    </>
  )
}

export default Regiser