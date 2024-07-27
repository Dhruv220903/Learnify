import "../models/connection.js";
import jwt from "jsonwebtoken";
import rs from "randomstring";

import UserSchemaModel from "../models/user.model.js";

// Save user
export const save = async (req, res) => {
    try {
        const userDetails = await UserSchemaModel.find();
        console.log(req.body);

        const userCount = userDetails.length;
        const newId = (userCount === 0) ? 1 : userDetails[userCount - 1]._id + 1;
        const newUser = { ...req.body, _id: newId, role: "user", status: 0, info: new Date() };

        await UserSchemaModel.create(newUser);
        res.status(201).json({ status: true });
    } catch (error) {
        console.error('Save Error:', error.message);
        res.status(500).json({ error: "error hai kuch" });
    }
};

// Fetch users
export const fetch = async (req, res) => {
    try {
        let conditionObj = req.query.condition_obj;
        conditionObj = conditionObj ? JSON.parse(conditionObj) : {};

        const users = await UserSchemaModel.find(conditionObj);
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ status: "Requested resource not found" });
        }
    } catch (error) {
        console.error('Fetch Error:', error.message);
        res.status(500).json({ error: "An error occurred while fetching users." });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    try {
        let conditionObj = req.body.condition_obj;
        conditionObj = conditionObj ? JSON.parse(conditionObj) : {};

        const user = await UserSchemaModel.findOne(conditionObj);
        if (user) {
            await UserSchemaModel.deleteOne(conditionObj);
            res.status(200).json({ status: "success" });
        } else {
            res.status(404).json({ status: "Requested resource not found" });
        }
    } catch (error) {
        console.error('Delete Error:', error.message);
        res.status(500).json({ status: "Server Error" });
    }
};

// Update user
export const update = async (req, res) => {
    try {
        const conditionObj = JSON.parse(req.body.condition_obj);
        const contentObj = JSON.parse(req.body.content_obj);

        const user = await UserSchemaModel.findOne(conditionObj);
        if (user) {
            await UserSchemaModel.updateOne(conditionObj, { $set: contentObj });
            res.status(200).json({ status: "success" });
        } else {
            res.status(404).json({ status: "Requested resource not found" });
        }
    } catch (error) {
        console.error('Update Error:', error.message);
        res.status(500).json({ status: "Server Error" });
    }
};

// Login user
export const login = async (req, res) => {
    try {
        const conditionObj = { ...req.body, status: 1 };
        const users = await UserSchemaModel.find(conditionObj);

        if (users.length > 0) {
            const payload = { subject: users[0].email };
            const key = rs.generate();
            const token = jwt.sign(payload, key);

            res.status(200).json({
                status: "login success",
                token: token,
                userDetails: users[0]
            });
        } else {
            res.status(404).json({ status: "Requested resource not found", token: "error" });
        }
    } catch (error) {
        console.error('Login Error:', error.message);
        res.status(500).json({ status: "Server Error", token: "error" });
    }
};
