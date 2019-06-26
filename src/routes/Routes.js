import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import InputText from '../views/InputText'
import InputHidden from '../views/InputHidden'

const Routes = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Input text</Link>
          </li>
          <li>
            <Link to="/hidden">Input hidden</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={InputText} />
        <Route path="/hidden" component={InputHidden} />
      </Switch>
    </div>
  </Router>
)

export default Routes
