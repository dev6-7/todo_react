import React from 'react';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                name: new Date().getFullYear,
                description: generateUUID()
            })
        };
        
        fetch('http://localhost:8080/v1/api/task', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data }));
    }

    render() {
        const { postId } = this.state;
        return (
            <div>
                Returned Id: {postId}
            </div>
        );
    }
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export { PostRequest }; 