import React from 'react';

class AllTasks extends React.Component {
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

    componentDidUpdate(prevProps, prevState) {
        this.getTasks();
    }

    render() {
        return (
            <div>
                <h1>Task list</h1>
                <ul>
                    {
                        this.state.tasks && this.state.tasks.length > 0
                        && this.state.tasks.map((item) =>
                            <li key={item.id}>{item.name} - {item.description}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export { AllTasks }; 