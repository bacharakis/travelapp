# Flight Status App

## Overview
The Flight Status App is a simple web application that allows users to check the status of flights by entering the flight date and number. The application fetches relevant flight details such as status, departing terminal, gate information, and more.

## Features
- User-friendly form to input flight date and number.
- Displays flight status and relevant details.
- Responsive design for better user experience.

## Project Structure
```
flight-status-app
├── src
│   ├── components
│   │   ├── FlightForm.tsx       # Component for flight input form
│   │   ├── FlightDetails.tsx     # Component for displaying flight details
│   │   └── index.tsx             # Exports components for easier imports
│   ├── services
│   │   └── flightService.ts      # Service for fetching flight data
│   ├── App.tsx                   # Main application component
│   ├── index.tsx                 # Entry point of the application
│   └── types
│       └── index.ts              # TypeScript interfaces for flight data
├── public
│   ├── index.html                # Main HTML file
│   └── styles.css                # CSS styles for the application
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd flight-status-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the Mozilla Public License Version 2.0. See the LICENSE file for details.