import { HashRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
const Views = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </Router>
    );
}

export default Views;