import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { authedUser } from './authedUser'


const AUTHED_USER = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveTweets(tweets))
                dispatch(receiveUsers(users))
                dispatch(authedUser(AUTHED_USER))
            }
            )

    }
}