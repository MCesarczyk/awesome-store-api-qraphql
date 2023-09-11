import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;
const reviewsCount = 2;
const orderItemsCount = 2;
const categoriesCount = 5;
const collectionsCount = 5;

let categories = <{
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}[]>[];

let collections = <{
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}[]>[];

for (let i = 0; i < categoriesCount; i++) {
  const createdCategory = await prisma.category.create({
    data: {
      name: faker.commerce.department(),
    },
  });

  categories.push(createdCategory);
}

for (let i = 0; i < collectionsCount; i++) {
  const createdCollection = await prisma.collection.create({
    data: {
      name: faker.commerce.department(),
    },
  });

  collections.push(createdCollection);
}

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      image: faker.image.url(),
      categories: {
        connect: faker.helpers.arrayElements([1, 2, 3, 4, 5], 3).map((categoryId) => ({
          id: categories[categoryId - 1].id,
        })),

        // create: [
        //   {
        //     name: 'Health',
        //   },
        //   {
        //     name: 'Tools',
        //   },
        //   {
        //     name: 'Jewelery',
        //   },
        // ],
      },
      collections: {
        connect: faker.helpers.arrayElements([1, 2, 3, 4, 5], 3).map((collectionId) => ({
          id: collections[collectionId - 1].id,
        })),

        // create: [
        //   {
        //     name: 'Automotive',
        //   },
        //   {
        //     name: 'Movies',
        //   },
        //   {
        //     name: 'Home',
        //   },
        // ],
      },
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);

  for (let j = 0; j < reviewsCount; j++) {
    const createdReview = await prisma.review.create({
      data: {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        rating: faker.number.int({ min: 1, max: 5 }),
        product: {
          connect: {
            id: createdProduct.id,
          },
        },
      },
    });
    console.log(`Created review with id: ${createdReview.id}`);
  }

  const createdOrder = await prisma.order.create({
    data: {
      total: faker.number.int({ min: 100, max: 500 }),
      status: faker.helpers.arrayElement(["PENDING", "PAID", "SHIPPED"]),
    },
  });
  console.log(`Created order with id: ${createdOrder.id}`);

  for (let i = 0; i < orderItemsCount; i++) {
    const createdOrderItem = await prisma.orderItem.create({
      data: {
        quantity: faker.number.int({ min: 1, max: 10 }),
        order: {
          connect: {
            id: createdOrder.id,
          },
        },
        product: {
          connect: {
            id: createdProduct.id,
          },
        },
      },
    });
    console.log(`Created order item with id: ${createdOrderItem.id}`);
  }
}
