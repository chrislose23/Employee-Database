# CMS Employee Database

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Description

![JavaScript](https://img.shields.io/badge/JavaScript-blue) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js](https://img.shields.io/badge/Express.js-blue) ![MySQL](https://img.shields.io/badge/MySQL-blue) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

This application will allow you to manage an employee database. You will have the ability to add departments, employees, and roles each employee might have. Additional data can be added such as salary and who is the employees manager.

Here is a walkthrough video I created to assist anyone in the install process or running the application.

[My Video Walkthrough](https://app.screencastify.com/v3/watch/Zugf1IAINSzJLk1RiF1V)

## Installation

For this application, you will need to download the server.js and the cli.js files. You will also need to download the package.json file. Finally, download the db folder that contains the schema.sql and seeds.sql files.

Install the dependencies by typing ‘npm i’ in the terminal. Once the dependencies are downloaded the application can be ran. (Express 4.19.2, inquirer 8.2.4, and pg 8.11.5)

You will need to set up Postgres’s if you havn’t already.Set up your Postgres with a generic password as to not expose confidential information. Im my example, my Postgres username is ‘postgres’ and my password is ‘password’. If you have a different username or password, you will need to update that in the server.js file.

In the terminal, type psql -U Postgres

Enter your password and press enter/return.

From here, we can create our data base and the table within. Use the schema file to guide you in this process. An easy way to do this is to type ‘\i schema.sql’ in the terminal after logging into Postgres.

If the database was created successfully, you can now seed it. Feel free to edit your seeds.js file to reflect your database needs. When complete, type ‘\i seeds.sql’ in the terminal.

You can now ‘\q’ out of Postgres and open the server.js file in the terminal.

If your server is running and connected to your database, you should see this text in the terminal.

![Screenshot](/images/ss2.png)

At this point you can open the cli.js file in the terminal and utilize the functions of the application.

## Usage

To use this application, type ‘node ‘cli.js’ in your Integrated Terminal once you have the server up and running. This will start the inquirer prompt and give you a few command lines to follow.

![Screenshot](/images/ss1.png)

From here you can select one of the options available or choose exit to close the application.

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Questions

[My GitHub Repo](https://github.com/chrislose23)

[My Email Address](chrislose23@gmail.com)