module.exports = {
    // 74M
    getLogin: (req, res) => {
        // 76E
        console.log('test',req.query);
        // 70K
        var userName = req.query.user
        const db = req.app.get("db");
        db.login(userName).then(users => {
            console.log(users)
            res.status(200).send(users)
        })
    },
    getAllUserInfo: (req, res) => {
        const db = req.app.get("db");
        db.getAllUserInfo().then(users => {
            console.log(users)
            res.status(200).send(users)
        })
    }
    
}