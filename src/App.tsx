import React, { useState } from 'react';
import { FlightForm } from './components/FlightForm';
import { FlightDetails } from './components/FlightDetails';
import { getFlightStatus } from './services/flightService';
import { FlightInfo } from './types';

const App: React.FC = () => {
    const [flightInfo, setFlightInfo] = useState<FlightInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFlightSearch = async (date: string, number: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getFlightStatus(date, number);
            setFlightInfo(data);
        } catch (err) {
            setError('Failed to fetch flight details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Flight Status Checker</h1>
            <FlightForm onSearch={handleFlightSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {flightInfo && <FlightDetails flightInfo={flightInfo} />}
        </div>
    );
};

export default App;