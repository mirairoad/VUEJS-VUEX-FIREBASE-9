// import create store function
import {createStore} from 'vuex'

import {auth} from'../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

// create store or storebox
const store = createStore({
    state : {
        user:null,
        isAuthReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('user state has changed', state.user)

        },
        setAuthIsReady(state, payload){
            state.isAuthReady = payload
        }
    },
    actions: {
        async signup(context, {email, password}){
            console.log('signup action')

            const res = await createUserWithEmailAndPassword(auth, email, password)

            if(res){
                context.commit('setUser',res.user)
            } else{
                throw new Error('could not complete signup')
            }
        },
        async login(context, {email, password}){
            console.log('login action')

            const res = await signInWithEmailAndPassword(auth, email, password)

            if(res){
                context.commit('setUser',res.user)
            } else{
                throw new Error('could not complete signup')
            }
        },
        async logout(context){
            console.log('logout action')

            await signOut(auth)

            context.commit('setUser', null)

        }
    }
})

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unsub()
})

// export
export default store