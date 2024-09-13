import type { Clothing } from "@@entities/Clothing";
import type { ClothingRepository } from "@@repositories/clothingRepository";

export class ClothingUseCase {
  constructor(private clothingRepository: ClothingRepository) {}

  async createClothing(clothingData: Omit<Clothing, 'id'>): Promise<Clothing> {
    if (!clothingData.name || typeof clothingData.name !== 'string') {
      throw new Error('Nome é obrigatório');
    }
    if (!clothingData.description || typeof clothingData.description !== 'string') {
      throw new Error('Descrição é obrigatória');
    }
    if (clothingData.price === undefined || typeof clothingData.price !== 'number') {
      throw new Error('Preço é obrigatório');
    }

    try {
      return await this.clothingRepository.create(clothingData);
    } catch (error) {
      throw new Error('Erro ao criar roupa. Por favor, tente novamente.');
    }
  }

  async getClothing(id: string): Promise<Clothing | null> {
    return this.clothingRepository.findById(id);
  }

  async listClothings(): Promise<Clothing[]> {
    return this.clothingRepository.findAll();
  }

  async updateClothing(id: string, clothingData: Partial<Clothing>): Promise<Clothing | null> {
    return this.clothingRepository.update(id, clothingData);
  }

  async deleteClothing(id: string): Promise<boolean> {
    return this.clothingRepository.delete(id);
  }
}