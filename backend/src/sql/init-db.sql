DROP TABLE IF EXISTS Todos;

CREATE TABLE Todos (
    id INTEGER NOT NULL PRIMARY KEY,
    description TEXT,
    isComplete INTEGER,
    dueDate TEXT
);

INSERT INTO Todos (description, isComplete, dueDate) VALUES 
    ('Eat ice cream for dinner', 0, '2024-03-01'),
    ('Nap for 3 hours', 1, '2024-03-16'),
    ('Watch cat videos all day', 0, '2024-03-24'),
    ('Dance in the rain', 0, '2024-03-12'),
    ('Sing karaoke with a hairbrush', 1, '2024-03-28');