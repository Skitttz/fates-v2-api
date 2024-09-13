

import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { clothingRoutes } from "./presentation/routes/clothingRoutes";

const app = new Elysia()
.use(swagger({
  documentation: {
    info: {
        title: 'Fates Documentation',
        version: '1.0.0'
    }},
})).group('/api/v1',app => app.use(clothingRoutes)).listen(3000);
console.log(`👕 Fates is running at port ${app.server?.port}`)