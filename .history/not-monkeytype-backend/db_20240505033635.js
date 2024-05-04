const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        const db = mongoose.connection;

        db.once("open", () => {
            console.log("Connected to database successfully");

            // Get the name of the connected database
            const dbName = mongoose.connection.name;
            console.log(`Database Name: ${dbName}`);

            // Get the list of collections (tables) in the connected database
            mongoose.connection.db.listCollections().toArray((err, collections) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Collections in the Database:");
                collections.forEach(collection => {
                    console.log(collection.name);
                });
            });
        });

        db.on("error", (error) => {
            console.log(error);
            console.log("Could not connect database!");
        });
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!");
    }
};
