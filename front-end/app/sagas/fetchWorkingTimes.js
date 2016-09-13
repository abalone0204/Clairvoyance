import {
  takeEvery
} from 'redux-saga'

import {
  put,
  call,
} from 'redux-saga/effects'

import searchByJob from '../API/goodjob/searchByJob.js'

import {
  REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE,
  requestFetchWorkingTimeByJobTitle,
  receiveWorkingTime,
  failToFetchWorkingTimeByJobTitle,
} from 'actions/fetchWorkingTime.js'


export function* fetchWorkingTimeFlow(action) {
  try {
    console.log('start to fetch');
    const {
      job_title,
      page,
    } = action
    console.log('action',action);
    const response = yield call(searchByJob, {
      job_title,
      page,
    })
    console.log('response', response);
    yield put(receiveWorkingTime(response))

  } catch (error) {
    yield put(failToFetchWorkingTimeByJobTitle(error))
  }
}

export function* watchRequestFetchWorkingTimes() {
  yield call(takeEvery, REQUEST_FETCH_WORKING_TIME_BY_JOB_TITLE, fetchWorkingTimeFlow)
}