const express = require( 'express' );
const bodyParser = require( 'body-parser' )

const user = require( './controllers/usercontroller' );
const game = require( './controllers/gamecontroller' )

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use( '/api/auth', user );
app.use( require( './middleware/validate-session' ) )
app.use( '/api/game', game );

const PORT = process.env.PORT || 3000

app.listen( PORT, () => {
    console.log( `server is running http://localhost:${PORT}/` )
} )

