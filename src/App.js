import './App.css';
import {Header} from "./components/Header/Header";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contact} from "./components/Contact/Contact";
import {Main} from "./components/Main/Main";
import {Hi} from "./components/Hi/Hi";
import SnackbarProvider from 'react-simple-snackbar'

export const App = () => {
    return (
        <SnackbarProvider>
            <div className="App">
                <Header/>
                <Main/>
                <Hi/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </SnackbarProvider>
    );
}