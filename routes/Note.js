const express=require('express');
const router=express.Router();

const Note=require('./../models/Note')


router.get("/list/:id", async function (req, res) {
    var notes = await Note.find(
        { id: req.params.id }
    );
    res.json(notes);
});
router.post("/add", async function (req, res) {

    await Note.deleteOne({id: req.body.id});
    // res.send("note added");
    const newNote=new Note({
        userid: req.body.userid,
        id: req.body.id,
        content: req.body.content,
        title: req.body.title
    });
    await newNote.save();
    res.send(req.body);
});

router.post('/delete',async function(req, res) {
    await Note.deleteOne({id: req.body.id});
    // var response={message: "note +"}
    res.json("note deleted");
})

module.exports=router;