const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        const db = mongoose.connection;

        db.once("open", async () => {
            console.log("Connected to database successfully");

            // Get the name of the connected database
            const dbName = mongoose.connection.name;
            console.log(`Database Name: ${dbName}`);

            try {
                // Get the list of collections (tables) in the connected database
                const collections = await mongoose.connection.db.listCollections().toArray();
                console.log("Collections in the Database:");
                collections.forEach(collection => {
                    console.log(collection.name);
                });
            } catch (err) {
                console.error("Error retrieving collections:", err);
            }
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
