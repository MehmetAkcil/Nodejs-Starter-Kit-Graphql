import express from "express";
import router from "./routes/index.js";
import {config, port} from "./config/config.js";
import startApollo from "./graphql/index.js";


const app = express();

await config(app)
router(app)


await startApollo(app);


app.listen(port, () => {
    console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`);
});

