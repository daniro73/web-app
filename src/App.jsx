import { useState, useEffect } from 'react';import Layout from "./pages/layout";
import Menu from './components/menu';
import {Home, Info, Login, Logout, Profile, Register} from './pages';
import {
  useMediaQuery,
} from "@mui/material";

const handleWindowResize = () => {
  return(
    ((window.innerWidth <= 764) && 'mobile') ||
    ((window.innerWidth >= 1080) && 'desktop') ||
    ((window.innerWidth < 1080 && window.innerWidth > 764) && 'tablet')
  );
};

function App() {
  const [screen, setScreen] = useState( handleWindowResize() );
  const [menu, setMenu]=useState('home');
  const [user, setUser]=useState({});
  const [theme, setTheme]=useState();
  const [mode, setMode]= useState( useMediaQuery('(prefers-color-scheme: dark)') ? 'dark': 'light' );

  useEffect(() => {

    window.addEventListener('resize', ()=>{setScreen(handleWindowResize())});

    return () => {
      window.removeEventListener('resize', ()=>{setScreen(handleWindowResize())});
    };
  },[]);
  
  return (
    <Layout mode={mode} theme={theme}>
      <Menu screen={screen} token={user.token} menu={menu} setMenu={setMenu} mode={mode} setMode={setMode}/>
      {
        ( menu==='home' && <Home />) ||
        ( menu==='info' && <Info /> ) ||
        ( menu==='login' && <Login screen={screen} setMenu={setMenu} user={user} setUser={setUser}/> ) ||
        ( menu==='logout' && <Logout user={user} setUser={setUser}/> ) ||
        ( menu==='profile' && <Profile user={user} setUser={setUser}/> ) ||
        ( menu==='register' && <Register screen={screen} setMenu={setMenu} user={user} setUser={setUser}/> )
      }

    </Layout>
  );
}

export default App;
