const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Use the registered model
const Student = mongoose.model('Student');

// Render the Add/Edit form (Insert mode)
router.get('/', (req, res) => {
    res.render('student/addOrEdit', {
        viewTitle: 'Insert student',
    });
});

// Handle form submission for Insert or Update
router.post('/', async (req, res) => {
    try {
        if (!req.body._id || req.body._id === '') {
            await insertRecord(req, res);
        } else {
            await updateRecord(req, res);
        }
    } catch (err) {
        console.error('Error in POST /student:', err);
        res.status(500).send('Server error');
    }
});

async function insertRecord(req, res) {
    try {
        const student = new Student({
            fullName: req.body.fullName,
            email: req.body.email,
            mobile: req.body.mobile,
            city: req.body.city,
        });

        await student.save();  // no callback in Mongoose 7+
        res.redirect('/student/list');
    } catch (err) {
        console.error('Error during insert:', err);
        res.status(500).send('Error inserting student');
    }
}

async function updateRecord(req, res) {
    try {
        console.log('updateRecord req.body:', req.body);
        await Student.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        ); // no callback

        res.redirect('/student/list');
    } catch (err) {
        console.error('Error during update:', err);
        res.status(500).send('Error updating student');
    }
}

// List all students
router.get('/list', async (req, res) => {
    try {
        const docs = await Student.find(); // returns a promise
        res.render('student/list', {
            list: docs,
        });
    } catch (err) {
        console.error('Error in retrieval:', err);
        res.status(500).send('Error retrieving students');
    }
});

// Load one student into the form for editing
router.get('/:id', async (req, res) => {
    try {
        const doc = await Student.findById(req.params.id);
        if (!doc) {
            return res.status(404).send('Student not found');
        }

        res.render('student/addOrEdit', {
            viewTitle: 'Update student',
            student: doc,
        });
    } catch (err) {
        console.error('Error getting student:', err);
        res.status(500).send('Error loading student');
    }
});

// Delete a student
router.get('/delete/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);  
        res.redirect('/student/list');
    } catch (err) {
        console.error('Error in deletion:', err);
        res.status(500).send('Error deleting student');
    }
});

module.exports = router;
