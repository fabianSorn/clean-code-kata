export class Files {
  static async readTextFile(filePath: string): Promise<string[]> {
    const content = await Deno.readTextFile(filePath);
    return content.split("\r\n");
  }

  static async writeTextFile(
    filePath: string,
    textLines: string[],
  ): Promise<void> {
    await Deno.writeTextFile(filePath, textLines.join("\r\n"));
  }
}
