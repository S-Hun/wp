const mongoose = require('mongoose');
const { MONGO_URL } = require('../env');

function connect() {
  return mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
}

const { connection } = mongoose;

connection.on('error', err => console.error('MongoDB 연결 에러'));
connection.on('open', () => console.log('MongoDB 연결 성공'));
connection.on('disconnected', () => {
  console.error('MongoDB와의 연결이 끊겼습니다. 연결을 재시도 합니다.');
  connect();
});

const models = {};

// 여기에 모델들을 추가해 나감
models.User = require('./user.model');
models.Post = require('./post.model');

// connect 함수와 models을 export 하여 외부 모듈에서 모델들을 사용할 수 있도록 함
module.exports = { connect, mongoose, models };
