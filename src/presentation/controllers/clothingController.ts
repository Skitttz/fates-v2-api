// ClothingController.ts
import type { Clothing } from "@@entities/Clothing";
import { ClothingUseCase } from "@@useCases/clothingUseCase";

export class ClothingController {
  constructor(private clothingUseCase: ClothingUseCase) {}

  createClothing = async (clothingData: Omit<Clothing, 'id'>) => {
    try {
      const newClothing = await this.clothingUseCase.createClothing(clothingData);
      return { status: 201, data: newClothing };
    } catch (error) {
      return { status: 400, error: (error as Error).message };
    }
  }

  getClothing = async (id: string) => {
    try {
      const clothing = await this.clothingUseCase.getClothing(id);
      if (!clothing) {
        return { status: 404, error: 'Clothing not found' };
      }
      return { status: 200, data: clothing };
    } catch (error) {
      return { status: 500, error: (error as Error).message };
    }
  }

  listClothings = async () => {
    try {
      const clothings = await this.clothingUseCase.listClothings();
      return { status: 200, data: clothings };
    } catch (error) {
      return { status: 500, error: (error as Error).message };
    }
  }

  updateClothing = async (id: string, clothingData: Partial<Clothing>) => {
    try {
      const updatedClothing = await this.clothingUseCase.updateClothing(id, clothingData);
      if (!updatedClothing) {
        return { status: 404, error: 'Clothing not found' };
      }
      return { status: 200, data: updatedClothing };
    } catch (error) {
      return { status: 400, error: (error as Error).message };
    }
  }

  deleteClothing = async (id: string) => {
    try {
      const result = await this.clothingUseCase.deleteClothing(id);
      if (!result) {
        return { status: 404, error: 'Clothing not found' };
      }
      return { status: 204 };
    } catch (error) {
      return { status: 500, error: (error as Error).message };
    }
  }
}