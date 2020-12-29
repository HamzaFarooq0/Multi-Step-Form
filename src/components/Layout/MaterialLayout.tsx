import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { theme, useStyle } from './styles'

interface Props {
    children: JSX.Element[] | JSX.Element
  }

const MaterialLayout:React.FC<Props> = ({children}) => {
    const classes = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> <Header />
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    { children }
                </Paper>
            </div>
            <Footer />
        </ThemeProvider>
    )
}

export default MaterialLayout