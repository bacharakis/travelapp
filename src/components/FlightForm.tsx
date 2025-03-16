import React, { useState } from 'react';
import { getFlightStatus } from '../services/flightService';

const FlightForm: React.FC = () => {
    const [flightDate, setFlightDate] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [flightDetails, setFlightDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setFlightDetails(null);

        try {
            const details = await getFlightStatus(flightDate, flightNumber);
            setFlightDetails(details);
        } catch (err) {
            setError('Failed to fetch flight details. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="flightDate">Flight Date:</label>
                    <input
                        type="date"
                        id="flightDate"
                        value={flightDate}
                        onChange={(e) => setFlightDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="flightNumber">Flight Number:</label>
                    <input
                        type="text"
                        id="flightNumber"
                        value={flightNumber}
                        onChange={(e) => setFlightNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Check Flight Status</button>
            </form>
            {error && <p>{error}</p>}
            {flightDetails && (
                <div>
                    <h2>Flight Details</h2>
                    <p>Status: {flightDetails.status}</p>
                    <p>Departing Terminal: {flightDetails.terminal}</p>
                    <p>Gate: {flightDetails.gate}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
};

export default FlightForm;