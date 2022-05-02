import * as LoginActionCreators from './login'
import * as PersonalActionCreators from './person'
import * as NewsActionCreators from './news'

export default {
    ...LoginActionCreators,
    ...PersonalActionCreators,
    ...NewsActionCreators,
}