import React, {useState} from 'react'
import {TextField,IconButton} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"




const OptionItem = (props) => {
    return (
        <div style={{margin:20}}>
        <TextField 
        
          id={props.key1}
          label="Enter Option "
          variant="standard"
          onChange={(event)=>{
            props.handleOptionChange(event.target.id,event.target.value);}}
        />
        <IconButton  id={props.key1}
        onClick={event=>props.handleAddOption(event)}>
          <AddIcon  id={props.key1}/>
        </IconButton>
        <IconButton  id={props.key1} onClick={event=>props.handleRemoveOption(event)}>
          <RemoveIcon  id={props.key1} />
        </IconButton>
      </div>
    )
}

export default OptionItem
