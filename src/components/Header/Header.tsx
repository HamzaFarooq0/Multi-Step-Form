import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import useStyle from './styles'

const Header:React.FC = () => {
    const classes = useStyle();
    return(
       <AppBar position="absolute" color="default" className={classes.appBar}>
           <ToolBar>
               <Typography variant="h6" color="inherit" noWrap>
                    Multi-Step Formik
               </Typography>
           </ToolBar>
       </AppBar> 
    )
}

export default Header