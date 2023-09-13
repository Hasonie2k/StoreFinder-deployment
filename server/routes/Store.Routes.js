const StoreController = require("../controllers/Store.Controller");

module.exports = (app) => {
    app.get("/api/stores", StoreController.getAllStores);
    app.post("/api/stores", StoreController.createNewStore);
    app.get("/api/stores/:id", StoreController.getOneStore); 
    app.patch('/api/stores/edit/:id', StoreController.updateStore);
    app.delete('/api/stores/:id', StoreController.deleteExistingUser);
};