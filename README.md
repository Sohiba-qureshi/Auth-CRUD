# Auth and CRUD Project

This project is a full-stack application built with React for the frontend, Node.js for the server, and MySQL for the database. It provides authentication functionality using a `login` table for user authentication and CRUD (Create, Read, Update, Delete) operations on a `students` table to store student data.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- Node.js installed on your machine
- MySQL installed and running
- Git installed (optional)

### Installation

1. Clone the repository to your local machine:
git clone : https://github.com/Sohiba-qureshi/Auth-CRUD.git

2. Navigate to the project directory:
cd Auth-CRUD

3. Install dependencies for both the frontend and server:
cd frontEnd
npm install
cd server
npm install


4. Set up the MySQL database:
- Create a new database named `crud`.
- Create two tables:
  - `login`: for authentication (fields: `ID`, 'Name' `Email`, `Password`)
  - `students`: for storing student data (fields: `ID`, `Name`, 'Email`, )

5. Configure environment variables:
- In the `server` directory, create a `.env` file and add the following variables:
  ```
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=yourpassword
  DB_DATABASE=auth_crud_db
  ```

### Running the Application

1. Start the frontend development server:
   cd frontEnd
   npm run dev

2. Start the Node.js server:
   cd server
   npm start

   
3. Open your web browser and navigate to 'localhost' to access the application.

## Usage

- Register new users by signing up with a username and password.
- Log in with your credentials to access the application.
- Perform CRUD operations on the student data:
- Create new student records
- Read existing student records
- Update student information
- Delete student records

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## License

This project is licensed under the [MIT License](LICENSE). For details, please contact Sohiba Qureshi at qureshi.sohiba28@gmail.com.






