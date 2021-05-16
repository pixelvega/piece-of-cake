import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'components/pages/Home/Home'
import Course from 'components/pages/Course/Course'


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/learn" component={Course} />
    </Switch>
  )
}

export default Routes

