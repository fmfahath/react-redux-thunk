import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import MyVerticallyCenteredModal from './UpdateTask';
import { setSeletedTask, removeFromList, getTaskFromServer } from '../slices/taskSlice';
import { useDispatch } from 'react-redux';

const TasksList = () => {

    const dispatch = useDispatch()
    const { taskList } = useSelector((state) => state.tasks)
    const [modalShow, setModalShow] = useState(false);

    const updateTask = (task) => {
        setModalShow(true)
        dispatch(setSeletedTask(task))
    }

    const deleteTask = (task) => {
        dispatch(removeFromList(task))
    }


    //get data using thunk reducers
    useEffect(() => {
        dispatch(getTaskFromServer())
    }, [dispatch])



    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList && taskList.map((task, index) => (
                        <tr className='text-center' key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <Button variant="primary" className='mx-2' onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button>{' '}
                                <Button variant="primary"><i className="bi bi-trash3" onClick={() => deleteTask(task)}></i></Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default TasksList