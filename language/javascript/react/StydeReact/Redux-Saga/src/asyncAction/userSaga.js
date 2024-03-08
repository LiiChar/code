import { put, takeEvery, call } from 'redux-saga/effects'
import { ASYNC_SET, setUsers } from '../store/Reducer/GiveCash'

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}

export function* UserWatcher() {
    yield takeEvery(ASYNC_SET, fetchUserWorker)
}