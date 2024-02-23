import type { Doc, SpaceXLaunches } from "../types/api";

const spaceXAPI = "https://api.spacexdata.com/v5/launches";

export const getLastestLaunches = async () => {

    const res = await fetch(`${spaceXAPI}/query`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: {},
    options: {
      sort: {
        date_unix: "desc",
      },
      limit: 21,
    },
  }),
});

    const { docs: launches } = (await res.json()) as SpaceXLaunches;

    return launches;

}


export const getLaunchById = async ({id}: {id: string}) => {

    const res = await fetch(`${spaceXAPI}/${id}`);

    const launch = (await res.json()) as Doc;

    return launch;

}