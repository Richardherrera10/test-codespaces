import express from "express";
import cors from "cors";

class Server {
    constructor(){
        this._api= express()
        this._port= 3000
        this._host ="localhost"
        this.initMiddlewares()
        this.initRoutes()
    }

    initMiddlewares(){
        this._api.use(cors())
        this._api.use(express.json())
        this._api.use(express.urlencoded({extended:true}))
    }
    initRoutes(){
        this._api.use("/", (req, res) =>{
            res.send("hello world")
        })
    }
    start(){
        this._api.listen(this._port, ()=>{
            console.log(`Server running on http:${this._host}:${this._port}`)
        })
    }
}

const server = new Server()
server.start()