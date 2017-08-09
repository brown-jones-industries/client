
export default function (state = 'cheap', action) {
  const { type, preference } = action;

  switch (type) {
    case 'SET_PREFERENCE_FAST':
      return preference;
    case 'SET_PREFERENCE_CHEAP':
      return preference;
    default:
      return state;
  }
}
