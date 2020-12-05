exports.postContacts = async (req, res) => {
  try {
    // console.log(req.body);
    // declare const to take a model
    const newContact = new Contact({ ...req.body });
    if (!newContact) {
      res.status(400).send({ message: "data is required" });
    }
    const response = await newContact.save();
    res.send({ response: response, message: "it saved" });
  } catch (error) {
    console.log(error);
    res.status(400).send("can not save the contact");
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, message: "getting all the contacts" });
  } catch (error) {
    res.status(400).send({ message: "can not get contacts" });
  }
};

exports.getOneContact = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, message: "getting contact successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no contact with this id" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ message: "user deleted" })
      : res.send({ message: "there is no contact with thiw id" });
  } catch (error) {
    res.status(400).send({ message: "there is no id" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.send({ message: "contact updated" })
      : res.send({ message: "contact already updated" });
  } catch (error) {
    res.status(400).send("not updated");
  }
};
