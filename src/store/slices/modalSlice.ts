import { createSlice } from "@reduxjs/toolkit";

type TModalState = {
    boardId: string;
    listId: string;
    task: ITask; // types/index.ts에서 정의된 모듈
}

const initialState: TModalState = {
    boardId: "board-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "task 0",
        taskDescription: "task description",
        taskOwner: "John"
    }
}

const modalSlice = createSlice({
    name : 'modal',
    initialState : initialState,
    reducer : {

    }
})

export const modalReducer = modalSlice.reducer;