import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const BreweryPanel = (props) => {

  const { details, summary} = props

  const joinDetails = () => {
    if (Array.isArray(details)){
      const compactDetails = details.filter(el => el !== null && el !== undefined)
      return compactDetails.join(', ')
    } else {
      return details
    }
  }

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary >
          <Typography style={{fontSize: '16px'}}><strong>{summary}</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontSize: '14px'}}>
          {joinDetails()}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}

export default BreweryPanel
