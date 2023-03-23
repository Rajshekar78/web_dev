// logic behind the ABDEF to GFECB in python?
if any(c in someList for c in ("a", "á", "à", "ã", "â")):
    ...


someList.remove("a")
someList.remove("á")
...


chars_to_remove = set(("a", "á", "à", "ã", "â"))
someList = [c for c in someList if c not in chars_to_remove]


someList[:] = (c for c in someList if c not in chars_to_remove)


