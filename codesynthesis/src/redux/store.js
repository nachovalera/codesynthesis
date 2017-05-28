import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-persist'

const middlewares = [
    promiseMiddleware(),
    thunk
]

if(__DEV__) {
    middlewares.push(createLogger())
}

export default createStore(
    reducers,
    undefined,
    compose(applyMiddleware(...middlewares)) // para poder iniciar sesión, porque la sesión permanece
    // compose(applyMiddleware(...middlewares), autoRehydrate())
)