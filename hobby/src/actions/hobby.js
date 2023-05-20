export const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
};

export const activeHobby = (hobby) => {
  return {
    type: "ACTIVE_HOBBY_ID",
    payload: hobby,
  };
};
