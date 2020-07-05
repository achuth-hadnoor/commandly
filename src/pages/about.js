import React from 'react'
import { Switch,Route } from 'react-router-dom'
import space from './space'
export default (props)=>{
    return (
    <div>
        {props.match.params.wid}
        <Switch>
            <Route path="/:wid/:sid" component={space}/>
        </Switch>
    </div>
)
}