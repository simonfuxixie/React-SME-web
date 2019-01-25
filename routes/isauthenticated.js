// Verifies the user is authenticated, else returns unauthorized
const isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    // send the error as JSON to clients
    res.status(401).send( {error: "Unauthorized"  });
};

module.exports = isAuthenticated;
