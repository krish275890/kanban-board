// Import necessary libraries and components
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Define constants for task stages
const STAGES = ['To Do', 'In Progress', 'Peer Review', 'Done'];

// Task Component
const Task = ({ task, moveTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '8px',
        backgroundColor: 'white',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <Typography variant="subtitle1">{task.title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {task.description.slice(0, 50)}...
      </Typography>
    </div>
  );
};

// Column Component
const Column = ({ stage, tasks, moveTask }) => {
  const [, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, stage),
  }));

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: '#f4f4f4',
        padding: '16px',
        borderRadius: '8px',
        minHeight: '300px',
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        {stage}
      </Typography>
      {tasks.map((task) => (
        <Task key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
};

// Main Kanban Board Component
const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', stage: 'To Do' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', stage: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', stage: 'Peer Review' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const moveTask = (id, newStage) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, stage: newStage } : task))
    );
  };

  const addTask = () => {
    if (newTask.title.trim() === '') return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title: newTask.title, description: newTask.description, stage: 'To Do' },
    ]);
    setNewTask({ title: '', description: '' });
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Kanban Board
        </Typography>

        <TextField
          label="Search Tasks"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        <Grid container spacing={2}>
          {STAGES.map((stage) => (
            <Grid item xs={12} sm={6} md={3} key={stage}>
              <Column
                stage={stage}
                tasks={filteredTasks.filter((task) => task.stage === stage)}
                moveTask={moveTask}
              />
            </Grid>
          ))}
        </Grid>

        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={addTask}
          >
            Add Task
          </Button>

          <div style={{ marginTop: '10px' }}>
            <TextField
              label="Task Title"
              variant="outlined"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              fullWidth
              style={{ marginBottom: '10px' }}
            />
            <TextField
              label="Task Description"
              variant="outlined"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              fullWidth
            />
          </div>
        </div>
      </Container>
    </DndProvider>
  );
};

export default KanbanBoard;
