// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions';
import type { Dispatch } from '../actions/types';
import type { State } from './types';

const mapStateToProps = (state: State): State => ({
  counter: state.counter
});

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
