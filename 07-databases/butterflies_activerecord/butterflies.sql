CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT
);

-- Seed data just to get things started
INSERT INTO butterflies (name, family, image) VALUES ('Monarch', 'Nymphalidae', 'https://www.learner.org/jnorth/images/graphics/monarch/ID_Wilcox01.jpg');
