const INITIAL_STATE = {
  foldersToSkip: ['whatsapp audio'],
  theme: 'dark',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'add_folders_to_skip':
      return {...state, foldersToSkip: action.payload};
    case 'THEME':
      return {...state, theme: action.payload};
    default:
      return state;
  }
}
