

const chat = {
    users: [{id: `1`, user: 'Vald'}],
    message: [{id: `3`, user: 'fwasdf', message: '1231241'}],
}

class Chat {
    constructor(chat) {
        this.chat = chat
        this.setMessages.bind(this)
        this.setUsers.bind(this)
    }

    get messages() {
        return this.chat.message
    }
    
    get users() {
        return this.chat.users
    }
    
    setMessages(message) {
        this.chat.message = [message, ...this.chat.message]
    }
    
    setUsers(user) {
        this.chat.users = [user, ...this.chat.users]
    }
}

module.exports = new Chat(chat)