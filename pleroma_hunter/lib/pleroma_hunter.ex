defmodule PleromaHunter do
  def main do
    auth()
    |> home_timeline()
    |> Enum.map(fn %Hunter.Status{id: id} -> id end)
    |> Enum.map(fn id -> IO.puts(id) end)
  end

  defp auth do
    Hunter.new(
      base_url: "https://fedibird.com",
      bearer_token: System.get_env("MASTODON_ACCESS_TOKEN")
    )
  end

  defp home_timeline(conn, %{limit: limit}) do
    conn
    |> Hunter.home_timeline(limit: limit)
  end

  defp home_timeline(conn) do
    conn
    |> Hunter.home_timeline()
  end
end
