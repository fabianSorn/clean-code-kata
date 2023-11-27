import { Md5 } from "https://deno.land/std@0.119.0/hash/md5.ts";

class AnagramKey {
  private letterCounts: Record<string, number> = {};

  constructor(word: string) {
    for (const letter of word.toLowerCase()) {
      this.count(letter);
    }
  }

  public toHashString(): string {
    const sortedLetters = Object.keys(this.letterCounts).sort();
    const value: string = JSON.stringify(this.letterCounts, sortedLetters);
    return new Md5().update(value).toString();
  }

  private count(letter: string): void {
    const currentCount = this.letterCounts[letter] ?? 0;
    this.letterCounts[letter] = currentCount + 1;
  }
}

export class AnagramFinder {
  static find(wordList: string[]): string[] {
    const result: Record<string, string> = {};
    for (const word of wordList) {
      const key = new AnagramKey(word).toHashString();

      if (result[key]) {
        result[key] += " " + word;
      } else {
        result[key] = word;
      }
    }

    return Object.values(result);
  }
}
