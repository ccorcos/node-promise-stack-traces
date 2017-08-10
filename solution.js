function main() {
	new Promise((resolve, reject) => {
		reject(new Error("Oops!"))
	})
}

main()

process.on("unhandledRejection", err => {
	console.error(err)
})
