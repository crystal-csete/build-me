
exports.seed = function(knex) {
    // 000-cleanup.js already cleaned out all tables

    const trucks = [
      {
        truck_name: 'Burritos-Extreme',
        description: 'This is where your burritos come extremely everything-smothered, spicy, enormous, and flavorful!!',
        imageUrl: '',
        price_range: 5,
        customer_rating: 4.5,
        avg_customer_rating: 4.3,
        location: 'Denver',
        departure_time: '6pm everyday',
      },
      {
        truck_name: 'Cheesburgers-Heaven',
        description: 'This is where you can unique cheesburgers. We love special requests, if we have the ingredient, we will make it for you!',
        imageUrl: '',
        price_range: 10,
        customer_rating: 4.1,
        avg_customer_rating: 4.8,
        location: 'Aspen',
        departure_time: '9pm most days',
      },
      {
        truck_name: 'BBQ Sams',
        description: 'This is where you can get good old fashioned bbq! We have pulled pork sandwiches, ribs, and side dishes!',
        imageUrl: '',
        price_range: 7,
        customer_rating: 5,
        avg_customer_rating: 4.6,
        location: 'Boulder',
        departure_time: '8pm weekdays',
      }
    ]

      return knex('trucks')
      .insert(trucks)
      .then(() => console.log('\n== seed data for trucks table to be added ==\n'));
};
