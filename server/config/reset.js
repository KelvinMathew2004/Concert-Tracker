import { pool } from './database.js'
import './dotenv.js'
import { seedLocations, seedEvents } from './seed.js';

const createTables = async () => {
  const createLocationsTableQuery = `
    DROP TABLE IF EXISTS locations CASCADE;
    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    );
  `

  const createEventsTableQuery = `
    DROP TABLE IF EXISTS events;
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL,
      time VARCHAR(255), -- 👈 Add time column
      image_url VARCHAR(255), -- 👈 Add image_url column
      description TEXT NOT NULL,
      location_id INTEGER NOT NULL,
      FOREIGN KEY (location_id) REFERENCES locations(id)
    );
  `

  try {
    await pool.query(createLocationsTableQuery);
    console.log('🎉 locations table created successfully');
    await pool.query(createEventsTableQuery);
    console.log('🎉 events table created successfully');
  } catch (err) {
    console.error('⚠️ error creating tables', err);
  }
}

const seedTables = async () => {
    await seedLocations();
    await seedEvents();
}

const resetDatabase = async () => {
    await createTables();
    await seedTables();
    pool.end();
}

resetDatabase();