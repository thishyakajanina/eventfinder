const initialState = [
  { id: 0, name: "NEW event",description:"event decription",duration:"5 HOURS", email: "email@email.com", phone: 1234567890 },
  { id: 1, name: "NEW event2",description:"event decription2",duration:"7 HOURS", email: "emailnew@email.com", phone: 1239987890 },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
