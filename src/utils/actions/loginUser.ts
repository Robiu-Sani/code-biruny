// "use server";

// import { FormValues } from "@/app/login/page";

// export const userLogin = async (data: FormValues) => {
//   const res = await fetch(`${process.env.BACKEND_URL}/login`, {
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
