const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const getAllLessons = async () => {
    const scanResult = await dynamo.scan({"TableName": process.env.TABLE_NAME}).promise();
    
    return scanResult;
}

exports.handler = async (event) => {
    const data = await getAllLessons();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };
    return response;
};
