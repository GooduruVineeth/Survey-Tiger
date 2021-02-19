import React, { Component } from 'react'
import { Grid, Paper,Typography } from '@material-ui/core'
import CreateSurvey from "./createSurvey.js"

export default class Content extends Component {
   constructor(props){
       super(props);
   }
    render() {
        const myStyle={backgroundColor:"#80ffff", padding:20,textAlign:"center",cursor: "pointer"};
        return (
          <div style={{ margin: 50, flexGrow: 1 }}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={10} md={4}>
                <Paper variant="elevation" elevation={3}  style={myStyle}  onClick={this.props.handleCreateSurveyClick}>
                  <Typography variant="h3" >
                    Create Survey
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={10} md={4}>
                <Paper variant="elevation" elevation={3} style={myStyle} onClick={this.props.handleTakeSurveyClick}> 
                  <Typography variant="h3" >
                    Take Survey
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
        
          </div>
        );
    }
}
