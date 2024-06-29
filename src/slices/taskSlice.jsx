import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
    selectedTask: {},
    isLoading: false,
    error: ''
}

//Thunk actions-----------

//GET
export const getTaskFromServer = createAsyncThunk(
    "task/getTaskFromServer",
    async (_, { rejectWithValue }) => {
        const response = await fetch('http://localhost:7878/tasks')
        if (response.ok) {
            const jsonResponse = response.json()
            return jsonResponse;
        }
        else {
            return rejectWithValue({ error: 'No Task Found' });
        }
    }
);





const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id }
            state.taskList.push(task)
        },

        removeFromList: (state, action) => {
            state.taskList = state.taskList.filter((task) => task.id !== action.payload.id)
        },

        updateTaskInList: (state, action) => {
            state.taskList = state.taskList.map((task) => task.id === action.payload.id ? action.payload : task)
        },

        setSeletedTask: (state, action) => {
            state.selectedTask = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTaskFromServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTaskFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.taskList = action.payload
            })
            .addCase(getTaskFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.taskList = []
                state.error = action.payload.error
            })
    }
});

export const { addTaskToList, removeFromList, updateTaskInList, setSeletedTask } = taskSlice.actions;
export default taskSlice.reducer;