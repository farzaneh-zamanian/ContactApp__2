
export const addContactActionCreator = (payload = undefined) => ({
      type: "ADD_CONTACT_SUCCESS",
      payload,
});

export const errorMessageActionCreator = (payload = undefined) => ({
      type: "SET_ERROR_MESSAGE",
       payload,
})

export const alertMessageActionCreator = (payload = undefined) => ({
      type: "SET_ALERT_MESSAGE",
       payload,
})