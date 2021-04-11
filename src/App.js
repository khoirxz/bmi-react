import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// components & pages
import Header from "./components/Header/header";
import Main from './pages/main/Main'
import About from "./pages/about/About";
import Footer from "./components/Footer/footer";
import "./styles.css";

class App extends React.Component {

    render() {
        return (
            <div className="sm:w-full md:w-3/6 lg:w-3/5 m-auto">
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <Main />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
