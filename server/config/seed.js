import { pool } from './database.js';

// Add the 'export' keyword before each function
export const seedLocations = async () => {
    const createLocationsTableQuery = `
    INSERT INTO locations (name, description) VALUES
    ('The Echo Lounge & Music Hall', 'A vibrant venue for live music and events.'),
    ('House of Blues Dallas', 'Legendary spot for music, food, and art.'),
    ('Dos Equis Pavilion', 'An iconic outdoor amphitheater for large concerts.'),
    ('American Airlines Center', 'Home to major concerts, sports, and entertainment.');
    `;
    try {
        await pool.query(createLocationsTableQuery);
        console.log('🎉 locations table seeded successfully');
    } catch (err) {
        console.error('⚠️ error seeding locations table', err);
    }
};

// Add the 'export' keyword before each function
export const seedEvents = async () => {
    const createEventsTableQuery = `
    INSERT INTO events (name, date, description, location_id) VALUES
    ('Indie Fest', '2024-10-26', 'A showcase of the best new indie bands.', 1),
    ('Blues Night', '2024-11-15', 'An evening of classic and modern blues.', 2),
    ('Summer Rock Tour', '2025-07-20', 'Featuring the biggest names in rock.', 3),
    ('Pop Sensation Live', '2025-08-05', 'A massive arena show from a global superstar.', 4);
    `;
    try {
        await pool.query(createEventsTableQuery);
        console.log('🎉 events table seeded successfully');
    } catch (err) {
        console.error('⚠️ error seeding events table', err);
    }
}