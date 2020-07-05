import React from 'react'
import { Switch,Route } from 'react-router-dom' 
import snippet from './snippet'
export default (props)=>{
    return (
    <div>
        {props.match.params.sid}
        <Switch>
            <Route path="/:wid/:sid/:cid" component={snippet}/>
        </Switch>
    </div>
)
}