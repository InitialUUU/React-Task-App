import { boardsReducer } from "../slices/boardSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer = { // 기존의 reducer들 한번에 combine 해주기
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer
}

export default reducer;