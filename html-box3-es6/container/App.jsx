import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Box from '../component/Box'
import * as Action from '../action'



const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onKeyDown: function(e){
            if (e.keyCode === 37) {
                dispatch(Action.BoxLeft());
            } else if (e.keyCode === 38) {
               dispatch(Action.BoxUp());
            } else if (e.keyCode === 39) {
                dispatch(Action.BoxRight());
            } else if (e.keyCode === 40) {
                 dispatch(Action.BoxDown());
            }
    }
  }
}

export default connect(
mapStateToProps,
  mapDispatchToProps
)(Box)
