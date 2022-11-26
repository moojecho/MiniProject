import { combineReducers, configureStore } from "@reduxjs/toolkit";
import comment from "./redux/modules/CommentSlice"

const middlewares = [];
// 리듀서 통합
const rootReducer = combineReducers({});
// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
