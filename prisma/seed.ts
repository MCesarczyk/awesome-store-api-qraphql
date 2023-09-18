import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 50;
const reviewsCount = 3;
const orderItemsCount = 2;
const categoriesCount = 5;
const collectionsCount = 5;
const imagesCount = 100;

let categories = <{
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}[]>[];

let collections = <{
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}[]>[];

let images = <{
  id: string;
  alt: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}[]>[];

for (let i = 0; i < categoriesCount; i++) {
  const categoryName = faker.commerce.department();

  const createdCategory = await prisma.category.create({
    data: {
      name: categoryName,
      slug: faker.helpers.slugify(categoryName).toLowerCase(),
      description: faker.commerce.productDescription(),
    },
  });

  categories.push(createdCategory);
}

for (let i = 0; i < collectionsCount; i++) {
  const collectionName = faker.commerce.department();

  const createdCollection = await prisma.collection.create({
    data: {
      name: collectionName,
      slug: faker.helpers.slugify(collectionName).toLowerCase(),
      description: faker.commerce.productDescription(),
    },
  });

  collections.push(createdCollection);
}

for (let i = 0; i < imagesCount; i++) {
  const createdImage = await prisma.image.create({
    data: {
      url: faker.image.url(),
      alt: faker.lorem.sentence(),
    },
  });

  images.push(createdImage);
}

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      images: {
        connect: {
          id: faker.helpers.arrayElement(images).id,
        },
      },
      categories: {
        connect: faker.helpers.arrayElements(Array.from({ length: categoriesCount }, (_, i) => i + 1), 3).map((categoryId) => ({
          id: categories[categoryId - 1].id,
        })),
      },
      collections: {
        connect: faker.helpers.arrayElements(Array.from({ length: collectionsCount }, (_, i) => i + 1), 3).map((collectionId) => ({
          id: collections[collectionId - 1].id,
        })),
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
      status: faker.helpers.arrayElement(["PENDING", "PAID", "SHIPPED", "CANCELLED"]),
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
