import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import LinearProgress from 'material-ui/LinearProgress';

class Loader extends React.Component {
  render() {
    return (
      <div className={classNames({loader: true,
                                 'loading': this.props.loading,
                                 'loaded': !this.props.loading})}>
        <LinearProgress mode="indeterminate" />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    loading: state.get('loading')
  }
}

export default connect(mapStateToProps)(Loader)