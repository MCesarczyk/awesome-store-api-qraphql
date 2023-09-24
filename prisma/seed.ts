import { PrismaClient } from "@prisma/client";
import { fa, faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 50;
const reviewsCount = 3;
const orderItemsCount = 2;
const categoriesCount = 5;
const collectionsCount = 5;
const imagesCount = 100;
const colorsCount = 5;
const sizesCount = 5;

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

let colors = <{
  id: string;
  name: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}[]>[];

let sizes = <{
  id: string;
  name: string;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}[]>[];

for (let i = 0; i < categoriesCount; i++) {
  const categoryName = faker.commerce.department();

  const createdCategory = await prisma.category.upsert({
    where: {
      name: categoryName,
    },
    create: {
      name: categoryName,
      slug: faker.helpers.slugify(categoryName).toLowerCase(),
      description: faker.commerce.productDescription(),
    },
    update: {},
  });

  categories.push(createdCategory);
}

for (let i = 0; i < collectionsCount; i++) {
  const collectionName = faker.commerce.department();

  const createdCollection = await prisma.collection.upsert({
    where: {
      name: collectionName,
    },
    create: {
      name: collectionName,
      slug: faker.helpers.slugify(collectionName).toLowerCase(),
      description: faker.commerce.productDescription(),
    },
    update: {},
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

for (let i = 0; i < colorsCount; i++) {
  const availableColors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];

  const createdColor = await prisma.productColor.upsert({
    where: {
      name: availableColors[i],
    },
    create: {
      name: availableColors[i],
      value: faker.color.rgb(),
    },
    update: {},
  });

  colors.push(createdColor);
}

for (let i = 0; i < sizesCount; i++) {
  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const createdSize = await prisma.productSize.upsert({
    where: {
      name: availableSizes[i],
    },
    create: {
      name: availableSizes[i],
      value: i + 1,
    },
    update: {},
  });

  sizes.push(createdSize);
}

for (let i = 0; i < productsCount; i++) {
  const name = faker.commerce.productName();

  const createdProduct = await prisma.product.create({
    data: {
      name: name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      description: faker.commerce.productDescription(),
      sizes: {
        connect: sizes,
      },
      colors: {
        connect: colors,
      },
      price: Number(faker.commerce.price()) * 100,
      images: {
        connect: faker.helpers.arrayElements(Array.from({ length: imagesCount }, (_, i) => i + 1), 3).map((imageId) => ({
          id: images[imageId - 1].id,
        })),
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
