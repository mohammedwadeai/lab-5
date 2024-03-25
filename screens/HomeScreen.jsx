// src/screens/HomeScreen.jsx
import React, { useState } from 'react';
import { Button } from 'react-native';
import TodoList from '../component/ToDoList'; 
import ToDoForm from '../component/ToDoForm'; 
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);

    const handleAddTask = (task) => {
        if (!tasks.includes(task)) {
            setTasks([...tasks, task]);
        } else {
            alert('Task already exists!');
        }
    };

    return (
        <MainLayout>
            <TodoList items={tasks} />
            <ToDoForm addTask={handleAddTask} />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
};

export default HomeScreen;
