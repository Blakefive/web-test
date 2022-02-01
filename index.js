const mysql = require('mysql');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* Step 1, create DB Pool */
const pool = mysql.createPool({
	host: 'us-cdbr-east-05.cleardb.net',
	user: '"b80bb3614e25cd",',
	password: '30a5c7bf',
	database: 'heroku_96a107df1e5e545'
});
/* Step 2. get connection */
const dbTest = async () => {
		const connection = await pool.getConnection(async conn => conn);
		/* Step 3. */
		const name = 'HELLO';
		await connection.beginTransaction(); // START TRANSACTION
		const [rows] = await connection.query('INSERT INTO bmokey(name) VALUES(?)', [name]);
		await connection.commit(); // COMMIT
		connection.release();
		return rows;
};

app.get('/', (req, res) => {res.send("Insert Data");})
app.listen(port, () => {console.log("Example app listening on port ${port}");})
