INSERT INTO department (dpt_name)
VALUES ('Poker'),
       ('Table Games');

INSERT INTO role (title, salary, department_id)
VALUES ('Room Manager', 75000, 1),
       ('Shift Manager', 80000, 2),
       ('Poker Supervisor', 50000, 1),
       ('Pit Boss', 55000, 2),
       ('Poker Dealer', 13000, 1),
       ('Dealer', 21000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Chris', 'Lose', 1, NULL),
       ('Ryan', 'Kirk', 2, NULL),
       ('Joseph', 'Schepis', 3, 1),
       ('Martin', 'Wendel', 4, 2),
       ('Skylar', 'Morgan', 5, 1),
       ('Rebecca', 'Shipp', 6, 2);