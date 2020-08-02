const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

// //--------------------
//     //Create
// //--------------------
router.post('/', (req, res) => {
    const { make, model, vin, mileage } = req.body;        

    if (!make || !model || !vin || !mileage) {
        res.status(400).json({ errorMessage: "Please provide make, model, vin and mileage for the post." })
    } else {
        db.select().from('cars')
        .insert(req.body)
            .then(() => {
                res.status(201).json(req.body)
            })
            .catch(() => {
                res.status(500).json({message: 'failed to make post'})
            })
    }
})

// //--------------------
//     //Read
// //--------------------
router.get('/', (req, res) => {
    db.select().from('cars')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'Error returning cars.', err})
        })
})

// //--------------------
//     //Read - id
// //--------------------
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.select().from('cars')
        .where({ id })
            .then(data => {
                if(data) {
                    res.status(200).json({data})
                } else {
                    res.status(400).json({message: 'Car not found.'})
                }
            })
            .catch(err => {
                res.status(500).json({message: 'Error returning car.', err})
            })
})

// //--------------------
//     //Update
// //--------------------
router.put('/:id', (req, res) => {
    const { id } = req.params;

    db.select().from('cars')
        .where({ id })
            .update(req.body)
                .then(count => {
                    if(count) {
                        res.json({ updated: count })
                    } else {
                        res.status(404).json({ message: 'invalid id' })
                    }
                })
                .catch(err => {
                    res.status(500).json({ message:'failed to update', err})
                })
})

// //--------------------
//     //Delete
// //--------------------
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.select().from('cars')        
        .where({ id })
            .del()
                .then(count => {
                    if (count) {
                        res.json({ message: 'Car deleted' });
                    } else {
                        res.status(404).json({ message: 'invalid id' });
                    }
                })
                .catch(err => {
                    res.status(500).json({message:'failed to update', err})
                })
})

module.exports = router;