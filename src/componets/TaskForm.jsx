import React, { useState } from 'react';

const TaskForm = ({ triggerRerender }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/v1/api/task/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success (e.g., reset the form or navigate to a success page)
                console.log('Form data sent successfully.');
                triggerRerender();
            } else {
                // Handle error
                console.error('API request failed');
            }
        } catch (error) {
            // Handle network or request error
            console.error('Network error:', error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                /><br />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="off"
                    value={formData.description}
                    onChange={handleChange}
                /><br />

                <button type="submit" className="bigger-button">Save</button>
            </form>
        </div>
    );
};

export { TaskForm };