'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('SpotImages',[
       {
         spotId:1,
         url:'https://a0.muscache.com/im/pictures/28f41d28-2ed2-4597-8f4d-5ada3ff120f9.jpg?im_w=1200',
         preview:true
       },
       {
        spotId:1,
        url:'https://a0.muscache.com/im/pictures/d31daf5f-1667-497b-b32f-d4866955ced0.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:1,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-38461275/original/dace6b77-ec68-45bd-8148-529ff101f27e.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:1,
        url:'https://a0.muscache.com/im/pictures/81c5cd92-cf20-4230-84e4-61fc7c253419.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:1,
        url:'https://a0.muscache.com/im/pictures/703781d0-6335-4349-8ee4-7a6d54edcd1a.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:2,
        url:'https://a0.muscache.com/im/pictures/39f1316f-c425-4ca6-b88f-804d9e857986.jpg?im_w=1200',
        preview:true
      },
      {
        spotId:2,
        url:'https://a0.muscache.com/im/pictures/a4f78593-277a-4405-bb2e-45ecdcedad1e.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:2,
        url:'https://a0.muscache.com/im/pictures/2ea2e0ec-6034-477b-aa7b-8e406881be65.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:2,
        url:'https://a0.muscache.com/im/pictures/b206de71-2643-4219-a159-6269b267b35b.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:2,
        url:'https://a0.muscache.com/im/pictures/c795d1ad-f718-4c19-b93c-827909ba649f.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:3,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-44395056/original/fc6ed7c2-c5a9-4b5f-af13-305d7984b238.jpeg?im_w=1200',
        preview:true
      },
      {
        spotId:3,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-44395056/original/80ee6f87-35fc-4d54-9622-bb2045636ec9.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:3,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-44395056/original/63b9a3eb-7ed6-4160-9bea-5874d665cd41.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:3,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-44395056/original/fe647def-15de-455b-bae3-f8350d93ae3f.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:3,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-44395056/original/5f4da28b-ef8b-4420-aa9a-23ffa61c78a3.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:4,
        url:'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/f5663fe3-d1f3-469a-a7dc-4c9a6ff2b302?im_w=1200',
        preview:true
      },
      {
        spotId:4,
        url:'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/17b49e69-a3b4-4f80-8068-868a3892d6cc?im_w=1200',
        preview:false
      },
      {
        spotId:4,
        url:'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/6dbfc255-5125-46bc-9cc5-b2584d247319?im_w=1200',
        preview:false
      },
      {
        spotId:4,
        url:'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/a6e8f14f-a985-48be-a367-0f749283cdf4?im_w=1200',
        preview:false
      },
      {
        spotId:4,
        url:'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/64f65389-96b3-4c5e-b8bf-7966dc16b55b?im_w=1200',
        preview:false
      },
      {
        spotId:5,
        url:'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52366538/original/62fa961b-7040-43ef-865b-34e4e819b2de.jpeg?im_w=1200',
        preview:true
      },
      {
        spotId:5,
        url:'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52366538/original/89040872-a7ad-4438-8a16-1a38c1dc39e8.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:5,
        url:'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52366538/original/a35420ae-29d1-4374-ac8a-8f9cde9890cf.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:5,
        url:'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52366538/original/b8f3dc48-5625-48f8-b36d-5c6646321d8a.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:5,
        url:'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52366538/original/ea21bff6-4185-42ba-9c2c-8b8de906aefa.jpeg?im_w=1200',
        preview:false
      },
      {
        spotId:6,
        url:'https://a0.muscache.com/im/pictures/14195764/36cd0f8c_original.jpg?im_w=1200',
        preview:true
      },
      {
        spotId:6,
        url:'https://a0.muscache.com/im/pictures/14195735/92900329_original.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:6,
        url:'https://a0.muscache.com/im/pictures/14195606/f643c414_original.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:6,
        url:'https://a0.muscache.com/im/pictures/14195753/c3ca67d8_original.jpg?im_w=1200',
        preview:false
      },
      {
        spotId:6,
        url:'https://a0.muscache.com/im/pictures/14195791/31314ba8_original.jpg?im_w=1200',
        preview:false
      }
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('SpotImages',{
       spotId:{[Op.in]:[1,2,3,4,5,6]}
     })
  }
};
