import { openDB } from "idb";

export const saveCode = async (
  html: string,
  css: string,
  js: string
) => {
  const db = await openDB("CodeEditorDB", 1, {
    upgrade(db) {
      db.createObjectStore("snippets", { keyPath: "id" });
    },
  });

  await db.put("snippets", {
    id: "latest",
    html,
    css,
    js,
  });
};

export const loadCode = async () => {
  const db = await openDB("CodeEditorDB", 1);
  return await db.get("snippets", "latest");
};