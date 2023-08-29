import {createAsyncThunk} from "@reduxjs/toolkit"
import {ActionType} from "./common"
import {AsyncThunkConfig} from "../store"


export const signIn = createAsyncThunk<any, any, AsyncThunkConfig>(ActionType.SIGN_IN,
    async (payload, {extra, getState}) => {
        console.log(payload)
        extra.storage.setItem("TOKEN", payload)
        return payload
    })
