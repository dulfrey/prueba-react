import {call , put , takeEvery , takeLatest} from "redux-saga";

import { REQUEST_DATA } from './shopping/shopping-actions'
import {fetchData} from '../components/utils/api'

function getApiData(action){
    try{
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    }catch(e){
        console.log(e)
    }
}