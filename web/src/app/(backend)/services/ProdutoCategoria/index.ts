import prisma from "../db";
import { ProdutoCategoria, Prisma } from '@/generated/prisma';

class ProdutoCategoriaService{
  public async create(data: Prisma.ProdutoCategoriaCreateInput): Promise<ProdutoCategoria>{
    return  prisma.produtoCategoria.create({
      data,
      include: {
        categoria: true,
        produto: true,
      }
    });
  }
  public async getById(id: string): Promise<ProdutoCategoria | null>{
    return  prisma.produtoCategoria.findUnique({
      where: { id },
      include: {
        categoria: true,
        produto: true,
      }
    });
  }
    public async update(id: string, data: Prisma.ProdutoCategoriaUpdateInput): Promise<ProdutoCategoria>{
      return  prisma.produtoCategoria.update({
        where: { id },
        data,
      });
    }
    public async delete(id: string): Promise<ProdutoCategoria>{
      return  prisma.produtoCategoria.delete({
        where: { id },
      });
    };
  }

  export default new ProdutoCategoriaService();