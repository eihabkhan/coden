import  UserActionTypes  from './user.types'

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
} )
export const signInFail = error =>( {
    type: UserActionTypes.SIGN_IN_FAIL,
    payload: error
})
export const emailSignInStart = credentials => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: credentials
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFail = error => ({
    type: UserActionTypes.SIGN_OUT_FAIL,
    payload: error
})

export const signUpStart = credentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: credentials
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})
 
export const signUpFail = error => ({
    type: UserActionTypes.SIGN_UP_FAIL,
    payload: error
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

