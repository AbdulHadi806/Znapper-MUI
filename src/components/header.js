import { AppBar,Toolbar, Typography, useTheme,Button } from "@mui/material";
import Link from '@mui/material/Link';


export default function Header() {
  const theme = useTheme()
  const arr = ['Why Znapper?', 'How it Works', 'Browse Our Znappers']
  return (
    <AppBar sx={{ bgcolor: 'background.light' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <a href="#"><img src="images/znapbook.png"></img></a>
        <Typography variant = 'ul' sx={{ display: 'flex', justifyContent: 'center' }}>
          {arr.map((val)=> {
            return (<Link   variant="a" sx={{ color: 'primary.dark', pr: 2 }} >{val}</Link>)
          })}
        </Typography>
        <Button sx={{ color: 'primary.dark'}}>P: (877) 516-5072</Button>
      </Toolbar>
    </AppBar>
  );
}
