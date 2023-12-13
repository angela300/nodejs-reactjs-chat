const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put("https://api.chatengine.io/users/",
    {username: username, secret: username, first_name:username},
    {headers: {"private-key": "58bc83fb-57a3-4738-99bb-5a18b13ac4f2"}}
    )

    return res.status(r.status).json(r.data)  } 
    catch (e){
      return res.status(e.response.status).json(e.response.data)
    }
  

    return res.json({ username: username, secret: "pass1234" });
});

app.listen(3002);