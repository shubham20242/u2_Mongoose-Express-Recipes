const mongoose = require('mongoose');
const Cuisine = require('./models/CuisineType');

const dbURI = `mongodb://127.0.0.1:27017/Recipes`;

mongoose.connect(dbURI);

const cuisineTypesData = [
    { name: 'Italian', description: 'Fresh ingredients, simple preparation, pasta, pizza, and rich tomato-based sauces.' },
    { name: 'Mexican', description: 'Bold flavors, vibrant colors, featuring corn, beans, chili peppers, and a variety of meats in dishes like tacos and burritos' },
    { name: 'Indian', description: 'Diverse spices, aromatic herbs, lentils, and meats, offering a balance of flavors and textures.' },
    { name: 'Thai', description: 'Harmonious blend of spicy, sour, sweet, and salty flavors, with ingredients like lemongrass, chili peppers, and fish sauce' },
    { name: 'Mediterranean', description: 'Emphasis on fresh fruits, vegetables, seafood, olive oil, and herbs like oregano and basil, spanning countries like Greece, Italy, and Spain' },
    { name: 'Chinese', description: 'Diverse regional variations, featuring rice, noodles, soy sauce, tofu, and a wide array of vegetables and meats, cooked using techniques like stir-frying and steaming' },
  ];

  async function seedCuisineTypes() {
    try {
     
      await Cuisine.deleteMany();
      const insertedCuisineTypes = await Cuisine.insertMany(cuisineTypesData);
      console.log('Cuisine types seeded successfully:', insertedCuisineTypes);
    } catch (error) {
      console.error('Error seeding cuisine types:', error);
    } finally {
      mongoose.connection.close();
    }
  }
  
  seedCuisineTypes();