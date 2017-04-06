import React from 'react';
import { connect } from 'react-redux';

import { changePage } from '../Actions/Actions';
import { fetchList } from '../Actions/fetchActions';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';


class Pager extends React.Component{
  handleLeftTap(){
    changePage(-1);
    fetchList(this.props.currentTab);
  }
  handleRightTap(){
    changePage(1);
    fetchList(this.props.currentTab);
  }
  render(){
    return(
      <div className='pager'>
        <IconButton
          onTouchTap={this.handleLeftTap}
          iconStyle={iconStyle}
          style={buttonStyle}
        ><ArrowLeft/></IconButton>
        <IconButton
          onTouchTap={this.handleRightTap}
          iconStyle={iconStyle}
          style={buttonStyle}
        ><ArrowRight/></IconButton>
      </div>
    )
  }
}

const buttonStyle = {width: '50px', height: '50px', padding: '12px'};
const iconStyle = {width: '30px', height: '30px'};

function mapState(state){
  return{
    page: state.get('pageNumber'),
    currentTab: state.get('currentTab')
  }
}

export default connect(mapState)(Pager)
