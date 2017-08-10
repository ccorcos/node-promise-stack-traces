function main() {
	new Promise((resolve, reject) => {
		reject(new Error("Oops!"))
	})
}

main()
