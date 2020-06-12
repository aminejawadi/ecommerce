const Mysqli = require('mysqli');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let conn = new Mysqli({
    Host: 'localhost',
    post: 3306,
    user: 'amine jaouadi',
    passwd: '123456', 
    db: 'dmwm'
});

let db = conn.emit(false, '');

const secret = "1SBz93MsqTs7KgwARcB0I0ihpILIjk3w";

module.exports = {
    database: db,
    secret: secret,
    validJWTNeeded: (req, res, next) => {
        if (req.headers['authorization']) {
            try {
                let authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                } else {
                    req.jwt = jwt.verify(authorization[1], secret);
                    return next();
                }
            } catch (err) {
                return res.status(403).send("Authentication failed");
            }
        } else {
            return res.status(401).send("No authorization header found.");
        }
    },
    hasAuthFields: (req, res, next) => {
        let errors = [];

        if (req.body) {
            if (!req.body.email) {
                errors.push('Missing email field');
            }
            if (!req.body.password && req.body.typeOfUser !== 'social') {
                errors.push('Missing password field');
            }

            if (errors.length) {
                return res.status(400).send({errors: errors.join(',')});
            } else {
                return next();
            }
        } else {
            return res.status(400).send({errors: 'Missing email and password fields'});
        }
    },
    isPasswordAndUserMatch: async (req, res, next) => {
        const myPlaintextPassword = req.body.password;
        const myEmail = req.body.email;

        const user = await db.table('users').filter({$or:[{ email : myEmail },{ username : myEmail }]}).get();

        if (user) {
            const match = await bcrypt.compare(myPlaintextPassword, user.password);

            if (match) {
                req.username = user.username;
                req.email = user.email;
				req.fname = user.fname;
				req.lname = user.lname;
				req.photoUrl = user.photoUrl;
				req.userId = user.id;
				req.type = user.type;
				req.role = user.role;
                next();
            } else {
                res.status(401).json({message: "Username or password incorrect", status: false});
            }

        } else {
            res.status(401).json({message: "Username or password incorrect", status: false});
        }
	}
};
