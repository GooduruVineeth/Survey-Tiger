// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// const CreateSurvey = (props) => {
//     const [anchorEl, setAnchorEl] =useState(null);

//     const handleClick = (event) => {
//         // console.log(event.target);
//       setAnchorEl(event.currentTarget);
//     };

//     const handleClose = (event) => {

//         if(event.target.innerText=="Multi-Select"){

//         }else if(event.target.innerText=="Single-Select"){

//         }

//       setAnchorEl(null);
//     };
//     return (
//       <div>
//         <Button
//           aria-controls="simple-menu"
//           aria-haspopup="true"
//           onClick={handleClick}
//         >
// Select Question Type
//         </Button>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           keepMounted
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Multi-Select</MenuItem>
//           <MenuItem onClick={handleClose}>Single-Select</MenuItem>
//         </Menu>
//       </div>
//     );
// }

// export default CreateSurvey;
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React from "react";

const CreateSurvey = ({handleChoiceChange}) => {
  const [type, setType] = React.useState('');

  const handleChange = event => {
    setType(event.target.value);
    console.log(event.target);
    handleChoiceChange(event.target.value);

  };
  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <FormControl style={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Select Question type</InputLabel>
        <Select id="demo-simple-select" value={type} onChange={handleChange}>
          <MenuItem value={1}>Multi-Select</MenuItem>
          <MenuItem value={2}>Single-Select</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CreateSurvey;
