import { AnagramFinder } from "./anagram-finder.ts";
import { Files } from "./files.ts";

const INPUT_FILE = "./wordlist.txt";
const OUTPUT_FILE = "./result.txt";

const fileInput = await Files.readTextFile(INPUT_FILE);
const result: string[] = AnagramFinder.find(fileInput);
await Files.writeTextFile(OUTPUT_FILE, result);
