console.log('start function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function(e, ctx, callback) {

    var params = {
        Item: {
            date: Date.now(),
            message: "Example techdebtscore message"
        },
        TableName: 'techdebtscore'
    };

    docClient.put(params, function(err,data) {
        if(err) {
            callback(err,null);
        }else{
            callback(err,data);
        }
    });
}