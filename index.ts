import { Application } from "./deps";
import router from "./routes";

const app = new Application();

app.use(async (context, next) => {
  await next();
  console.log("method", context.request.method);
  console.log("url", context.request.url);
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;

/*await*/ app.listen({ port });
