# QR Recognition and AR Model Load, QR Maker Web Application
### Deployed link : https://s11saurabh-git-main-saurabhs-projects-d236dc8e.vercel.app/
<img width="1083" alt="image" src="https://github.com/user-attachments/assets/273ce402-82d8-4996-8aff-9e5d3a46cf2d" />

## Project Overview
This web application allows users to recognize QR codes and load 3D models in glTF format (.glb). It features functionalities for generating QR codes, recognizing them via a mobile web interface, and rendering interactive 3D models with animation in augmented reality (AR).

## Features

### QR Recognition View
- Mobile camera permission for QR recognition.
- Fetch 3D model information from the backend using REST API.
- Display error toast if API response fails.
- Load and render 3D models from a successful API response.
- Interactive 3D models that trigger animations on touch.
- Supports Android Web and iOS Safari Web.

### QR Maker Using 3D Models
- Upload a 3D model to the server.
- Generate a unique QR code for the uploaded 3D model.
- Display the QR image and URL value.
- Designed for PC Web interface.

## Technology Stack

### Frontend
- **Frameworks & Libraries**: React.js, AR.js, Three.js
- **Languages**: HTML, CSS, JavaScript
- **Other**: Responsive design for Android, iOS, Windows, and Mac

### Backend
- **Framework**: Django, Django REST Framework
- **Database**: MariaDB, PostgreSQL
- **Tools**: Docker, AWS

## API Endpoints

### 3D Model Information
**Method**: GET  
**Endpoint**: 

### 3D Model Upload
**Method**: POST  
**Endpoint**: 
**Request Body**: Multipart/form with the 3D model file
**Response**: QR value 

## Installation

### Prerequisites
- Node.js
- Python 3
- MariaDB/PostgreSQL
- Docker (Optional)

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/s11saurabh/QR
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # For Windows: env\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the development server:
   ```bash
   python manage.py runserver
   ```

## Deployment
### Frontend
Deployed on [Vercel](https://s11saurabh-git-main-saurabhs-projects-d236dc8e.vercel.app).

### Backend
Deployed on AWS/Docker with MariaDB/PostgreSQL as the database.

## Demonstration Video
1. QR recognition using mobile (iOS & Android) web.
2. 3D model loaded and controlled (zoom-in-out, rotation).
3. Augmented reality features.
4. (Optional) Upload a 3D model and view the generated QR and Unique ID.

## Documentation
- **Project Overview**: This README file provides a detailed overview of the project.
- **Additional Features**: Notes on any extra features implemented.

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## Support
For support or questions, contact us at [saurabhsinghania111@gmail.com](mailto:saurabhsinghania111@gmail.com).

## License
This project is licensed under the MIT License.

---

### Links
- **Deployed Frontend**: [s11saurabh GitHub Pages](https://s11saurabh-git-main-saurabhs-projects-d236dc8e.vercel.app)
- **GitHub Repository**: [QR Project GitHub](https://github.com/s11saurabh/QR)

