// module.exports = {
//   async afterCreate(event) {
//     const { result } = event;

//     try {
//       await strapi.plugins["email"].services.email.send({
//         to: "dearian2706@gmail.com",
//         subject: "Нове повідомлення з форми",
//         text: `
//           Ім’я: ${result.name}
//           Email: ${result.email}
//           Повідомлення: ${result.message}
//         `,
//       });
//     } catch (err) {
//       strapi.log.error("Помилка надсилання email:", err);
//     }
//   },
// };
