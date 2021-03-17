import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Line from './pages/Line';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <ul class='links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/step1">step1</Link></li>
                <li><Link to="/step2">step2</Link></li>
                <li><Link to="/step3">step3</Link></li>
                <li><Link to="/Line">Line</Link></li>
            </ul>
            <div class="content">
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/step1">
                    <Step1/>
                </Route>
                <Route path="/step2">
                    <Step2/>
                </Route>
                <Route path="/step3">
                    <Step3/>
                </Route>
                <Route path="/Line">
                    <Line/>
                </Route>
            </div>
        </Router>
    );
}

export default App;
