# COURSEAPI

A Node.js application that manages schedules and bookings for courses. This application uses Express for the server framework and Sequelize for database interactions.

## Features

- User authentication
- Course management
- Schedule management
- Booking management

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- MySQL or another supported database

COURSEAPI/
├── `models`/ # Database models (Sequelize)
│ ├── `booking.js` # Booking model
│ ├── `course.js` # Course model
│ ├── `schedule.js` # Schedule model
│ └── `user.js` # User model
│
├── `routes`/ # Route definitions
│ ├── `authRoutes.js` # Authentication routes
│ ├── `bookingRoutes.js` # Booking routes
│ ├── `courseRoutes.js` # Course routes
│ ├── `scheduleRoutes.js` # Schedule routes
│ └── `userRoutes.js` # User routes
│
├── `controllers`/ # Route handlers
│ ├── `authController.js` # Authentication logic
│ ├── `bookingController.js`# Booking logic
│ ├── `courseController.js` # Course logic
│ ├── `scheduleController.js`# Schedule logic
│ └── `userController.js` # User logic
│
├── `middlewares`/ # Middleware functions (e.g., authentication)
│
├── `config`/ # Configuration files
│ ├── `database.js` # Database configuration
│ └── `auth.js` # Authentication configuration
│
├── `.env` # Environment variables
├── `.gitignore` # Git ignore file
├── `package.json` # Project metadata and dependencies
└── `index.js` # Entry point of the application
