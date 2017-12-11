import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE: 
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: 
                        "https://media-cdn.tripadvisor.com/media/photo-s/0d/9f/de/6b/encantada-tulum.jpg"
                    }
                })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: prevState.places.find(place => {
                    return place.key === action.placeKey;
                })
            }
        case DELETE_PLACE: 
            return {
                ...state,
                selectedPlace: null
            };
        default: 
            return state;
    }
};

export default reducer;