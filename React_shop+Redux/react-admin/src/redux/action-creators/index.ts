import * as LoginActionCreators from './login'
import * as PersonalActionCreators from './person'
import * as NewsActionCreators from './news'
import * as DirectoryActionCreators from './directory'

export default {
    ...LoginActionCreators,
    ...PersonalActionCreators,
    ...NewsActionCreators,
    ...DirectoryActionCreators,
}