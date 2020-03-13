import axios from "axios"
import React, { useState, useEffect } from "react";
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


const ActionPage=()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/actions/')
        .then(res=>{
            console.log(res)
            setData(res.data)
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
       <Router>
       
        <AppBody>
           {data.map(data=>{
            return(
              <CardWrapperStyled>
                <CardBody>
                <CardHeader><CardHeading>Project Id:{data.project_id}</CardHeading></CardHeader>
                <CardFieldset>
                <p>{data.description}</p>
                <p>{data.notes}</p>
                <p>{data.completed}</p>
                <p>{data.id}</p>

               
                </CardFieldset>
                </CardBody>
              </CardWrapperStyled>
            )
          })}
       
        </AppBody>
        </Router>
     
      );
}

export default ActionPage