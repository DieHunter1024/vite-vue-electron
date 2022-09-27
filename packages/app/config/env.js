// const process.env.NODE_ENV === 'production'
const { NODE_ENV } = process.env;

console.log(NODE_ENV);
export const server =
  NODE_ENV === "production"
    ? {
        host: "localhost",
        port: 2048,
      }
    : {
        host: "localhost",
        port: 2048,
      };
