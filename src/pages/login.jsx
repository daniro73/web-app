import { 
  Box,
  Link,
  Card,
  Grid,
  Button,
  Typography,
  FormControl,
  TextField,  
} from "@mui/material"
import { useState } from "react"

function Login({screen , user, setUser, setMenu}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      backgroundImage: "url('./backgroundImgs/loginBG.jpg')",
      transition: 'height 1s cubic-bezier(.68,-0.55,.27,1.55), margin 1s cubic-bezier(.68,-0.55,.27,1.55)',
      position: 'relative'
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
                Sign in
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
              </FormControl>
              <Button type="submit" variant="contained"
                sx={{
                  mt: 2,
                  width: '100%'                  
                }}
              >
                Log in
              </Button>
            </Box>
            <Typography
              fontSize="sm"
              sx={{ mx: '20px', my: 4 , alignSelf: 'center' }}
            >
              Don&apos;t have an account? <Link component='a' onClick={()=>setMenu('register')}>Sing Up</Link>
            </Typography>
          </Grid>
        </Card>
    </Box>
    <Box >
      
    </Box>
    </>
  )
}

export default Login