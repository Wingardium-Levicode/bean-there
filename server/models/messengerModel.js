"use strict";
var { Sequelize, DataTypes } = require("sequelize");
var db = require("../db/database");
const ChatRoom = db.define("chat_room", {
    chat_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
const ChatMember = db.define("chat_member", {
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});
const Message = db.define("message", {
    message_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    message_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: "TIMESTAMP",
        defaultValue: db.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    updated_at: {
        type: "TIMESTAMP",
        defaultValue: db.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
}, { timestamps: false });
module.exports = { ChatRoom, ChatMember, Message };
