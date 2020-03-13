import axios from "axios"
import React, { useState, useEffect } from "react";
import ActionPage from './Action.js'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  AppBody,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
  StyledDiv,
  CardBodyStyled,
  CardWrapperStyled
} from "./styles";


function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/projects/')
    .then(res=>{
        console.log(res)
        setData(res.data)
        console.log(res.data)
    })
    .catch(err=>console.log(err))
},[])
  return (
    <Router>
    <Switch>
        <Route exact path ="/action" component={ActionPage}/>
    </Switch>
    <AppBody>
       {data.map(data=>{
        return(
          <CardWrapperStyled>
            <CardBody>
            <CardHeader><CardHeading>{data.name}</CardHeading></CardHeader>
            <CardFieldset>
            <p>{data.description}</p>
            <p>{data.completed}</p>
            <p>{data.id}</p>
            <Link to ="/action"><CardButton>Actions</CardButton></Link>
           
            </CardFieldset>
            </CardBody>
          </CardWrapperStyled>
        )
      })}
   
    </AppBody>
    </Router>
  );
}

export default App;
