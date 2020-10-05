package main

import (
	"fmt"
	"net/http"
)

// hello route
func hello(w http.ResponseWriter, req *http.Request) {
	// Writes the response
	fmt.Fprintf(w, "Hello World!\n")
}

// main function
func main() {
	// Route handlers
	http.HandleFunc("/hello", hello)

	// Initialize the server
	http.ListenAndServe(":8080", nil)
}
