"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Coders",
      [
        {
          name: "Andrew Chang",
          expertise: "Javascript",
          userId: null,
          img: "https://media.licdn.com/dms/image/C4E03AQGvEl3EQi0akQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=LmD2u4ChIm545IV2X5xtdfG_hprAPD3r_uHDH0rjEYY",
          salary: Math.random()*150000,
          efficency: .10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hadeeqa Saman",
          expertise: "Javascript",
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQHTNy3kmljYPQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Fv090dBa3Z8dtoQ-Z9J9Rkq6f1WOfStmyVBSpasgXts",
          salary: Math.random()*150000,
          efficency: .10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jowel Rosario",
          expertise: "Javascript",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQFJ9vUHp_op1A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=NBstVDpl85embaMmwBZiEsqcsw5_ZJMPnVkM-qLPlTM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeanmax Deslouches",
          expertise: "CSS",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQG0KtpIcA48Gw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=8X1gcKXuY3DCIs_sXiXN96tcCMqmZzD1OxpwULsigps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "James White",
          expertise: "SQL",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img: "https://media.licdn.com/dms/image/C4D03AQE-TdcwSkWvtg/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=qZaM14J76mGbBFeTYUR9wSQb9Is0SaqjimaHuJJ2gfk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Frenchy French",
          expertise: "Javascript",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQGtzoBGOjtt_A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=TqWhHvh9u2R6zKH7OWZVgBy24pP2Yjxu1MZqbEozLHY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Winston White",
          expertise: "Python",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQHWtBlcZ4zMLw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=WQj-sqjnIo7hCJPKArPP_111x5lOno4Mwa39pEvIEZ8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ipsita Rao",
          expertise: "CSS",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQHadWc4tuW3jA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=gPkMJFvrQUsUyXvgqjauOqOUQrZil1m28z9K9FMfotw",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rakshyak Kc",
          expertise: "Javascript",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQF2Ec3ssQ1-uA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=4thdfavncstO9Uy7dO-Gsl1wKHpfs-FLdeiBFBjaMJc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Philip Ryan",
          expertise: "React",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQEfc6KOqqXi1A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=l_tRos6ejn0qlJY6FRAhQODPVsWWv5g7CqeYQth1CSo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Thomas Kang",
          expertise: "CSS",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQFZEDaq004HkA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=rnQghEL_UFFLHJuH94hLINjJcbe9WRZAX5ptqK9_5PY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Roma Patel",
          expertise: "UX/HTML",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQG5zFWYLQBAgA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=-Wm5ZwHN_Q7oAwRSKAWsmUyinzNrho6pRQRrlvw0Nzo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Andrew Kim",
          expertise: "Javascript",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQH5M46x7IsHbA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=DiuOfqQNn2HkTemi9xPKhdEr0wHD5Ln3A7d6MInal5E",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeremy Rose",
          expertise: "Express",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQFZHbMkjIjFaA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=2xw9kpOH8O4D_SiN5y5tepLABfw8nd7bLlQcDftMG5s",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Melissa Donegan",
          expertise: "CSS",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQGZWNO62BOZxA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=pHUih38S03_BgqZzlqbE5slg1A8n4zjd4fgswUUlN88",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "M.K Irvine",
          expertise: "Fullstack",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQEaX2s_vclSOA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Fkr-ib97MJpqoqXFNSU7i0VujTf7AqySScxiT-AeU4k",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chris Abrams",
          expertise: "Javascript",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQFUbP14kzE_ag/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=LIp8cSQLxTba95z1dpDua3DyPxwL45wXXJV1rUedd1Y",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nyesha Viechweg",
          expertise: "UX/CSS",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQFT8fQbhFLw7Q/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=lxeE1BDrWeloqW6t0bslJ6v1UgdiK042lAjiH9Mtqnw",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jordan Cruz-Correa",
          expertise: "Fullstack",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQGsYiLy7BxHhA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Udqi85cHn2HXBunJv881w96EBDE4EYpXQzBi8PxuBPE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yevgeniy Drikman",
          expertise: "Javascript",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQHcQlwq8olguQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=cIA4pAZYVEsAi37T3uKSCQM7Uf369ttSXedfEDt8M9M",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mick Roth",
          expertise: "Fullstack Master",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQE8tAaBY7Q3_A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=onC60_t31ztAYYd_iMItlJjp04b82yXqJV7FC7RXmFo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Marilyn Shi",
          expertise: "UX/CSS",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQGOw00TkH01LQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=IJ1KMQVUhvzfSuUJxpsZ9OLY5mL9EO_25j6mymNHdI0",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Giusseppe Del Vecchio",
          expertise: "HTML",
          salary: Math.random()*150000,
          efficency: .10,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQH70rtO8aVBtQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=vta5nBzGvxEwP6Qz-7-KN3AoGpMLDQgHcfVQXiXaVbY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bruno Galvao",
          expertise: "Fullstack Master",
          salary: Math.random()*150000,
          efficency: .65,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQFVglCczkb8ag/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=tjNHibzBJtqEZJl6J7LdZXaPwdQS3i7zlBoZzyQDk_s",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Katelyn Miles",
          expertise: "Fullstack Master",
          salary: Math.random()*150000,
          efficency: .45,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQH0-X6G024JeQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Tgk60QjKJBLEroFzUZtpNwPZvM4cRU5H4D9wzqWZot4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Andre Pato",
          expertise: "Fullstack Master",
          salary: Math.random()*150000,
          efficency: .45,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQHO9A4Z2iJQYw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=ECZ4Xn86D2cYyYNb7_pNZr-ysrkW_x0ZuHh9iPA6XV0",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jane Cogger",
          expertise: "Javascript",
          salary: Math.random()*150000,
          efficency: .45,
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQGhfAqMM9pPzw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Yhcf1QnxEIjVzauMmGsvxMQSKteSs7jcz_Lp8kdkwWo",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete("Coders", null, {});
  }
};
