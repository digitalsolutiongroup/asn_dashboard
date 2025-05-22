# AI Pendidikan ASN Web Application

## Overview

This project is a web application for AI-powered education management for ASN (Aparatur Sipil Negara / Indonesian Civil Service). It provides several key features including a dashboard, AI curriculum builder, lecture performance tracking, promotion readiness assessment, and analytics. The application is built with Flask and uses a clean, modern UI with Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a simple monolithic architecture with a Flask backend and HTML/CSS/JavaScript frontend. It's designed to be deployed as a web service using Gunicorn.

### Backend
- **Framework**: Flask (Python 3.11)
- **Server**: Gunicorn for production deployment
- **Future Database**: Prepared for PostgreSQL integration (dependencies included but not yet implemented)

### Frontend
- **Templating**: Flask's Jinja2 templates
- **CSS Framework**: Tailwind CSS (loaded via CDN)
- **JavaScript Libraries**: Chart.js for data visualization
- **Icons**: Font Awesome

## Key Components

### Flask Application (app.py)
The core of the application is a Flask server that handles routing and template rendering. Currently, it provides routes for:
- Dashboard (`/`)
- Curriculum Builder (`/curriculum`)
- Performance Tracking (`/performance`)
- Promotion Assessment (`/promotion`)
- Analytics (`/analytics`)

### Templates
The application uses a consistent template structure across all pages with:
- Common navigation sidebar
- Page-specific content areas
- Responsive design for mobile and desktop views

### Static Assets
- **CSS**: Custom styles that extend Tailwind CSS functionality
- **JavaScript**: 
  - `main.js`: Handles UI interactions like mobile menu toggle, notifications, etc.
  - `charts.js`: Initializes and configures Chart.js visualizations

## Data Flow

Currently, the application is in the initial development stage with static template rendering. The planned data flow will be:

1. User requests arrive at the Flask application
2. Flask routes the request to the appropriate handler
3. In future iterations, the handler will query the database or external services
4. Data is processed and passed to templates for rendering
5. Rendered HTML is sent back to the user

## External Dependencies

### Python Packages
- Flask: Web framework
- Flask-SQLAlchemy: ORM for database interactions (not yet implemented)
- Gunicorn: WSGI server for production
- psycopg2-binary: PostgreSQL adapter (for future database implementation)
- email-validator: For form validation

### Frontend Libraries (CDN)
- Tailwind CSS: Utility-first CSS framework
- Font Awesome: Icon library
- Chart.js: Data visualization

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Infrastructure**: Replit's autoscaling environment
2. **Runtime**: Python 3.11
3. **Dependencies**: Nix packages including openssl and PostgreSQL
4. **Server**: Gunicorn binding to port 5000
5. **Workflow**: Configured to start the application using Gunicorn with hot-reloading enabled

### Development vs Production

- **Development**: Uses Flask's built-in server with debug mode enabled
- **Production**: Uses Gunicorn with the command: `gunicorn --bind 0.0.0.0:5000 main:app`

## Next Steps for Development

1. **Database Integration**: Implement SQLAlchemy models and PostgreSQL connection
2. **Authentication System**: Add user login and role-based access control
3. **Dynamic Content**: Replace static mockups with dynamic data
4. **API Development**: Create RESTful APIs for frontend/backend communication
5. **AI Features**: Implement actual AI functionality for curriculum building, performance analysis, etc.