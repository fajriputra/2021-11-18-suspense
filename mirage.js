import faker from "faker";
import { createServer } from "miragejs";

faker.seed(5);

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    timing: 750,

    routes() {
      this.namespace = "api";

      this.get(
        "/twitter",
        () => {
          return {
            stat: "71,897",
            change: "122",
            changeType: "increase",
          };
        },
        { timing: 750 }
      );

      this.get(
        "/youtube",
        () => {
          return {
            stat: "33,581",
            change: "412",
            changeType: "decrease",
          };
        },
        { timing: 1750 }
      );

      this.get(
        "/chipotle",
        () => {
          return {
            stat: "2,152",
            change: "54",
            changeType: "increase",
          };
        },
        { timing: 1250 }
      );

      this.get(
        "/instagram",
        () => {
          return {
            stat: "14,581",
            change: "24",
            changeType: "increase",
          };
        },
        { timing: 500 }
      );

      this.namespace = "";
      this.passthrough();
    },
  });

  // Don't log passthrough
  server.pretender.passthroughRequest = () => {};

  return server;
}
