import type { Clothing } from "@@entities/Clothing";
import type { ClothingRepository } from "@@repositories/clothingRepository";
import prisma from "@@infra/database/prismaClient";

export class PrismaClothingRepository implements ClothingRepository {
  async create(clothingData: Omit<Clothing, 'id'>): Promise<Clothing> {
    return prisma.clothing.create({ data: clothingData });
  }

  async findById(id: string): Promise<Clothing | null> {
    return prisma.clothing.findUnique({ where: { id } });
  }

  async findAll(): Promise<Clothing[]> {
    return prisma.clothing.findMany();
  }

  async update(id: string, clothingData: Partial<Clothing>): Promise<Clothing | null> {
    return prisma.clothing.update({ where: { id }, data: clothingData });
  }

  async delete(id: string): Promise<boolean> {
    await prisma.clothing.delete({ where: { id } });
    return true;
  }
}