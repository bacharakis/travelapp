import React from 'react';

interface FlightDetailsProps {
    flightStatus: string;
    departingTerminal: string;
    gateInformation: string;
    otherDetails: string;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ flightStatus, departingTerminal, gateInformation, otherDetails }) => {
    return (
        <div className="flight-details">
            <h2>Flight Status</h2>
            <p><strong>Status:</strong> {flightStatus}</p>
            <p><strong>Departing Terminal:</strong> {departingTerminal}</p>
            <p><strong>Gate Information:</strong> {gateInformation}</p>
            <p><strong>Other Details:</strong> {otherDetails}</p>
        </div>
    );
};

export default FlightDetails;