/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const CHANGE_FILER_BY_TAG = createActionName('CHANGE_FILER_BY_TAG');
export const CHANGE_UNFILER_BY_TAG = createActionName('CHANGE_UNFILER_BY_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM });
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });
export const changeFilterByTag = payload => ({ payload, type: CHANGE_FILER_BY_TAG });
export const changeUnfilterByTag = payload => ({ payload, type: CHANGE_UNFILER_BY_TAG });


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
      // TODO - handle other action types
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: { ...statePart.duration, from: action.payload },
      };
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: { ...statePart.duration, to: action.payload },
      };
    case CHANGE_FILER_BY_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case CHANGE_UNFILER_BY_TAG:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag != action.payload),
      };
      
    default:
      return statePart;
  }
}
