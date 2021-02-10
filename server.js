const express = require('express')

const app = express()

app.get('/', (req, res) => {
	
	res.send("Integracao Funciosa")


})

app.listen(8080, console.log("Server listening...."))


