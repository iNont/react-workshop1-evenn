const SET_FIELD = "SET_FIELD";
const RESET_FORM = "RESET_FORM";
const RESET_FORM_PENDING = "RESET_FORM_PENDING";
const RESET_FORM_FULFILLED = "RESET_FORM_FULFILLED";

const initialState = {
  name: "",
  email: "",
  ticketType: "",
  isAddedFood: false,
  agreedTerms: false,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };
    case RESET_FORM_PENDING:
      return {
        ...state,
        loading: true
      };
    case RESET_FORM_FULFILLED:
      return initialState;
    default:
      return state;
  }
}

export const setField = (key, value) => ({
  type: SET_FIELD, key, value
});

export const resetForm = () => ({
  type: RESET_FORM,
  payload: new Promise((resolve, reject) => {
    setTimeout(()=>resolve() , 2000)
  })
});
