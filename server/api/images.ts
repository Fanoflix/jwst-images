export default defineEventHandler(async (event) => {
  // const body = await useBody(event);
  // const query = await useQuery(event);

  return {
    api: "works",
  };
});
