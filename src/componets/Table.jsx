import React from 'react';

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            shouldRerender: false
        };
    }

    getTasks() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        fetch('http://localhost:8080/v1/api/task', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ tasks: data }));

        this.state.shouldRerender = false;
    }

    componentDidMount() {
        this.getTasks();
    }

    updateRow(id) {
        const editedRow = this.state.tasks.find((row) => row.id === id);
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(editedRow),
        };
        fetch('http://localhost:8080/v1/api/task', requestOptions)
            .then(response => response.json())
            .then((response) => {
                if (response.ok) {
                    console.log('Row updated successfully.');
                } else {
                    console.error('Failed to update row.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    editRow(id, key, value) {
        const data = this.state.tasks;
        const updatedData = data.map((row) => {
            if (row.id === id) {
                row[key] = value;
            }
            return row;
        });
        this.setState({ tasks: updatedData });
    };

    deleteRow(id) {
        const data = this.state.tasks;
        const updatedData = data.filter((row) => row.id !== id);
        this.setState({ tasks: updatedData });
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.name}
                                        onChange={(e) => this.editRow(row.id, 'name', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.description}
                                        onChange={(e) => this.editRow(row.id, 'description', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => this.updateRow(row.id)}>Save</button>
                                    <button onClick={() => this.deleteRow(row.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export { Table };