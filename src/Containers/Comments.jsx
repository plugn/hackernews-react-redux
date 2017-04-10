import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

import { closeComments } from '../Actions/Actions';

import CommentCard from '../Components/CommentCard';

class Comments extends React.Component {
  static handleClose() {
    closeComments();
  }
  render() {
    return (
      <div>
        <Dialog
          title="Comments"
          modal={false}
          open={this.props.showComments}
          contentStyle={{ width: '90%', maxWidth: 'none' }}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <div
            className={classNames(
              'loading-comments',
              { loaded: !this.props.loadingComments })
            }
          >
            <CircularProgress size={70} thickness={5} />
          </div>
          {this.props.commentsList.map(comment =>
            <CommentCard
              key={comment.get('id')}
              by={comment.get('by')}
              time={comment.get('time')}
            >
              {comment.get('text')}
            </CommentCard>)
            })
        </Dialog>
      </div>
    );
  }
}


function mapState(state) {
  return {
    showComments: state.get('showComments'),
    commentsList: state.get('commentsList'),
    loadingComments: state.get('loadingComments'),
  };
}

export default connect(mapState)(Comments);