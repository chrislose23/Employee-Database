INSERT INTO department (id, dpt_name)
VALUES (001, 'Poker'),
       (002, 'Table Games');

INSERT INTO role (title, salary, department_id)
VALUES ('Room Manager', 75000, 001),
       ('Shift Manager', 80000, 002),
       ('Poker Supervisor', 50000, 001),
       ('Pit Boss', 55000, 002),
       ('Poker Dealer', 13000, 001),
       ('Dealer', 21000, 002);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Chris', 'Lose', 1),
       ('Ryan', 'Kirk', 2),
       ('Joseph', 'Schepis', 3, 1),
       ('Martin', 'Wendel', 4, 2),
       ('Skylar', 'Morgan', 5, 1),
       ('Rebecca', 'Shipp', 6, 2);