package main

import (
	"log"
	"os"

	"github.com/FlamesX-128/Portfolio/src/routes"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println(err.Error())

	}

	port := os.Getenv("PORT")

	log.Println("Serve on port", port)
	log.Panicln(routes.SetupRouter(port).Error())
}
