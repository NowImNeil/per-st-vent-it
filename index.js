import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3001;

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () =>{
    console.log(`running at port ${port}`);
});