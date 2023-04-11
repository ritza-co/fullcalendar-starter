# FullCalendar with CRUD

This project is a JS FullCalendar application with a server for performing CRUD operations.

## Getting Started

To get started you need to clone the repository and navigate into the folder.

```sh
git clone https://github.com/ritza-co/fullcalendar-starter fullcalendar
cd fullcalendar
```

## Installing

We already configured the required packages in the `package.json` file.

You can run the following command to install all dependent packages related to this project.

```sh
npm install
```

## Setting up the Database

In the `server.js` file, the Express server uses the MySQL2 library to connect to MySQL and run queries.

Create a `.env` file in the root folder and add the following lines for connecting to the MySQL database that we’ll create:

```
DB_HOST='localhost'
DB_USER='root'
DB_PASSWORD='<your-password>'
DB_DATABASE='fullcalendar'
```

Don’t forget to add the root password for your MySQL server.

We’ll install MySQL Server and MySQL Workbench. MySQL Workbench is a MySQL GUI that we’ll use to create a database with tables for the Gantt data and to run queries. Download MySQL Server and MySQL Workbench from the MySQL community downloads page. If you’re using Windows, you can use the MySQL Installer to download the MySQL products. Use the default configurations when configuring MySQL Server and Workbench. Make sure that you configure the MySQL Server to start at system startup for convenience.

Open the MySQL Workbench desktop application. Open the local instance of the MySQL Server that you configured.

We’ll write our MySQL queries in the query tab and execute the queries by pressing the yellow lightning bolt button.

Let’s run some MySQL queries in MySQL Workbench to create, use, and populate a database for our FullCalendar. Execute the following query to create a database called `fullcalendar`:

```sql
CREATE DATABASE fullcalendar;
```

Run the following query so that we set our newly created database for use:

```sql
USE fullcalendar;
```

Let’s create the table that we’ll need for our FullCalendar data:

```sql
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  PRIMARY KEY (`id`))
```

Now add some example event data to the `events` table:

```sql
INSERT INTO events (id, title, start, end)
VALUES
  (1, 'Meeting with John', '2023-04-01 09:00:00', '2023-04-01 10:00:00'),
  (2, 'Project Kickoff', '2023-04-02 14:00:00', '2023-04-02 16:00:00'),
  (3, 'Lunch with Jane', '2023-04-03 12:30:00', '2023-04-03 13:30:00'),
  (4, 'Design Review', '2023-04-04 10:30:00', '2023-04-04 11:30:00'),
  (5, 'Team Meeting', '2023-04-05 15:00:00', '2023-04-05 16:00:00');
```

You’ll be able to view the example event data by running the following query:

```sql
SELECT * FROM events;
```

## Running

Run the server with:

```sh
node server.js
```

Then navigate to `http://localhost:3000/` or open up your `public/index.html` in the browser to see your FullCalendar app.

## Resources

You can also refer the below resources to know more details about FullCalendar's JS Calendar component.

- [Demos](https://fullcalendar.io/demos)
- [Documentation](https://fullcalendar.io/docs)
