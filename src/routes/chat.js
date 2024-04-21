const Note = require('../controllers/chat/noteController')
const Vote = require('../controllers/chat/voteController')
const { verifyToken } = require('../middlewares/verifyToken')

const RouterChat = (router) => {
    router
        .post('/conversations/note/:conversationId', verifyToken, Note.createNewNote)
        .put('/conversations/note/update/:noteId', verifyToken, Note.updateNote)
        .get('/conversations/note/:conversationId', verifyToken, Note.getListNote)
        .delete('/conversations/note/:noteId', verifyToken, Note.deleteNote)
        .post('/conversations/vote/:conversationId', verifyToken, Vote.createNewVote)
        .put('/conversations/vote/:voteId/:action', verifyToken, Vote.updateVote)
        .get('/conversations/vote/:conversationId', verifyToken, Vote.getListVote)
        .post('/conversations/answers-vote', verifyToken, Vote.answerVote);
}

module.exports = { RouterChat };