module.exports = {
    getLogin: (req, res) => {
        console.log('test',req.query);
        var userName = req.query.user
        const db = req.app.get("db");
        db.login(userName).then(users => {
            console.log(users)
            res.status(200).send(users)
        })
    }
    
}