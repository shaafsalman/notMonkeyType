const express = require( 'express' );
const mysql = require( 'mysql' );
const cors = require( 'cors' );
const bcrypt = require( 'bcrypt' );
const mongoose = require( 'mongoose' );


const app = express();
app.use( cors() );

const db = mysql.createConnection( {
	host: "localhost",
	user: "admin",
	password: "1122",
	database: "notMonkeyType"
})

app.get( '/signup', ( request, result ) => {
	const { username, password, email } = request.query;

	isUsernameUnique( username, ( usernameError, usernameCode ) => {
		if( usernameError) {
		  return result.status(500).json({ error: 'Internal server error' });
		}
		if( usernameCode === 400 ) {
		  return result.status(400).json({ error: 'Username already exists' });
		}

		isEmailUnique( email, ( emailError, emailCode ) => {
			if( emailError ) {
				return result.status(500).json({ error: 'Internal server error' });
			}
			if( emailCode === 400 ) {
				return result.status(400).json({ error: 'Email already exists' });
			}

			bcrypt.hash( password, 10, ( error, hashedPass ) => {
				if ( error ) {
					return result.status(500).json({ error: 'Internal server error' });
				}

				var query = "INSERT INTO users ( username, password, email ) VALUES ( ?, ?, ? )";
				db.query( query, [username, hashedPass, email], ( dbError, dbResult ) => {
					if (dbError) {
						return result.status(500).json({ error: 'Failed to create user' });
					}
					return result.json( "Signup successful!" );
				});
			});
		});
	});
})

app.get('/login', (request, result) => {
	const { username, password } = request.query;

	const query = "SELECT id, password FROM users WHERE username = ?";
	db.query(query, [username], (dbError, dbResult) => {
		if ( dbError ) {
			return result.status(500).json({ error: 'Internal server error' });
		}

		// If no user found with the given username
		if ( dbResult.length === 0 ) {
			return result.status(404).json({ error: 'User not found' });
		}

	  	const hashedPassword = dbResult[0].password;
		bcrypt.compare( password, hashedPassword, ( bcryptError, isMatch ) => {
			if ( bcryptError ) {
				return result.status(500).json({ error: 'Internal server error' });
			}
			if ( !isMatch ) {
				return result.status(401).json({ error: 'Incorrect password' });
			}
			return result.json({ message: 'Login successful', userId: dbResult[0].id });
		});
	});
});

app.get( '/users', ( request, result ) => {
	var query = "SELECT * FROM users";
	db.query( query, ( error, data ) => {
		if( error ) return result.json( error );
		return result.json( data );
	} )
})

app.get( '/', ( request, result ) => {
	return result.json( 'from backend' );
})

app.listen( 8081, () => {
	console.log( 'listening on port 8081' );
})

function isUsernameUnique(username, callback) {
	const usernameQuery = "SELECT * FROM users WHERE username = ?";
	db.query( usernameQuery, [username], ( usernameError, usernameResult ) => {
		if ( usernameError ) {
			return callback( usernameError, 500 );
		}
		if ( usernameResult.length > 0 ) {
			return callback( null, 400 );
		}
		return callback( null, 0 );
	});
}

function isEmailUnique( email, callback ) {
	const emailQuery = "SELECT * FROM users WHERE email = ?";
	db.query( emailQuery, [email], ( emailError, emailResult ) => {
		if ( emailError ) {
			return callback( emailError, 500 );
		}
		if ( emailResult.length > 0 ) {
			return callback( null, 400 );
		}
		return callback( null, 0 );
	});
}