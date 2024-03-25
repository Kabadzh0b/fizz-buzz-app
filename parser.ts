const mockResponses: Record<string, string> = {
  "file1.txt": `Hello world! : 2024-02-22 14:35:30 UTC
    Goodbye world! : 2024-02-22 16:35:30 UTC
    Hello? : 2024-02-22 08:35:30 UTC
   Hi : 2024-02-22 12:35:30 UTC`,
  "file2.txt": `How are you doing ? : 2024-02-22 13:59:30 UTC
    Fine : 2024-02-22 12:44:30 UTC
    How about you ? : 2024-02-22 22:35:30 UTC
    Same : 2024-02-22 07:39:30 UTC`,
  "file3.txt": `Have you seen high elves ? : 2022-02-22 14:35:30 UTC
    HESOYAM : 2023-02-22 14:35:30 UTC
    BAGUVIX : 2021-02-22 14:35:30 UTC
    THERE IS NO SPOON : 2020-02-22 14:35:30 UTC`,
};

const mockFetch = async (
  filePath: string,
  params?: { body: string; method: string }
): Promise<string> => {
  if (params?.method === "POST") return "";
  return mockResponses[filePath] ?? "";
};

type FileContent = {
  message: string;
  timestamp: string;
};

class Parser {
  constructor() {}
  async getFileContent(file: string): Promise<FileContent[]> {
    const fetchResponse = await mockFetch(file);
    const messages = fetchResponse.split("\n");
    const content: FileContent[] = [];

    // decompose the function to make it more readable, added types
    const getContentFromMessage = (message: string): FileContent => {
      const [msg, timestamp] = message.split(":");
      return { message: msg.trim(), timestamp: timestamp.trim() };
    };

    // for of instead of casual for loop
    for (const message of messages) {
      content.push(getContentFromMessage(message));
    }
    return content;
  }

  async saveContent(messages: FileContent[], fileName: string) {
    const waitGroup: Promise<any>[] = [];
    for (let i = 0; i < messages.length; i++) {
      const postingMessage = new Promise<string>(async (resolve) => {
        await new Promise<void>((resolve) =>
          setTimeout(() => resolve(), Math.random() * 5 * 1000)
        );

        const postBody = {
          ...messages[i],
          type: messages[i].message.length > 8 ? "long" : "short",
        };

        await mockFetch(fileName, {
          body: JSON.stringify(postBody),
          method: "POST",
        })
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            // I don`t quite understand what means "If parsing or writing fails - resolve gracefully, without error" so I just resolve with error message
            resolve(`Error while saving message - ${error}`);
            console.log(`Error while saving message - ${error}`)
          });

        console.log(
          `Saved message - ${messages[i].message} to ${fileName} as ${
            messages[i].message.length > 8 ? "long" : "short"
          }`
        );
      });
      waitGroup.push(postingMessage);
    }
    await Promise.all(waitGroup);
  }
}

type Files = {
  [key: string]: string;
};

const main = async () => {
  const files: Files = {
    "file1.txt": "out1.txt",
    "file2.txt": "out2.txt",
    "file3.txt": "out3.txt",
  };
  const parser = new Parser();
  const waitGroup: Promise<any>[] = [];

  for (const [input, output] of Object.entries(files)) {
    const promise = new Promise<void>((resolve) => {
      parser
        .getFileContent(input)
        .catch((error) => {
          // I don`t quite understand what means "If parsing or writing fails - resolve gracefully, without error" so I just resolve with void
          console.error(`Error while reading file ${input} - ${error}`);
          resolve();
          return [];
        })
        .then((messages) => parser.saveContent(messages, output))
        .catch((error) => {
          // I don`t quite understand what means "If parsing or writing fails - resolve gracefully, without error" so I just resolve with void
          resolve();
          console.error(`Error while reading file ${input} - ${error}`);
        })
        .then(resolve);
    });
    waitGroup.push(promise);
  }
  await Promise.all(waitGroup);
};

main();
