// "use server";

// import { UserData } from "@/app/register/page";

// export const userRegister = async (data: UserData) => {
//   const res = await fetch(`${process.env.BACKEND_URL}/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "Application/json",
//     },
//     body: JSON.stringify(data),
//     cache: "no-cache",
//   });
//   const userinfo = await res.json();
//   return userinfo;
// };
