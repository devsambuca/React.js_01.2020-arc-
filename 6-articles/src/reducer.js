// import React from 'react';

export const initialState = {
  articles: [],
  visibleModal: false,
  comments: [],
  isLoading: false,
  currentArticle: { title: '', image: '', text: '' },
};
export function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case 'GET_ARTICLES':
      return {
        ...state,
        articles: action.payload,
        isLoading: true,
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        visibleModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        visibleModal: false,
      };
    case 'ADD_ARTICLE':
      return {
        ...state,
        articles: [...state.articles, { ...action.payload }],
        visibleModal: false,
      };
    default:
      return state;
  }
}
