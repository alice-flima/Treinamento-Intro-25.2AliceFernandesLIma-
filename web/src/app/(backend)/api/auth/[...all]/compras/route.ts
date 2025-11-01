import CompraService from '../../../../services/compras';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest){
   try{
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') || '';
    const compra = await CompraService.getById(id);
    return NextResponse.json(compra);
    }
    catch (error) {
    return NextResponse.json({ error: 'Erro ao pesquisar compra' }, { status: 500 }); 
  }
}
export async function POST(request: NextRequest){
  try {
    const data = await request.json();
    const { userId, itensCompraProduto } = data;
    return NextResponse.json(await CompraService.create(userId, itensCompraProduto));
  }
catch (error) {
  return NextResponse.json({ error: 'Erro ao criar compra' }, { status: 500 }); 
}
}
export async function PUT(request: NextRequest){
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') || '';
    const data = await request.json();
    return NextResponse.json(await CompraService.update(id, data));
  }
  catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar compra' }, { status: 500 }); 
  }
}
  export async function DELETE(request: NextRequest){
    try {
      const { searchParams } = new URL(request.url);
      const id = searchParams.get('id') || '';
      return NextResponse.json(await CompraService.delete(id));
    }
    catch (error) {
      return NextResponse.json({ error: 'Erro ao deletar compra' }, { status: 500 }); 
    }
}