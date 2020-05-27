import { Application } from "./deps/index.ts";
import router from "./routes/index.ts";

const app = new Application();

app.use(async (context: any, next: any) => {
  await next();
  console.log("METHOD:", context.request.method);
  console.log("URL:", context.request.url);
  console.log("PARAMS:", context.request.params);
  console.log("BODY:", context.request.body());
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;

await app.listen({ port });
