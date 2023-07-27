//arrancar la app
import { app } from "./server.js";

app.listen(app.get("port"), ()=>{
    console.log("server listen: " + app.get("port"))
})