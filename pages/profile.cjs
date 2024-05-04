const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
/**
 * Server renders the profile page
 */
module.exports = {
    name: "/profile",
    method: "get",
    async execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        const builds = await db.getBuilds(req.cookies.username);
        let pfp, bio;
        res.render("profile", {
            username: req.cookies.username,
            builds: builds,
            pfp: pfp ?? "/images/default.jpg",
            bio: bio ?? "About Me..."
        });
    }
};
