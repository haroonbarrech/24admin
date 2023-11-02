import {selectType} from '../actions/selectCatAction';

const initialState = {
    cats: [],
}

 export default function (state = initialState, action ) {

    switch (action.type) {
        case selectType:
            const id = action.id;

        
          return { ...state, cats: id}
        
        default:
          return state
      }

}