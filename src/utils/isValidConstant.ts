import type { Clothing } from "@prisma/client";

export function isValidClothing(obj: unknown): obj is Partial<Clothing> {
  if (typeof obj !== 'object' || obj === null) return false;
  const clothing = obj as Partial<Clothing>;  
  if (clothing.name !== undefined && typeof clothing.name !== 'string') return false;
  if (clothing.description !== undefined && typeof clothing.description !== 'string') return false;
  if (clothing.price !== undefined && typeof clothing.price !== 'number') return false;  
  return true;
  }