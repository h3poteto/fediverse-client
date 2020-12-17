use std::time::Duration;
use std::env;
use std::process;

use futures::stream::TryStreamExt;
use misskey::prelude::*;
use misskey::HttpClient;

#[tokio::main]
async fn main() -> anyhow::Result<()> {

    let token = match env::var("MISSKEY_ACCESS_TOKEN") {
        Ok(val) => val,
        Err(err) => {
            println!("{}: MISSKEY_ACCESS_TOKEN", err);
            process::exit(1);
        },
    };
  let client = HttpClient::builder("https://misskey.io/api/")
      .token(token)
      .build()?;

    let mut notes = client.home_notes(..);
    notes.set_interval(Duration::from_secs(10));
    notes.set_page_size(20);

    while let Some(note) = notes.try_next().await?{
        if let Some(text) = note.text {
            println!("{}", text)
        }
    }

  Ok(())
}
