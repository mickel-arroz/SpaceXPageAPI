import type { Doc, SpaceXLaunches } from "../types/api";

export const spaceXAPI = "https://api.spacexdata.com/v5/launches";



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
    limit: 100,
  },
}),
});

  const { docs } = (await res.json()) as SpaceXLaunches;

  const launches = docs.filter((launch) => launch.links.patch.small && launch.details);

  return launches;

}


export const getLaunchById = async ({id}: {id: string}) => {

    const res = await fetch(`${spaceXAPI}/${id}`);

    const launch = (await res.json()) as Doc;

    return launch;

}


export const getLaunchesSuccess = async () => {

  const res = await fetch(`${spaceXAPI}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 2000,
      },
    }),
    });

  const { docs: launches  } = (await res.json()) as SpaceXLaunches;

  const successLaunches = launches.filter((launch) => launch.success && launch.links.patch.small && launch.details);

  return successLaunches;

}


export const getAllLaunches = async () => {

  const res = await fetch(`${spaceXAPI}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 9999,
      },
    }),
    });

  const { docs } = (await res.json()) as SpaceXLaunches;
  
  const launches = docs.filter((launch) => launch.links.patch.small);

  return launches;

}