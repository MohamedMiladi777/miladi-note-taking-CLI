// jest.mock("../src/db.js");

import { jest } from "@jest/globals";
const { insertDB, saveDB, getDB } =  import("../src/db");
import { createNote } from "../src/notes";

const mockFnInsert = jest.fn(insertDB);
const mockFnSave = jest.fn(saveDB);
const mockFnGet = jest.fn(getDB);

beforeEach(() => {
  mockFnGet.mockClear();
  mockFnInsert.mockClear();
  mockFnSave.mockClear();
});

test("Inserting a new note: ", async () => {
  const note = "Test note";
  const tags = ["tag1", "tag2"];
  const data = {
    tags,
    content:note,
    id: Date.now(),
  };

  // insertDB.mockResolvedValue(data)
  mockFnInsert.mockResolvedValue(data);
  const result = await createNote(note, tags);
  expect(result).toEqual(data);
});
