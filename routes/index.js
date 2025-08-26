const express = require('express');
const userRoutes = require('./user.routes');
const categoryRoutes = require('./category.routes');
const transactionRoutes = require('./transaction.routes');
const budgetRoutes = require('./budget.routes');
const fileUploadRoutes = require('./fileUpload.routes');
const recurringRoutes = require('./recurring.routes');


module.exports = (app) => {
    app.use('/userAuth', userRoutes)
    app.use('/category', categoryRoutes)
    app.use('/transaction', transactionRoutes)
    app.use('/budget', budgetRoutes)
    app.use('/fileUpload', fileUploadRoutes)
    app.use('/recurring', recurringRoutes)
}


