const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const { template1, template2 } = require("./pdf-sample"); // Importing the templates
const mongoose = require("mongoose");
const ResumeRoutes = require("./routes/index");

const app = express();
const uri =
  "mongodb+srv://Rohi:EgWbIbD27nNOQipJ@cluster0.eqsiiyv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const con = mongoose.connection;
con.once("open", () => {
  console.log("Mongo DB connected");
});

const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/create-pdf/", (req, res) => {
  // Choose the template based on the frontend selection
  // For example, use template1 or template2 based on the frontend input
  const template=req.body.template;

  const selectedTemplate =template;
console.log(template);
  let generatedHtml;
  if (selectedTemplate === "template1") {
    generatedHtml = template1(req.body.resumeData);
  } else if (selectedTemplate === "template2") {
    generatedHtml = template2(req.body.resumeData);
  } else {
    res.status(400).json({ error: "Invalid template selection" });
    return;
  }

  pdf.create(generatedHtml, {}).toFile("Resume.pdf", (err) => {
    if (err) {
      res.status(500).send({ error: "Error generating PDF" });
      console.log(err);
    } else {
      res.status(200).send({ success: true });
      console.log("Success");
    }
  });
});

app.get("/fetch-pdf", (req, res) => {
  console.log("sending");
  res.sendFile(`${__dirname}/Resume.pdf`);
});

app.use("/", ResumeRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(express.static("../client/build"));

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
