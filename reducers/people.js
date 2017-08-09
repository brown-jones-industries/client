
export default function (state = 1, action) {
  const { type } = action;

  switch (type) {
    case 'INCREASE_PEOPLE':
      return state + 1;
    case 'DECREASE_PEOPLE':
      return state - 1;
    default:
      return state;
  }
}
