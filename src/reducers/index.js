import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './authorization'
// import transactions from './transactions';
// import transactionModal from './transactionModal';

export default combineReducers({
    auth,
    form: formReducer,
});
