const express = require('express');
const app = express();

app.uses(express.json());

const usuario = {}
let count = 0