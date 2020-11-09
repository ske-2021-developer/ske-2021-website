// @ts-check

const { https } = require('firebase-functions')
const { default: next } = require('next')

const isDev = process.env.NODE_ENV !== 'production'

const nextjsServer = next({
	dev: isDev,
	conf: { distDir: './src/next/.next' }
})

const nextjsHandle = nextjsServer.getRequestHandler()

exports.nextServer = https.onRequest(async (req, res) => {
	await nextjsServer.prepare()

	return nextjsHandle(req, res)
})
