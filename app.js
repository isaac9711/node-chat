const express = require('express')

/* 설치한 socket.io 모듈 불러오기 */
const socket = require('socket.io')

/* Node.js 기본 내장 모듈 불러오기 */
const http = require('http')

/* express 객체 생성 */
const app = express()
const server = http.createServer(app)
const io = socket(server)
app.get('/', function(request, response) {
  console.log('유저가 / 으로 접속하였습니다!')
  response.send('Hello, Express Server!!')
})

server.listen(8080, function() {
  console.log('서버 실행 중..')
})