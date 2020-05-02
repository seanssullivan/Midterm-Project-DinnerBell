DROP TABLE IF EXISTS order_foods CASCADE;
CREATE TABLE order_foods (
  id SERIAL PRIMARY KEY NOT NULL,
  food_id INTEGER NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  quantity INTEGER DEFAULT 1
);
