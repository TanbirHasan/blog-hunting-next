// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  // fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
  //   if (err) {
  //     res.status(500).json({ error: "some error occured" });
  //   } else {
  //     res.status(200).json(JSON.parse(data));
  //   }
  // });

  let data = await fs.promises.readdir("blogdata");
  data = data.slice(0, req.query.count);
  let myfile;
  let allblogs = [];
  for (var i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myfile);
    allblogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allblogs);
}
