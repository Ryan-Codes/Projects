/**
 * Server looks up user in DB using provided ID and renders their profile page
 */
module.exports = {
    name: "/user-profile/:userID",
    method: "get",
    execute(req, res)
    {
        if(true || !req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
