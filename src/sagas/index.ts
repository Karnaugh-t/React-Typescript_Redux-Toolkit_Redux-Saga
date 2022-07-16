import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

function* consoleTest(data: any) {

    let  payload = data;
    console.log(payload)

    yield delay(600)
    yield put({ type: 'counterReducer/increment', data})
 }
 
 /*
   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
   Allows concurrent fetches of user.
 */
 function* mySaga() {
   yield takeLatest("counter/increment", consoleTest);
 }

 export default mySaga;