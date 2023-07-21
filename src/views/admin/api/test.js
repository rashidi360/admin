const { log } = console;

export default function teamAdd(req, res) {
  if (req.method === "POST") {
    const reqPayload = req?.body;
    log("Req Payload", reqPayload);
    return res.json({ msg: "Hello World" });
  }

  return res.status(500).json({
    msg: "This need to be POST method."
  })
}
