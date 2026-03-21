const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

// ✅ GET (Read data)
router.get("/", async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

// ✅ POST (Create data)
router.post("/", async (req, res) => {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ message: "Message Saved" });
});

// ✅ PUT (Update data)
router.put("/:id", async (req, res) => {
    const updated = await Message.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

// ✅ DELETE (Delete data)
router.delete("/:id", async (req, res) => {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message Deleted" });
});

module.exports = router;