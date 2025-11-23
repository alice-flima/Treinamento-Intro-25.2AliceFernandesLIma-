import prisma from "../db";
import { Produto } from "@/generated/prisma";

export interface ProdutoDTO extends Omit<Produto, 'categorias'> {
  categorias: string[];
}

export class ProdutoService {
  
  public async create(data: any): Promise<ProdutoDTO> {
    const categoriasIds = data.categorias ?? [];
    delete data.categorias;

    const produto = await prisma.produto.create({
      data: {
        ...data,
        categorias: categoriasIds.length > 0
          ? {
              connect: categoriasIds.map((id: string) => ({ id }))
            }
          : undefined
      },
      include: {
        categorias: {
          select: { id: true }
        }
      }
    });

    return this.mapToDto(produto);
  }

  public async getById(id: string): Promise<ProdutoDTO | null> {
    const produto = await prisma.produto.findUnique({
      where: { id },
      include: {
        categorias: {
          select: { id: true }
        }
      }
    });

    if (!produto) return null;
    return this.mapToDto(produto);
  }

  public async update(id: string, data: any): Promise<ProdutoDTO> {
    const categoriasIds = data.categorias;
    delete data.categorias;

    const produto = await prisma.produto.update({
      where: { id },
      data: {
        ...data,
        // Se categorias forem enviadas, substitui a lista inteira 
        ...(categoriasIds !== undefined && {
          categorias: {
            set: categoriasIds.map((id: string) => ({ id }))
          }
        })
      },
      include: {
        categorias: {
          select: { id: true }
        }
      }
    });

    return this.mapToDto(produto);
  }

  public async delete(id: string): Promise<ProdutoDTO> {
    const produto = await prisma.produto.delete({
      where: { id },
      include: {
          categorias: { select: { id: true } }
      }
    });
    
    return this.mapToDto(produto);
  }

  public async getAll(): Promise<ProdutoDTO[]> {
    const produtos = await prisma.produto.findMany({
      include: {
        categorias: {
          select: { id: true }
        }
      }
    });

    return produtos.map(p => this.mapToDto(p));
  }

  private mapToDto(produto: any): ProdutoDTO {
    return {
      ...produto,
      categorias: produto.categorias.map((c: any) => c.id)
    };
  }
}

export default new ProdutoService();