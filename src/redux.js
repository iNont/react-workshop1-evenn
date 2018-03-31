const SET_FIELD = "SET_FIELD";
const RESET_FORM = "RESET_FORM";

const initialState = {
  name: "",
  email: "",
  ticketType: "",
  isAddedFood: false,
  agreedTerms: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

export const setField = (key, value) => ({
  type: SET_FIELD, key, value
});

export const resetForm = () => ({
  type: RESET_FORM
});
