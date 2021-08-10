import validateForm from '~/static/js/validateForm.js';
let i = 1
export const state = () => {
    return {
        toDoList: []
    }

};
export const getter = {
    getTodoList: state => state.toDoList
}
export const mutations = {
    addNewTask(state, toDo) {
        let validateResult = validateForm(toDo);
        if (validateResult.error) {
            return alert(validateResult.message)
        } else {
            i++;
            let id = i;
            let arr = {
                id: id,
                ...toDo
            };
            state.toDoList.push(arr);
        }

    },
    sortTodoList(state) {
        state.toDoList.sort(function(a, b) {
            var keyA = new Date(a.dueDate),
                keyB = new Date(b.dueDate);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
    },
    updateTodo(state, toDo) {
        let validateResult = validateForm(toDo);
        if (validateResult.error) {
            return alert(validateResult.message)
        } else {
            let index = state.toDoList.findIndex(e => e.id == toDo.id)
            state.toDoList[index] = toDo
            alert(validateResult.message)
        }
    },
    deleteTodo(state, id) {
        let index = state.toDoList.findIndex(e => e.id == id)
        if (index > -1) {
            state.toDoList.splice(index, 1)
        }
    },
};
export const actions = {
    addTodo(context, todo) {
        context.commit("addNewTask", todo)
        context.commit("sortTodoList")
    },
    updateTodo(context, toDoList) {
        context.commit("updateTodo", toDoList)
        context.commit("sortTodoList")
    },

}