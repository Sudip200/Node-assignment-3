const { Employee } = require("../models/model");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");

// home page form
exports.handleHome = (req, res) => {
  res.render("form");
};
// submit form
exports.submitHandler = (req, res) => {
  const employee = new Employee(uuidv4(), req.body.name.trim());
  employee.save(
    () => {
      res
        .status(201)
        .render("message", { message: "User Submitted", redirect: "/users" });
    },
    (e) =>
      res.status(500).render("error", { message: e.message, redirect: "/" })
  );
};
// list all users
exports.listAllUsers = (req, res) => {
  Employee.listAll((data) => {
    res.status(200).render("listusers", { data: data });
  });
};
// view edit user
exports.vieweditUser = (req, res) => {
  const id = req.params.id;
  fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, data) => {
    try {
      if (err) {
        throw new Error("Internal Server Error");
      }
      let employees = JSON.parse(data);
      let employee = employees.find((item) => item.id == id);
      res.status(200).render("edit", { name: employee.name, id: id });
    } catch (e) {
      res
        .status(500)
        .render("error", { message: e.message, redirect: "/users" });
    }
  });
};
// edit user
exports.editUser = (req, res) => {
  const id = req.params.id;
  console.log(req.body.name);
  Employee.editEmployee(
    id,
    req.body.name,
    () => {
      res.render("message", {
        message: "Edited User Successfully",
        redirect: "/users",
      });
    },
    (e) => {
      console.log("inside callback", e.message);
      res
        .status(500)
        .render("error", { message: e.message, redirect: "/edit/" + id });
    }
  );
};
// delete user
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  Employee.deleteEmployee(
    id,
    () => {
      res.redirect("/users");
    },
    (e) =>
      res
        .status(500)
        .render("error", { message: e.message, redirect: "/users" })
  );
};
