const express = require('express')
const { RouterConversation } = require('./Conversation.Route')
const { RouterChat } = require('./chat')
const { RouterSettingConversation } = require('./settingConversation')
const { RouterAuth } = require('./auth')
let router = express.Router()

const initAPIRoute = async (app) => {
    RouterConversation(router)
    RouterChat(router)
    RouterSettingConversation(router)
    RouterAuth('/api/auth', router)
    app.use('/', router)
}
module.exports = { initAPIRoute }