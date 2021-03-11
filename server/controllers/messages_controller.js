const messages = [];
//messagesObj {id, text, time}
let id = 0;

module.exports = {

    create: (req, res) => {
        const { text, time } = req.body
        messages.push({
            id: id,
            text: text,
            time: time
        })
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const { id } = req.params
        const { text } = req.body
        let messageIndex = messages.findIndex(message => message.id === +id)
        let messageToUpdate = messages[messageIndex]

        messages[messageIndex] = {
            id: +id,
            text: text || messageToUpdate.text,
            time: messageToUpdate.time
        }
        res.status(200).send(messages)
    },

    // delete: (req, res) => {
    //     const { id } = req.params
    //     messages = messages.filter(message => {
    //         message.id !== +id
    //     })
    // }

    delete: (req, res) => {
        const deleteId = req.params.id
        messageId = messages.findIndex(message => message.id === +deleteId)
        messages.splice(messageId, 1)
        res.status(200).send(messages)
    }
};