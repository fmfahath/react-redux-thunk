import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TasksList = () => {

    const updateTask = () => {
        console.log('updateTask');
    }

    const deleteTask = () => {
        console.log('delete task');
    }
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
                    <tr className='text-center'>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <Button variant="primary" className='mx-2' onClick={() => updateTask()}><i className="bi bi-pencil-square"></i></Button>{' '}
                            <Button variant="primary"><i className="bi bi-trash3" onClick={() => deleteTask()}></i></Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TasksList