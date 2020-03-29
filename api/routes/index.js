import userRouter from "./user";

import paths from "./paths";

export default function(app) {
  app.use(paths.users, userRouter);
}
