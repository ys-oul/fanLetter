const initialState = {
  member: "Karina",
};

//리듀서
const selected = (state = initialState, action) => {
  switch (action.type) {
    case "NINGNING":
      return {
        member: "NingNing",
      };
    case "KARINA":
      return {
        member: "Karina",
      };
    case "WINTER":
      return {
        member: "Winter",
      };
    case "GISELLE":
      return {
        member: "Giselle",
      };
    default:
      return state;
  }
};

export default selected;
