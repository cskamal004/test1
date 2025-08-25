# Real Estate Marketplace Frontend

This is the frontend part of the Real Estate Marketplace project, built using React. The application allows users to browse and view properties available for sale or rent.

## Project Structure

- `public/index.html`: The main HTML file for the React application.
- `src/App.jsx`: The main component that sets up routing and layout.
- `src/components/PropertyList.jsx`: Component that fetches and displays a list of properties.
- `src/pages/Home.jsx`: Homepage component that renders the `PropertyList`.
- `src/services/api.js`: Functions for making API calls to the backend.
- `src/index.js`: Entry point for the React application.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd real-estate-marketplace/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## API Integration

The frontend communicates with the backend API to fetch property data. Ensure that the backend server is running to see the property listings.

## Contributing

Feel free to submit issues or pull requests if you would like to contribute to the project. 

## License

This project is licensed under the MIT License.