package routes

import (
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRouter(port string) error {
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc(`/public/{file:[\w\W\/]+}`, func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, r.URL.Path[1:])

	})

	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./public/main.html")

	})

	return http.ListenAndServe((":" + port), router)
}
