'use client';
import { CarroProvider } from "@/Context/CarroProvider";
import { ProdutoProvider } from "@/Context/ProdutosContext";
import { ToastProvider } from "@/components/common/ToastProvider";

export default function LojaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProdutoProvider>
      <CarroProvider>
        {children}
        <ToastProvider />
      </CarroProvider>
    </ProdutoProvider>
  );
}
