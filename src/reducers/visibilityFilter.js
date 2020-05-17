import { VisibilityFilters } from '../actions'

const visibilityFilter = ( state = VisibilityFilters.SHOW_ALL, action ) => {
    switch(action.type) {
        case 'SET_VISIBILITYFILTER' :
            return action.filter
        default:
            return state    
    }
}

export default visibilityFilter