const fs = require("fs");

const getWordsCount = async (filePath) => {
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
      console.error(error.message);
      throw new Error(error);
    }
    const wordCount = data.split(/\s+/).filter((word) => word !== "").length;
    console.log(wordCount);
  });
};

getWordsCount("data.txt");
