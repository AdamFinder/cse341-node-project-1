const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('recipes').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// const getSingle = async (req, res, next) => {
//     const userId = new ObjectId(req.params.id);
//     const result = await mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .find({_id: userId});
//     result.toArray().then((lists) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).json(lists[0]);
//     });
// };

const createRecipe = async (req, res) => {
    const recipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        step1: req.body.step1,
        step2: req.body.step2,
        step3: req.body.step3,
        step4: req.body.step4
    };
    const response = await mongodb.getDb().db().collection('recipes').insertOne(recipe);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Could not create new recipe');
    }
};

// const updateContact = async (req, res) => {
//     const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
//     const contact = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       favoriteColor: req.body.favoriteColor,
//       birthday: req.body.birthday
//     };
//     const response = await mongodb
//       .getDb()
//       .db()
//       .collection('contacts')
//       .replaceOne({ _id: userId }, contact);
//     console.log(response);
//     if (response.modifiedCount > 0) {
//       res.status(204).send();
//     } else {
//       res.status(500).json(response.error || 'Some error occurred while updating the contact.');
//     }
//   };

//   const deleteContact = async (req, res) => {
//     const userId = new ObjectId(req.params.id);
//     const response = await mongodb.getDb().db().collection('contacts').remove({ _id: userId }, true);
//     console.log(response);
//     if (response.deletedCount > 0) {
//       res.status(204).send();
//     } else {
//       res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
//     }
//   };

module.exports = { getAll, createRecipe};