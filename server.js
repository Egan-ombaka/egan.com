import express from 'express';
import bodyParser from 'body-parser';
import xlsx from 'xlsx';
import fs from 'fs';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Check if the file exists
  const filePath = 'user_data.xlsx';
  let workbook;
  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
  } else {
    workbook = xlsx.utils.book_new();
  }

  // Convert the data to a worksheet
  const worksheet = xlsx.utils.json_to_sheet([{ Name: name, Email: email, Message: message }], { skipHeader: true });

  // Append the worksheet to the workbook
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Write the workbook to a file
  xlsx.writeFile(workbook, filePath);

  res.send('Data received and saved to Excel file');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});