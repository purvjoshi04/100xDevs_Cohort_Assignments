import express from "express";
import z from "zod";

const app = express();

const schema = z.array(z.number());

app.use(express.json());

app.listen(3002);

app.post("/health-checkup", (req,res)=> {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    res.send({
        response
    })
})
