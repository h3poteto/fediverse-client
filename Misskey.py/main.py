from Misskey import Misskey
import os

misskey = Misskey("misskey.io", i=os.environ["MISSKEY_ACCESS_TOKEN"])

res = misskey.notes()
print(res)
