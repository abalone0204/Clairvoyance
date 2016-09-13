import {
  takeEvery
} from 'redux-saga'

import {
  put,
  call,
} from 'redux-saga/effects'

import companyStat from '../API/goodjob/companyStat.js'

import {
  REQUEST_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME,
  requestFetchWorkingTimeStatByCompanyName,
  receiveWorkingTimeStatByCompanyName,
  failToFetchWorkingTimeStatByCompanyName,
} from 'actions/fetchWorkingTime.js'

export function* watchRequestFetchCompanyStatByCompantName() {
  yield call(takeEvery, REQUEST_FETCH_WORKING_TIME_STAT_BY_COMPANY_NAME, fetchCompanyStatByCompantNameFlow)
}

export function* fetchCompanyStatByCompantNameFlow(action) {
  try {
    const {
      company,
      page,
    } = action
    const response = yield call(companyStat, {
      company,
      page,
    })
    yield put(receiveWorkingTimeStatByCompanyName(response))

  } catch (error) {
    yield put(failToFetchWorkingTimeStatByCompanyName(error))
  }
}

