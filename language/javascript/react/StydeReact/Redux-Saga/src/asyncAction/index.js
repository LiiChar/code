import { all } from 'redux-saga/effects'
import { countWather } from './CountSaga'
import { UserWatcher } from './userSaga'

export function* rootWatcher() {
    yield all([countWather(), UserWatcher()])
}