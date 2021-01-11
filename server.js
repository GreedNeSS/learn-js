// let http = require('http');
// let static = require('node-static');
// let fileServer = new static.Server('.');
// let path = require('path');
// let fs = require('fs');
// let debug = require('debug')('example:resume-upload');

// let uploads = Object.create(null);

// function onUpload(req, res) {

// 	let fileId = req.headers['x-file-id'];
// 	let startByte = req.headers['x-start-byte'];

// 	if (!fileId) {
// 		res.writeHead(400, "No file id");
// 		res.end();
// 	}

// 	// мы будем сохранять файлы "в никуда"
// 	let filePath = '/dev/null';
// 	// хотя могли бы использовать реальный путь, например
// 	// let filePath = path.join('/tmp', fileId);

// 	debug("onUpload fileId: ", fileId);

// 	// инициируем новую загрузку
// 	if (!uploads[fileId]) uploads[fileId] = {};
// 	let upload = uploads[fileId];

// 	debug("bytesReceived:" + upload.bytesReceived + " startByte:" + startByte)

// 	let fileStream;

// 	// если стартовый байт 0 или не указан - создаём новый файл, иначе проверяем размер и добавляем данные к уже существующему файлу
// 	if (!startByte) {
// 		upload.bytesReceived = 0;
// 		fileStream = fs.createWriteStream(filePath, {
// 			flags: 'w'
// 		});
// 		debug("New file created: " + filePath);
// 	} else {
// 		// we can check on-disk file size as well to be sure
// 		if (upload.bytesReceived != startByte) {
// 			res.writeHead(400, "Wrong start byte");
// 			res.end(upload.bytesReceived);
// 			return;
// 		}
// 		// добавить к существующему файлу
// 		fileStream = fs.createWriteStream(filePath, {
// 			flags: 'a'
// 		});
// 		debug("File reopened: " + filePath);
// 	}


// 	req.on('data', function (data) {
// 		debug("bytes received", upload.bytesReceived);
// 		upload.bytesReceived += data.length;
// 	});

// 	// сохранить тело запроса в файл
// 	req.pipe(fileStream);

// 	// когда обработка запроса завершена и все данные записаны
// 	fileStream.on('close', function () {
// 		if (upload.bytesReceived == req.headers['x-file-size']) {
// 			debug("Upload finished");
// 			delete uploads[fileId];

// 			// мы можем сделать что-то ещё с загруженным файлом

// 			res.end("Success " + upload.bytesReceived);
// 		} else {
// 			// соединение потеряно, остаются незавершённые загрузки
// 			debug("File unfinished, stopped at " + upload.bytesReceived);
// 			res.end();
// 		}
// 	});

// 	// в случае ошибки ввода/вывода завершаем обработку запроса
// 	fileStream.on('error', function (err) {
// 		debug("fileStream error");
// 		res.writeHead(500, "File error");
// 		res.end();
// 	});

// }

// function onStatus(req, res) {
// 	let fileId = req.headers['x-file-id'];
// 	let upload = uploads[fileId];
// 	debug("onStatus fileId:", fileId, " upload:", upload);
// 	if (!upload) {
// 		res.end("0")
// 	} else {
// 		res.end(String(upload.bytesReceived));
// 	}
// }


// function accept(req, res) {
// 	if (req.url == '/status') {
// 		onStatus(req, res);
// 	} else if (req.url == '/upload' && req.method == 'POST') {
// 		onUpload(req, res);
// 	} else {
// 		fileServer.serve(req, res);
// 	}

// }




// // -----------------------------------

// if (!module.parent) {
// 	http.createServer(accept).listen(8080);
// 	console.log('Server listening at port 8080');
// } else {
// 	exports.accept = accept;
// }



// ! Сервер для WebSocket

// const http = require('http');
// const ws = require('ws');

// const wss = new ws.Server({ noServer: true });

// function accept(req, res) {
// 	// все входящие запросы должны использовать websockets
// 	if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
// 		res.end();
// 		return;
// 	}

// 	// может быть заголовок Connection: keep-alive, Upgrade
// 	if (!req.headers.connection.match(/\bupgrade\b/i)) {
// 		res.end();
// 		return;
// 	}

// 	wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
// }

// function onConnect(ws) {
// 	ws.on('message', function (message) {
// 		let name = message.match(/([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)$/gu) || "Гость";
// 		ws.send(`Привет с сервера, ${name}!`);

// 		setTimeout(() => ws.close(1000, "Пока!"), 5000);
// 	});
// }

// if (!module.parent) {
// 	http.createServer(accept).listen(8080);
// 	console.log('Server listening at port 8080');
// } else {
// 	exports.accept = accept;
// }


// ! WebSocket chat


// const http = require('http');

// const ws = new require('ws');

// const wss = new ws.Server({ noServer: true });

// const clients = new Set();

// function accept(req, res) {

// 	if (req.url == '/ws' && req.headers.upgrade &&
// 		req.headers.upgrade.toLowerCase() == 'websocket' &&
// 		// может быть подключён: keep-alive, Upgrade
// 		req.headers.connection.match(/\bupgrade\b/i)) {
// 		wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
// 	} else { // страница не найдена
// 		res.writeHead(404);
// 		res.end();
// 	}
// }

// function onSocketConnect(ws) {
// 	clients.add(ws);

// 	log(`новое подключение`);

// 	ws.on('message', function (message) {
// 		log(`получено сообщение: ${message}`);

// 		message = message.slice(0, 50);

// 		for (let client of clients) {
// 			client.send(message);
// 		}
// 	});

// 	ws.on('close', function () {
// 		log(`подключение закрыто`);
// 		clients.delete(ws);
// 	});
// }

// let log;
// if (!module.parent) {
// 	log = console.log;
// 	http.createServer(accept).listen(8080);
// } else {
// 	// для размещения на javascript.info
// 	log = function () { };
// 	// log = console.log;
// 	exports.accept = accept;
// }



// ! Server Send Events

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

function onDigits(req, res) {
	console.log('go');
	res.writeHead(200, {
		'Content-Type': 'text/event-stream; charset=utf-8',
		'Cache-Control': 'no-cache'
	});

	let i = 0;

	let timer = setInterval(() => {
		write()
	}, (1000));

	write();

	function write() {
		i++;

		if (i == 4) {
			res.write('event: bye\ndata: пока-пока\n\n');
			clearInterval(timer);
			res.end();
			return;
		}

		res.write('data: ' + i + '\n\n');

	}
}

function accept(req, res) {
	console.log(req.url);

	if (req.url == '/digits') {
		onDigits(req, res);
		return;
	} else if (req.url == '/') {
		fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
			console.log('html');
			if (err) {
				throw err
			}

			res.writeHead(200, {
				'Content-Type': 'text/html'
			})
			res.end(data);
		})
	} else if (req.url == '/js/app.js') {
		fs.readFile(path.join(__dirname, 'js', 'app.js'), (err, data) => {
			console.log('js');
			if (err) {
				throw err
			}

			res.writeHead(200, {
				'Content-Type': 'text/javascript'
			})
			res.end(data);
		})
	} else if (req.url == '/css/style.css') {
		fs.readFile(path.join(__dirname, 'css', 'style.css'), (err, data) => {
			console.log('css');
			if (err) {
				throw err
			}

			res.writeHead(200, {
				'Content-Type': 'text/css'
			})
			res.end(data);
		})
	}

}

if (!module.parent) {
	http.createServer(accept).listen(8080);
	console.log('Server listening at port 8080');
} else {
	exports.accept = accept;
}