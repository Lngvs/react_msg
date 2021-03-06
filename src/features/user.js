import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            users: [],
            currentUser: null
        }
    },
    reducers: {
        addUser: ({value}, {payload}) => {
            const user = {
                username: payload.username,
                password: payload.passOne,
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

            }
            value.users.push(user)
        },
        setCurrentUser: ({value}, {payload}) => {
            value.currentUser = payload
        },
        updatePhoto: ({value}, {payload}) => {
            const {index, current} = payload
            value.users[index] = current
            value.currentUser = current
        }
    }
})


export const {addUser, setCurrentUser, updatePhoto} = userSlice.actions
export default userSlice.reducer