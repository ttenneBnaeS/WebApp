import React from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from "history"

export const history = createBrowserHistory()

const App = () => {

    
    return (
        <Router history={history}>
            <Routes>
                <Route path="/" element={<h1>React with webpack</h1>}/>
                <Route path="/otherPath" element={<h1>This is another page</h1>}/>
            </Routes>
        </Router>
    )
}

export default App