import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getEventsByLocation = async (req, res) => {
    const location_id = req.params.location_id

    try {
        const results = await pool.query('SELECT * FROM events WHERE location_id = $1', [location_id])
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getEventById = async (req, res) => {
    const id = req.params.id;

    try {
        const results = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getEvents,
    getEventsByLocation,
    getEventById
}