const express = require("express");
const router = express.Router();
const Contact = require("../Model/Contact");
const Controllers = require("../Controllers/Contact.controllers");

// router.get("/", (req, res) => {
//   res.send("Hello");
// });

// @Method POST
// @desc Post contact
// @path: http://localhost:7177/api/contacts
router.post("/", Controllers.postContacts);

// @Method GET
// @desc get all contacts
// @path: http://localhost:7051/api/contacts
router.get("/", Controllers.getAllContacts);

// @Method GET
// @desc get contact by id
// @path: http://localhost:7177/api/contacts/id
// @params id

router.get("/:id", Controllers.getOneContact);

// @Method delete
// @desc delete contact by id
// @path: http://localhost:7177/api/contacts/id
// @params id

router.delete("/:id", Controllers.deleteContact);

// @Method put
// @desc update contact by id
// @path: http://localhost:7177/api/contacts/id
// @params id body

router.put("/:id", Controllers.updateContact);

module.exports = router;
