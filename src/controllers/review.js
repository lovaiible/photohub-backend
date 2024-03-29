"use strict";

const ReviewModel = require('../models/review');


const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ReviewModel.create(req.body)
        .then(review => res.status(201).json(review))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    ReviewModel.findById(req.params.id).exec()
        .then(review => {

            if (!review) return res.status(404).json({
                error: 'Not Found',
                message: `Review not found`
            });

            res.status(200).json(review)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const update = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ReviewModel.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true}).exec()
        .then(review => res.status(200).json(review))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    ReviewModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Review with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};
const list  = (req, res) => {
    /*ReviewModel.find({}).exec()
        .then(reviews => res.status(200).json(reviews.sort(function(a, b){return new Date(a.date) - new Date(b.date)}).reverse()))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));*/
    var pId = req.params.id;
    ReviewModel.aggregate([
        {$match: {photographerId: pId}},
    ]).exec()
        .then(reviews => res.status(200).json(reviews.sort(function(a, b){return new Date(a.date) - new Date(b.date)}).reverse()))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const getAvgRating  = (req, res) => {
    var avgId = req.params.id;
    ReviewModel.aggregate([
        {$match: {photographerId: avgId}},
        {$group:{_id: "$photographerId",avgRating: {$avg: "$rating"}}}
    ]).exec()
        .then(avgRating => res.status(200).json(avgRating))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const checkAlreadyRated  = (req, res) => {
    var avgId = req.params.id;
	var userid = req.params.userid;
	console.log(userid);
    ReviewModel.aggregate([
        {$match: {photographerId: avgId}},
		{$match: {userId: userid}},
        {$group:{_id: "$photographerId"}}
    ]).exec()
        .then(alreadyRated => res.status(200).json(alreadyRated))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

module.exports = {
    create,
    read,
    update,
    remove,
    list,
    getAvgRating,
	checkAlreadyRated
};