import {
  Button,
  Box,
  Typography,
  IconButton,
  Grow
} from "@mui/material";
import { useState } from "react";
import {Menu as MenuIcon} from '@mui/icons-material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ModeSwitcher from '../darkMode/switcher';
import ModeToggle from "../darkMode/toggle";


function Menu({
  screen,
  token,
  menu,
  setMenu,
  mode,
  setMode
}) {
  const [menuToggle, setMenuToggle] = useState(false);
  return(
    <ClickAwayListener onClickAway={()=>{ (menuToggle) && setMenuToggle(false)}}>
      <Box
        position='fixed'
        zIndex={3}
        width='100vw'
        justifyItems={'center'}
      >
        <Box 
          display='flex'
          justifyContent='space-between'
          left='0'
          mx= {
            ((screen==='desktop') && '20vw') ||
            ((screen==='tablet') && '15vw') ||
            ((screen==='mobile') && '7vw')
          }
          my={2}
          alignItems='center'
          sx={{
            overflow: 'hidden',
            borderRadius: '10rem',
            backgroundColor: 'rgba(255,255,255,0.5)',
            backdropFilter: 'saturate(200%) blur(10px)',
            boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(20, 20, 20, 0.12),0rem 0.125rem 0.25rem -0.0625rem rgba(20, 20, 20, 0.07)',
          }}
          px={3}
          py={1}
        >
          {
            (token) ?
            (
            <Box
              justifyContent='space-between'
              gap={1}
              display='flex'
              alignItems='center'
              on
            >
              {(screen!=='mobile') ?
               (
                <>
                <Typography sx={{margin: '0 2vw 0 1vw'}} component='span' variant="h6">{menu}</Typography>
                <Button onClick={()=>setMenu('home')} >Home</Button>
                <Button onClick={()=>setMenu('profile')} >Profile</Button>
                <Button onClick={()=>setMenu('logout')} >Logout</Button>
                <Button onClick={()=>setMenu('info')} >Info</Button>
                </>
               ):
               (
                <IconButton onClick={()=>{setMenuToggle(menuToggle ? false:true)}}>
                  <MenuIcon />
                  <Typography mx='10px' component='span' variant="h5">Menu</Typography>
                </IconButton>
               )
              }
            </Box>
            ) :
            (
            <Box justifyContent='space-between' gap={1} display='flex' alignItems='center' >
              {(screen!=='mobile') ?
               (
                <>
                <Typography sx={{ minWidth: '20%', margin: '0 2vw 0 1vw'}} component='span' variant="h6">{menu.toUpperCase()}</Typography>
                <Button onClick={()=>setMenu('home')} >Home</Button>
                <Button onClick={()=>setMenu('login')} >Login</Button>
                <Button onClick={()=>setMenu('register')} >Register</Button>
                <Button onClick={()=>setMenu('info')} >Info</Button>
                </>
               ):(
                <IconButton onClick={()=>{setMenuToggle(menuToggle ? false:true)}}>
                  <MenuIcon />
                  <Typography mx='10px' component='span' variant="h5">Menu</Typography>
                </IconButton>
               )
              }
            </Box>
            )
          }
          {
            (screen !=='mobile')?
            (
              <ModeSwitcher mode={mode} setMode={setMode} />
            ):(
              <>
              <ModeToggle mode={mode} setMode={setMode} />
              </>
              
            )
          }
        </Box>
        {(screen === 'mobile') &&
         (
          <Box 
            display={(menuToggle) ? 'flex' : 'none'}
            flexDirection='column'
            left='0'
            mx= {
              ((screen==='desktop') && '25vw') ||
              ((screen==='tablet') && '20vw') ||
              ((screen==='mobile') && '12vw')
            }
            my={-1}
            alignItems='center'
            sx={{
              overflow: 'hidden',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255,255,255,0.5)',
              backdropFilter: 'saturate(200%) blur(10px)',
              boxShadow: '0rem 0.5rem 0.375rem -0.0625rem rgba(20, 20, 20, 0.12),0rem 0.125rem 0.25rem -0.0625rem rgba(20, 20, 20, 0.07)',
            }}
          >
            {
              (token)?
              (
                <>
                <Grow in={menuToggle}>
                  <Button  sx={{width: '100%'}} onClick={()=>setMenu('home')} >Home</Button>
                </Grow>
                <Grow in={menuToggle} style={{ transformOrigin: '0 0 0' }}
                  {...(menuToggle ? { timeout: 200 } : {})}
                >
                  <Button sx={{width: '100%'}} onClick={()=>setMenu('profile')} >Profile</Button>
                </Grow>
                <Grow in={menuToggle} style={{ transformOrigin: '0 0 0' }}
                  {...(menuToggle ? { timeout: 400 } : {})}
                >
                  <Button sx={{width: '100%'}} onClick={()=>setMenu('logout')} >Logout</Button>
                </Grow>
                <Grow in={menuToggle} style={{ transformOrigin: '0 0 0' }}
                  {...(menuToggle ? { timeout: 600 } : {})}
                >
                  <Button sx={{width: '100%'}} onClick={()=>setMenu('info')} >Info</Button>
                </Grow>
                </>
              ):
              (
                <>
                <Grow in={menuToggle}>
                  <Button variant="contained" sx={{width: '100%'}} onClick={()=>setMenu('home')} >Home</Button>
                </Grow>
                <Grow in={menuToggle} style={{ transformOrigin: '0 0 0' }}
                  {...(menuToggle ? { timeout: 700 } : {})}
                >
                  <Button sx={{width: '100%'}} onClick={()=>setMenu('login')} >Login</Button>
                </Grow>
                <Grow in={menuToggle} style={{ transformOrigin: '0 0 0' }}
                  {...(menuToggle ? { timeout: 900 } : {})}
                >
                  <Button sx={{width: '100%'}} onClick={()=>setMenu('register')} >Register</Button>
                </Grow>
                <Grow in={menuToggle} style={{ transformOrigin: '0 0 0' }}
                  {...(menuToggle ? { timeout: 1100 } : {})}
                >
                  <Button sx={{width: '100%'}} onClick={()=>setMenu('info')} >Info</Button>
                </Grow>
                </>
              )
            }
          </Box>
         )
        }
      </Box>
    </ClickAwayListener>
  )
}
export default Menu

