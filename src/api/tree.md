

#API Tree

# Users /
#   |__UserId /:userId
#   |   |
#   |   |__Restaurants /:userId/restaurants
#   |   |       |
#   |   |       |__RestaurantId /:userId/restaurants/:restaurantId
#   |   |       |       |
#   |   |       |       |__Info /:userId/restaurants/:restaurantId/info
#   |   |       |       |    |__Owner 
#   |   |       |       |    |__Tel
#   |   |       |       |
#   |   |       |       |__Bookings /:userId/restaurants/:restaurantId/bookings
#   |   |       |       |       |__BookingId /:userId/restaurants/:restaurantId/bookings/:bookingId
#   |   |       |       |       |       |
#   |   |       |       |__Services /:userId/restaurants/:restaurantId/services
#   |   |       |       |       |
#   |   |       |       |       |__ServiceId /:userId/restaurants/:restaurantId/services/:serviceId
#   |   |       |       |       |       |__Name
#   |   |       |       |       |       |__Start
#   |   |       |       |       |       |__End
#   |   |       |       |       |       |__Duration
#   |   |       |       |       |       |__MaxPersons
#   |   |       |       |       |       |__LateTime
#   |   |       |       |       |       |__BookTimes