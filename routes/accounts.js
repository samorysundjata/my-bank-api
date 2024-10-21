import express from "express";
const router = express.Router();

router.post("/accounts", (req, res) => {
  res.send("POST /accounts");
});

export default router;
