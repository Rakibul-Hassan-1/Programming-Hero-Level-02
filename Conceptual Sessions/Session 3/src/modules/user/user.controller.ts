import User from "./user.model";

const registerUser = async (req: any, res: any) => {
  const payload = req.body;
  const user = new User(payload);
  const data = await user.save();

  res.send({
    success: true,
    message: "User registered successfully",
    data,
  });
};

export { registerUser };
