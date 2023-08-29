import {createReducer} from "@reduxjs/toolkit"
import {DataStatus} from "../../common/enums"

import {signIn} from "./action"


type State = {
    dataStatus: DataStatus,

};

const initialState: State = {
    dataStatus: DataStatus.IDLE,
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(signIn.fulfilled, (state, action) => {
        state.dataStatus = DataStatus.FULFILLED
    })
    builder.addCase(signIn.pending, (state, action) => {
        state.dataStatus = DataStatus.PENDING
    })
    builder.addCase(signIn.pending, (state, action) => {
        state.dataStatus = DataStatus.REJECTED
    })
})

export {reducer}
