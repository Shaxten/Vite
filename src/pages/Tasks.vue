
<template>
    <div class="task-list content">
      <h1>Task List</h1>
  
      <div class="task-input">
        <input v-model="newTask.title" placeholder="Task Title" />
        <input v-model="newTask.description" placeholder="Task Description" />
        <button @click="isEditing ? updateTask() : addTask()">
          {{ isEditing ? 'Update Task' : 'Add Task' }}
        </button>
      </div>
  
      <div class="tasks">
        <div v-for="(task, index) in tasks" :key="index" class="task">
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
          <button @click="deleteTask(index)" class="delete-button">
          <font-awesome-icon icon="trash" />
        </button>
          <button @click="editTask(index)" class="edit-button"><font-awesome-icon icon="pencil" /></button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, watch } from 'vue';
  import { Task } from '../types/Task';
  import { ref } from 'vue';

  export default defineComponent({
    name: 'TaskList',
    setup() {
      const TASKS_STORAGE_KEY = 'tasks';
  
      // Reactive state for tasks and newTask <button @click="editTask(index)">Edit</button>
      const tasks = reactive<Task[]>(JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY) || '[]'));
  
      const newTask = reactive<Task>({
        title: '',
        description: '',
      });
  
      const isEditing = ref<boolean>(false);
      let currentTaskIndex = ref<number | null>(null);
  
      // Add a new task
      const addTask = () => {
        if (newTask.title && newTask.description) {
          tasks.push({ ...newTask });
          resetForm();
        }
      };
  
      // Edit an existing task
      const editTask = (index: number) => {
        const task = tasks[index];
        newTask.title = task.title;
        newTask.description = task.description;
        isEditing.value = true;
        currentTaskIndex.value = index;
      };
  
      // Update the task being edited
      const updateTask = () => {
        if (currentTaskIndex.value !== null) {
          tasks[currentTaskIndex.value] = { ...newTask };
          resetForm();
        }
      };
  
      // Delete a task
      const deleteTask = (index: number) => {
        tasks.splice(index, 1);
      };
  
      // Reset form after adding or updating task
      const resetForm = () => {
        newTask.title = '';
        newTask.description = '';
        isEditing.value = false;
        currentTaskIndex.value = null;
      };
  
      // Watch for changes in tasks and save to local storage
      watch(
        () => tasks,
        (newTasks) => {
          localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(newTasks));
        },
        { deep: true }
      );
  
      return {
        tasks,
        newTask,
        isEditing,
        addTask,
        editTask,
        updateTask,
        deleteTask,
      };
    },
  });
  </script>
  
  <style scoped>
  .task-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .tasks{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .task {
    border: 1px solid black;
    padding: 10px;
    width: 400px;
  }

  .task .trash{
    position: absolute;
  }
  
/* Style for delete button (trash icon) */
.delete-button, .edit-button {
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  float: right;
}

.delete-button:hover {
  color: darkred;
}
.edit-button:hover {
  color:rgba(128, 198, 226, 0.644);
}
  button {
    margin-left: 10px;
  }
  </style>