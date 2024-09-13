import type { Elysia } from 'elysia'
import { ClothingController } from '@@controllers/clothingController'
import { ClothingUseCase } from '@@useCases/clothingUseCase'
import { PrismaClothingRepository } from '@@infra/database/prisma/repositories/prismaClothingRepository'
import type { Clothing } from '@@domain/entities/Clothing'
import { isValidClothing } from '@@utils/isValidConstant'
import { ApiPaths, ApiTags } from '@@environment/api'


  
export const clothingRoutes = (app: Elysia) => {
  const repository = new PrismaClothingRepository()
  const useCase = new ClothingUseCase(repository)
  const controller = new ClothingController(useCase)

  return app.group(ApiPaths.CLOTHINGS, (app) => 
    app
      .get('/', () => controller.listClothings(), {
        detail: {
          tags: [ApiTags.CLOTHINGS]
        }
      })
      .get('/:id', ({ params: { id } }) => controller.getClothing(id), {
        detail: {
          tags: [ApiTags.CLOTHINGS]
        }
      })
      .post('/', ({ body }: { body: Omit<Clothing, 'id'> }) => {
        if (!isValidClothing(body)) {
          return { status: 400, error: 'Invalid clothing data' };
        }
        return controller.createClothing(body);
      }, {
        detail: {
          tags: [ApiTags.CLOTHINGS]
        }
      })
      .put('/:id', ({ params: { id }, body }) => {
        if (!isValidClothing(body)) {
          return { status: 400, error: 'Invalid clothing data' };
        }
        return controller.updateClothing(id, body);
      }, {
        detail: {
          tags: [ApiTags.CLOTHINGS]
        }
      })
      .delete('/:id', ({ params: { id } }) => controller.deleteClothing(id), {
        detail: {
          tags: [ApiTags.CLOTHINGS]
        }
      })
  )
}