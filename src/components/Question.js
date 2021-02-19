import React from 'react'
import {TextField} from "@material-ui/core"
const Question = (props) => {
    return (
        <div style={{margin:25}}>
              
      <TextField
        id="outlined-basic"
        label="Enter the Question ?"
        variant="outlined"
        onChange={(event)=>{props.handleQuestionOnChange(event.target.value)}}
      />
        </div>
    )
}

export default Question
