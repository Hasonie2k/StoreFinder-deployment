const Store = require("../models/Store.Model");

const createNewStore = (req, res) => {
    Store.create(req.body)
    .then((newStore) => {
        res.json({ newStore });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getAllStores = (req, res) => {
    Store.find()
    .then((allStores) => {
        res.json(allStores);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getOneStore = (req, res) => {
    Store.findOne({ _id: req.params.id })
    .then((queriedStore) => {
        res.json(queriedStore);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const updateStore = (req, res) => {
Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
})
    .then((updatedStore) => {
        res.json({ updatedStore });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const deleteExistingUser = (req, res) => {
Store.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
        res.json({ deletedResponse });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

module.exports = {
createNewStore,
getOneStore,
getAllStores,
updateStore,
deleteExistingUser,
};