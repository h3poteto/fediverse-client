package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/mattn/go-mastodon"
)

func main() {
	c := mastodon.NewClient(&mastodon.Config{
		Server:      "https://fedibird.com",
		AccessToken: os.Getenv("MASTODON_ACCESS_TOKEN"),
	})
	timeline, err := c.GetTimelineHome(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}
	for i := len(timeline) - 1; i >= 0; i-- {
		fmt.Printf("%#v\n", timeline[i])
	}
}
