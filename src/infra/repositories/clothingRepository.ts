import type { Clothing } from "@@entities/Clothing";

export interface ClothingRepository {
  create(clothingData: Omit<Clothing, 'id'>): Promise<Clothing>;
  findById(id: string): Promise<Clothing | null>;
  findAll(): Promise<Clothing[]>;
  update(id: string, clothingData: Partial<Clothing>): Promise<Clothing | null>;
  delete(id: string): Promise<boolean>;
}