import { Route } from '@mui/icons-material'
import React from 'react'
import {BrowserRouter as Router, Routes , Route, Link  } from 'react-router-dom'
import { Uno } from '../components/Uno'
import { Dos } from '../components/Dos'

export const MiRouter = () => {
  return (
    <>
        <Router>
            <div>
                <Link to="/uno">Uno</Link>
                <Link to="/dos">Dos</Link>
            </div>
            <Routes>
                <Route path="/uno" element={<Uno />} />
                <Route path="/dos" element={<Dos />} />
            </Routes>
        </Router>
    </>
  )
}
